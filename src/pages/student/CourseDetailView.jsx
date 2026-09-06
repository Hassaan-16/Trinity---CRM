import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  BookOpen,
  FileText,
  HelpCircle,
  ArrowLeft,
  Download,
  Eye,
  CheckCircle2,
  Clock,
  Award,
  ChevronRight
} from 'lucide-react';

export const CourseDetailView = () => {
  const {
    coursesAndModules,
    activeCourseId,
    setActiveCourseId,
    startQuiz,
    quizAttempts,
    currentUser
  } = useApp();

  const [activeTab, setActiveTab] = useState('quizzes'); // 'books' | 'notes' | 'quizzes'
  const [activeBookReader, setActiveBookReader] = useState(null);

  const course = coursesAndModules.find(c => c.id === activeCourseId);

  if (!course) {
    return (
      <div className="container py-5 text-center">
        <h4>Course not found</h4>
        <button className="btn btn-trinity-primary mt-3" onClick={() => setActiveCourseId(null)}>
          Back to Dashboard
        </button>
      </div>
    );
  }

  // Find previous attempts by current user for this course
  const studentAttempts = quizAttempts.filter(
    att => att.courseId === course.id && att.studentEmail.toLowerCase() === currentUser?.email?.toLowerCase()
  );

  return (
    <div>
      {/* Top Banner (Matching Screenshot 2) */}
      <div
        className="py-4 px-3 px-md-5 text-white"
        style={{
          background: 'linear-gradient(90deg, #590B0D 0%, #7B1113 50%, #8C0E12 100%)',
          borderBottom: '3px solid #C5A059'
        }}
      >
        <div className="container-fluid">
          <button
            onClick={() => setActiveCourseId(null)}
            className="btn btn-link text-white-50 p-0 text-decoration-none d-flex align-items-center gap-1 mb-2 small"
          >
            <ArrowLeft size={16} /> Back to Dashboard
          </button>
          <h1 className="display-6 fw-bold font-heading mb-1 text-white">{course.title}</h1>
          <div className="text-warning fw-bold text-uppercase small" style={{ letterSpacing: '1px' }}>
            {course.code} • {course.subCategory}
          </div>
        </div>
      </div>

      <div className="container-fluid py-4 px-3 px-md-5">
        <div className="row g-4">
          {/* Left Column: Navigation Sidebar (Matching Screenshot 2) */}
          <div className="col-lg-3 col-md-4">
            <div className="study-nav-card">
              {/* Books Tab */}
              <button
                className={`study-nav-btn ${activeTab === 'books' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('books');
                  setActiveBookReader(null);
                }}
              >
                <span className="fs-5">📚</span>
                <span>Books ({course.books?.length || 0})</span>
              </button>

              {/* Notes Tab */}
              <button
                className={`study-nav-btn ${activeTab === 'notes' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('notes');
                  setActiveBookReader(null);
                }}
              >
                <span className="fs-5">📝</span>
                <span>Notes ({course.notes?.length || 0})</span>
              </button>

              {/* Quizzes Tab */}
              <button
                className={`study-nav-btn ${activeTab === 'quizzes' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('quizzes');
                  setActiveBookReader(null);
                }}
              >
                <span className="fs-5">📋</span>
                <span>Quizzes ({course.quizzes?.length || 0})</span>
              </button>
            </div>

            {/* Syllabus Info widget */}
            <div className="card border-0 shadow-sm rounded-3 p-3 mt-3 bg-white">
              <span className="small text-secondary fw-semibold d-block mb-1">Standard Duration</span>
              <strong className="text-dark d-block mb-2">{course.duration}</strong>

              <span className="small text-secondary fw-semibold d-block mb-1">Passing Mark</span>
              <strong className="text-dark d-block mb-2">75% (EASA Examination Standard)</strong>

              <span className="small text-secondary fw-semibold d-block mb-1">Question Bank Delivery</span>
              <span className="small text-muted">
                Questions are randomly picked from the question bank for every quiz session to simulate official testing.
              </span>
            </div>
          </div>

          {/* Right Column: Content Area */}
          <div className="col-lg-9 col-md-8">
            {/* TAB 1: QUIZZES (Matching Screenshot 2) */}
            {activeTab === 'quizzes' && (
              <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
                <div className="mb-4 pb-2 border-bottom" style={{ borderColor: '#C5A059' }}>
                  <h2 className="fw-bold font-heading mb-1 text-dark" style={{ color: '#590B0D' }}>
                    Quizzes
                  </h2>
                  <p className="text-secondary mb-0">Practice quizzes and assessments for this course.</p>
                </div>

                {course.quizzes && course.quizzes.length > 0 ? (
                  <div className="d-flex flex-column gap-4">
                    {course.quizzes.map(quiz => {
                      // Check if student has taken this quiz before
                      const previousAttempt = studentAttempts.find(a => a.quizId === quiz.id);

                      return (
                        <div
                          key={quiz.id}
                          className="card border-0 rounded-4 p-4 shadow-sm"
                          style={{
                            backgroundColor: '#F8FAFC',
                            borderLeft: '4px solid #C5A059',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
                          }}
                        >
                          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-3">
                            <div>
                              <div className="d-flex align-items-center gap-2 mb-1">
                                <h4 className="fw-bold text-dark mb-0">{quiz.title}</h4>
                                {previousAttempt && (
                                  <span
                                    className={`badge ${
                                      previousAttempt.passed ? 'bg-success' : 'bg-danger'
                                    } px-2 py-1`}
                                  >
                                    {previousAttempt.scorePercent}% •{' '}
                                    {previousAttempt.passed ? 'Passed' : 'Failed'}
                                  </span>
                                )}
                              </div>
                              <p className="text-secondary mb-3">{quiz.description}</p>

                              <div className="d-flex flex-wrap gap-3 small text-muted">
                                <span>
                                  <Clock size={14} className="me-1 text-danger" /> {quiz.timeLimitMinutes} Mins
                                </span>
                                <span>
                                  <HelpCircle size={14} className="me-1 text-warning" /> Serving{' '}
                                  <strong>{quiz.questionCount || 5} Random Questions</strong> (from pool of{' '}
                                  {quiz.questions?.length || 0})
                                </span>
                                <span>
                                  <Award size={14} className="me-1 text-success" /> Pass: 75%
                                </span>
                              </div>
                            </div>

                            <div className="text-md-end">
                              <button
                                className="btn btn-trinity-gold px-4 py-2 fw-bold rounded-3 shadow-sm text-dark"
                                style={{
                                  background: '#C5A059',
                                  color: '#FFFFFF',
                                  minWidth: '130px'
                                }}
                                onClick={() => startQuiz(course.id, quiz.id)}
                              >
                                Start Quiz
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-5 text-muted">
                    No quizzes configured yet for this course.
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: BOOKS */}
            {activeTab === 'books' && (
              <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
                <div className="mb-4 pb-2 border-bottom" style={{ borderColor: '#C5A059' }}>
                  <h2 className="fw-bold font-heading mb-1 text-dark" style={{ color: '#590B0D' }}>
                    Books & Technical Manuals
                  </h2>
                  <p className="text-secondary mb-0">Official EASA study textbooks and aircraft manuals.</p>
                </div>

                {!activeBookReader ? (
                  course.books && course.books.length > 0 ? (
                    <div className="d-flex flex-column gap-3">
                      {course.books.map(book => (
                        <div key={book.id} className="card border rounded-3 p-3 bg-light shadow-sm">
                          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                            <div className="d-flex align-items-center gap-3">
                              <div className="p-3 rounded-3 bg-danger bg-opacity-10 text-danger">
                                <BookOpen size={28} />
                              </div>
                              <div>
                                <h5 className="fw-bold text-dark mb-1">{book.title}</h5>
                                <div className="text-muted small">
                                  Format: <strong>{book.format}</strong> • File: {book.fileName || 'Document.pdf'} • Pages: {book.pages || 150} • Size: {book.size || '12.4 MB'}
                                </div>
                              </div>
                            </div>

                            <div className="d-flex gap-2">
                              <button
                                className="btn btn-outline-trinity btn-sm px-3 py-2 fw-bold"
                                onClick={() => setActiveBookReader(book)}
                              >
                                <Eye size={15} className="me-1" /> Open Reader
                              </button>
                              <a
                                href={`#download-${book.id}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  alert(`Downloading simulated technical handbook: ${book.fileName || book.title}`);
                                }}
                                className="btn btn-outline-secondary btn-sm px-3 py-2"
                              >
                                <Download size={15} />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-5 text-muted">
                      No books uploaded for this subject yet.
                    </div>
                  )
                ) : (
                  // Interactive PDF Reader Simulator
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
                      <div>
                        <h5 className="fw-bold text-dark m-0">{activeBookReader.title}</h5>
                        <span className="small text-muted">{activeBookReader.fileName}</span>
                      </div>
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => setActiveBookReader(null)}
                      >
                        Back to Books List
                      </button>
                    </div>

                    <div
                      className="p-4 rounded-3 border bg-dark text-white shadow-inner mb-3"
                      style={{ minHeight: '400px', background: '#1E293B' }}
                    >
                      <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2 border-secondary">
                        <span className="small text-warning">EASA CERTIFIED TECHNICAL READER</span>
                        <span className="small text-secondary">Page 1 of {activeBookReader.pages || 140}</span>
                      </div>

                      <div className="p-4 bg-white text-dark rounded-2 shadow-sm my-3" style={{ minHeight: '320px' }}>
                        <h4 className="fw-bold text-danger border-bottom pb-2 mb-3">
                          {course.title} — Chapter 1: Foundations
                        </h4>
                        <p className="lead fs-6 text-secondary">
                          This technical handbook is prepared under EASA EC 1321/2014 regulatory standards. Technicians are advised to cross-reference all maintenance data against the current Aircraft Maintenance Manual (AMM) and Airworthiness Directives.
                        </p>
                        <hr />
                        <p className="small text-muted">
                          <strong>Section 1.1: General Airworthiness Requirements</strong><br />
                          In accordance with Part 145.A.45, maintenance organizations must hold and use applicable, current maintenance data in the performance of maintenance. Work cards and task allocations shall strictly conform to manufacturer tolerances...
                        </p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <button className="btn btn-outline-secondary btn-sm">Previous Page</button>
                      <span className="small text-muted align-self-center">Reading Mode • 100% Zoom</span>
                      <button className="btn btn-trinity-primary btn-sm px-3">Next Page</button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: NOTES */}
            {activeTab === 'notes' && (
              <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
                <div className="mb-4 pb-2 border-bottom" style={{ borderColor: '#C5A059' }}>
                  <h2 className="fw-bold font-heading mb-1 text-dark" style={{ color: '#590B0D' }}>
                    Study Notes & Key Summaries
                  </h2>
                  <p className="text-secondary mb-0">Concise revision cards, formulas, and memory mnemonics.</p>
                </div>

                {course.notes && course.notes.length > 0 ? (
                  <div className="d-flex flex-column gap-3">
                    {course.notes.map(note => (
                      <div key={note.id} className="card border-0 rounded-3 p-4 bg-light shadow-sm">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="fw-bold text-dark m-0">{note.title}</h5>
                          <span className="badge bg-danger bg-opacity-10 text-danger small">
                            {note.readTime || '10 min read'}
                          </span>
                        </div>
                        <p className="text-secondary leading-relaxed mb-0">{note.content}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-5 text-muted">
                    No revision notes added yet.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
