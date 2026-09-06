import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  INITIAL_COURSES_AND_MODULES,
  INITIAL_USERS,
  INITIAL_ORDERS,
  INITIAL_QUIZ_ATTEMPTS,
  BANK_DETAILS,
  BLOGS_DATA,
  SERVICES_DATA
} from '../data/initialData';

const AppContext = createContext();

const STORAGE_KEYS = {
  COURSES: 'trinity_aviation_courses_v1',
  USERS: 'trinity_aviation_users_v1',
  ORDERS: 'trinity_aviation_orders_v1',
  QUIZ_ATTEMPTS: 'trinity_aviation_attempts_v1',
  CURRENT_ROLE: 'trinity_aviation_role_v1',
  CURRENT_USER_EMAIL: 'trinity_aviation_email_v1'
};

export const AppProvider = ({ children }) => {
  // Load or seed initial courses/modules
  const [coursesAndModules, setCoursesAndModules] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COURSES);
      return saved ? JSON.parse(saved) : INITIAL_COURSES_AND_MODULES;
    } catch {
      return INITIAL_COURSES_AND_MODULES;
    }
  });

  // Load or seed initial users
  const [users, setUsers] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.USERS);
      return saved ? JSON.parse(saved) : INITIAL_USERS;
    } catch {
      return INITIAL_USERS;
    }
  });

  // Load or seed initial orders
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ORDERS);
      return saved ? JSON.parse(saved) : INITIAL_ORDERS;
    } catch {
      return INITIAL_ORDERS;
    }
  });

  // Load or seed quiz attempts
  const [quizAttempts, setQuizAttempts] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.QUIZ_ATTEMPTS);
      return saved ? JSON.parse(saved) : INITIAL_QUIZ_ATTEMPTS;
    } catch {
      return INITIAL_QUIZ_ATTEMPTS;
    }
  });

  // Role and active session
  // Default to 'student' so user lands directly on rich dashboard, but can switch to 'admin' or 'landing' anytime!
  const [currentRole, setCurrentRole] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.CURRENT_ROLE) || 'student';
    } catch {
      return 'student';
    }
  });

  const [currentEmail, setCurrentEmail] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.CURRENT_USER_EMAIL) || 'student@trinityaviation.com';
    } catch {
      return 'student@trinityaviation.com';
    }
  });

  // Navigation state
  const [publicPage, setPublicPage] = useState('home'); // 'home' | 'about' | 'services' | 'blogs'
  const [adminTab, setAdminTab] = useState('dashboard'); // 'dashboard' | 'modules' | 'courses' | 'quiz-attempts' | 'grant-access'
  const [studentTab, setStudentTab] = useState('dashboard'); // 'dashboard' | 'my-account' | 'my-orders' | 'contact'
  const [activeCourseId, setActiveCourseId] = useState(null); // When student is viewing a course detail
  const [activeQuizSession, setActiveQuizSession] = useState(null); // When taking a quiz

  // Persist states to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(coursesAndModules));
  }, [coursesAndModules]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.QUIZ_ATTEMPTS, JSON.stringify(quizAttempts));
  }, [quizAttempts]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CURRENT_ROLE, currentRole);
  }, [currentRole]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER_EMAIL, currentEmail);
  }, [currentEmail]);

  // Current user object
  const currentUser = users.find(u => u.email.toLowerCase() === currentEmail.toLowerCase()) || {
    id: 'usr-guest',
    name: 'Guest User',
    email: currentEmail,
    role: currentRole,
    enrolledCourses: []
  };

  // Switch role helper
  const switchRole = (newRole) => {
    setCurrentRole(newRole);
    if (newRole === 'admin') {
      setCurrentEmail('admin@trinityaviation.com');
      setAdminTab('dashboard');
    } else if (newRole === 'student') {
      setCurrentEmail('student@trinityaviation.com');
      setStudentTab('dashboard');
      setActiveCourseId(null);
      setActiveQuizSession(null);
    } else {
      // Landing / public
      setPublicPage('home');
    }
  };

  const login = (email, role) => {
    setCurrentEmail(email);
    setCurrentRole(role);
    if (role === 'admin') {
      setAdminTab('dashboard');
    } else {
      setStudentTab('dashboard');
    }
  };

  const logout = () => {
    setCurrentRole('guest');
    setPublicPage('home');
  };

  // Add / Update / Delete course or module
  const addCourseOrModule = (newItem) => {
    const id = newItem.id || `${newItem.category || 'module'}-${Date.now()}`;
    const formatted = {
      ...newItem,
      id,
      books: newItem.books || [],
      notes: newItem.notes || [],
      quizzes: newItem.quizzes || [],
      status: newItem.status || 'Active'
    };
    setCoursesAndModules(prev => [formatted, ...prev]);
    return formatted;
  };

  const updateCourseOrModule = (id, updatedFields) => {
    setCoursesAndModules(prev =>
      prev.map(item => (item.id === id ? { ...item, ...updatedFields } : item))
    );
  };

  const deleteCourseOrModule = (id) => {
    setCoursesAndModules(prev => prev.filter(item => item.id !== id));
  };

  // Random question picker for Quiz Engine
  // Picks exactly quiz.questionCount (or all if bank is smaller) questions at random from question bank
  const startQuiz = (courseId, quizId) => {
    const course = coursesAndModules.find(c => c.id === courseId);
    if (!course) return null;
    const quiz = course.quizzes.find(q => q.id === quizId);
    if (!quiz) return null;

    const bank = quiz.questions || [];
    const countToPick = Math.min(quiz.questionCount || 5, bank.length);

    // Fisher-Yates shuffle copy of question bank
    const shuffledBank = [...bank].sort(() => 0.5 - Math.random());
    const pickedQuestions = shuffledBank.slice(0, countToPick);

    const session = {
      courseId,
      courseTitle: course.title,
      quizId: quiz.id,
      quizTitle: quiz.title,
      timeLimitMinutes: quiz.timeLimitMinutes || 15,
      passingScore: quiz.passingScore || 75,
      questions: pickedQuestions,
      userAnswers: {}, // { [questionId]: optionIndex }
      startedAt: Date.now(),
      totalQuestions: pickedQuestions.length
    };

    setActiveQuizSession(session);
    return session;
  };

  // Submit Quiz and calculate result
  const submitQuiz = (finalAnswers = null) => {
    if (!activeQuizSession) return null;

    const answers = finalAnswers || activeQuizSession.userAnswers;
    const questions = activeQuizSession.questions;
    let correctCount = 0;

    const breakdown = questions.map(q => {
      const selected = answers[q.id];
      const isCorrect = selected === q.correctOption;
      if (isCorrect) correctCount++;
      return {
        questionId: q.id,
        questionText: q.text,
        options: q.options,
        selectedOption: selected !== undefined ? selected : null,
        correctOption: q.correctOption,
        isCorrect,
        explanation: q.explanation || ''
      };
    });

    const scorePercent = Math.round((correctCount / questions.length) * 100);
    const passed = scorePercent >= activeQuizSession.passingScore;

    const attemptRecord = {
      id: `att-${Date.now()}`,
      studentEmail: currentUser.email,
      studentName: currentUser.name,
      courseId: activeQuizSession.courseId,
      courseTitle: activeQuizSession.courseTitle,
      quizId: activeQuizSession.quizId,
      quizTitle: activeQuizSession.quizTitle,
      scorePercent,
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      passed,
      date: new Date().toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
      timeSpentSeconds: Math.round((Date.now() - activeQuizSession.startedAt) / 1000),
      answersBreakdown: breakdown
    };

    // Save attempt to global history
    setQuizAttempts(prev => [attemptRecord, ...prev]);

    return attemptRecord;
  };

  // Purchase Course (external bank payment flow)
  const buyCourse = (courseId, paymentRef = '', bankNotes = '') => {
    const course = coursesAndModules.find(c => c.id === courseId);
    if (!course) return null;

    const orderId = `ORD-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`;
    const newOrder = {
      id: orderId,
      studentEmail: currentUser.email,
      studentName: currentUser.name,
      courseIds: [course.id],
      courseNames: [course.title],
      total: course.price,
      status: 'Pending Approval', // Admin will manually approve
      date: new Date().toISOString().split('T')[0],
      paymentRef: paymentRef || `TRIN-${Math.floor(100000 + Math.random() * 900000)}`,
      bankProofNotes: bankNotes || 'Direct Bank Wire Transfer. Awaiting manual admin clearance verification.'
    };

    setOrders(prev => [newOrder, ...prev]);
    return newOrder;
  };

  // Admin: Grant access to a student for a course/module
  const grantAccess = (courseId, studentEmail) => {
    // 1. Add course to user's enrolledCourses
    setUsers(prev =>
      prev.map(u => {
        if (u.email.toLowerCase() === studentEmail.toLowerCase()) {
          const currentEnrolled = u.enrolledCourses || [];
          if (!currentEnrolled.includes(courseId)) {
            return { ...u, enrolledCourses: [...currentEnrolled, courseId] };
          }
        }
        return u;
      })
    );

    // 2. Update any pending orders for this student and course to 'Completed'
    setOrders(prev =>
      prev.map(ord => {
        if (
          ord.studentEmail.toLowerCase() === studentEmail.toLowerCase() &&
          ord.courseIds.includes(courseId) &&
          ord.status === 'Pending Approval'
        ) {
          return { ...ord, status: 'Completed' };
        }
        return ord;
      })
    );
  };

  // Admin: Revoke access
  const revokeAccess = (courseId, studentEmail) => {
    setUsers(prev =>
      prev.map(u => {
        if (u.email.toLowerCase() === studentEmail.toLowerCase()) {
          return {
            ...u,
            enrolledCourses: (u.enrolledCourses || []).filter(id => id !== courseId)
          };
        }
        return u;
      })
    );
  };

  // Admin: Add new student user
  const addUser = (userData) => {
    const newUser = {
      id: `usr-${Date.now()}`,
      name: userData.name,
      email: userData.email,
      role: 'student',
      licenseGoal: userData.licenseGoal || 'EASA B1.1',
      phone: userData.phone || '',
      enrolledCourses: userData.initialCourse ? [userData.initialCourse] : []
    };
    setUsers(prev => [...prev, newUser]);
    return newUser;
  };

  // Reset demo data
  const resetAllData = () => {
    localStorage.removeItem(STORAGE_KEYS.COURSES);
    localStorage.removeItem(STORAGE_KEYS.USERS);
    localStorage.removeItem(STORAGE_KEYS.ORDERS);
    localStorage.removeItem(STORAGE_KEYS.QUIZ_ATTEMPTS);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_ROLE);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER_EMAIL);
    setCoursesAndModules(INITIAL_COURSES_AND_MODULES);
    setUsers(INITIAL_USERS);
    setOrders(INITIAL_ORDERS);
    setQuizAttempts(INITIAL_QUIZ_ATTEMPTS);
    setCurrentRole('student');
    setCurrentEmail('student@trinityaviation.com');
    setStudentTab('dashboard');
    setActiveCourseId(null);
    setActiveQuizSession(null);
  };

  // Check if student is enrolled in a course/module
  const isEnrolled = (courseId, email = currentEmail) => {
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    return user?.enrolledCourses?.includes(courseId) || false;
  };

  // Check if student has a pending order for course
  const isPendingApproval = (courseId, email = currentEmail) => {
    return orders.some(
      ord =>
        ord.studentEmail.toLowerCase() === email.toLowerCase() &&
        ord.courseIds.includes(courseId) &&
        ord.status === 'Pending Approval'
    );
  };

  return (
    <AppContext.Provider
      value={{
        coursesAndModules,
        users,
        orders,
        quizAttempts,
        currentUser,
        currentRole,
        publicPage,
        adminTab,
        studentTab,
        activeCourseId,
        activeQuizSession,
        bankDetails: BANK_DETAILS,
        blogsData: BLOGS_DATA,
        servicesData: SERVICES_DATA,
        setPublicPage,
        setAdminTab,
        setStudentTab,
        setActiveCourseId,
        setActiveQuizSession,
        switchRole,
        login,
        logout,
        addCourseOrModule,
        updateCourseOrModule,
        deleteCourseOrModule,
        startQuiz,
        submitQuiz,
        buyCourse,
        grantAccess,
        revokeAccess,
        addUser,
        resetAllData,
        isEnrolled,
        isPendingApproval
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
