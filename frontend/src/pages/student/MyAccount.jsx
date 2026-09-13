import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { User, Mail, Shield, Award, Phone, CheckCircle2, Save } from 'lucide-react';

export const MyAccount = () => {
  const { currentUser, coursesAndModules, updateUserProfile } = useApp();
  const [name, setName] = useState(currentUser?.name || 'Alex Vance');
  const [phone, setPhone] = useState(currentUser?.phone || '+44 7700 900077');
  const [birthCountry, setBirthCountry] = useState(currentUser?.birthCountry || 'United Kingdom');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const enrolledList = coursesAndModules.filter(c => currentUser?.enrolledCourses?.includes(c.id));

  const handleSave = (e) => {
    e.preventDefault();
    if (currentUser?.email) {
      updateUserProfile(currentUser.email, {
        name,
        phone,
        birthCountry
      });
    }
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="py-4 pb-5">
      <div className="container" style={{ maxWidth: '850px' }}>
        <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom">
          <div>
            <h2 className="fw-bold font-heading text-dark m-0 d-flex align-items-center gap-2">
              <User className="text-danger" size={28} /> My Account
            </h2>
            <span className="text-secondary small">
              Manage your student profile, contact information, and account details
            </span>
          </div>
        </div>

        {savedSuccess && (
          <div className="alert alert-success d-flex align-items-center gap-2 shadow-sm mb-4">
            <CheckCircle2 size={18} /> Profile details saved successfully!
          </div>
        )}

        <div className="row g-4">
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
              <h5 className="fw-bold text-dark mb-3">Student Credentials</h5>
              <form onSubmit={handleSave}>
                <div className="mb-3">
                  <label className="form-label small fw-semibold text-dark">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold text-dark">Registered Email Address</label>
                  <input
                    type="email"
                    disabled
                    className="form-control bg-light"
                    value={currentUser?.email || ''}
                  />
                  <span className="text-muted small">Email acts as your primary examination key.</span>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold text-dark">Place of Birth Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. United Kingdom, Germany, UAE..."
                    value={birthCountry}
                    onChange={(e) => setBirthCountry(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label small fw-semibold text-dark">Phone / WhatsApp</label>
                  <input
                    type="text"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-trinity-primary px-4 py-2 rounded-3 fw-bold d-flex align-items-center gap-2">
                  <Save size={16} /> Save Profile Changes
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
              <h5 className="fw-bold text-dark mb-3">Enrolled Certifications</h5>
              {enrolledList.length > 0 ? (
                <div className="d-flex flex-column gap-2">
                  {enrolledList.map(item => (
                    <div key={item.id} className="p-2 rounded bg-light border small d-flex justify-content-between align-items-center">
                      <span className="fw-semibold text-dark">{item.title}</span>
                      <span className="badge bg-success">Active</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted small mb-0">No active subjects yet.</p>
              )}
            </div>

            <div className="card border-0 shadow-sm rounded-4 p-4 text-white" style={{ background: 'linear-gradient(135deg, #1A1E2E 0%, #2E334D 100%)' }}>
              <div className="d-flex align-items-center gap-2 mb-2 text-warning">
                <Shield size={20} />
                <h6 className="fw-bold m-0">Student Verification Status</h6>
              </div>
              <p className="small text-secondary mb-3">
                Your profile is verified with Trinity Registrar. Bank wire payment approvals are linked to your registered email address.
              </p>
              <div className="p-2 rounded bg-white bg-opacity-10 small font-monospace text-light">
                STATUS: VERIFIED CANDIDATE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
