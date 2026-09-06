import React, { useState } from 'react';
import {
  BookOpen,
  FileText,
  HelpCircle,
  Plus,
  Trash2,
  Upload,
  CheckCircle2,
  X
} from 'lucide-react';

export const CourseModuleModal = ({ item, isCourse = false, onClose, onSave }) => {
  const [activeTab, setActiveTab] = useState('basic'); // 'basic' | 'books' | 'notes' | 'quizzes'

  const [formData, setFormData] = useState({
    id: item?.id || '',
    code: item?.code || (isCourse ? 'EASA-145-NEW' : 'PART66-NEW'),
    title: item?.title || '',
    category: item?.category || (isCourse ? 'course' : 'module'),
    subCategory: item?.subCategory || (isCourse ? 'EASA PART-145 & PART-M' : 'EASA PART 66 - MODULES'),
    description: item?.description || '',
    price: item?.price !== undefined ? item.price : 199.00,
    duration: item?.duration || '30 Hours',
    status: item?.status || 'Active',
    icon: item?.icon || (isCourse ? 'Plane' : 'BookOpen'),
    books: item?.books ? JSON.parse(JSON.stringify(item.books)) : [],
    notes: item?.notes ? JSON.parse(JSON.stringify(item.notes)) : [],
    quizzes: item?.quizzes ? JSON.parse(JSON.stringify(item.quizzes)) : []
  });

  // Basic Form change
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Books CRUD
  const handleAddBook = () => {
    const newBook = {
      id: `b-${Date.now()}`,
      title: `Technical Document ${formData.books.length + 1}`,
      format: 'PDF (upload)',
      fileName: 'EASA_Technical_Guide.pdf',
      size: '12.5 MB',
      pages: 150
    };
    setFormData(prev => ({ ...prev, books: [...prev.books, newBook] }));
  };

  const handleUpdateBook = (index, field, value) => {
    const updated = [...formData.books];
    updated[index][field] = value;
    setFormData(prev => ({ ...prev, books: updated }));
  };

  const handleDeleteBook = (index) => {
    const updated = formData.books.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, books: updated }));
  };

  // Notes CRUD
  const handleAddNote = () => {
    const newNote = {
      id: `n-${Date.now()}`,
      title: `Study Card ${formData.notes.length + 1}`,
      readTime: '15 min',
      content: 'Key formulas, system schematics, and regulatory requirements...'
    };
    setFormData(prev => ({ ...prev, notes: [...prev.notes, newNote] }));
  };

  const handleUpdateNote = (index, field, value) => {
    const updated = [...formData.notes];
    updated[index][field] = value;
    setFormData(prev => ({ ...prev, notes: updated }));
  };

  const handleDeleteNote = (index) => {
    const updated = formData.notes.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, notes: updated }));
  };

  // Quizzes CRUD
  const handleAddQuiz = () => {
    const newQuiz = {
      id: `quiz-${Date.now()}`,
      title: `Quiz ${formData.quizzes.length + 1}: Assessment`,
      description: 'Practice questions to evaluate technical comprehension.',
      timeLimitMinutes: 15,
      passingScore: 75,
      questionCount: 5, // Random pick count per attempt
      questions: [
        {
          id: `q-${Date.now()}-1`,
          text: 'Sample Question text here?',
          options: ['Option A', 'Option B', 'Option C', 'Option D'],
          correctOption: 0,
          explanation: 'EASA reference explanation note.'
        }
      ]
    };
    setFormData(prev => ({ ...prev, quizzes: [...prev.quizzes, newQuiz] }));
  };

  const handleUpdateQuiz = (qIndex, field, value) => {
    const updated = [...formData.quizzes];
    updated[qIndex][field] = value;
    setFormData(prev => ({ ...prev, quizzes: updated }));
  };

  const handleDeleteQuiz = (qIndex) => {
    const updated = formData.quizzes.filter((_, i) => i !== qIndex);
    setFormData(prev => ({ ...prev, quizzes: updated }));
  };

  // Questions inside Quiz CRUD
  const handleAddQuestion = (qIndex) => {
    const updated = [...formData.quizzes];
    const newQ = {
      id: `q-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      text: '',
      options: ['', '', '', ''],
      correctOption: 0,
      explanation: ''
    };
    updated[qIndex].questions = [...(updated[qIndex].questions || []), newQ];
    setFormData(prev => ({ ...prev, quizzes: updated }));
  };

  const handleUpdateQuestion = (qIndex, quesIndex, field, value) => {
    const updated = [...formData.quizzes];
    updated[qIndex].questions[quesIndex][field] = value;
    setFormData(prev => ({ ...prev, quizzes: updated }));
  };

  const handleUpdateOption = (qIndex, quesIndex, optIndex, value) => {
    const updated = [...formData.quizzes];
    updated[qIndex].questions[quesIndex].options[optIndex] = value;
    setFormData(prev => ({ ...prev, quizzes: updated }));
  };

  const handleDeleteQuestion = (qIndex, quesIndex) => {
    const updated = [...formData.quizzes];
    updated[qIndex].questions = updated[qIndex].questions.filter((_, i) => i !== quesIndex);
    setFormData(prev => ({ ...prev, quizzes: updated }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.75)', zIndex: 1060 }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
        <div className="modal-content border-0 rounded-4 shadow-lg overflow-hidden">
          {/* Header (matching Screenshot 3) */}
          <div className="modal-header bg-white px-4 py-3 border-bottom">
            <h4 className="modal-title fw-bold text-danger font-heading mb-0" style={{ color: '#7B1113' }}>
              {item ? (isCourse ? 'Edit Course' : 'Edit Module') : (isCourse ? 'Add Course' : 'Add Module')}
            </h4>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>

          {/* Tab Navigation (matching screenshot 3: Basic | Books | Notes | Quizzes) */}
          <div className="px-4 pt-3 bg-white border-bottom">
            <ul className="nav nav-underline gap-4">
              <li className="nav-item">
                <button
                  className={`nav-link text-dark fw-bold border-0 bg-transparent pb-3 ${
                    activeTab === 'basic' ? 'active text-danger border-bottom border-3 border-danger' : 'text-secondary'
                  }`}
                  onClick={() => setActiveTab('basic')}
                >
                  Basic
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link text-dark fw-bold border-0 bg-transparent pb-3 ${
                    activeTab === 'books' ? 'active text-danger border-bottom border-3 border-danger' : 'text-secondary'
                  }`}
                  onClick={() => setActiveTab('books')}
                >
                  Books ({formData.books.length})
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link text-dark fw-bold border-0 bg-transparent pb-3 ${
                    activeTab === 'notes' ? 'active text-danger border-bottom border-3 border-danger' : 'text-secondary'
                  }`}
                  onClick={() => setActiveTab('notes')}
                >
                  Notes ({formData.notes.length})
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link text-dark fw-bold border-0 bg-transparent pb-3 ${
                    activeTab === 'quizzes' ? 'active text-danger border-bottom border-3 border-danger' : 'text-secondary'
                  }`}
                  onClick={() => setActiveTab('quizzes')}
                >
                  Quizzes ({formData.quizzes.length})
                </button>
              </li>
            </ul>
          </div>

          <div className="modal-body p-4 bg-light">
            <form id="courseModuleForm" onSubmit={handleSubmit}>
              {/* TAB 1: BASIC DETAILS */}
              {activeTab === 'basic' && (
                <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                  <div className="row g-3">
                    <div className="col-md-8">
                      <label className="form-label small fw-semibold text-dark">Subject / Module Title</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="e.g. Module 1 - Mathematics"
                        value={formData.title}
                        onChange={(e) => handleChange('title', e.target.value)}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label small fw-semibold text-dark">Subject Code</label>
                      <input
                        type="text"
                        required
                        className="form-control font-monospace"
                        placeholder="e.g. PART66-M01"
                        value={formData.code}
                        onChange={(e) => handleChange('code', e.target.value)}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">Category</label>
                      <select
                        className="form-select"
                        value={formData.category}
                        onChange={(e) => {
                          const cat = e.target.value;
                          handleChange('category', cat);
                          handleChange(
                            'subCategory',
                            cat === 'course' ? 'EASA PART-145 & PART-M' : 'EASA PART 66 - MODULES'
                          );
                        }}
                      >
                        <option value="module">EASA PART 66 - Module</option>
                        <option value="course">EASA PART-145 & PART-M Course</option>
                      </select>
                    </div>

                    <div className="col-md-3">
                      <label className="form-label small fw-semibold text-dark">Price (USD $)</label>
                      <input
                        type="number"
                        step="0.01"
                        required
                        className="form-control"
                        value={formData.price}
                        onChange={(e) => handleChange('price', parseFloat(e.target.value) || 0)}
                      />
                    </div>

                    <div className="col-md-3">
                      <label className="form-label small fw-semibold text-dark">Standard Duration</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. 35 Hours"
                        value={formData.duration}
                        onChange={(e) => handleChange('duration', e.target.value)}
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label small fw-semibold text-dark">Curriculum Description</label>
                      <textarea
                        rows="3"
                        className="form-control"
                        placeholder="Provide details on EASA syllabus compliance, topics covered, and training outcomes..."
                        value={formData.description}
                        onChange={(e) => handleChange('description', e.target.value)}
                      ></textarea>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">Status</label>
                      <select
                        className="form-select"
                        value={formData.status}
                        onChange={(e) => handleChange('status', e.target.value)}
                      >
                        <option value="Active">Active</option>
                        <option value="Draft">Draft / Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: BOOKS (Matching Screenshot 5) */}
              {activeTab === 'books' && (
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold text-dark m-0 d-flex align-items-center gap-2">
                      <span>📚 Books</span>
                    </h5>
                    <button
                      type="button"
                      className="btn btn-sm btn-danger px-3 py-2 fw-bold"
                      style={{ backgroundColor: '#7B1113', borderColor: '#7B1113' }}
                      onClick={handleAddBook}
                    >
                      + Add Book
                    </button>
                  </div>

                  {formData.books.length > 0 ? (
                    <div className="d-flex flex-column gap-3">
                      {formData.books.map((book, bIndex) => (
                        <div key={book.id || bIndex} className="card border-0 shadow-sm rounded-3 p-4 bg-white">
                          <div className="row g-3 align-items-center mb-3">
                            <div className="col-md-5">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Book Title (e.g. Module 3)"
                                value={book.title}
                                onChange={(e) => handleUpdateBook(bIndex, 'title', e.target.value)}
                              />
                            </div>
                            <div className="col-md-4">
                              <select
                                className="form-select"
                                value={book.format || 'PDF (upload)'}
                                onChange={(e) => handleUpdateBook(bIndex, 'format', e.target.value)}
                              >
                                <option value="PDF (upload)">PDF (upload)</option>
                                <option value="E-Book Reader">E-Book Reader</option>
                                <option value="External Link">External URL</option>
                              </select>
                            </div>
                            <div className="col-md-3 text-end">
                              <button
                                type="button"
                                className="btn btn-danger btn-sm px-3"
                                onClick={() => handleDeleteBook(bIndex)}
                              >
                                Delete Book
                              </button>
                            </div>
                          </div>

                          {/* Upload Box (matching screenshot 5) */}
                          <div className="p-3 rounded-3 border border-2 border-dashed bg-light text-center">
                            <div className="text-success small fw-bold mb-2">
                              ✓ {book.fileName || 'EASA_DOCUMENT.pdf'} — Click Save to finalize
                            </div>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm px-4"
                              onClick={() => {
                                const newName = prompt('Enter PDF file name:', book.fileName || 'Manual.pdf');
                                if (newName) handleUpdateBook(bIndex, 'fileName', newName);
                              }}
                            >
                              Change PDF
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="card border-0 p-5 text-center bg-white rounded-4 shadow-sm text-muted">
                      No textbooks or technical documents added yet. Click <strong>+ Add Book</strong> above.
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: NOTES */}
              {activeTab === 'notes' && (
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold text-dark m-0">📝 Revision Notes</h5>
                    <button
                      type="button"
                      className="btn btn-sm btn-danger px-3 py-2 fw-bold"
                      style={{ backgroundColor: '#7B1113', borderColor: '#7B1113' }}
                      onClick={handleAddNote}
                    >
                      + Add Note
                    </button>
                  </div>

                  {formData.notes.length > 0 ? (
                    <div className="d-flex flex-column gap-3">
                      {formData.notes.map((note, nIndex) => (
                        <div key={note.id || nIndex} className="card border-0 shadow-sm rounded-3 p-4 bg-white">
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="d-flex gap-2 flex-grow-1 me-3">
                              <input
                                type="text"
                                className="form-control fw-bold"
                                placeholder="Note Title (e.g. Bernoulli Principle)"
                                value={note.title}
                                onChange={(e) => handleUpdateNote(nIndex, 'title', e.target.value)}
                              />
                              <input
                                type="text"
                                className="form-control"
                                style={{ maxWidth: '140px' }}
                                placeholder="15 min read"
                                value={note.readTime}
                                onChange={(e) => handleUpdateNote(nIndex, 'readTime', e.target.value)}
                              />
                            </div>
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                              onClick={() => handleDeleteNote(nIndex)}
                            >
                              Delete Note
                            </button>
                          </div>
                          <textarea
                            rows="4"
                            className="form-control"
                            placeholder="Write comprehensive revision notes, formulas, or bullet points..."
                            value={note.content}
                            onChange={(e) => handleUpdateNote(nIndex, 'content', e.target.value)}
                          ></textarea>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="card border-0 p-5 text-center bg-white rounded-4 shadow-sm text-muted">
                      No study notes created yet. Click <strong>+ Add Note</strong> above.
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: QUIZZES & QUESTION BANK (Matching Screenshot 3) */}
              {activeTab === 'quizzes' && (
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold text-dark m-0">📋 Quizzes & Question Banks</h5>
                    <button
                      type="button"
                      className="btn btn-sm btn-danger px-3 py-2 fw-bold"
                      style={{ backgroundColor: '#7B1113', borderColor: '#7B1113' }}
                      onClick={handleAddQuiz}
                    >
                      + Add Quiz
                    </button>
                  </div>

                  {formData.quizzes.length > 0 ? (
                    <div className="d-flex flex-column gap-4">
                      {formData.quizzes.map((quiz, qIndex) => (
                        <div key={quiz.id || qIndex} className="card border-0 shadow-sm rounded-4 p-4 bg-white border-start border-4 border-danger">
                          {/* Quiz Meta & Remove (Matching Screenshot 3) */}
                          <div className="row g-3 align-items-start mb-3">
                            <div className="col-md-7">
                              <label className="form-label small fw-semibold text-dark">Quiz Title</label>
                              <input
                                type="text"
                                className="form-control fw-bold"
                                placeholder="Quiz title"
                                value={quiz.title}
                                onChange={(e) => handleUpdateQuiz(qIndex, 'title', e.target.value)}
                              />
                            </div>
                            <div className="col-md-5 text-md-end pt-md-4">
                              <button
                                type="button"
                                className="btn btn-danger px-3 py-2 fw-semibold"
                                onClick={() => handleDeleteQuiz(qIndex)}
                              >
                                Remove Quiz
                              </button>
                            </div>
                            <div className="col-12">
                              <label className="form-label small fw-semibold text-dark">Quiz Description</label>
                              <textarea
                                rows="2"
                                className="form-control"
                                placeholder="Quiz description"
                                value={quiz.description}
                                onChange={(e) => handleUpdateQuiz(qIndex, 'description', e.target.value)}
                              ></textarea>
                            </div>
                          </div>

                          {/* Random Question Sampler Configuration (User requirement!) */}
                          <div className="p-3 rounded-3 bg-light border mb-4">
                            <div className="row g-3 align-items-center">
                              <div className="col-md-6">
                                <label className="form-label small fw-bold text-dark mb-1">
                                  🎲 Questions served per student test attempt:
                                </label>
                                <input
                                  type="number"
                                  min="1"
                                  max={quiz.questions?.length || 100}
                                  className="form-control"
                                  value={quiz.questionCount || 5}
                                  onChange={(e) =>
                                    handleUpdateQuiz(qIndex, 'questionCount', parseInt(e.target.value) || 1)
                                  }
                                />
                                <span className="small text-muted">
                                  Randomly picked from the question bank of {quiz.questions?.length || 0} questions for each attempt.
                                </span>
                              </div>
                              <div className="col-md-3">
                                <label className="form-label small fw-semibold text-dark mb-1">Time Limit (Mins)</label>
                                <input
                                  type="number"
                                  min="5"
                                  className="form-control"
                                  value={quiz.timeLimitMinutes || 15}
                                  onChange={(e) =>
                                    handleUpdateQuiz(qIndex, 'timeLimitMinutes', parseInt(e.target.value) || 15)
                                  }
                                />
                              </div>
                              <div className="col-md-3">
                                <label className="form-label small fw-semibold text-dark mb-1">Pass Mark (%)</label>
                                <input
                                  type="number"
                                  min="50"
                                  max="100"
                                  className="form-control"
                                  value={quiz.passingScore || 75}
                                  onChange={(e) =>
                                    handleUpdateQuiz(qIndex, 'passingScore', parseInt(e.target.value) || 75)
                                  }
                                />
                              </div>
                            </div>
                          </div>

                          {/* Questions Section (Matching Screenshot 3) */}
                          <div className="border-top pt-3">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <h6 className="fw-bold text-dark m-0">Questions in Bank ({quiz.questions?.length || 0})</h6>
                              <button
                                type="button"
                                className="btn btn-sm btn-danger px-3 py-1 fw-bold"
                                style={{ backgroundColor: '#7B1113', borderColor: '#7B1113' }}
                                onClick={() => handleAddQuestion(qIndex)}
                              >
                                + Question
                              </button>
                            </div>

                            {quiz.questions && quiz.questions.length > 0 ? (
                              <div className="d-flex flex-column gap-3">
                                {quiz.questions.map((ques, quesIndex) => (
                                  <div
                                    key={ques.id || quesIndex}
                                    className="p-3 rounded-3 border bg-light shadow-sm"
                                  >
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                      <span className="small fw-bold text-secondary">
                                        QUESTION #{quesIndex + 1}
                                      </span>
                                      <button
                                        type="button"
                                        className="btn btn-danger btn-sm px-2 py-1 small"
                                        onClick={() => handleDeleteQuestion(qIndex, quesIndex)}
                                      >
                                        Remove Q
                                      </button>
                                    </div>

                                    {/* Question Text */}
                                    <div className="mb-3">
                                      <input
                                        type="text"
                                        required
                                        className="form-control"
                                        placeholder="Question text"
                                        value={ques.text}
                                        onChange={(e) =>
                                          handleUpdateQuestion(qIndex, quesIndex, 'text', e.target.value)
                                        }
                                      />
                                    </div>

                                    {/* 4 Options (A, B, C, D) matching Screenshot 3 */}
                                    <div className="d-flex flex-column gap-2 mb-3">
                                      {['A', 'B', 'C', 'D'].map((letter, optIdx) => (
                                        <div key={optIdx} className="d-flex align-items-center gap-2">
                                          <span className="fw-bold text-danger" style={{ width: '20px' }}>
                                            {letter}
                                          </span>
                                          <input
                                            type="text"
                                            required
                                            className="form-control"
                                            placeholder={`Option ${letter}`}
                                            value={ques.options ? ques.options[optIdx] : ''}
                                            onChange={(e) =>
                                              handleUpdateOption(qIndex, quesIndex, optIdx, e.target.value)
                                            }
                                          />
                                          <div className="form-check text-nowrap ms-2">
                                            <input
                                              className="form-check-input"
                                              type="radio"
                                              name={`correct-${qIndex}-${quesIndex}`}
                                              id={`opt-${qIndex}-${quesIndex}-${optIdx}`}
                                              checked={ques.correctOption === optIdx}
                                              onChange={() =>
                                                handleUpdateQuestion(qIndex, quesIndex, 'correctOption', optIdx)
                                              }
                                            />
                                            <label
                                              className="form-check-label small fw-semibold"
                                              htmlFor={`opt-${qIndex}-${quesIndex}-${optIdx}`}
                                            >
                                              Correct
                                            </label>
                                          </div>
                                        </div>
                                      ))}
                                    </div>

                                    {/* Explanation note */}
                                    <div>
                                      <input
                                        type="text"
                                        className="form-control small"
                                        placeholder="EASA reference explanation note..."
                                        value={ques.explanation || ''}
                                        onChange={(e) =>
                                          handleUpdateQuestion(qIndex, quesIndex, 'explanation', e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="text-center py-4 text-muted bg-white rounded-3 border">
                                No questions in bank yet. Click <strong>+ Question</strong> to add MCQs.
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="card border-0 p-5 text-center bg-white rounded-4 shadow-sm text-muted">
                      No quizzes created yet. Click <strong>+ Add Quiz</strong> above.
                    </div>
                  )}
                </div>
              )}
            </form>
          </div>

          {/* Footer (matching Screenshot 5: Save & Cancel) */}
          <div className="modal-footer bg-white border-top px-4 py-3">
            <button
              type="button"
              className="btn btn-danger px-4 py-2 fw-bold"
              style={{ backgroundColor: '#7B1113', borderColor: '#7B1113' }}
              onClick={handleSubmit}
            >
              Save
            </button>
            <button type="button" className="btn btn-light border px-4 py-2" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
