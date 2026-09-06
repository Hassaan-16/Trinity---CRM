import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Users,
  Search,
  CheckCircle2,
  Plus,
  Shield,
  Trash2,
  Plane,
  Folder,
  Check,
  AlertCircle
} from 'lucide-react';

export const GrantAccess = () => {
  const {
    coursesAndModules,
    users,
    orders,
    grantAccess,
    revokeAccess,
    addUser
  } = useApp();

  const [filterType, setFilterType] = useState('courses'); // 'courses' | 'modules' | 'all'
  const [selectedCourseId, setSelectedCourseId] = useState(() => {
    // Default to first course
    const firstCourse = coursesAndModules.find(c => c.category === 'course');
    return firstCourse ? firstCourse.id : coursesAndModules[0]?.id;
  });

  const [searchNoAccess, setSearchNoAccess] = useState('');
  const [searchHasAccess, setSearchHasAccess] = useState('');
  const [selectedToGrant, setSelectedToGrant] = useState([]); // array of student emails
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [newUserForm, setNewUserForm] = useState({
    name: '',
    email: '',
    phone: '',
    licenseGoal: 'EASA B1.1 (Aeroplanes Turbine)'
  });
  const [actionNotice, setActionNotice] = useState(null);

  // Filtered course list
  const filteredCourses = coursesAndModules.filter(c => {
    if (filterType === 'courses') return c.category === 'course';
    if (filterType === 'modules') return c.category === 'module';
    return true;
  });

  const activeCourse = coursesAndModules.find(c => c.id === selectedCourseId) || filteredCourses[0];

  // All student users
  const studentUsers = users.filter(u => u.role === 'student');

  // Partition students into "Has Access" and "No Access" for activeCourse
  const studentsWithAccess = studentUsers.filter(u =>
    u.enrolledCourses?.includes(activeCourse?.id) &&
    (u.name.toLowerCase().includes(searchHasAccess.toLowerCase()) ||
     u.email.toLowerCase().includes(searchHasAccess.toLowerCase()))
  );

  const studentsWithoutAccess = studentUsers.filter(u =>
    !u.enrolledCourses?.includes(activeCourse?.id) &&
    (u.name.toLowerCase().includes(searchNoAccess.toLowerCase()) ||
     u.email.toLowerCase().includes(searchNoAccess.toLowerCase()))
  );

  // Check if a student without access has an active pending wire order for this course
  const getPendingOrderForStudent = (email) => {
    return orders.find(
      ord =>
        ord.studentEmail.toLowerCase() === email.toLowerCase() &&
        ord.courseIds.includes(activeCourse?.id) &&
        ord.status === 'Pending Approval'
    );
  };

  const handleToggleSelectToGrant = (email) => {
    setSelectedToGrant(prev =>
      prev.includes(email) ? prev.filter(e => e !== email) : [...prev, email]
    );
  };

  const handleGrantAccessBatch = () => {
    if (!activeCourse || selectedToGrant.length === 0) return;

    selectedToGrant.forEach(email => {
      grantAccess(activeCourse.id, email);
    });

    setActionNotice(`Granted access to ${selectedToGrant.length} student(s) for ${activeCourse.title}!`);
    setSelectedToGrant([]);
    setTimeout(() => setActionNotice(null), 3500);
  };

  const handleRevoke = (email, name) => {
    if (window.confirm(`Revoke access for ${name} from ${activeCourse.title}?`)) {
      revokeAccess(activeCourse.id, email);
      setActionNotice(`Revoked access for ${name}.`);
      setTimeout(() => setActionNotice(null), 3000);
    }
  };

  const handleAddUserSubmit = (e) => {
    e.preventDefault();
    if (!newUserForm.name || !newUserForm.email) return;

    addUser({
      ...newUserForm,
      initialCourse: activeCourse?.id
    });

    setIsAddingUser(false);
    setNewUserForm({ name: '', email: '', phone: '', licenseGoal: 'EASA B1.1' });
    setActionNotice(`New student ${newUserForm.name} registered and enrolled in ${activeCourse.title}!`);
    setTimeout(() => setActionNotice(null), 3500);
  };

  return (
    <div className="p-4 p-lg-5">
      {/* Top Header (Matching Screenshot 4) */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-2">
        <div>
          <h2 className="fw-bold font-heading text-dark m-0" style={{ color: '#7B1113' }}>
            Grant Access
          </h2>
          <p className="text-secondary small mb-0">
            Select a course or module, then grant access to users who have paid
          </p>
        </div>

        <div>
          <button
            className="btn btn-danger px-4 py-2 fw-bold d-flex align-items-center gap-2"
            style={{ backgroundColor: '#7B1113', borderColor: '#7B1113' }}
            onClick={() => setIsAddingUser(true)}
          >
            <Plus size={18} /> + Add User
          </button>
        </div>
      </div>

      <hr className="my-3 text-secondary" />

      {actionNotice && (
        <div className="alert alert-success d-flex align-items-center gap-2 shadow-sm mb-4">
          <CheckCircle2 size={18} /> {actionNotice}
        </div>
      )}

      {/* Selected Subject Banner */}
      <div className="mb-4">
        <h5 className="fw-bold text-dark mb-0">
          Current Selection:{' '}
          <span className="text-danger" style={{ color: '#7B1113' }}>
            {activeCourse?.title}
          </span>{' '}
          <span className="badge bg-secondary ms-2 small font-monospace">{activeCourse?.code}</span>
        </h5>
      </div>

      {/* 3-Column Layout (Matching Screenshot 4) */}
      <div className="row g-4">
        {/* COLUMN 1: Select Course / Module */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 p-3 bg-white h-100">
            <h6 className="fw-bold text-dark mb-3">Select Course / Module</h6>

            {/* Filter Dropdown */}
            <div className="mb-3">
              <label className="form-label small fw-semibold text-secondary mb-1">Show</label>
              <select
                className="form-select small"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="courses">Courses only</option>
                <option value="modules">Modules only</option>
                <option value="all">All (Courses & Modules)</option>
              </select>
            </div>

            {/* Quick Select Dropdown */}
            <div className="mb-3">
              <label className="form-label small fw-semibold text-secondary mb-1">Quick select</label>
              <select
                className="form-select small"
                value={activeCourse?.id || ''}
                onChange={(e) => setSelectedCourseId(e.target.value)}
              >
                {filteredCourses.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.title} ({item.code})
                  </option>
                ))}
              </select>
            </div>

            {/* Scrollable List of Courses/Modules (Matching Screenshot 4) */}
            <div
              className="d-flex flex-column gap-2 overflow-y-auto pe-1"
              style={{ maxHeight: '520px' }}
            >
              {filteredCourses.map(item => {
                const isSelected = activeCourse?.id === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setSelectedCourseId(item.id);
                      setSelectedToGrant([]);
                    }}
                    className={`p-3 rounded-3 border d-flex align-items-center justify-content-between cursor-pointer transition-all ${
                      isSelected
                        ? 'border-2 border-danger bg-danger bg-opacity-10 shadow-sm'
                        : 'bg-light border-light-subtle'
                    }`}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div className="p-2 rounded bg-white text-danger shadow-sm">
                        {item.category === 'course' ? <Plane size={20} /> : <Folder size={20} />}
                      </div>
                      <div>
                        <strong className="text-dark small d-block mb-1">{item.title}</strong>
                        <span className="text-muted small font-monospace">{item.code}</span>
                      </div>
                    </div>

                    <span className="badge bg-light text-secondary border small text-capitalize">
                      {item.category}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* COLUMN 2: No Access (Select to grant) - Matching Screenshot 4 */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 p-3 bg-white h-100 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="fw-bold text-dark m-0">No Access (Select to grant)</h6>
              <span className="badge bg-light text-secondary border">{studentsWithoutAccess.length}</span>
            </div>

            {/* Search Input */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Search by name or email..."
                value={searchNoAccess}
                onChange={(e) => setSearchNoAccess(e.target.value)}
              />
            </div>

            {/* Checkbox List of Students */}
            <div
              className="d-flex flex-column gap-2 overflow-y-auto mb-3 flex-grow-1"
              style={{ maxHeight: '440px' }}
            >
              {studentsWithoutAccess.length > 0 ? (
                studentsWithoutAccess.map(stu => {
                  const isChecked = selectedToGrant.includes(stu.email);
                  const pendingOrder = getPendingOrderForStudent(stu.email);

                  return (
                    <div
                      key={stu.id}
                      onClick={() => handleToggleSelectToGrant(stu.email)}
                      className={`p-2 rounded border d-flex align-items-center gap-2 cursor-pointer small ${
                        isChecked
                          ? 'border-danger bg-danger bg-opacity-10'
                          : pendingOrder
                          ? 'border-warning bg-warning bg-opacity-10'
                          : 'bg-light'
                      }`}
                      style={{ cursor: 'pointer' }}
                    >
                      <input
                        type="checkbox"
                        className="form-check-input mt-0"
                        checked={isChecked}
                        onChange={() => {}} // Handled by div click
                      />
                      <div className="flex-grow-1 text-truncate">
                        <strong className="text-dark d-block text-truncate">{stu.name}</strong>
                        <span className="text-muted font-monospace small text-truncate d-block">
                          {stu.email}
                        </span>
                        {pendingOrder && (
                          <div className="badge bg-warning text-dark font-monospace mt-1">
                            Pending Wire Ref: {pendingOrder.paymentRef}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-5 text-muted small">
                  No students in queue without access.
                </div>
              )}
            </div>

            {/* Grant Access Button (Matching Screenshot 4) */}
            <button
              className="btn btn-danger w-100 py-2 fw-bold text-white shadow-sm mt-auto"
              style={{
                backgroundColor: selectedToGrant.length > 0 ? '#7B1113' : '#b06163',
                borderColor: '#7B1113'
              }}
              disabled={selectedToGrant.length === 0}
              onClick={handleGrantAccessBatch}
            >
              Grant Access ({selectedToGrant.length} Selected)
            </button>
          </div>
        </div>

        {/* COLUMN 3: Has Access - Matching Screenshot 4 */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 p-3 bg-white h-100 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="fw-bold text-dark m-0">Has Access</h6>
              <span className="badge bg-success bg-opacity-10 text-success border border-success-subtle">
                {studentsWithAccess.length}
              </span>
            </div>

            {/* Search Input */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Search by name or email..."
                value={searchHasAccess}
                onChange={(e) => setSearchHasAccess(e.target.value)}
              />
            </div>

            {/* List of Students with Access */}
            <div
              className="d-flex flex-column gap-2 overflow-y-auto flex-grow-1"
              style={{ maxHeight: '490px' }}
            >
              {studentsWithAccess.length > 0 ? (
                studentsWithAccess.map(stu => (
                  <div
                    key={stu.id}
                    className="p-2 rounded border bg-light d-flex justify-content-between align-items-center small"
                  >
                    <div className="text-truncate me-2">
                      <strong className="text-dark d-block text-truncate">{stu.name}</strong>
                      <span className="text-muted font-monospace small text-truncate d-block">
                        {stu.email}
                      </span>
                    </div>

                    <button
                      className="btn btn-sm btn-outline-danger p-1"
                      title="Revoke access"
                      onClick={() => handleRevoke(stu.email, stu.name)}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center py-5 text-muted small">
                  No students currently have access to this subject.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Add User Modal */}
      {isAddingUser && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.75)', zIndex: 1060 }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 rounded-4 shadow-lg overflow-hidden">
              <div className="modal-header text-white px-4 py-3" style={{ background: 'linear-gradient(90deg, #590B0D 0%, #7B1113 100%)' }}>
                <h5 className="modal-title fw-bold text-white mb-0">+ Register & Enroll Student</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setIsAddingUser(false)}></button>
              </div>
              <form onSubmit={handleAddUserSubmit}>
                <div className="modal-body p-4 bg-light">
                  <div className="mb-3">
                    <label className="form-label small fw-semibold text-dark">Student Full Name</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="e.g. Captain Marcus Vance"
                      value={newUserForm.name}
                      onChange={(e) => setNewUserForm({ ...newUserForm, name: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label small fw-semibold text-dark">Email Address</label>
                    <input
                      type="email"
                      required
                      className="form-control"
                      placeholder="e.g. marcus@aviation.com"
                      value={newUserForm.email}
                      onChange={(e) => setNewUserForm({ ...newUserForm, email: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label small fw-semibold text-dark">Target EASA Category</label>
                    <select
                      className="form-select"
                      value={newUserForm.licenseGoal}
                      onChange={(e) => setNewUserForm({ ...newUserForm, licenseGoal: e.target.value })}
                    >
                      <option value="EASA B1.1 (Aeroplanes Turbine)">EASA B1.1 (Aeroplanes Turbine)</option>
                      <option value="EASA B2 (Avionics)">EASA B2 (Avionics)</option>
                      <option value="EASA Category A">EASA Category A</option>
                    </select>
                  </div>

                  <div className="alert alert-info small mb-0">
                    Will be granted immediate access to: <strong>{activeCourse?.title}</strong>
                  </div>
                </div>
                <div className="modal-footer bg-white">
                  <button type="button" className="btn btn-secondary" onClick={() => setIsAddingUser(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-trinity-primary px-4">
                    Register & Grant Access
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
