import React from 'react';
import { CheckCircle2, XCircle, Clock, Award, HelpCircle, FileText } from 'lucide-react';

export const QuizAttemptModal = ({ attempt, onClose }) => {
  if (!attempt) return null;

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: 1050 }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
        <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          {/* Header */}
          <div className="modal-header text-white px-4 py-3" style={{ background: 'linear-gradient(90deg, #590B0D 0%, #7B1113 100%)' }}>
            <div>
              <div className="small text-warning text-uppercase fw-semibold" style={{ letterSpacing: '1px' }}>
                Attempt Audit Breakdown
              </div>
              <h5 className="modal-title fw-bold text-white mb-0">{attempt.quizTitle}</h5>
            </div>
            <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close"></button>
          </div>

          <div className="modal-body p-4 bg-light">
            {/* Meta Stats Bar */}
            <div className="card border-0 shadow-sm rounded-3 p-3 mb-4 bg-white">
              <div className="row g-3 align-items-center">
                <div className="col-md-4">
                  <span className="text-secondary small d-block">Candidate</span>
                  <strong className="text-dark d-block">{attempt.studentName}</strong>
                  <span className="text-muted small">{attempt.studentEmail}</span>
                </div>
                <div className="col-md-4">
                  <span className="text-secondary small d-block">Module / Course</span>
                  <strong className="text-dark">{attempt.courseTitle}</strong>
                  <div className="text-muted small mt-1 d-flex align-items-center gap-1">
                    <Clock size={13} /> Time: {Math.floor((attempt.timeSpentSeconds || 0) / 60)}m {(attempt.timeSpentSeconds || 0) % 60}s
                  </div>
                </div>
                <div className="col-md-4 text-md-end">
                  <span className="text-secondary small d-block">Result Status</span>
                  <div className="d-flex align-items-center justify-content-md-end gap-2 mt-1">
                    <span className="fs-4 fw-bold">{attempt.scorePercent}%</span>
                    <span className={`badge ${attempt.passed ? 'bg-success' : 'bg-danger'} px-3 py-2 fs-6`}>
                      {attempt.passed ? 'PASSED' : 'FAILED'}
                    </span>
                  </div>
                  <span className="text-muted small d-block mt-1">Pass mark: 75% (EASA standard)</span>
                </div>
              </div>
            </div>

            {/* Question Breakdown List */}
            <h6 className="fw-bold text-dark mb-3 d-flex align-items-center gap-2">
              <FileText size={18} className="text-danger" />
              Detailed Question Responses ({attempt.correctAnswers || 0}/{attempt.totalQuestions || 0} Correct)
            </h6>

            {attempt.answersBreakdown && attempt.answersBreakdown.length > 0 ? (
              <div className="d-flex flex-column gap-3">
                {attempt.answersBreakdown.map((item, idx) => (
                  <div
                    key={idx}
                    className={`card border-0 shadow-sm rounded-3 p-3 bg-white ${
                      item.isCorrect ? 'border-start border-success border-4' : 'border-start border-danger border-4'
                    }`}
                  >
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="fw-bold text-secondary small">QUESTION {idx + 1}</span>
                      {item.isCorrect ? (
                        <span className="badge bg-success-subtle text-success border border-success-subtle d-flex align-items-center gap-1">
                          <CheckCircle2 size={13} /> Correct (+1)
                        </span>
                      ) : (
                        <span className="badge bg-danger-subtle text-danger border border-danger-subtle d-flex align-items-center gap-1">
                          <XCircle size={13} /> Incorrect (0)
                        </span>
                      )}
                    </div>

                    <p className="fw-semibold text-dark mb-3">{item.questionText}</p>

                    <div className="row g-2 mb-2">
                      {item.options &&
                        item.options.map((opt, optIdx) => {
                          const isSelected = item.selectedOption === optIdx;
                          const isTheCorrect = item.correctOption === optIdx;

                          let btnClass = 'bg-light text-secondary border';
                          if (isTheCorrect) {
                            btnClass = 'bg-success bg-opacity-15 text-success-emphasis border-success fw-bold';
                          } else if (isSelected && !item.isCorrect) {
                            btnClass = 'bg-danger bg-opacity-15 text-danger-emphasis border-danger fw-bold';
                          }

                          return (
                            <div key={optIdx} className="col-12">
                              <div className={`p-2 rounded small d-flex align-items-center justify-content-between ${btnClass}`}>
                                <span>
                                  <strong className="me-2">{String.fromCharCode(65 + optIdx)}.</strong> {opt}
                                </span>
                                <div>
                                  {isTheCorrect && <span className="badge bg-success ms-2">Official Key</span>}
                                  {isSelected && (
                                    <span className={`badge ${item.isCorrect ? 'bg-success' : 'bg-danger'} ms-2`}>
                                      Student Selected
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>

                    {item.explanation && (
                      <div className="p-2 rounded bg-light small text-secondary border mt-2">
                        <strong className="text-dark">EASA Reference / Rationale: </strong>
                        {item.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4 text-muted bg-white rounded-3">
                No granular question telemetry stored for this legacy attempt.
              </div>
            )}
          </div>

          <div className="modal-footer bg-white border-top">
            <button type="button" className="btn btn-secondary px-4" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
