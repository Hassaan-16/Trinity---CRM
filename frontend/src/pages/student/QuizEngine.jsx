import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import confetti from 'canvas-confetti';
import {
  Clock,
  CheckCircle2,
  XCircle,
  Award,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  AlertTriangle,
  Flag
} from 'lucide-react';

export const QuizEngine = () => {
  const {
    activeQuizSession,
    setActiveQuizSession,
    submitQuiz,
    startQuiz
  } = useApp();

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState({});
  const [secondsRemaining, setSecondsRemaining] = useState(15 * 60);
  const [completedResult, setCompletedResult] = useState(null);

  // Initialize quiz state
  useEffect(() => {
    if (activeQuizSession) {
      setCurrentQIndex(0);
      setUserAnswers({});
      setFlaggedQuestions({});
      setSecondsRemaining((activeQuizSession.timeLimitMinutes || 15) * 60);
      setCompletedResult(null);
    }
  }, [activeQuizSession?.quizId]);

  // Countdown timer
  useEffect(() => {
    if (completedResult || !activeQuizSession) return;

    const timer = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinishSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [completedResult, activeQuizSession]);

  if (!activeQuizSession) return null;

  const questions = activeQuizSession.questions || [];
  const currentQuestion = questions[currentQIndex];

  const handleSelectOption = (optionIndex) => {
    if (completedResult) return;
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionIndex
    }));
  };

  const toggleFlag = () => {
    setFlaggedQuestions(prev => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id]
    }));
  };

  const handleFinishSubmit = () => {
    const result = submitQuiz(userAnswers);
    setCompletedResult(result);

    // Fire confetti if student passed
    if (result && result.passed) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const formatTimer = (totalSeconds) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // If completed, show result view
  if (completedResult) {
    return (
      <div className="container py-5">
        <div className="card border-0 shadow-lg rounded-4 overflow-hidden mx-auto" style={{ maxWidth: '850px' }}>
          <div
            className="p-4 text-white text-center"
            style={{
              background: completedResult.passed
                ? 'linear-gradient(135deg, #15803d 0%, #166534 100%)'
                : 'linear-gradient(135deg, #991b1b 0%, #7f1d1d 100%)'
            }}
          >
            <div className="d-inline-flex p-3 rounded-circle bg-white bg-opacity-20 mb-3">
              {completedResult.passed ? <Award size={48} /> : <AlertTriangle size={48} />}
            </div>
            <h2 className="fw-bold font-heading mb-1">
              {completedResult.passed ? 'Examination Passed!' : 'Examination Not Passed'}
            </h2>
            <p className="lead mb-0 text-white text-opacity-90">
              {completedResult.passed
                ? 'Congratulations! You achieved the EASA 75% examination threshold.'
                : 'You did not meet the 75% pass mark. Review the explanations below and re-test.'}
            </p>
          </div>

          <div className="card-body p-4 p-md-5 bg-light">
            {/* Score Metric Cards */}
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <div className="p-3 rounded-3 bg-white border text-center shadow-sm">
                  <span className="text-secondary small d-block">Score Percentage</span>
                  <h2 className="fw-bold text-dark mb-0">{completedResult.scorePercent}%</h2>
                  <span className="small text-muted">75% required</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 rounded-3 bg-white border text-center shadow-sm">
                  <span className="text-secondary small d-block">Correct Answers</span>
                  <h2 className="fw-bold text-success mb-0">
                    {completedResult.correctAnswers} / {completedResult.totalQuestions}
                  </h2>
                  <span className="small text-muted">Randomly drawn items</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 rounded-3 bg-white border text-center shadow-sm">
                  <span className="text-secondary small d-block">Time Elapsed</span>
                  <h2 className="fw-bold text-primary mb-0">
                    {Math.floor(completedResult.timeSpentSeconds / 60)}m {completedResult.timeSpentSeconds % 60}s
                  </h2>
                  <span className="small text-muted">Of {activeQuizSession.timeLimitMinutes} min limit</span>
                </div>
              </div>
            </div>

            {/* Granular Review Breakdown */}
            <h5 className="fw-bold text-dark mb-3">Question-by-Question Audit</h5>
            <div className="d-flex flex-column gap-3 mb-5">
              {completedResult.answersBreakdown.map((item, idx) => (
                <div
                  key={idx}
                  className={`card border-0 rounded-3 p-3 bg-white shadow-sm ${
                    item.isCorrect ? 'border-start border-4 border-success' : 'border-start border-4 border-danger'
                  }`}
                >
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="small fw-bold text-secondary">QUESTION {idx + 1}</span>
                    {item.isCorrect ? (
                      <span className="badge bg-success bg-opacity-10 text-success d-flex align-items-center gap-1">
                        <CheckCircle2 size={14} /> Correct
                      </span>
                    ) : (
                      <span className="badge bg-danger bg-opacity-10 text-danger d-flex align-items-center gap-1">
                        <XCircle size={14} /> Incorrect
                      </span>
                    )}
                  </div>
                  <p className="fw-semibold text-dark mb-3">{item.questionText}</p>

                  <div className="d-flex flex-column gap-1 mb-2">
                    {item.options.map((opt, optIdx) => {
                      const isCorrectOpt = item.correctOption === optIdx;
                      const isSelectedOpt = item.selectedOption === optIdx;

                      let cls = 'p-2 rounded small border bg-light text-secondary';
                      if (isCorrectOpt) {
                        cls = 'p-2 rounded small border border-success bg-success bg-opacity-10 text-success-emphasis fw-bold';
                      } else if (isSelectedOpt && !item.isCorrect) {
                        cls = 'p-2 rounded small border border-danger bg-danger bg-opacity-10 text-danger-emphasis fw-bold';
                      }

                      return (
                        <div key={optIdx} className={cls}>
                          <div className="d-flex justify-content-between align-items-center">
                            <span>
                              <strong>{String.fromCharCode(65 + optIdx)}.</strong> {opt}
                            </span>
                            <div>
                              {isCorrectOpt && <span className="badge bg-success">Correct Key</span>}
                              {isSelectedOpt && (
                                <span className={`badge ${item.isCorrect ? 'bg-success' : 'bg-danger'} ms-1`}>
                                  Your Choice
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {item.explanation && (
                    <div className="p-2 rounded bg-light border small text-muted">
                      <strong>EASA Reference Note:</strong> {item.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="d-flex flex-wrap justify-content-between gap-2 pt-3 border-top">
              <button
                className="btn btn-outline-secondary px-4 py-2"
                onClick={() => setActiveQuizSession(null)}
              >
                Return to Course Hub
              </button>

              <button
                className="btn btn-trinity-primary px-4 py-2 fw-bold d-flex align-items-center gap-2"
                onClick={() => startQuiz(activeQuizSession.courseId, activeQuizSession.quizId)}
              >
                <RotateCcw size={16} /> Retake Quiz (Draws New Random Bank Questions)
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Active Quiz View
  return (
    <div className="container py-4">
      {/* Top Header Bar */}
      <div className="card border-0 shadow-sm rounded-4 p-3 mb-4 bg-white">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <div>
            <div className="small text-danger fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>
              {activeQuizSession.courseTitle}
            </div>
            <h4 className="fw-bold text-dark m-0">{activeQuizSession.quizTitle}</h4>
          </div>

          <div className="d-flex align-items-center gap-3">
            {/* Timer */}
            <div
              className={`d-flex align-items-center gap-2 px-3 py-2 rounded-pill fw-bold font-monospace fs-5 ${
                secondsRemaining < 120 ? 'bg-danger text-white' : 'bg-light text-dark border'
              }`}
            >
              <Clock size={20} className={secondsRemaining < 120 ? 'text-white' : 'text-danger'} />
              <span>{formatTimer(secondsRemaining)}</span>
            </div>

            <button
              className="btn btn-danger btn-sm px-3 py-2 rounded-pill fw-bold"
              onClick={() => {
                if (window.confirm('Are you sure you want to finish and submit your quiz answers now?')) {
                  handleFinishSubmit();
                }
              }}
            >
              Submit Quiz
            </button>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Left Column: Current Question */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white h-100 d-flex flex-column">
            {/* Question Progress Header */}
            <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
              <span className="badge bg-warning text-dark px-3 py-2 fw-bold">
                QUESTION {currentQIndex + 1} OF {questions.length}
              </span>

              <button
                type="button"
                className={`btn btn-sm ${
                  flaggedQuestions[currentQuestion.id] ? 'btn-warning' : 'btn-outline-secondary'
                } rounded-pill px-3 d-flex align-items-center gap-1`}
                onClick={toggleFlag}
              >
                <Flag size={14} /> {flaggedQuestions[currentQuestion.id] ? 'Flagged' : 'Flag for Review'}
              </button>
            </div>

            {/* Question Text */}
            <h5 className="fw-bold text-dark leading-relaxed mb-4">
              {currentQuestion.text}
            </h5>

            {/* 4 Options */}
            <div className="d-flex flex-column gap-3 mb-5 flex-grow-1">
              {currentQuestion.options.map((opt, optIndex) => {
                const isSelected = userAnswers[currentQuestion.id] === optIndex;

                return (
                  <div
                    key={optIndex}
                    onClick={() => handleSelectOption(optIndex)}
                    className={`p-3 rounded-3 border d-flex align-items-center gap-3 cursor-pointer transition-all ${
                      isSelected
                        ? 'border-2 border-danger bg-danger bg-opacity-10 text-dark fw-bold'
                        : 'border-secondary-subtle bg-light text-secondary'
                    }`}
                    style={{ cursor: 'pointer', transition: 'all 0.15s ease' }}
                  >
                    <div
                      className={`rounded-circle d-flex align-items-center justify-content-center fw-bold ${
                        isSelected ? 'bg-danger text-white' : 'bg-white border text-secondary'
                      }`}
                      style={{ width: '32px', height: '32px', flexShrink: 0 }}
                    >
                      {String.fromCharCode(65 + optIndex)}
                    </div>
                    <span className="fs-6">{opt}</span>
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="d-flex justify-content-between align-items-center pt-3 border-top mt-auto">
              <button
                className="btn btn-outline-secondary px-4 py-2 rounded-3"
                disabled={currentQIndex === 0}
                onClick={() => setCurrentQIndex(prev => prev - 1)}
              >
                <ArrowLeft size={16} className="me-1" /> Previous
              </button>

              {currentQIndex < questions.length - 1 ? (
                <button
                  className="btn btn-trinity-primary px-4 py-2 rounded-3 fw-bold"
                  onClick={() => setCurrentQIndex(prev => prev + 1)}
                >
                  Next <ArrowRight size={16} className="ms-1" />
                </button>
              ) : (
                <button
                  className="btn btn-success px-4 py-2 rounded-3 fw-bold"
                  onClick={() => {
                    if (window.confirm('You have reached the final question. Finish and submit?')) {
                      handleFinishSubmit();
                    }
                  }}
                >
                  Complete & Submit
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Question Palette & Status */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
            <h6 className="fw-bold text-dark mb-3">Question Palette</h6>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {questions.map((q, idx) => {
                const isAnswered = userAnswers[q.id] !== undefined;
                const isCurrent = currentQIndex === idx;
                const isFlagged = flaggedQuestions[q.id];

                let btnCls = 'btn-outline-secondary';
                if (isCurrent) {
                  btnCls = 'btn-danger fw-bold shadow-sm';
                } else if (isAnswered) {
                  btnCls = 'btn-success text-white';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQIndex(idx)}
                    className={`btn btn-sm ${btnCls} position-relative`}
                    style={{ width: '42px', height: '42px' }}
                  >
                    {idx + 1}
                    {isFlagged && (
                      <span
                        className="position-absolute top-0 start-100 translate-middle p-1 bg-warning border border-light rounded-circle"
                        style={{ width: '10px', height: '10px' }}
                      ></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="d-flex flex-column gap-2 small text-secondary border-top pt-3">
              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-danger text-white px-2 py-1">#</span>
                <span>Current Active Question</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-success text-white px-2 py-1">#</span>
                <span>Answered</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-outline-secondary border text-dark px-2 py-1">#</span>
                <span>Unanswered</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="p-1 bg-warning rounded-circle d-inline-block" style={{ width: '10px', height: '10px' }}></span>
                <span>Flagged for Review</span>
              </div>
            </div>

            <div className="alert alert-info border-0 mt-4 small mb-0">
              <strong>Random Question Sampler:</strong> These {questions.length} questions were randomly selected from the master question bank for your attempt.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
