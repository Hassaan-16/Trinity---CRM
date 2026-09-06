import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Plane, Shield, User, Lock, Mail, ArrowRight, UserCheck } from 'lucide-react';

export const AuthModal = ({ onClose }) => {
  const { login, switchRole, addUser } = useApp();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [licenseGoal, setLicenseGoal] = useState('EASA B1.1 (Aeroplanes Turbine)');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    if (email.toLowerCase().includes('admin')) {
      login(email, 'admin');
    } else {
      login(email, 'student');
    }
    onClose();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!email || !name) return;

    addUser({
      name,
      email,
      licenseGoal
    });
    login(email, 'student');
    onClose();
  };

  const handleQuickDemo = (role) => {
    switchRole(role);
    onClose();
  };

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: 1055 }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 rounded-4 shadow-lg overflow-hidden">
          {/* Header */}
          <div className="modal-header text-white px-4 py-3" style={{ background: 'linear-gradient(90deg, #590B0D 0%, #7B1113 100%)' }}>
            <div className="d-flex align-items-center gap-2">
              <div className="p-2 rounded bg-white bg-opacity-15">
                <Plane size={20} className="text-warning" />
              </div>
              <div>
                <h5 className="modal-title fw-bold text-white mb-0">Trinity Aviation Academy</h5>
                <span className="small text-warning">Student & Faculty Portal Access</span>
              </div>
            </div>
            <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close"></button>
          </div>

          <div className="modal-body p-4 bg-light">
            {/* Quick Demo Access Bar */}
            <div className="card border-0 p-3 bg-white shadow-sm rounded-3 mb-4 border-start border-4 border-warning">
              <span className="small text-muted fw-bold d-block mb-2">⚡ 1-CLICK DEMO ACCESS (FOR REVIEW & VERCEL)</span>
              <div className="d-flex gap-2">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger flex-grow-1 fw-bold d-flex align-items-center justify-content-center gap-1"
                  onClick={() => handleQuickDemo('student')}
                >
                  <User size={15} /> Demo Student
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-dark flex-grow-1 fw-bold d-flex align-items-center justify-content-center gap-1"
                  onClick={() => handleQuickDemo('admin')}
                >
                  <Shield size={15} /> Demo Admin
                </button>
              </div>
            </div>

            <div className="text-center position-relative my-3">
              <hr />
              <span className="position-absolute top-50 start-50 translate-middle bg-light px-3 small text-muted">
                OR {isRegister ? 'REGISTER WITH EMAIL' : 'LOG IN WITH CREDENTIALS'}
              </span>
            </div>

            {!isRegister ? (
              // Login Form
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                  <label className="form-label small fw-semibold text-dark">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0">
                      <Mail size={16} className="text-secondary" />
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="student@trinityaviation.com"
                      className="form-control border-start-0"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold text-dark">Password</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0">
                      <Lock size={16} className="text-secondary" />
                    </span>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      className="form-control border-start-0"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-trinity-primary w-100 py-2 rounded-3 fw-bold mb-3">
                  Sign In <ArrowRight size={16} className="ms-1" />
                </button>

                <div className="text-center small text-secondary">
                  Don't have an account yet?{' '}
                  <button
                    type="button"
                    className="btn btn-link p-0 text-danger fw-semibold text-decoration-none"
                    onClick={() => setIsRegister(true)}
                  >
                    Register as Student
                  </button>
                </div>
              </form>
            ) : (
              // Registration Form
              <form onSubmit={handleRegisterSubmit}>
                <div className="mb-2">
                  <label className="form-label small fw-semibold text-dark">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label small fw-semibold text-dark">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label small fw-semibold text-dark">Target EASA Category</label>
                  <select
                    className="form-select"
                    value={licenseGoal}
                    onChange={(e) => setLicenseGoal(e.target.value)}
                  >
                    <option value="EASA B1.1 (Aeroplanes Turbine)">EASA B1.1 (Aeroplanes Turbine)</option>
                    <option value="EASA B1.2 (Aeroplanes Piston)">EASA B1.2 (Aeroplanes Piston)</option>
                    <option value="EASA B2 (Avionics)">EASA B2 (Avionics)</option>
                    <option value="EASA Category A (Line Maintenance)">EASA Category A (Line Maintenance)</option>
                    <option value="EASA Part-145 Company Authorization">EASA Part-145 Company Authorization</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold text-dark">Password</label>
                  <input
                    type="password"
                    required
                    placeholder="Create a strong password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-trinity-gold w-100 py-2 rounded-3 fw-bold mb-3">
                  Create Student Account
                </button>

                <div className="text-center small text-secondary">
                  Already registered?{' '}
                  <button
                    type="button"
                    className="btn btn-link p-0 text-danger fw-semibold text-decoration-none"
                    onClick={() => setIsRegister(false)}
                  >
                    Sign In
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
