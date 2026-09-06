import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Plane, User, Shield, LogOut, BookOpen, ShoppingBag, Phone, Home, FileText, Briefcase, Info } from 'lucide-react';

export const Navbar = ({ onOpenAuth }) => {
  const {
    currentRole,
    currentUser,
    publicPage,
    setPublicPage,
    studentTab,
    setStudentTab,
    logout,
    switchRole,
    setActiveCourseId,
    setActiveQuizSession
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleStudentNav = (tab) => {
    setStudentTab(tab);
    setActiveCourseId(null);
    setActiveQuizSession(null);
    setMobileMenuOpen(false);
  };

  const handlePublicNav = (page) => {
    setPublicPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg trinity-navbar sticky-top py-2 px-3">
      <div className="container-fluid">
        {/* Brand Logo & Name */}
        <div
          className="navbar-brand d-flex align-items-center gap-2 cursor-pointer text-white me-4"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            if (currentRole === 'admin') {
              // Admin stays in admin
            } else if (currentRole === 'student') {
              handleStudentNav('dashboard');
            } else {
              handlePublicNav('home');
            }
          }}
        >
          {/* Wings Icon Logo */}
          <div
            className="d-flex align-items-center justify-content-center rounded-3 p-2"
            style={{ background: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(197, 160, 89, 0.3)' }}
          >
            <Plane className="text-warning" size={26} style={{ transform: 'rotate(-45deg)' }} />
          </div>
          <div>
            <div className="trinity-brand-title text-white fs-5 fw-bold m-0 lh-1">
              TRINITY
            </div>
            <div className="trinity-brand-sub">AVIATION ACADEMY</div>
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="navbar-toggler border-0 text-white"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>

        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`} id="trinityNavContent">
          {/* Navigation Items based on Role */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-1">
            {currentRole === 'student' ? (
              // STUDENT NAVIGATION (Dashboard, My Account, My Orders, Contact, Logout)
              <>
                <li className="nav-item">
                  <button
                    className={`nav-link nav-link-trinity border-0 bg-transparent ${studentTab === 'dashboard' ? 'active' : ''}`}
                    onClick={() => handleStudentNav('dashboard')}
                  >
                    DASHBOARD
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link nav-link-trinity border-0 bg-transparent ${studentTab === 'my-account' ? 'active' : ''}`}
                    onClick={() => handleStudentNav('my-account')}
                  >
                    MY ACCOUNT
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link nav-link-trinity border-0 bg-transparent ${studentTab === 'my-orders' ? 'active' : ''}`}
                    onClick={() => handleStudentNav('my-orders')}
                  >
                    MY ORDERS
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link nav-link-trinity border-0 bg-transparent ${studentTab === 'contact' ? 'active' : ''}`}
                    onClick={() => handleStudentNav('contact')}
                  >
                    CONTACT
                  </button>
                </li>
                <li className="nav-item ms-lg-2">
                  <button
                    className="nav-link nav-link-trinity border-0 bg-transparent text-danger-emphasis"
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                  >
                    <LogOut size={16} className="me-1" /> LOGOUT
                  </button>
                </li>
              </>
            ) : currentRole === 'admin' ? (
              // ADMIN QUICK NAV
              <>
                <li className="nav-item text-white-50 px-2 small">
                  <Shield size={16} className="text-warning me-1" />
                  Logged as <strong className="text-white">{currentUser?.name || 'Admin'}</strong>
                </li>
                <li className="nav-item ms-2">
                  <button
                    className="btn btn-sm btn-outline-light rounded-pill px-3"
                    onClick={() => switchRole('student')}
                  >
                    Switch to Student View
                  </button>
                </li>
                <li className="nav-item ms-2">
                  <button
                    className="nav-link nav-link-trinity border-0 bg-transparent"
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                  >
                    <LogOut size={16} className="me-1" /> LOGOUT
                  </button>
                </li>
              </>
            ) : (
              // PUBLIC LANDING NAVIGATION (Home, About Us, Services, Blogs, Login/Sign Up)
              <>
                <li className="nav-item">
                  <button
                    className={`nav-link nav-link-trinity border-0 bg-transparent ${publicPage === 'home' ? 'active' : ''}`}
                    onClick={() => handlePublicNav('home')}
                  >
                    HOME
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link nav-link-trinity border-0 bg-transparent ${publicPage === 'about' ? 'active' : ''}`}
                    onClick={() => handlePublicNav('about')}
                  >
                    ABOUT US
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link nav-link-trinity border-0 bg-transparent ${publicPage === 'services' ? 'active' : ''}`}
                    onClick={() => handlePublicNav('services')}
                  >
                    SERVICES
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link nav-link-trinity border-0 bg-transparent ${publicPage === 'blogs' ? 'active' : ''}`}
                    onClick={() => handlePublicNav('blogs')}
                  >
                    BLOGS
                  </button>
                </li>
                <li className="nav-item ms-lg-3">
                  <button
                    className="btn btn-trinity-gold px-4 py-2 rounded-pill shadow-sm"
                    onClick={() => {
                      if (onOpenAuth) onOpenAuth();
                      setMobileMenuOpen(false);
                    }}
                  >
                    LOGIN / SIGN UP
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
