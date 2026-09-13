import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Users,
  Plane,
  Zap,
  Wrench,
  CheckSquare,
  ClipboardCheck,
  ShieldCheck,
  Cpu,
  Navigation,
  Calculator,
  Atom,
  Monitor,
  Layers,
  Hammer,
  Compass,
  UserCheck,
  Shield,
  BookOpen,
  ArrowRight,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { PaymentModal } from '../../components/PaymentModal';

// Icon resolver helper
const getCourseIcon = (iconName) => {
  const map = {
    Users: <Users size={32} />,
    Plane: <Plane size={32} />,
    Zap: <Zap size={32} />,
    Wrench: <Wrench size={32} />,
    CheckSquare: <CheckSquare size={32} />,
    ClipboardCheck: <ClipboardCheck size={32} />,
    ShieldCheck: <ShieldCheck size={32} />,
    Cpu: <Cpu size={32} />,
    Navigation: <Navigation size={32} />,
    Calculator: <Calculator size={32} />,
    Atom: <Atom size={32} />,
    Monitor: <Monitor size={32} />,
    Layers: <Layers size={32} />,
    Hammer: <Hammer size={32} />,
    Compass: <Compass size={32} />,
    UserCheck: <UserCheck size={32} />,
    Shield: <Shield size={32} />
  };
  return map[iconName] || <Plane size={32} />;
};

export const StudentDashboard = () => {
  const {
    currentUser,
    coursesAndModules,
    isEnrolled,
    isPendingApproval,
    setActiveCourseId
  } = useApp();

  const [selectedCourseForPayment, setSelectedCourseForPayment] = useState(null);

  // Separate courses vs modules
  const part145Courses = coursesAndModules.filter(item => item.category === 'course');
  const part66Modules = coursesAndModules.filter(item => item.category === 'module');

  // Currently enrolled list
  const enrolledItems = coursesAndModules.filter(item => isEnrolled(item.id));

  // Compute progress metrics
  const totalAvailable = coursesAndModules.length;
  const enrolledCount = enrolledItems.length;
  const completionPercent = totalAvailable > 0 ? Math.round((enrolledCount / totalAvailable) * 100) : 0;

  return (
    <div className="py-4 pb-5">
      <div className="container">
        {/* Welcome & Overall Completion Banner */}
        <div className="card border-0 rounded-4 shadow-sm p-4 mb-5 bg-white border-start border-5" style={{ borderColor: '#7B1113' }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span className="badge bg-warning text-dark px-3 py-1 text-uppercase fw-bold mb-2">
                Aviation Student Portal
              </span>
              <h2 className="fw-bold text-dark font-heading mb-1">
                Welcome back, {currentUser?.name || 'Engineer'}
              </h2>
              <p className="text-secondary mb-0">
                Target Certification: <strong className="text-dark">{currentUser?.licenseGoal || 'EASA Part-66 B1.1'}</strong> • Student ID: <span className="font-monospace text-muted">{currentUser?.email}</span>
              </p>
            </div>

            <div className="col-lg-5">
              <div className="p-3 rounded-3 bg-light border">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span className="small fw-bold text-dark">Overall Curriculum Enrollment</span>
                  <span className="fw-bold text-danger fs-6">{completionPercent}%</span>
                </div>
                <div className="progress mb-2" style={{ height: '8px' }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${Math.max(completionPercent, 8)}%`,
                      backgroundColor: '#7B1113'
                    }}
                  ></div>
                </div>
                <div className="d-flex justify-content-between small text-secondary">
                  <span>Enrolled: <strong>{enrolledCount}</strong> subjects</span>
                  <span>Available: <strong>{totalAvailable}</strong> subjects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 1: CURRENTLY ENROLLED COURSES/MODULES */}
        <div className="mb-5">
          <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
            <h4 className="fw-bold text-dark font-heading m-0 d-flex align-items-center gap-2">
              <BookOpen className="text-danger" size={24} /> Currently Enrolled Subjects ({enrolledItems.length})
            </h4>
          </div>

          {enrolledItems.length > 0 ? (
            <div className="row g-4">
              {enrolledItems.map(item => (
                <div key={item.id} className="col-lg-4 col-md-6">
                  <div className="card border-0 rounded-4 shadow-sm h-100 bg-white p-4 border-top border-4 border-success d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="badge bg-success bg-opacity-10 text-success fw-bold px-2 py-1">
                        Active Access
                      </span>
                      <span className="text-muted small font-monospace">{item.code}</span>
                    </div>

                    <h5 className="fw-bold text-dark mb-2">{item.title}</h5>
                    <p className="text-secondary small mb-3 flex-grow-1">{item.description}</p>

                    <div className="p-2 rounded bg-light mb-3 small d-flex justify-content-between text-secondary">
                      <span>Books: <strong>{item.books?.length || 0}</strong></span>
                      <span>Notes: <strong>{item.notes?.length || 0}</strong></span>
                      <span>Quizzes: <strong>{item.quizzes?.length || 0}</strong></span>
                    </div>

                    <button
                      className="btn btn-trinity-primary w-100 py-2 rounded-3 fw-bold d-flex align-items-center justify-content-center gap-2 mt-auto"
                      onClick={() => setActiveCourseId(item.id)}
                    >
                      Continue Studying <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 rounded-4 bg-white border text-center text-muted">
              <AlertCircle size={36} className="text-warning mb-2" />
              <h5>No subjects currently enrolled</h5>
              <p className="small mb-3">Browse our EASA Part-145 courses and Part-66 modules below to start your study program.</p>
            </div>
          )}
        </div>

        {/* SECTION 2: EASA PART-145 & PART-M COURSES (Matching screenshot 1) */}
        <div className="mb-5 text-center">
          <h2 className="section-headline mb-4">
            EASA <span>PART-145 & PART-M</span> COURSES
          </h2>

          <div className="row g-4 text-start">
            {part145Courses.map(course => {
              const enrolled = isEnrolled(course.id);
              const pending = isPendingApproval(course.id);

              return (
                <div key={course.id} className="col-lg-4 col-md-6">
                  <div className="aviation-card p-4">
                    {/* Top row: icon and code */}
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="card-icon-wrapper">
                        {getCourseIcon(course.icon)}
                      </div>
                      {enrolled ? (
                        <span className="badge bg-success px-2 py-1">Enrolled</span>
                      ) : pending ? (
                        <span className="badge bg-warning text-dark px-2 py-1">Approval Pending</span>
                      ) : (
                        <span className="badge bg-light text-dark px-2 py-1">€{course.price}</span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="card-title">{course.title}</h3>
                    <p className="card-description flex-grow-1">{course.description}</p>

                    {/* Action Bar */}
                    <div className="pt-3 border-top border-white border-opacity-10 mt-auto">
                      {enrolled ? (
                        <button
                          className="btn btn-outline-light w-100 rounded-pill py-2 fw-bold"
                          onClick={() => setActiveCourseId(course.id)}
                        >
                          Open Course Material
                        </button>
                      ) : pending ? (
                        <button
                          className="btn btn-outline-warning w-100 rounded-pill py-2 disabled"
                          disabled
                        >
                          Payment Under Review
                        </button>
                      ) : (
                        <button
                          className="btn btn-trinity-gold w-100 rounded-pill py-2 fw-bold"
                          onClick={() => setSelectedCourseForPayment(course)}
                        >
                          Enroll Now • €{course.price.toFixed(2)}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 3: EASA PART 66 - MODULES (Matching screenshot 1) */}
        <div className="mb-5 text-center">
          <h2 className="section-headline mb-4">
            EASA <span>PART 66 -</span> MODULES
          </h2>

          <div className="row g-4 text-start">
            {part66Modules.map(module => {
              const enrolled = isEnrolled(module.id);
              const pending = isPendingApproval(module.id);

              return (
                <div key={module.id} className="col-lg-4 col-md-6">
                  <div className="aviation-card p-4">
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="card-icon-wrapper">
                        {getCourseIcon(module.icon)}
                      </div>
                      {enrolled ? (
                        <span className="badge bg-success px-2 py-1">Enrolled</span>
                      ) : pending ? (
                        <span className="badge bg-warning text-dark px-2 py-1">Approval Pending</span>
                      ) : (
                        <span className="badge bg-light text-dark px-2 py-1">€{module.price}</span>
                      )}
                    </div>

                    <h3 className="card-title">{module.title}</h3>
                    <p className="card-description flex-grow-1">{module.description}</p>

                    <div className="pt-3 border-top border-white border-opacity-10 mt-auto">
                      {enrolled ? (
                        <button
                          className="btn btn-outline-light w-100 rounded-pill py-2 fw-bold"
                          onClick={() => setActiveCourseId(module.id)}
                        >
                          Open Module Material
                        </button>
                      ) : pending ? (
                        <button
                          className="btn btn-outline-warning w-100 rounded-pill py-2 disabled"
                          disabled
                        >
                          Payment Under Review
                        </button>
                      ) : (
                        <button
                          className="btn btn-trinity-gold w-100 rounded-pill py-2 fw-bold"
                          onClick={() => setSelectedCourseForPayment(module)}
                        >
                          Enroll Now • €{module.price.toFixed(2)}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Payment & Bank Wire Modal */}
      {selectedCourseForPayment && (
        <PaymentModal
          course={selectedCourseForPayment}
          onClose={() => setSelectedCourseForPayment(null)}
          onSuccess={() => {}}
        />
      )}
    </div>
  );
};
