import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, Clock } from 'lucide-react';

export const ContactPage = () => {
  const { bankDetails } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [subject, setSubject] = useState('Payment Confirmation Verification');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setMessage('');
    }, 4000);
  };

  return (
    <div className="py-4 pb-5">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom">
          <div>
            <h2 className="fw-bold font-heading text-dark m-0 d-flex align-items-center gap-2">
              <MessageSquare className="text-danger" size={28} /> Student & Admissions Contact
            </h2>
            <span className="text-secondary small">
              Reach the Trinity Aviation Academy registrar, bursar, and examination faculty
            </span>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
              <h5 className="fw-bold text-dark mb-3">Send Us a Direct Message</h5>

              {submitted && (
                <div className="alert alert-success d-flex align-items-center gap-2 shadow-sm mb-3">
                  <CheckCircle2 size={18} />
                  Your message has been sent to the Admissions Desk! We will reply within 4 hours.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label small fw-semibold text-dark">Subject / Department</label>
                  <select
                    className="form-select"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    <option value="Payment Confirmation Verification">Payment Confirmation & Bank Wire Verification</option>
                    <option value="Course Syllabus Guidance">Course Syllabus Guidance & Exam Prep</option>
                    <option value="Part-66 Licence Assessment">Part-66 Licence Assessment</option>
                    <option value="Corporate Fleet Training">Corporate Fleet Training Inquiry</option>
                    <option value="Technical Support">Platform / Technical Support</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold text-dark">Your Message / Wire Details</label>
                  <textarea
                    required
                    rows="5"
                    className="form-control"
                    placeholder="Enter your inquiry, order number, or bank wire reference code here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-trinity-primary px-4 py-2 rounded-3 fw-bold d-flex align-items-center gap-2">
                  <Send size={16} /> Submit Direct Inquiry
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
              <h5 className="fw-bold text-dark mb-3">Direct Contact Channels</h5>
              <div className="d-flex flex-column gap-3 small">
                <div className="d-flex align-items-start gap-3">
                  <div className="p-2 rounded bg-danger bg-opacity-10 text-danger">
                    <Mail size={18} />
                  </div>
                  <div>
                    <strong className="text-dark d-block">Admissions Desk</strong>
                    <span className="text-secondary">admissions@trinityaviation.com</span>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="p-2 rounded bg-success bg-opacity-10 text-success">
                    <Phone size={18} />
                  </div>
                  <div>
                    <strong className="text-dark d-block">Admissions & WhatsApp Desk</strong>
                    <span className="text-secondary">+44 (0) 20 7946 0912</span>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="p-2 rounded bg-warning bg-opacity-10 text-warning">
                    <Clock size={18} />
                  </div>
                  <div>
                    <strong className="text-dark d-block">Registrar Hours</strong>
                    <span className="text-secondary">Mon – Sat: 08:00 to 20:00 (GMT/UTC+4)</span>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="p-2 rounded bg-info bg-opacity-10 text-info">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <strong className="text-dark d-block">Campus Locations</strong>
                    <span className="text-secondary">London Heathrow Gateway • Dubai Aviation City</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm rounded-4 p-4 bg-light border">
              <h6 className="fw-bold text-dark mb-2">Wire Payment Verification</h6>
              <p className="text-secondary small mb-0">
                If you have completed a bank transfer, you may also upload the transaction slip reference directly in the <strong>My Orders</strong> section or email it with your order ID.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
