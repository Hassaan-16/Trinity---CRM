import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Building, Copy, Check, AlertCircle, ShieldAlert, ArrowRight, FileCheck } from 'lucide-react';

export const PaymentModal = ({ course, onClose, onSuccess }) => {
  const { bankDetails, currentUser, buyCourse, setStudentTab } = useApp();

  const [copiedField, setCopiedField] = useState(null);
  const [wireRef, setWireRef] = useState('');
  const [remittingBank, setRemittingBank] = useState('');
  const [proofNote, setProofNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedOrder, setSubmittedOrder] = useState(null);

  const paymentReferenceCode = `TRIN-${currentUser?.name ? currentUser.name.substring(0, 3).toUpperCase() : 'STU'}-${Math.floor(1000 + Math.random() * 9000)}`;

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const refString = wireRef.trim() || paymentReferenceCode;
    const notes = `Remitted via ${remittingBank || 'Direct Wire'}. Reference: ${refString}. Notes: ${proofNote || 'Slip on file.'}`;

    setTimeout(() => {
      const order = buyCourse(course.id, refString, notes);
      setSubmittedOrder(order);
      setIsSubmitting(false);
      if (onSuccess) onSuccess(order);
    }, 600);
  };

  if (!course) return null;

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: 1050 }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          {/* Header */}
          <div className="modal-header text-white px-4 py-3" style={{ background: 'linear-gradient(90deg, #590B0D 0%, #7B1113 100%)' }}>
            <div>
              <span className="badge bg-warning text-dark me-2 font-heading">{course.code || 'COURSE'}</span>
              <h5 className="modal-title d-inline-block fw-bold text-white mb-0">Course Enrollment & Bank Payment</h5>
            </div>
            <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close"></button>
          </div>

          <div className="modal-body p-4 bg-light">
            {!submittedOrder ? (
              <>
                {/* Course Summary Bar */}
                <div className="card border-0 shadow-sm rounded-3 p-3 mb-4 bg-white">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2">
                    <div>
                      <h5 className="fw-bold mb-1 text-dark">{course.title}</h5>
                      <span className="text-secondary small">{course.subCategory} • Duration: {course.duration}</span>
                    </div>
                    <div className="text-md-end">
                      <span className="text-secondary small d-block">Course Tuition Fee</span>
                      <span className="fs-3 fw-bold text-danger" style={{ color: '#7B1113' }}>€{course.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Important Manual Approval Notice */}
                <div className="alert alert-warning border-warning border-opacity-50 d-flex gap-3 align-items-start mb-4 shadow-sm">
                  <AlertCircle size={24} className="text-warning flex-shrink-0 mt-1" />
                  <div className="small">
                    <strong className="text-dark d-block mb-1">External Payment Notice:</strong>
                    {bankDetails.note}
                    <div className="mt-1 text-muted">
                      Please include your unique reference code <strong>{paymentReferenceCode}</strong> in your bank transfer narration so our registrar can match your deposit.
                    </div>
                  </div>
                </div>

                {/* Bank Account Details Card */}
                <div className="card border-0 shadow-sm rounded-3 p-3 mb-4 bg-white">
                  <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                    <Building className="text-danger" size={20} />
                    <h6 className="fw-bold m-0 text-dark">Official Academy Remittance Details</h6>
                  </div>

                  <div className="row g-3 small">
                    <div className="col-md-6">
                      <div className="p-2 rounded bg-light border">
                        <span className="text-secondary d-block">Beneficiary Bank</span>
                        <div className="d-flex justify-content-between align-items-center">
                          <strong className="text-dark">{bankDetails.bankName}</strong>
                          <button
                            onClick={() => copyToClipboard(bankDetails.bankName, 'bank')}
                            className="btn btn-sm btn-link text-secondary p-0"
                          >
                            {copiedField === 'bank' ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="p-2 rounded bg-light border">
                        <span className="text-secondary d-block">Account Name / Title</span>
                        <div className="d-flex justify-content-between align-items-center">
                          <strong className="text-dark">{bankDetails.accountTitle}</strong>
                          <button
                            onClick={() => copyToClipboard(bankDetails.accountTitle, 'title')}
                            className="btn btn-sm btn-link text-secondary p-0"
                          >
                            {copiedField === 'title' ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="p-2 rounded bg-light border">
                        <span className="text-secondary d-block">IBAN / Account Number</span>
                        <div className="d-flex justify-content-between align-items-center">
                          <strong className="text-dark font-monospace">{bankDetails.iban}</strong>
                          <button
                            onClick={() => copyToClipboard(bankDetails.iban, 'iban')}
                            className="btn btn-sm btn-link text-secondary p-0"
                          >
                            {copiedField === 'iban' ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="p-2 rounded bg-light border">
                        <span className="text-secondary d-block">SWIFT / BIC Code</span>
                        <div className="d-flex justify-content-between align-items-center">
                          <strong className="text-dark font-monospace">{bankDetails.swiftBic}</strong>
                          <button
                            onClick={() => copyToClipboard(bankDetails.swiftBic, 'swift')}
                            className="btn btn-sm btn-link text-secondary p-0"
                          >
                            {copiedField === 'swift' ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="p-2 rounded bg-warning bg-opacity-10 border border-warning">
                        <span className="text-secondary d-block">Your Unique Wire Reference (Mandatory)</span>
                        <div className="d-flex justify-content-between align-items-center">
                          <strong className="text-danger fs-6 font-monospace">{paymentReferenceCode}</strong>
                          <button
                            onClick={() => copyToClipboard(paymentReferenceCode, 'ref')}
                            className="btn btn-sm btn-link text-danger p-0"
                          >
                            {copiedField === 'ref' ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Proof Submission Form */}
                <form onSubmit={handleSubmitPayment}>
                  <h6 className="fw-bold text-dark mb-2">Submit Payment Confirmation</h6>
                  <p className="text-secondary small mb-3">
                    After completing the transfer via your online banking app or wire counter, enter the transaction reference below to submit your request for Admin Approval:
                  </p>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">Bank Wire / Transaction Ref Number</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="e.g. TRX-998822 or Wire ID"
                        value={wireRef}
                        onChange={(e) => setWireRef(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">Remitting Bank Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Barclays, Emirates NBD, Chase"
                        value={remittingBank}
                        onChange={(e) => setRemittingBank(e.target.value)}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label small fw-semibold text-dark">Additional Notes / Proof details (Optional)</label>
                      <textarea
                        rows="2"
                        className="form-control"
                        placeholder="e.g., Transfer submitted at 11:30 AM via online banking slip."
                        value={proofNote}
                        onChange={(e) => setProofNote(e.target.value)}
                      ></textarea>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end gap-2 pt-2 border-top">
                    <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
                      Cancel
                    </button>
                    <button type="submit" disabled={isSubmitting} className="btn btn-trinity-primary px-4">
                      {isSubmitting ? 'Submitting...' : 'I Have Transferred - Submit For Approval'}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              // Order Success State
              <div className="text-center py-4">
                <div className="d-inline-flex p-3 rounded-circle bg-success bg-opacity-10 text-success mb-3">
                  <FileCheck size={48} />
                </div>
                <h4 className="fw-bold text-dark mb-2">Order Submitted Successfully!</h4>
                <p className="text-secondary mb-3">
                  Order <strong>#{submittedOrder.id}</strong> has been logged with status{' '}
                  <span className="badge bg-warning text-dark">Pending Approval</span>.
                </p>

                <div className="card border-0 bg-white shadow-sm p-3 mx-auto text-start mb-4" style={{ maxWidth: '480px' }}>
                  <div className="small mb-2"><strong>Course:</strong> {course.title}</div>
                  <div className="small mb-2"><strong>Amount:</strong> €{course.price.toFixed(2)}</div>
                  <div className="small mb-2"><strong>Wire Reference:</strong> {submittedOrder.paymentRef}</div>
                  <div className="small text-muted">
                    Your request is now visible in the Admin's <strong>Grant Access</strong> panel. Once cleared, access will be granted instantly!
                  </div>
                </div>

                <div className="d-flex justify-content-center gap-3">
                  <button
                    className="btn btn-trinity-primary px-4"
                    onClick={() => {
                      onClose();
                      setStudentTab('my-orders');
                    }}
                  >
                    View in My Orders <ArrowRight size={16} className="ms-1" />
                  </button>
                  <button className="btn btn-outline-secondary" onClick={onClose}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
