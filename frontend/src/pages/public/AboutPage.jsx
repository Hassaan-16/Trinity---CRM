import React from 'react';
import { Award, ShieldCheck, Users, Target, BookOpen, Clock } from 'lucide-react';

export const AboutPage = ({ onOpenAuth }) => {
  return (
    <div className="py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="badge bg-warning text-dark px-3 py-2 text-uppercase fw-bold mb-2">Our Mission & Heritage</span>
          <h1 className="fw-bold font-heading text-dark display-5">About Trinity Aviation Academy</h1>
          <p className="text-secondary lead" style={{ maxWidth: '750px', margin: '0 auto' }}>
            Empowering the global aerospace maintenance workforce with rigorous technical curriculum, regulatory compliance, and practical examination readiness.
          </p>
        </div>

        {/* Story Section */}
        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <h3 className="fw-bold text-dark font-heading mb-3">Setting the Benchmark in Aviation Maintenance Education</h3>
            <p className="text-secondary leading-relaxed mb-3">
              Founded by veteran licensed aircraft maintenance engineers and certified EASA Part-147 instructors, Trinity Aviation Academy bridges the gap between complex regulatory mandates and real-world hangar practicalities.
            </p>
            <p className="text-secondary leading-relaxed mb-4">
              Whether you are preparing for initial licensing exams under EASA Part-66 (Modules 1 through 17) or completing recurrent statutory certifications in Human Factors, EWIS, and Fuel Tank Safety, our modular curriculum provides authoritative training materials.
            </p>

            <div className="row g-3">
              <div className="col-sm-6">
                <div className="p-3 rounded-3 bg-light border">
                  <h4 className="fw-bold text-danger mb-1">100%</h4>
                  <span className="small text-secondary">EASA Part-66 Syllabus Coverage</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="p-3 rounded-3 bg-light border">
                  <h4 className="fw-bold text-warning mb-1">24/7</h4>
                  <span className="small text-secondary">Self-Paced Modular Access</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="p-4 rounded-4 shadow-lg text-white" style={{ background: 'linear-gradient(135deg, #2E334D 0%, #161A28 100%)', border: '1px solid rgba(197, 160, 89, 0.3)' }}>
              <h4 className="fw-bold text-warning mb-3">Core Pillars of Trinity Academy</h4>

              <div className="d-flex gap-3 mb-3">
                <div className="p-2 rounded bg-white bg-opacity-10 text-warning flex-shrink-0 h-100">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h6 className="fw-bold text-white mb-1">Regulatory Fidelity</h6>
                  <p className="small text-secondary mb-0">Every module is audited against the latest EU basic regulations and AMC guidance material.</p>
                </div>
              </div>

              <div className="d-flex gap-3 mb-3">
                <div className="p-2 rounded bg-white bg-opacity-10 text-warning flex-shrink-0 h-100">
                  <Target size={22} />
                </div>
                <div>
                  <h6 className="fw-bold text-white mb-1">Randomized Exam Simulations</h6>
                  <p className="small text-secondary mb-0">Our examination engine dynamically samples questions from extensive banks so candidates never memorize stagnant answers.</p>
                </div>
              </div>

              <div className="d-flex gap-3">
                <div className="p-2 rounded bg-white bg-opacity-10 text-warning flex-shrink-0 h-100">
                  <Users size={22} />
                </div>
                <div>
                  <h6 className="fw-bold text-white mb-1">Verified Accreditation</h6>
                  <p className="small text-secondary mb-0">Manual review of bank wires by registrar ensures personalized verification of all student credentials.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditation Banner */}
        <div className="card border-0 rounded-4 bg-light p-4 p-lg-5 text-center shadow-sm">
          <h3 className="fw-bold text-dark font-heading mb-3">Ready to Begin Your Examination Journey?</h3>
          <p className="text-secondary mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Register your student profile today and gain immediate access to introductory study guides and syllabus roadmaps.
          </p>
          <div>
            <button className="btn btn-trinity-primary px-5 py-3 rounded-pill fw-bold" onClick={onOpenAuth}>
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
