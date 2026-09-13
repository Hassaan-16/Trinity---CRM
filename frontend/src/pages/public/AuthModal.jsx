import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Plane, Shield, User, Lock, Mail, ArrowRight, UserCheck } from 'lucide-react';

export const AuthModal = ({ onClose }) => {
  const { login, switchRole, addUser, googleLogin } = useApp();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthCountry, setBirthCountry] = useState('United Kingdom');

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
      birthCountry
    });
    login(email, 'student');
    onClose();
  };

  const handleGoogleAuth = () => {
    googleLogin();
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

            {/* Google OAuth Button */}
            <button
              type="button"
              className="btn btn-outline-secondary w-100 py-2 rounded-3 fw-bold mb-3 d-flex align-items-center justify-content-center gap-2 bg-white shadow-sm border"
              onClick={handleGoogleAuth}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

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
                  <label className="form-label small fw-semibold text-dark">Place of Birth Country</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. United Kingdom, Germany, UAE..."
                    className="form-control"
                    value={birthCountry}
                    onChange={(e) => setBirthCountry(e.target.value)}
                  />
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
