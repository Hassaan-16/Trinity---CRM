import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { QuizAttemptModal } from '../../components/QuizAttemptModal';
import { ClipboardList, Search, Filter, CheckCircle2, XCircle, Clock, Eye, Trash2 } from 'lucide-react';

export const QuizAttempts = () => {
  const { quizAttempts } = useApp();
  const [selectedAttempt, setSelectedAttempt] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL'); // 'ALL' | 'PASSED' | 'FAILED'

  const filteredAttempts = quizAttempts.filter(att => {
    const matchesSearch =
      att.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      att.studentEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      att.courseTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      att.quizTitle.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === 'ALL' ||
      (statusFilter === 'PASSED' && att.passed) ||
      (statusFilter === 'FAILED' && !att.passed);

    return matchesSearch && matchesStatus;
  });

  const passedCount = quizAttempts.filter(a => a.passed).length;
  const passRate = quizAttempts.length > 0 ? Math.round((passedCount / quizAttempts.length) * 100) : 0;

  return (
    <div className="p-4 p-lg-5">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4 pb-2 border-bottom">
        <div>
          <h2 className="fw-bold font-heading text-dark m-0" style={{ color: '#7B1113' }}>
            Student Quiz Attempts
          </h2>
          <span className="text-secondary small">
            Audit examination sessions, examine randomly served questions, and evaluate score breakdowns
          </span>
        </div>
      </div>

      {/* Stats Summary Bar */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 p-3 bg-white border-start border-4 border-primary">
            <span className="small text-secondary fw-semibold d-block">Total Test Attempts</span>
            <h3 className="fw-bold text-dark mb-0">{quizAttempts.length}</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 p-3 bg-white border-start border-4 border-success">
            <span className="small text-secondary fw-semibold d-block">EASA Pass Benchmark Rate</span>
            <h3 className="fw-bold text-success mb-0">{passRate}%</h3>
            <span className="small text-muted">{passedCount} passing sessions (≥ 75%)</span>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 p-3 bg-white border-start border-4 border-danger">
            <span className="small text-secondary fw-semibold d-block">Failed Attempts</span>
            <h3 className="fw-bold text-danger mb-0">{quizAttempts.length - passedCount}</h3>
            <span className="small text-muted">Eligible for random question retake</span>
          </div>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="card border-0 shadow-sm rounded-3 p-3 bg-white mb-4">
        <div className="row g-3">
          <div className="col-md-8">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <Search size={16} className="text-secondary" />
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search candidate name, email, module title, or quiz..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="ALL">All Attempt Results</option>
              <option value="PASSED">Passed Only (≥ 75%)</option>
              <option value="FAILED">Failed Only (&lt; 75%)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Attempts Table */}
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr className="small text-secondary fw-semibold">
                <th>Candidate Details</th>
                <th>Course / Module</th>
                <th>Quiz Title</th>
                <th className="text-center">Score</th>
                <th className="text-center">Status</th>
                <th>Date & Time</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAttempts.length > 0 ? (
                filteredAttempts.map(att => (
                  <tr key={att.id}>
                    <td>
                      <strong className="text-dark d-block">{att.studentName}</strong>
                      <span className="text-muted small font-monospace">{att.studentEmail}</span>
                    </td>
                    <td>
                      <span className="fw-semibold text-dark d-block">{att.courseTitle}</span>
                      <span className="text-secondary small">Duration: {Math.floor((att.timeSpentSeconds || 0) / 60)}m {(att.timeSpentSeconds || 0) % 60}s</span>
                    </td>
                    <td>
                      <span className="text-dark small fw-semibold">{att.quizTitle}</span>
                      <div className="text-muted small">
                        {att.correctAnswers || 0} of {att.totalQuestions || 0} questions correct
                      </div>
                    </td>
                    <td className="text-center">
                      <span className="fs-6 fw-bold text-dark">{att.scorePercent}%</span>
                    </td>
                    <td className="text-center">
                      <span className={`badge ${att.passed ? 'bg-success' : 'bg-danger'} px-3 py-2 fw-semibold`}>
                        {att.passed ? 'PASSED' : 'FAILED'}
                      </span>
                    </td>
                    <td className="text-muted small">{att.date}</td>
                    <td className="text-end">
                      <button
                        className="btn btn-sm btn-outline-trinity px-3 py-1 fw-bold d-inline-flex align-items-center gap-1"
                        onClick={() => setSelectedAttempt(att)}
                      >
                        <Eye size={14} /> View Breakdown
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-5 text-muted">
                    No quiz attempts matched the search criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Breakdown Audit Modal */}
      {selectedAttempt && (
        <QuizAttemptModal
          attempt={selectedAttempt}
          onClose={() => setSelectedAttempt(null)}
        />
      )}
    </div>
  );
};
