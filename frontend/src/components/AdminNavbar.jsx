import React from 'react';
import { useApp } from '../context/AppContext';
import {
  LayoutDashboard,
  BookOpen,
  FolderKanban,
  ClipboardList,
  UserCheck,
  Plane,
  LogOut,
  ExternalLink,
  Shield
} from 'lucide-react';

export const AdminNavbar = () => {
  const {
    adminTab,
    setAdminTab,
    currentUser,
    switchRole,
    logout,
    orders
  } = useApp();

  const pendingApprovalsCount = orders.filter(o => o.status === 'Pending Approval').length;

  return (
    <div className="admin-sidebar p-3 d-flex flex-column h-100" style={{ width: '280px', flexShrink: 0 }}>
      {/* Header with Admin Email (Matching Screenshot 4) */}
      <div className="mb-4 pb-3 border-bottom border-white border-opacity-10 px-2">
        <div className="d-flex align-items-center gap-2 mb-1">
          <div className="p-1 rounded bg-warning text-dark">
            <Shield size={18} />
          </div>
          <h4 className="fw-bold m-0 text-white font-heading">Admin</h4>
        </div>
        <div className="small text-white-50 font-monospace text-truncate" title={currentUser?.email || 'admin@trinityaviation.com'}>
          {currentUser?.email || 'admin@trinityaviation.com'}
        </div>
      </div>

      {/* Nav Links */}
      <div className="d-flex flex-column gap-1 flex-grow-1">
        <button
          className={`admin-nav-item border-0 text-start ${adminTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setAdminTab('dashboard')}
        >
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </button>

        <button
          className={`admin-nav-item border-0 text-start ${adminTab === 'modules' ? 'active' : ''}`}
          onClick={() => setAdminTab('modules')}
        >
          <FolderKanban size={18} />
          <span>Manage Modules</span>
        </button>

        <button
          className={`admin-nav-item border-0 text-start ${adminTab === 'courses' ? 'active' : ''}`}
          onClick={() => setAdminTab('courses')}
        >
          <BookOpen size={18} />
          <span>Manage Courses</span>
        </button>

        <button
          className={`admin-nav-item border-0 text-start ${adminTab === 'quiz-attempts' ? 'active' : ''}`}
          onClick={() => setAdminTab('quiz-attempts')}
        >
          <ClipboardList size={18} />
          <span>Quiz Attempts</span>
        </button>

        <button
          className={`admin-nav-item border-0 text-start d-flex justify-content-between align-items-center ${adminTab === 'grant-access' ? 'active' : ''}`}
          onClick={() => setAdminTab('grant-access')}
        >
          <div className="d-flex align-items-center gap-2">
            <UserCheck size={18} />
            <span>Grant Access</span>
          </div>
          {pendingApprovalsCount > 0 && (
            <span className="badge bg-warning text-dark rounded-pill px-2 py-1 small">
              {pendingApprovalsCount}
            </span>
          )}
        </button>
      </div>

      {/* Footer Controls */}
      <div className="pt-3 border-top border-white border-opacity-10 d-flex flex-column gap-2">
        <button
          className="btn btn-outline-light btn-sm d-flex align-items-center justify-content-center gap-2 rounded-3 text-white"
          onClick={() => switchRole('student')}
        >
          <ExternalLink size={15} /> View Student Portal
        </button>

        <button
          className="btn btn-link text-white-50 btn-sm text-decoration-none d-flex align-items-center justify-content-center gap-2"
          onClick={logout}
        >
          <LogOut size={15} /> Logout Admin
        </button>
      </div>
    </div>
  );
};
