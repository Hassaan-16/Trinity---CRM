import React from 'react';
import { useApp } from '../../context/AppContext';
import { Plane, Award, BookOpen, CheckCircle, ArrowRight, Users, Shield, Compass, ChevronRight } from 'lucide-react';

export const LandingPage = ({ onOpenAuth, onSelectCourse }) => {
  const { coursesAndModules, setPublicPage, switchRole } = useApp();

  const part145Courses = coursesAndModules.filter(c => c.category === 'course').slice(0, 6);
  const part66Modules = coursesAndModules.filter(c => c.category === 'module').slice(0, 6);

  return (
    <div>
      {/* Hero Banner */}
      <section className="hero-banner py-5 py-lg-6 text-white position-relative">
        <div className="container py-lg-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-white bg-opacity-10 border border-warning border-opacity-50 text-warning mb-3 small fw-bold">
                <Shield size={16} /> EASA PART-66 & PART-145/M TRAINING SPECIALISTS
              </div>
              <h1 className="display-4 fw-bold font-heading mb-3" style={{ letterSpacing: '1px', lineHeight: 1.15 }}>
                Master Aeronautical Engineering Excellence
              </h1>
              <p className="lead text-light text-opacity-90 mb-4" style={{ maxWidth: '620px' }}>
                Join the premier academy for aspiring Aircraft Maintenance Engineers (AME). Gain full mastery over EASA Part-66 Basic Licences (Category A, B1, B2) and airline continuation qualifications with authentic question banks, technical literature, and expert mentoring.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button
                  className="btn btn-trinity-gold btn-lg px-4 py-3 rounded-pill fw-bold shadow"
                  onClick={onOpenAuth}
                >
                  Start Learning Today <ArrowRight size={18} className="ms-1" />
                </button>
                <button
                  className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill"
                  onClick={() => switchRole('student')}
                >
                  Explore Student Portal
                </button>
              </div>

              {/* Key Trust Badges */}
              <div className="row g-3 mt-4 pt-3 border-top border-white border-opacity-10">
                <div className="col-4">
                  <h3 className="fw-bold mb-0 text-warning">17+</h3>
                  <span className="small text-light text-opacity-75">Part-66 Modules</span>
                </div>
                <div className="col-4">
                  <h3 className="fw-bold mb-0 text-warning">98.4%</h3>
                  <span className="small text-light text-opacity-75">Exam Pass Rate</span>
                </div>
                <div className="col-4">
                  <h3 className="fw-bold mb-0 text-warning">2,400+</h3>
                  <span className="small text-light text-opacity-75">Trained Engineers</span>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 rounded-4 overflow-hidden shadow-lg" style={{ background: '#1A1E2E', border: '1px solid rgba(197, 160, 89, 0.3)' }}>
                <div className="p-4 text-white">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-danger text-uppercase px-3 py-2">Official Syllabus</span>
                    <span className="text-warning small fw-bold">EASA EC 1321/2014</span>
                  </div>
                  <h4 className="fw-bold mb-2">Comprehensive Aviation Suite</h4>
                  <p className="text-secondary small mb-4">
                    Our platform includes dynamic question banks with randomized drawing, interactive PDF textbooks, modular revision notes, and manual external payment approval for worldwide students.
                  </p>

                  <div className="d-flex flex-column gap-3 mb-4">
                    <div className="d-flex align-items-center gap-3 p-2 rounded bg-white bg-opacity-5">
                      <div className="p-2 rounded bg-danger bg-opacity-25 text-warning">
                        <BookOpen size={20} />
                      </div>
                      <div>
                        <div className="fw-bold small text-white">Books & Technical Handbooks</div>
                        <span className="text-secondary small">Official ATA chapter and EASA documentation</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-3 p-2 rounded bg-white bg-opacity-5">
                      <div className="p-2 rounded bg-danger bg-opacity-25 text-warning">
                        <Award size={20} />
                      </div>
                      <div>
                        <div className="fw-bold small text-white">Randomized Question Banks</div>
                        <span className="text-secondary small">75% passing mark simulation with countdown timers</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-3 p-2 rounded bg-white bg-opacity-5">
                      <div className="p-2 rounded bg-danger bg-opacity-25 text-warning">
                        <Users size={20} />
                      </div>
                      <div>
                        <div className="fw-bold small text-white">Direct Registrar Verification</div>
                        <span className="text-secondary small">Manual approval after external bank wire payment</span>
                      </div>
                    </div>
                  </div>

                  <button
                    className="btn btn-trinity-primary w-100 py-2 rounded-pill fw-bold"
                    onClick={onOpenAuth}
                  >
                    Create Free Student Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured EASA PART-145 & PART-M COURSES */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="section-headline mb-2">
              EASA <span>PART-145 & PART-M</span> COURSES
            </h2>
            <p className="text-secondary" style={{ maxWidth: '650px', margin: '0 auto' }}>
              Mandatory initial and recurrent training programs for maintenance organizations, continuing airworthiness management organizations (CAMO), and certifying staff.
            </p>
          </div>

          <div className="row g-4">
            {part145Courses.map(course => (
              <div key={course.id} className="col-lg-4 col-md-6">
                <div className="aviation-card p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="card-icon-wrapper">
                      <Plane size={28} />
                    </div>
                    <span className="badge bg-warning text-dark fw-bold px-2 py-1">{course.code}</span>
                  </div>

                  <h3 className="card-title">{course.title}</h3>
                  <p className="card-description flex-grow-1">{course.description}</p>

                  <div className="d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25 mt-auto">
                    <div>
                      <span className="text-secondary small d-block">Tuition Fee</span>
                      <strong className="text-warning fs-5">${course.price.toFixed(2)}</strong>
                    </div>
                    <button
                      className="btn btn-sm btn-trinity-gold rounded-pill px-3 py-2 fw-bold"
                      onClick={() => {
                        switchRole('student');
                      }}
                    >
                      View Syllabus <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured EASA PART 66 - MODULES */}
      <section className="py-5 bg-light border-top border-bottom">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="section-headline mb-2">
              EASA <span>PART 66 - MODULES</span>
            </h2>
            <p className="text-secondary" style={{ maxWidth: '650px', margin: '0 auto' }}>
              Individual exam preparation modules fulfilling the theoretical knowledge requirements for European Aircraft Maintenance Licences.
            </p>
          </div>

          <div className="row g-4">
            {part66Modules.map(module => (
              <div key={module.id} className="col-lg-4 col-md-6">
                <div className="aviation-card p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="card-icon-wrapper">
                      <Compass size={28} />
                    </div>
                    <span className="badge bg-light text-dark fw-bold px-2 py-1">{module.code}</span>
                  </div>

                  <h3 className="card-title">{module.title}</h3>
                  <p className="card-description flex-grow-1">{module.description}</p>

                  <div className="d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25 mt-auto">
                    <div>
                      <span className="text-secondary small d-block">Module Fee</span>
                      <strong className="text-warning fs-5">${module.price.toFixed(2)}</strong>
                    </div>
                    <button
                      className="btn btn-sm btn-trinity-primary rounded-pill px-3 py-2 fw-bold"
                      onClick={() => {
                        switchRole('student');
                      }}
                    >
                      Study Module <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Payment & Enrollment Works */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="section-headline mb-2">
              SIMPLE <span>ENROLLMENT</span> WORKFLOW
            </h2>
            <p className="text-secondary">How our manual approval external bank transfer process protects your student account</p>
          </div>

          <div className="row g-4 text-center">
            <div className="col-md-3">
              <div className="p-4 rounded-4 bg-light border h-100">
                <div className="d-inline-flex p-3 rounded-circle bg-danger bg-opacity-10 text-danger mb-3">
                  <span className="fs-3 fw-bold">1</span>
                </div>
                <h5 className="fw-bold">Select Module</h5>
                <p className="text-secondary small">Choose from our EASA Part-66 modules or Part-145 recurrent safety certifications.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-4 rounded-4 bg-light border h-100">
                <div className="d-inline-flex p-3 rounded-circle bg-warning bg-opacity-10 text-warning mb-3">
                  <span className="fs-3 fw-bold">2</span>
                </div>
                <h5 className="fw-bold">Bank Wire Transfer</h5>
                <p className="text-secondary small">Transfer course fees directly using the official Academy IBAN/SWIFT and your student reference ID.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-4 rounded-4 bg-light border h-100">
                <div className="d-inline-flex p-3 rounded-circle bg-info bg-opacity-10 text-info mb-3">
                  <span className="fs-3 fw-bold">3</span>
                </div>
                <h5 className="fw-bold">Submit Reference</h5>
                <p className="text-secondary small">Input your transaction confirmation in the portal. Your order is queued for Admin Approval.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-4 rounded-4 bg-light border h-100">
                <div className="d-inline-flex p-3 rounded-circle bg-success bg-opacity-10 text-success mb-3">
                  <span className="fs-3 fw-bold">4</span>
                </div>
                <h5 className="fw-bold">Instant Activation</h5>
                <p className="text-secondary small">Admin verifies funds and grants access. Books, notes, and randomized quizzes unlock immediately!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="py-5 text-white text-center" style={{ background: 'linear-gradient(90deg, #590B0D 0%, #7B1113 50%, #9B1B20 100%)' }}>
        <div className="container py-3">
          <h2 className="fw-bold font-heading mb-3">Ready to Achieve Your Aircraft Maintenance Licence?</h2>
          <p className="lead mb-4 text-light text-opacity-90">
            Join thousands of aviation technicians studying with Trinity Aviation Academy worldwide.
          </p>
          <button
            className="btn btn-trinity-gold btn-lg px-5 py-3 rounded-pill fw-bold shadow"
            onClick={onOpenAuth}
          >
            Create Your Account Now
          </button>
        </div>
      </section>
    </div>
  );
};
