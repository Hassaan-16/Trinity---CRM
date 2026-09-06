import React from 'react';
import { useApp } from '../../context/AppContext';
import { BookOpen, PlaneTakeoff, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export const ServicesPage = ({ onOpenAuth }) => {
  const { servicesData, switchRole } = useApp();

  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-warning text-dark px-3 py-2 text-uppercase fw-bold mb-2">Aviation Training Solutions</span>
          <h1 className="fw-bold font-heading text-dark display-5">Our Professional Services</h1>
          <p className="text-secondary lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
            Comprehensive educational packages tailored for individual students, independent mechanics, and airline maintenance organizations.
          </p>
        </div>

        <div className="row g-4 mb-5">
          {servicesData.map((srv, idx) => (
            <div key={srv.id} className="col-lg-6">
              <div className="card border-0 rounded-4 shadow-sm p-4 h-100 bg-white border-start border-4" style={{ borderColor: idx % 2 === 0 ? '#7B1113' : '#C5A059' }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="p-3 rounded-3" style={{ background: 'rgba(123, 17, 19, 0.08)', color: '#7B1113' }}>
                    <BookOpen size={28} />
                  </div>
                  <h4 className="fw-bold text-dark m-0">{srv.title}</h4>
                </div>
                <p className="text-secondary mb-4 flex-grow-1 leading-relaxed">{srv.description}</p>
                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                  <span className="text-muted small">EASA Compliant Syllabus</span>
                  <button className="btn btn-sm btn-outline-trinity rounded-pill px-3 py-2" onClick={() => switchRole('student')}>
                    Explore Portal <ArrowRight size={14} className="ms-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Training Block */}
        <div className="card border-0 rounded-4 p-5 text-white shadow-lg" style={{ background: 'linear-gradient(135deg, #161A28 0%, #2E334D 100%)' }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span className="badge bg-warning text-dark mb-2 text-uppercase fw-bold">Airline & MRO Fleet Accounts</span>
              <h3 className="fw-bold font-heading mb-3">Custom Corporate Group Enrollments</h3>
              <p className="text-light text-opacity-80 mb-0">
                Are you an airline, CAMO, or Part-145 maintenance organization looking to train groups of technicians in Human Factors, EWIS, or Fuel Tank Safety? Contact our admissions office for customized corporate billing and registrar reporting.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <button className="btn btn-trinity-gold btn-lg px-4 py-3 rounded-pill fw-bold" onClick={onOpenAuth}>
                Contact Corporate Admissions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
