# Trinity Aviation Academy — Educational Platform

A specialized, comprehensive web application built for aviation engineering students preparing for **EASA Part-66 Basic Licences** (Modules 1–17) and **EASA Part-145 / Part-M** recurrent certifications (Human Factors, Fuel Tank Safety Phase 2, EWIS, Continuing Airworthiness, Maintenance Planning, QA Systems).

Built with **React**, **Bootstrap 5**, and **Vite** with full responsive layout matching the Trinity Academy design standards.

---

## ✈️ Key Features

### 1. Public Portal
- **Home**: Hero banner, curriculum overview, key stats, student benefits, and dynamic course previews.
- **About Us**: Academy mission, Part-147 standard alignment, instructional team.
- **Services**: AME modular training, airline type rating prep, compliance consultation.
- **Blogs**: EASA regulatory articles, examination tips, and technical summaries with modal reader.
- **Authentication**: One-click demo logins for **Student** and **Admin**, plus student registration.

### 2. Student Portal
- **Dashboard**: Overall curriculum progress bar and enrolled subjects.
- **EASA PART-145 & PART-M COURSES**: Dark slate cards with aviation icons, prices, and enrollment statuses.
- **EASA PART 66 - MODULES**: Modules 1 through 10+ with individual syllabus information.
- **Subject Study Hub**:
  - **Books**: Technical handbooks with interactive reader simulation and download options.
  - **Notes**: Structured chapter summaries, formula sheets, and study cards.
  - **Quizzes**: List of quizzes with previous score history and "Start Quiz" launcher.
- **Interactive Quiz Engine**:
  - **Randomized Question Bank**: Automatically extracts the configured number of random questions ($N$) from the question bank for each student test attempt.
  - Live countdown timer, question palette tracker, 4 interactive options (A, B, C, D), flag for review.
  - Instant scoring with pass/fail evaluation (75% EASA pass mark), confetti celebration, and question-by-question review with explanations.
- **External Bank Payment Flow**:
  - When buying a locked subject, displays the official Academy bank account details (Bank Name, Account Title, IBAN, SWIFT/BIC, Branch, and unique student wire reference code).
  - Prominent notice: *"Payment is made externally via direct bank transfer. The admin manually approves each student upon receipt."*
  - Student submits transfer reference ID; order is logged in `Pending Approval` state and queued in the Admin's `Grant Access` panel.
- **My Orders**: Order history matching design with order numbers, date, subjects, total amount, status badges, and simulated Certificate PDF generator.
- **My Account & Contact**: Profile management, target licence aim (e.g. B1.1, B2), and registrar inquiry form.

### 3. Admin Portal
- **Dashboard**: Telemetry metrics (Total Students, Active Subjects, Total Quiz Attempts, Pending Wire Approvals, Settled Tuition).
- **Manage Modules & Manage Courses**:
  - Data table with ID, Title, Books count, Notes count, Quizzes count, Status, Actions.
  - Add / Edit modal with 4 tabs: **Basic**, **Books** (with PDF uploads), **Notes**, and **Quizzes**.
  - Quiz editor with configurable random question count and question bank with 4 MCQ options and correct option radio selector.
- **Quiz Attempts**:
  - Comprehensive audit log of every student's quiz attempt.
  - Candidate details, score %, pass/fail badge, duration, and **View Breakdown** modal showing exact questions served and selected answers.
- **Grant Access**:
  - 3-column layout matching design:
    1. Select Course / Module (with filter by Courses / Modules / All).
    2. No Access / Applied for Access list (with search, student selection checkboxes, pending wire ref indicators, and "Grant Access" button).
    3. Has Access list (with search and revoke options).
  - "+ Add User" modal for registering and enrolling students directly.

### 4. Floating Demo Switcher
- Includes a floating 1-click role switcher widget at the bottom right (`Student`, `Admin`, `Landing`) for easy review and client feedback on Vercel.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Start the Vite development server
npm run dev

# 3. Open your browser
# The local development server will start at http://localhost:3000
```

---

## 🌐 Instant Deployment to Vercel

The project is pre-configured with `vercel.json` for single-page application routing.

### Option A: Via GitHub (Recommended)
1. Commit and push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete Trinity Aviation Academy frontend platform"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com), click **Add New Project**, and import your `Trinity---CRM` repository.
3. Vercel will automatically detect **Vite**; click **Deploy**.

### Option B: Via Vercel CLI
```bash
npx vercel
```

---

## 🐍 Future Python Backend Integration Roadmap

When you are ready to build the Python backend (FastAPI / Django REST / Flask):
1. **API Endpoints**:
   - `/api/auth/`: JWT login, registration, role verification.
   - `/api/courses/` & `/api/modules/`: CRUD endpoints with PostgreSQL/SQLite models for Courses, Books, Notes, Quizzes, and Questions.
   - `/api/quizzes/{id}/attempt/`: Backend random question sampler that selects $N$ questions server-side without exposing the answer keys until submission.
   - `/api/orders/`: Bank transfer proof submissions, webhook/manual status reconciliation.
   - `/api/admin/grant-access/`: Bulk access granting and email notification dispatcher.
2. The current frontend data layer in `src/context/AppContext.jsx` is structured with clean async methods, making it simple to swap local state with standard `fetch()` or `axios` API calls!
