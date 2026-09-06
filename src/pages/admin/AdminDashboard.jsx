import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Users,
  BookOpen,
  ClipboardList,
  AlertCircle,
  TrendingUp,
  Award,
  ArrowRight,
  CheckCircle2,
  Clock
} from 'lucide-react';

export const AdminDashboard = ({ onViewAttempt }) => {
  const {
    users,
    coursesAndModules,
    quizAttempts,
    orders,
    setAdminTab
  } = useApp();

  const totalStudents = users.filter(u => u.role === 'student').length;
  const totalCourses = coursesAndModules.filter(c => c.category === 'course').length;
  const totalModules = coursesAndModules.filter(c => c.category === 'module').length;
  const pendingOrders = orders.filter(o => o.status === 'Pending Approval');
  const completedOrders = orders.filter(o => o.status === 'Completed');
  const totalRevenue = completedOrders.reduce((sum, o) => sum + (o.total || 0), 0);
  const recentAttempts = quizAttempts.slice(0, 5);

  return (
    <div className="p-4 p-lg-5">
      {/* Page Title */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4 pb-2 border-bottom">
        <div>
          <h2 className="fw-bold font-heading text-dark m-0">Admin Dashboard</h2>
          <span className="text-secondary small">
            Overview of Trinity Aviation Academy enrollments, examination metrics, and financial clearances
          </span>
        </div>
        <div className="d-flex gap-2">
          <button
            className="btn btn-trinity-primary px-3 py-2 rounded-3 fw-bold d-flex align-items-center gap-1"
            onClick={() => setAdminTab('grant-access')}
          >
            <Users size={16} /> Grant Student Access
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="row g-3 mb-5">
        <div className="col-xl-3 col-sm-6">
          <div className="card border-0 shadow-sm rounded-4 p-3 bg-white border-start border-4 border-primary">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="small text-secondary fw-semibold">Registered Students</span>
              <div className="p-2 rounded bg-primary bg-opacity-10 text-primary">
                <Users size={20} />
              </div>
            </div>
            <h3 className="fw-bold text-dark mb-0">{totalStudents}</h3>
            <span className="small text-success">Active candidates</span>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6">
          <div className="card border-0 shadow-sm rounded-4 p-3 bg-white border-start border-4 border-danger">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="small text-secondary fw-semibold">Courses & Modules</span>
              <div className="p-2 rounded bg-danger bg-opacity-10 text-danger">
                <BookOpen size={20} />
              </div>
            </div>
            <h3 className="fw-bold text-dark mb-0">{coursesAndModules.length}</h3>
            <span className="small text-secondary">{totalCourses} Courses • {totalModules} Modules</span>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6">
          <div className="card border-0 shadow-sm rounded-4 p-3 bg-white border-start border-4 border-success">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="small text-secondary fw-semibold">Quiz Attempts</span>
              <div className="p-2 rounded bg-success bg-opacity-10 text-success">
                <ClipboardList size={20} />
              </div>
            </div>
            <h3 className="fw-bold text-dark mb-0">{quizAttempts.length}</h3>
            <span className="small text-success">Evaluated test sessions</span>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6">
          <div className="card border-0 shadow-sm rounded-4 p-3 bg-white border-start border-4 border-warning">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="small text-secondary fw-semibold">Pending Approvals</span>
              <div className="p-2 rounded bg-warning bg-opacity-10 text-warning">
                <AlertCircle size={20} />
              </div>
            </div>
            <h3 className="fw-bold text-dark mb-0">{pendingOrders.length}</h3>
            <span className="small text-warning fw-semibold">Awaiting manual clearance</span>
          </div>
        </div>
      </div>

      {/* Pending Access Notice Banner (if any) */}
      {pendingOrders.length > 0 && (
        <div className="alert alert-warning border-0 rounded-4 shadow-sm p-4 mb-5 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <div className="d-flex align-items-center gap-3">
            <div className="p-3 rounded-circle bg-warning bg-opacity-25 text-dark">
              <AlertCircle size={28} />
            </div>
            <div>
              <h5 className="fw-bold text-dark mb-1">
                {pendingOrders.length} Student Bank Wire Transfer(s) Require Approval
              </h5>
              <p className="mb-0 text-secondary small">
                Students have submitted external bank payment references. Verify wire receipts and activate access.
              </p>
            </div>
          </div>
          <button
            className="btn btn-dark px-4 py-2 rounded-pill fw-bold text-nowrap"
            onClick={() => setAdminTab('grant-access')}
          >
            Review & Grant Access <ArrowRight size={16} className="ms-1" />
          </button>
        </div>
      )}

      {/* Recent Quiz Attempts & Activity */}
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
            <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
              <h5 className="fw-bold text-dark m-0 d-flex align-items-center gap-2">
                <ClipboardList className="text-danger" size={20} /> Latest Student Quiz Attempts
              </h5>
              <button
                className="btn btn-sm btn-link text-danger text-decoration-none fw-semibold"
                onClick={() => setAdminTab('quiz-attempts')}
              >
                View All Attempts
              </button>
            </div>

            <div className="table-responsive">
              <table className="table table-hover align-middle small mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Candidate</th>
                    <th>Module / Quiz</th>
                    <th>Score</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentAttempts.map(att => (
                    <tr key={att.id}>
                      <td>
                        <strong className="text-dark d-block">{att.studentName}</strong>
                        <span className="text-muted small">{att.studentEmail}</span>
                      </td>
                      <td>
                        <span className="d-block text-dark fw-semibold">{att.courseTitle}</span>
                        <span className="text-secondary small">{att.quizTitle}</span>
                      </td>
                      <td>
                        <strong className="fs-6">{att.scorePercent}%</strong>
                      </td>
                      <td>
                        <span className={`badge ${att.passed ? 'bg-success' : 'bg-danger'} px-2 py-1`}>
                          {att.passed ? 'PASSED' : 'FAILED'}
                        </span>
                      </td>
                      <td className="text-muted">{att.date}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-trinity px-2 py-1"
                          onClick={() => {
                            if (onViewAttempt) onViewAttempt(att);
                          }}
                        >
                          Breakdown
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Links & Summary */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
            <h6 className="fw-bold text-dark mb-3">Quick Navigation</h6>
            <div className="d-flex flex-column gap-2">
              <button
                className="btn btn-light text-start p-3 rounded-3 d-flex align-items-center justify-content-between"
                onClick={() => setAdminTab('modules')}
              >
                <div>
                  <strong className="text-dark d-block">Manage Part-66 Modules</strong>
                  <span className="text-muted small">Update books, notes & question banks</span>
                </div>
                <ArrowRight size={16} className="text-secondary" />
              </button>

              <button
                className="btn btn-light text-start p-3 rounded-3 d-flex align-items-center justify-content-between"
                onClick={() => setAdminTab('courses')}
              >
                <div>
                  <strong className="text-dark d-block">Manage Part-145 Courses</strong>
                  <span className="text-muted small">Human Factors, FTS, EWIS syllabi</span>
                </div>
                <ArrowRight size={16} className="text-secondary" />
              </button>

              <button
                className="btn btn-light text-start p-3 rounded-3 d-flex align-items-center justify-content-between"
                onClick={() => setAdminTab('grant-access')}
              >
                <div>
                  <strong className="text-dark d-block">Grant Student Access</strong>
                  <span className="text-muted small">Manage enrollment permissions</span>
                </div>
                <ArrowRight size={16} className="text-secondary" />
              </button>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-4 p-4 text-white" style={{ background: 'linear-gradient(135deg, #2E334D 0%, #161A28 100%)' }}>
            <h6 className="fw-bold text-warning mb-2">Total Settled Tuition</h6>
            <h2 className="fw-bold mb-2">${totalRevenue.toFixed(2)}</h2>
            <p className="small text-secondary mb-0">
              Direct external wire payments manually reconciled through registrar audit logs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
