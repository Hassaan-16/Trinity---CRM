import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ShoppingBag, FileText, Download, Award, Eye, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export const MyOrders = () => {
  const { orders, currentUser } = useApp();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [certificateOrder, setCertificateOrder] = useState(null);

  // Filter orders for the current user (or show demo orders if student)
  const studentOrders = orders.filter(
    ord => ord.studentEmail.toLowerCase() === currentUser?.email?.toLowerCase()
  );

  return (
    <div className="py-4 pb-5">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom">
          <div>
            <h2 className="fw-bold font-heading text-dark m-0 d-flex align-items-center gap-2">
              <ShoppingBag className="text-danger" size={28} /> My Orders
            </h2>
            <span className="text-secondary small">
              History of your course purchases and manual approval statuses
            </span>
          </div>
        </div>

        {studentOrders.length > 0 ? (
          <div className="d-flex flex-column gap-4">
            {studentOrders.map(order => {
              const isCompleted = order.status === 'Completed';

              return (
                <div key={order.id} className="order-card">
                  {/* Order Number & Date */}
                  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mb-2">
                    <h3 className="fw-bold font-heading text-dark fs-4 mb-1 mb-sm-0">
                      Order #{order.id}
                    </h3>
                    <span className="text-secondary small">Date: {order.date}</span>
                  </div>

                  {/* Status Pill (matching screenshot 6) */}
                  <div className="mb-3">
                    {isCompleted ? (
                      <span
                        className="badge px-3 py-2 fw-semibold rounded-pill"
                        style={{ backgroundColor: '#D1FAE5', color: '#065F46' }}
                      >
                        Completed
                      </span>
                    ) : (
                      <span
                        className="badge px-3 py-2 fw-semibold rounded-pill"
                        style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}
                      >
                        Pending Admin Approval
                      </span>
                    )}
                  </div>

                  {/* Courses List */}
                  <div className="mb-3">
                    <span className="fw-bold text-dark d-block mb-1">Courses:</span>
                    <div className="d-flex flex-column gap-1">
                      {order.courseNames &&
                        order.courseNames.map((cName, idx) => (
                          <div key={idx} className="text-secondary small">
                            • {cName}
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Total & Price (matching screenshot 6) */}
                  <div className="mb-4">
                    <span className="text-dark fw-bold fs-5">Total: </span>
                    <span className="fs-4 fw-bold" style={{ color: '#7B1113' }}>
                      €{order.total ? order.total.toFixed(2) : '0.00'}
                    </span>
                  </div>

                  {/* Action Buttons (matching screenshot 6: View Details & Download Certificate) */}
                  <div className="d-flex flex-wrap gap-3">
                    <button
                      className="btn px-4 py-2 fw-bold text-white rounded-3 shadow-sm"
                      style={{ backgroundColor: '#7B1113', minWidth: '140px' }}
                      onClick={() => setSelectedOrder(order)}
                    >
                      View Details
                    </button>

                    {isCompleted ? (
                      <button
                        className="btn px-4 py-2 fw-bold rounded-3 shadow-sm"
                        style={{ backgroundColor: '#C5A059', color: '#FFFFFF', minWidth: '170px' }}
                        onClick={() => setCertificateOrder(order)}
                      >
                        Download Certificate
                      </button>
                    ) : (
                      <div className="text-muted small align-self-center fst-italic">
                        <Clock size={14} className="me-1 text-warning" /> Awaiting Registrar bank confirmation
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="card border-0 rounded-4 shadow-sm p-5 text-center bg-white">
            <ShoppingBag size={48} className="text-muted mb-3 mx-auto" />
            <h4 className="fw-bold text-dark mb-2">No Orders Found</h4>
            <p className="text-secondary small mb-4">
              You have not enrolled in any paid courses yet. Return to the Dashboard to select courses.
            </p>
          </div>
        )}

        {/* View Details Modal */}
        {selectedOrder && (
          <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.75)', zIndex: 1050 }} tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content border-0 rounded-4 shadow-lg overflow-hidden">
                <div className="modal-header text-white px-4 py-3" style={{ background: 'linear-gradient(90deg, #590B0D 0%, #7B1113 100%)' }}>
                  <h5 className="modal-title fw-bold text-white mb-0">Order #{selectedOrder.id}</h5>
                  <button type="button" className="btn-close btn-close-white" onClick={() => setSelectedOrder(null)}></button>
                </div>
                <div className="modal-body p-4 bg-light">
                  <div className="card border-0 p-3 bg-white shadow-sm mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-secondary small">Order Date:</span>
                      <strong className="text-dark small">{selectedOrder.date}</strong>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-secondary small">Payment Status:</span>
                      <span className={`badge ${selectedOrder.status === 'Completed' ? 'bg-success' : 'bg-warning text-dark'}`}>
                        {selectedOrder.status}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-secondary small">Wire / Payment Ref:</span>
                      <strong className="text-dark small font-monospace">{selectedOrder.paymentRef || 'N/A'}</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span className="text-secondary small">Total Settled:</span>
                      <strong className="text-danger fs-5">€{selectedOrder.total?.toFixed(2)}</strong>
                    </div>
                  </div>

                  <h6 className="fw-bold text-dark mb-2">Enrolled Modules</h6>
                  <div className="card border-0 p-3 bg-white shadow-sm mb-3">
                    {selectedOrder.courseNames?.map((c, i) => (
                      <div key={i} className="small text-secondary py-1 border-bottom border-light">
                        ✓ {c}
                      </div>
                    ))}
                  </div>

                  <div className="alert alert-info border-0 small mb-0">
                    <strong>Payment Verification Note:</strong> {selectedOrder.bankProofNotes || 'Submitted for registrar approval.'}
                  </div>
                </div>
                <div className="modal-footer bg-white">
                  <button className="btn btn-secondary px-4" onClick={() => setSelectedOrder(null)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Simulated Certificate Modal */}
        {certificateOrder && (
          <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 1055 }} tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content border-0 rounded-4 overflow-hidden">
                <div className="modal-body p-5 bg-white text-center position-relative border border-5 border-warning m-2 rounded-3">
                  <div className="mb-3">
                    <span className="fs-1">✈️</span>
                    <h2 className="fw-bold font-heading text-dark mt-2 mb-0" style={{ letterSpacing: '2px' }}>
                      TRINITY AVIATION ACADEMY
                    </h2>
                    <span className="text-warning small fw-bold text-uppercase" style={{ letterSpacing: '3px' }}>
                      CERTIFICATE OF COMPLETION
                    </span>
                  </div>

                  <p className="text-muted small mt-4 mb-2">This is to officially certify that</p>
                  <h3 className="fw-bold text-danger font-heading mb-3" style={{ color: '#7B1113' }}>
                    {certificateOrder.studentName || currentUser?.name || 'Aviation Candidate'}
                  </h3>
                  <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: '560px' }}>
                    has successfully fulfilled the theoretical training criteria and technical curriculum for
                  </p>

                  <div className="p-3 bg-light rounded-3 d-inline-block px-5 border border-warning mb-4">
                    <h5 className="fw-bold text-dark mb-0">
                      {certificateOrder.courseNames ? certificateOrder.courseNames[0] : 'EASA Approved Training'}
                    </h5>
                  </div>

                  <div className="row g-4 mt-3 pt-3 border-top text-secondary small">
                    <div className="col-4">
                      <strong>Date of Issuance:</strong>
                      <div>{certificateOrder.date}</div>
                    </div>
                    <div className="col-4">
                      <strong>Verification Ref:</strong>
                      <div className="font-monospace text-dark">TRIN-CERT-{certificateOrder.id}</div>
                    </div>
                    <div className="col-4">
                      <strong>EASA Compliance:</strong>
                      <div>Part-145 / Part-66 Standard</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-2">
                    <button
                      className="btn btn-trinity-gold px-4 py-2 rounded-pill fw-bold me-2"
                      onClick={() => alert('Certificate PDF generated and downloaded to your device!')}
                    >
                      <Download size={16} className="me-1" /> Download Official PDF
                    </button>
                    <button className="btn btn-outline-secondary px-4 py-2 rounded-pill" onClick={() => setCertificateOrder(null)}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
