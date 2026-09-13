import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { AdminNavbar } from './components/AdminNavbar';
import { Footer } from './components/Footer';
import { QuickRoleSwitch } from './components/QuickRoleSwitch';
import { AuthModal } from './pages/public/AuthModal';
import { QuizAttemptModal } from './components/QuizAttemptModal';

// Public Pages
import { LandingPage } from './pages/public/LandingPage';
import { AboutPage } from './pages/public/AboutPage';
import { ServicesPage } from './pages/public/ServicesPage';
import { BlogsPage } from './pages/public/BlogsPage';

// Student Pages
import { StudentDashboard } from './pages/student/StudentDashboard';
import { CourseDetailView } from './pages/student/CourseDetailView';
import { QuizEngine } from './pages/student/QuizEngine';
import { MyOrders } from './pages/student/MyOrders';
import { MyAccount } from './pages/student/MyAccount';
import { ContactPage } from './pages/student/ContactPage';

// Admin Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { ManageModules } from './pages/admin/ManageModules';
import { ManageCourses } from './pages/admin/ManageCourses';
import { QuizAttempts } from './pages/admin/QuizAttempts';
import { GrantAccess } from './pages/admin/GrantAccess';

const MainAppContent = () => {
  const {
    currentRole,
    publicPage,
    studentTab,
    adminTab,
    activeCourseId,
    activeQuizSession
  } = useApp();

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [selectedAuditAttempt, setSelectedAuditAttempt] = useState(null);

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Top Navbar */}
      <Navbar onOpenAuth={() => setShowAuthModal(true)} />

      {/* Main Viewport */}
      <main className="flex-grow-1">
        {currentRole === 'admin' ? (
          // ADMIN PORTAL LAYOUT (Sidebar + Content Area)
          <div className="d-flex flex-column flex-md-row min-vh-100">
            <AdminNavbar />
            <div className="flex-grow-1 bg-light overflow-x-hidden">
              {adminTab === 'dashboard' && (
                <AdminDashboard onViewAttempt={(att) => setSelectedAuditAttempt(att)} />
              )}
              {adminTab === 'modules' && <ManageModules />}
              {adminTab === 'courses' && <ManageCourses />}
              {adminTab === 'quiz-attempts' && <QuizAttempts />}
              {adminTab === 'grant-access' && <GrantAccess />}
            </div>
          </div>
        ) : currentRole === 'student' ? (
          // STUDENT PORTAL LAYOUT
          <div>
            {activeQuizSession ? (
              <QuizEngine />
            ) : activeCourseId ? (
              <CourseDetailView />
            ) : (
              <>
                {studentTab === 'dashboard' && <StudentDashboard />}
                {studentTab === 'my-account' && <MyAccount />}
                {studentTab === 'my-orders' && <MyOrders />}
                {studentTab === 'contact' && <ContactPage />}
              </>
            )}
          </div>
        ) : (
          // PUBLIC LANDING & INFORMATIONAL PAGES
          <div>
            {publicPage === 'home' && (
              <LandingPage onOpenAuth={() => setShowAuthModal(true)} />
            )}
            {publicPage === 'about' && (
              <AboutPage onOpenAuth={() => setShowAuthModal(true)} />
            )}
            {publicPage === 'services' && (
              <ServicesPage onOpenAuth={() => setShowAuthModal(true)} />
            )}
            {publicPage === 'blogs' && <BlogsPage />}
          </div>
        )}
      </main>

      {/* Footer on Student & Public views */}
      {currentRole !== 'admin' && !activeQuizSession && <Footer />}

      {/* Floating 1-Click Role Switcher for easy Vercel demo testing */}
      <QuickRoleSwitch />

      {/* Modals */}
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
      {selectedAuditAttempt && (
        <QuizAttemptModal
          attempt={selectedAuditAttempt}
          onClose={() => setSelectedAuditAttempt(null)}
        />
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}
