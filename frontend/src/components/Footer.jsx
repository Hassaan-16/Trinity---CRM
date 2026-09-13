import React from 'react';
import { useApp } from '../context/AppContext';
import { Plane, ShieldCheck, Mail, Phone, MapPin, RefreshCw } from 'lucide-react';

export const Footer = () => {
  const { resetAllData, bankDetails } = useApp();

  return (
    <footer className="mt-auto py-5 bg-dark text-white border-top border-secondary-subtle" style={{ background: '#0F121C' }}>
      <div className="container">
        <div className="row g-4">
          {/* Col 1: Brand & EASA Info */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="p-2 rounded-3" style={{ background: 'rgba(123, 17, 19, 0.4)' }}>
                <Plane className="text-warning" size={24} />
              </div>
              <div>
                <h5 className="m-0 fw-bold font-heading text-white">TRINITY AVIATION ACADEMY</h5>
                <span className="small text-warning">EASA Training & Examination Excellence</span>
              </div>
            </div>
            <p className="text-secondary small leading-relaxed">
              Dedicated to qualifying the next generation of Aircraft Maintenance Engineers (AME) under EASA Part-66 Basic Licensing regulations and airline recurrent specifications (Part-145 / Part-M).
            </p>
            <div className="d-flex align-items-center gap-2 text-warning small">
              <ShieldCheck size={16} /> Certified Syllabus Alignment with EASA Reg (EU) 1321/2014
            </div>
          </div>

          {/* Col 2: Regulatory Training */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold text-white mb-3 text-uppercase font-heading" style={{ letterSpacing: '1px' }}>Curriculum</h6>
            <ul className="list-unstyled small text-secondary">
              <li className="mb-2">EASA Part-66 Modules 1-17</li>
              <li className="mb-2">Human Factors (Part-145)</li>
              <li className="mb-2">Fuel Tank Safety (Phase 2)</li>
              <li className="mb-2">EWIS Target Groups 1-8</li>
              <li className="mb-2">Continuing Airworthiness (Part-M)</li>
              <li className="mb-2">Safety Management Systems (SMS)</li>
            </ul>
          </div>

          {/* Col 3: Payment & Admissions Notice */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold text-white mb-3 text-uppercase font-heading" style={{ letterSpacing: '1px' }}>Admissions & Fees</h6>
            <p className="text-secondary small mb-2">
              Course tuition fees are settled via direct external bank transfer. Once payment is initiated, account access is reviewed and activated by our Registrar.
            </p>
            <div className="p-2 rounded bg-black bg-opacity-40 border border-secondary border-opacity-25 small text-secondary">
              <div><strong className="text-white">Bank:</strong> {bankDetails.bankName}</div>
              <div><strong className="text-white">Account:</strong> {bankDetails.accountTitle}</div>
            </div>
          </div>

          {/* Col 4: Contact & Demo Reset */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold text-white mb-3 text-uppercase font-heading" style={{ letterSpacing: '1px' }}>Global Headquarters</h6>
            <div className="small text-secondary mb-2 d-flex align-items-start gap-2">
              <MapPin size={16} className="text-warning mt-1 flex-shrink-0" />
              <span>Aviation Boulevard, London Heathrow / Dubai Aviation City</span>
            </div>
            <div className="small text-secondary mb-2 d-flex align-items-center gap-2">
              <Mail size={16} className="text-warning flex-shrink-0" />
              <span>admissions@trinityaviation.com</span>
            </div>
            <div className="small text-secondary mb-3 d-flex align-items-center gap-2">
              <Phone size={16} className="text-warning flex-shrink-0" />
              <span>+44 (0) 20 7946 0912</span>
            </div>

            <button
              onClick={() => {
                if (window.confirm('Reset all demo data back to default sample state?')) {
                  resetAllData();
                }
              }}
              className="btn btn-outline-secondary btn-sm w-100 text-secondary"
            >
              <RefreshCw size={14} className="me-1" /> Reset Demo State
            </button>
          </div>
        </div>

        <hr className="my-4 border-secondary border-opacity-25" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small text-secondary">
          <div>© {new Date().getFullYear()} Trinity Aviation Academy. All rights reserved.</div>
          <div className="d-flex gap-3 mt-2 mt-md-0">
            <span>Terms of Training</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>EASA Compliance Manual</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
