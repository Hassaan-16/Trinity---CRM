import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { UserCheck, Shield, Globe, ChevronUp, ChevronDown } from 'lucide-react';

export const QuickRoleSwitch = () => {
  const { currentRole, switchRole, currentUser } = useApp();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className="position-fixed shadow-lg"
      style={{
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        background: '#1E2235',
        border: '1px solid rgba(197, 160, 89, 0.4)',
        borderRadius: '16px',
        padding: collapsed ? '8px 12px' : '12px 16px',
        color: '#FFFFFF',
        fontSize: '0.82rem',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div className="d-flex align-items-center justify-content-between gap-3 mb-1">
        <div className="d-flex align-items-center gap-1 fw-bold text-warning">
          <span>🚀 Vercel Demo Switcher</span>
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="btn btn-link text-secondary p-0 text-decoration-none"
        >
          {collapsed ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {!collapsed && (
        <>
          <div className="text-secondary small mb-2">
            Active: <span className="text-white fw-semibold">{currentUser?.name}</span> ({currentRole.toUpperCase()})
          </div>

          <div className="d-flex gap-1">
            <button
              onClick={() => switchRole('student')}
              className={`btn btn-sm ${currentRole === 'student' ? 'btn-warning text-dark fw-bold' : 'btn-outline-light'} px-2 py-1 rounded-pill`}
              style={{ fontSize: '0.75rem' }}
            >
              <UserCheck size={13} className="me-1" /> Student
            </button>
            <button
              onClick={() => switchRole('admin')}
              className={`btn btn-sm ${currentRole === 'admin' ? 'btn-danger fw-bold' : 'btn-outline-light'} px-2 py-1 rounded-pill`}
              style={{ fontSize: '0.75rem' }}
            >
              <Shield size={13} className="me-1" /> Admin
            </button>
            <button
              onClick={() => switchRole('guest')}
              className={`btn btn-sm ${currentRole === 'guest' ? 'btn-info text-dark fw-bold' : 'btn-outline-light'} px-2 py-1 rounded-pill`}
              style={{ fontSize: '0.75rem' }}
            >
              <Globe size={13} className="me-1" /> Landing
            </button>
          </div>
        </>
      )}
    </div>
  );
};
