# Software Requirements Specification (SRS)
## Trinity Aviation Academy — Educational Platform & CRM
**Document Version:** 1.0.0  
**Date:** September 2026  
**Standard:** IEEE 830-1998 / ISO/IEC/IEEE 29148:2018 Adapted  
**Target Systems:** Web Application (Frontend: React/Bootstrap/Vite; Backend: Python REST Service)

---

## 1. Introduction

### 1.1 Purpose
This Software Requirements Specification (SRS) document details the complete functional and non-functional requirements for the **Trinity Aviation Academy Educational Platform & CRM**. It specifies the external interfaces, operational workflows, system constraints, user roles, and data models necessary for engineering students, instructional staff, and academy administrators preparing for **EASA Part-66** and **EASA Part-145 / Part-M** aviation certifications.

### 1.2 Scope
The Trinity Aviation Academy platform delivers a specialized online learning management and administrative system for aeronautical maintenance engineering (AME). The platform encompasses:
- **Public Informational Portal:** Marketing, curriculum roadmaps, regulatory news, service specifications, and unified authentication.
- **Student Examination & Learning Portal:** Self-paced modular training across EASA Part-66 (Modules 1–17) and Part-145/M continuation courses, complete with interactive technical book readers, revision notes, an interactive examination engine with randomized question bank sampling, external bank payment workflows, and order tracking.
- **Administrator Management & CRM Portal:** Centralized operations dashboard, Course & Module CRUD management (curriculum, books, notes, quizzes, question banks), candidate quiz attempt telemetry and audits, and manual course entitlement granting based on external bank wire clearance.
- **External Payment Workflow:** Direct bank wire transfer settlement with manual registrar validation.

### 1.3 Definitions, Acronyms, and Abbreviations
| Term | Definition |
| :--- | :--- |
| **AME** | Aircraft Maintenance Engineer / Technician |
| **AMP** | Aircraft Maintenance Programme |
| **CAMO** | Continuing Airworthiness Management Organisation |
| **CDCCL** | Critical Design Configuration Control Limitations |
| **CRS** | Certificate of Release to Service |
| **EASA** | European Union Aviation Safety Agency |
| **EWIS** | Electrical Wiring Interconnection System |
| **FTS** | Fuel Tank Safety |
| **HF** | Human Factors in Aircraft Maintenance |
| **IBAN** | International Bank Account Number |
| **MCQ** | Multiple Choice Question (single correct answer among 4 options) |
| **Part-66** | EASA regulation governing Aircraft Maintenance Licences (Categories A, B1, B2, B3, C) |
| **Part-145** | EASA regulation governing Approved Maintenance Organisations |
| **Part-M** | EASA regulation governing Continuing Airworthiness |
| **RBAC** | Role-Based Access Control |
| **SMS** | Safety Management System |
| **SPA** | Single Page Application |
| **SWIFT/BIC** | Society for Worldwide Interbank Financial Telecommunication / Bank Identifier Code |

### 1.4 References
- **Regulation (EU) No 1321/2014:** Continuing airworthiness of aircraft and aeronautical products, parts and appliances, and on the approval of organisations and personnel involved in these tasks.
- **EASA Part-66 Appendix I & II:** Basic Knowledge Requirements and Examination Standard.
- **AMC 20-22:** Electrical Wiring Interconnection System (EWIS) Training Programme.
- **Appendix IV to AMC 145.A.30(e):** Fuel Tank Safety Training Programme.
- **IEEE Std 830-1998:** Recommended Practice for Software Requirements Specifications.

---

## 2. Overall Description

### 2.1 Product Perspective
Trinity Aviation Academy operates as a responsive web platform. The frontend is built as a client-side Single Page Application (SPA) using React 19, Bootstrap 5.3, and Vite, deployed on Vercel edge infrastructure. The platform is designed to connect to a backend RESTful service developed in Python (FastAPI or Django REST Framework) backed by a relational database (PostgreSQL / SQLite).

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        TRINITY AVIATION ACADEMY                         │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
         ┌───────────────────────────┼───────────────────────────┐
         ▼                           ▼                           ▼
┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐
│  PUBLIC PORTAL   │       │  STUDENT PORTAL  │       │   ADMIN PORTAL   │
│ • Landing & Hero │       │ • Dashboard &    │       │ • KPI Dashboard  │
│ • About Us       │       │   Enrolled Subj. │       │ • Manage Modules │
│ • Services       │       │ • EASA Catalog   │       │ • Manage Courses │
│ • Tech Blogs     │       │ • Study Hub      │       │ • Quiz Attempts  │
│ • Auth & 1-Click │       │   (Books/Notes)  │       │   Audit Ledger   │
│   Demo Switcher  │       │ • Random Quiz    │       │ • Grant Access   │
│                  │       │   Exam Engine    │       │   (3-Col Matrix) │
│                  │       │ • Bank Transfer  │       │ • Registrar User │
│                  │       │   Order Flow     │       │   Provisioning   │
│                  │       │ • My Orders &    │       │                  │
│                  │       │   Certificates   │       │                  │
└──────────────────┘       └──────────────────┘       └──────────────────┘
                                     │
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │  DATA & STATE LAYER (LocalStorage / Python REST API)    │
        │  • Courses & Modules      • Books & Notes Handbooks     │
        │  • Quizzes & Question Banks (Random Sampling Logic)     │
        │  • Users & RBAC           • Wire Orders & Entitlements  │
        └─────────────────────────────────────────────────────────┘
```

### 2.2 User Classes and Personas
1. **Prospective Student / Public Guest:** Unauthenticated or prospective candidate browsing training curricula, pricing, EASA compliance details, and technical articles.
2. **Enrolled Aviation Student (AME Candidate):** Authenticated user pursuing Part-66 or Part-145 certifications. Studies books, reviews revision notes, executes timed mock quizzes with randomized question sets, places course orders via external bank wire, and tracks approval status.
3. **Academy Administrator / Registrar:** Privileged authority responsible for managing curriculum structures, authoring question banks, configuring random question distribution parameters, auditing student examination telemetry, and manually verifying external bank wires to grant course access.

### 2.3 Operating Environment
- **Client Platforms:** Modern Desktop, Tablet, and Mobile web browsers (Chrome 110+, Safari 16+, Firefox 110+, Edge 110+).
- **Deployment Platform:** Vercel Static/Edge Network with SPA rewrite routing (`vercel.json`).
- **Target Backend Environment:** Python 3.11+ runtime on Linux/Windows, utilizing ASGI/WSGI web servers (Uvicorn / Gunicorn).

### 2.4 Design and Implementation Constraints
- **External Payment Processing:** Due to cross-border aviation banking regulations, direct payment gateways (e.g., Stripe/PayPal) are not utilized. Payments are executed externally via direct wire transfer; enrollment activation requires explicit administrative review and approval.
- **EASA Examination Compliance:** Quizzes must enforce a minimum passing score of **75%** in alignment with EASA Part-66 examination conventions.
- **Random Question Sampling:** Examination attempts must dynamically select an administrator-defined count of questions ($N$) from a larger question bank to prevent candidate rote memorization.
- **Frontend Stack:** React 19, Bootstrap 5.3, Vite, Lucide-React iconography, Canvas-Confetti, with zero third-party UI framework dependencies.

---

## 3. External Interface Requirements

### 3.1 User Interfaces (UI)
The user interface follows the Trinity Aviation Academy brand standard:
- **Primary Color:** Deep Burgundy (`#7B1113` / `#590B0D`)
- **Accent Color:** Aeronautical Gold (`#C5A059` / `#D4AF37`)
- **Card Background:** Deep Aero-Slate (`#212638` / `#2E334D`)
- **Typography:** Cinzel (Headings), Plus Jakarta Sans (Body and tabular telemetry)

#### Key UI Screens:
1. **Public Landing Page:** Header navigation, hero section with trust metrics, course catalog showcases, 4-step bank wire workflow guide, blogs feed, and footer.
2. **Student Dashboard:** Overall curriculum progress bar, enrolled courses list with direct study launch, and grid catalog for Part-145 courses and Part-66 modules.
3. **Course Study Hub:** Left vertical navigation displaying Books, Notes, and Quizzes with active status indicators.
4. **Interactive Quiz Engine:** Fixed telemetry bar showing elapsed countdown timer, question palette grid, 4 radio options with instant active state, flag for review, and submit confirmation modal.
5. **My Orders View:** Order cards displaying order ID, creation date, enrolled courses, total cost, status badge (`Completed` / `Pending Approval`), and Certificate of Completion generator.
6. **Admin Sidebar & Dashboard:** Persistent navigation sidebar, metrics telemetry cards, pending approval alert banner, and recent attempt logs.
7. **Admin Course/Module Modal:** 4-tab modal (`Basic`, `Books`, `Notes`, `Quizzes`) with dynamic MCQ question bank editor.
8. **Admin Grant Access View:** 3-column screen layout (Subject Selection $\rightarrow$ No Access / Applied Candidates $\rightarrow$ Has Access List).

### 3.2 Software Interfaces
The application architecture is structured for seamless integration with a Python REST API:
- `POST /api/v1/auth/login` & `POST /api/v1/auth/register`
- `GET /api/v1/courses` & `GET /api/v1/modules`
- `POST /api/v1/courses` & `PUT /api/v1/courses/{id}`
- `POST /api/v1/quizzes/{id}/attempt` (Serves randomized question subsets without exposing answer keys)
- `POST /api/v1/quizzes/{id}/submit` (Scores responses, logs attempt, returns breakdown)
- `POST /api/v1/orders` (Logs bank transfer reference)
- `POST /api/v1/admin/grant-access` (Activates course entitlement)

---

## 4. Functional Requirements

### 4.1 Module 1: Public Portal & Information Architecture

- **FR-PUB-01 (Navigation):** The system shall provide a top navigation bar accessible across all public views containing links to Home, About Us, Services, Blogs, and a Login / Sign Up action button.
- **FR-PUB-02 (Curriculum Showcase):** The system shall showcase previews of EASA Part-145/Part-M courses and EASA Part-66 modules with course title, syllabus code, description, and tuition fees.
- **FR-PUB-03 (Technical Blogs):** The system shall display aviation technical articles with article summary, author, category, reading duration, and an interactive full-text reader modal.
- **FR-PUB-04 (Unified Authentication):** The system shall provide a modal dialog supporting both existing user login and new student registration.
- **FR-PUB-05 (1-Click Demo Switcher):** The system shall provide a floating demo control widget enabling reviewers to switch between Student View (`Alex Vance`), Admin View (`Hassaan Admin`), and Public Landing view with one click.

---

### 4.2 Module 2: Student Examination & Learning Management

- **FR-STU-01 (Dashboard & Metrics):** The student dashboard shall calculate and render the student's overall curriculum completion percentage based on the proportion of enrolled courses to total available curriculum items.
- **FR-STU-02 (Enrolled Courses Display):** The dashboard shall prominently list all courses and modules for which the candidate holds active access, with direct navigation to the study hub.
- **FR-STU-03 (Catalog Browsing):** The student dashboard shall display separate categorized sections for:
  1. *EASA PART-145 & PART-M COURSES* (Human Factors, Fuel Tank Safety, EWIS, Maintenance Planning, Quality Assurance, Continuing Airworthiness, SMS, Engine Familiarisation, Aircraft Handling).
  2. *EASA PART 66 - MODULES* (Modules 1 through 10+).
- **FR-STU-04 (Subject Study Hub):** When an enrolled subject is opened, the system shall provide three dedicated tabs:
  - **Books:** Listing approved textbooks and technical handbooks with simulated interactive PDF reader mode and download capabilities.
  - **Notes:** Presenting structured chapter revision notes, formulas, and memory mnemonics.
  - **Quizzes:** Listing available practice quizzes with previous attempt scores and pass/fail indicators.
- **FR-STU-05 (Randomized Quiz Question Engine):**
  - Upon starting a quiz, the system shall sample an administrator-configured quantity of questions ($N$) randomly from the quiz's question bank.
  - The examination interface shall display a live countdown timer derived from the quiz time limit.
  - If the timer reaches `00:00`, the system shall automatically finalize and submit the candidate's answers.
  - The interface shall display a visual Question Palette indicating current question, answered questions, unanswered questions, and flagged questions.
  - Each question shall present four mutually exclusive options (A, B, C, D) selectable via radio inputs.
- **FR-STU-06 (Automated Grading & EASA Benchmark):**
  - The system shall automatically grade candidate submissions against the question bank answer key.
  - The system shall evaluate the candidate's percentage score against the mandatory **75% EASA pass threshold**.
  - If the candidate achieves $\ge 75\%$, the system shall trigger celebratory visual feedback (confetti animation) and designate the attempt as `PASSED`.
  - If $< 75\%$, the system shall designate the attempt as `FAILED`.
  - The system shall render an immediate question-by-question review showing the candidate's selected choice, the official correct choice, and the EASA reference explanation.
  - The system shall log the attempt record in global application state for candidate history and administrative audit.
- **FR-STU-07 (Order Management & Certificates):**
  - The *My Orders* view shall render historical purchase records with order ID, date, course titles, total cost, and status pills (`Completed` or `Pending Admin Approval`).
  - For completed courses, the system shall provide a simulated official **Certificate of Completion PDF** generator and modal viewer.
- **FR-STU-08 (Profile & Registrar Contact):**
  - The *My Account* view shall permit updating personal contact information and selecting the candidate's target EASA licence category (B1.1, B1.2, B2, Category A, Category C).
  - The *Contact* view shall provide a direct communications form directed to admissions, bursar, and technical faculties.

---

### 4.3 Module 3: External Bank Payment & Enrollment Workflow

- **FR-PAY-01 (Bank Account Display):** When an un-enrolled course is selected for enrollment, the system shall open a payment modal presenting the official academy remittance information:
  - Beneficiary Bank Name
  - Beneficiary Account Title
  - IBAN / Account Number
  - SWIFT / BIC Code
  - Branch Information
- **FR-PAY-02 (Unique Payment Reference):** The system shall generate and display a unique, candidate-specific payment reference code (e.g., `TRIN-STU-XXXX`) that the student must include in their bank remittance narration.
- **FR-PAY-03 (Payment Proof Submission):** The payment modal shall accept the student's remitting bank name, bank transaction reference number, and optional transfer notes.
- **FR-PAY-04 (Order State Transition):** Upon submission of the payment proof:
  - An order record shall be generated with status set to `Pending Approval`.
  - The order shall appear in the student's *My Orders* view as `Pending Approval`.
  - The course card on the student dashboard shall update to indicate `Payment Under Review`.
  - The candidate shall be automatically queued in the administrative **Grant Access** panel under `No Access (Select to grant)` with their payment reference highlighted.

---

### 4.4 Module 4: Administrator Management & CRM Portal

- **FR-ADM-01 (Administrative Telemetry Dashboard):** The admin dashboard shall display real-time metric cards:
  - Total Registered Students
  - Total Active Courses and Modules
  - Total Quiz Attempts Evaluated
  - Total Pending Bank Wire Approvals
  - Total Settled Tuition Revenue ($)
- **FR-ADM-02 (Pending Clearance Alert):** If one or more orders are in `Pending Approval` state, the dashboard shall display a high-priority banner linking directly to the Grant Access workspace.
- **FR-ADM-03 (Manage Modules Workspace):**
  - The system shall display a table of all EASA Part-66 modules with Module ID/Code, Title, Books Count, Notes Count, Quizzes Count, Status, and Actions.
  - The administrator shall be able to Add, Edit, Delete, and Preview any module in student mode.
- **FR-ADM-04 (Manage Courses Workspace):**
  - The system shall display a table of all EASA Part-145 and Part-M courses with Course Code, Title, Books Count, Notes Count, Quizzes Count, Status, and Actions.
  - The administrator shall be able to Add, Edit, Delete, and Preview any course in student mode.
- **FR-ADM-05 (4-Tab Course/Module Authoring Modal):**
  - **Tab 1 (Basic):** Edit title, code, category, subcategory, price ($), duration, description, and status.
  - **Tab 2 (Books):** Add unlimited books, edit book titles, select format (`PDF upload`, `E-Book`, `URL`), simulate PDF upload, and delete books.
  - **Tab 3 (Notes):** Add unlimited revision notes, edit note titles, read time estimations, write content bodies, and delete notes.
  - **Tab 4 (Quizzes & Question Bank):**
    - Add multiple quizzes to a course.
    - Set quiz title, description, time limit (minutes), and passing percentage.
    - **Configurable Question Count:** Configure the exact number of questions served per student test attempt ($N$).
    - **Question Bank Editor:** Add unlimited MCQs to the question bank. For each question, edit question text, enter text for Options A, B, C, and D, designate the single correct answer via radio selector, write an EASA regulatory explanation note, and remove questions.
- **FR-ADM-06 (Candidate Quiz Attempts Audit Ledger):**
  - The system shall record and display an audit log of every quiz attempt completed by any student across all subjects.
  - Columns shall include: Candidate Name, Email, Subject Title, Quiz Title, Score (%), Pass/Fail Status Badge, Date/Time, and Time Elapsed.
  - The system shall provide real-time search filtering across candidate names, emails, subject titles, and pass/fail states.
- **FR-ADM-07 (Granular Attempt Breakdown Audit):**
  - The administrator shall be able to click **View Breakdown** on any quiz attempt in the ledger.
  - The system shall render a modal displaying every specific question served to the candidate during that attempt, the candidate's selected choice, the official correct choice, and the regulatory reference note.
- **FR-ADM-08 (3-Column Grant Access Workflow):**
  - The system shall provide an entitlement management screen divided into three distinct operational columns matching reference designs:
    - **Column 1 (Select Course/Module):** Filter by `Courses only`, `Modules only`, or `All`; quick select dropdown; and scrollable list of subjects.
    - **Column 2 (No Access / Applied for Access):** Searchable list of all students who do not have access to the selected subject. Students who have submitted external bank payment references shall have their pending wire reference highlighted. Checkboxes shall allow single or multi-student selection. Clicking the **Grant Access** button shall execute batch entitlement.
    - **Column 3 (Has Access):** Searchable list of all candidates holding active entitlement to the subject, with individual **Revoke** capability.
- **FR-ADM-09 (Entitlement Reconciliation):** When an administrator grants access to a candidate for a course:
  - The course ID shall be immediately appended to the candidate's enrolled courses.
  - Any associated order in `Pending Approval` status shall automatically transition to `Completed`.
  - The candidate's dashboard shall immediately unlock the subject materials.
- **FR-ADM-10 (Manual User Registration):** The Grant Access interface shall provide an **+ Add User** modal to register new candidate accounts manually with name, email, target licence, and initial course enrollment.

---

## 5. Non-Functional Requirements (NFR)

### 5.1 Performance Requirements
- **NFR-PERF-01 (Page Load Time):** Initial page load and Time-to-Interactive (TTI) shall not exceed 1.5 seconds on standard 4G mobile or broadband connections.
- **NFR-PERF-02 (Client-Side Latency):** Tab switching, modal rendering, search filtering, and question palette navigation shall execute in under 100 milliseconds.
- **NFR-PERF-03 (Random Sampling Execution):** The randomized question bank sampling algorithm shall draw $N$ questions and initialize examination sessions in under 50 milliseconds regardless of question bank volume.
- **NFR-PERF-04 (Asset Bundle Optimization):** The production static build shall be compressed and tree-shaken with total JavaScript bundle size $\le 450 \text{ KB}$ gzipped.

### 5.2 Reliability and Availability
- **NFR-REL-01 (Availability):** The application shall maintain $\ge 99.9\%$ service availability when hosted on global edge CDN infrastructure (Vercel).
- **NFR-REL-02 (State Persistence & Resilience):** In the absence of an active server connection, all user actions, courses created, quiz attempts logged, and payment records shall reliably persist in browser `localStorage`.
- **NFR-REL-03 (Exam State Protection):** An active examination session shall maintain response state locally so that accidental browser refreshes do not corrupt the ongoing attempt.

### 5.3 Security Requirements
- **NFR-SEC-01 (Role-Based Access Control):** Administrative workspaces (`/admin/*`) and student study hubs (`/course/*`) shall enforce role checks to prevent unauthorized access.
- **NFR-SEC-02 (Transport Layer Security):** All client-server communications must be encrypted using TLS 1.3 over HTTPS.
- **NFR-SEC-03 (Input Sanitization):** All administrative and candidate text inputs (search fields, note contents, question prompts, wire references) shall be sanitized against Cross-Site Scripting (XSS).
- **NFR-SEC-04 (Exam Key Concealment):** In production backend integrations, the full question bank with answer keys shall remain protected server-side; client sessions shall receive only the randomized question prompts until final submission.

### 5.4 Usability & Human Factors
- **NFR-USE-01 (Design Standard Compliance):** UI components must strictly adhere to the Trinity Aviation Academy aesthetic: deep burgundy (`#7B1113`), gold accents (`#C5A059`), dark slate cards, and crisp contrast.
- **NFR-USE-02 (Mobile Responsiveness):** The platform shall be fully responsive across mobile phone viewports (360px+), tablet viewports (768px+), and desktop screens (1080p to 4K), supporting touch interactions for hangar use.
- **NFR-USE-03 (Accessibility):** Typography contrast ratios shall meet WCAG 2.1 Level AA standards ($\ge 4.5:1$ for standard text, $\ge 3:1$ for large text).
- **NFR-USE-04 (Cognitive Load Reduction):** Examination views shall maintain uncluttered layouts to minimize candidate distraction during timed assessments.

### 5.5 Regulatory & Compliance Requirements
- **NFR-REG-01 (EASA Part-66 Standard):** The examination module must adhere to EASA Part-66 Appendix II rules: four options per MCQ, exactly one correct option, and a mandatory 75% pass mark.
- **NFR-REG-02 (Auditability):** Candidate quiz attempts must record exact date/time, duration, questions presented, candidate selections, and score percentages for formal regulatory compliance verification.

---

## 6. Data Models & Entity Relationships

```
┌─────────────────────────┐           ┌─────────────────────────┐
│          USER           │           │          ORDER          │
├─────────────────────────┤           ├─────────────────────────┤
│ id: String (PK)         │ 1       * │ id: String (PK)         │
│ name: String            ├───────────┤ studentEmail: String    │
│ email: String (Unique)  │           │ studentName: String     │
│ role: Enum (Admin/Stu)  │           │ courseIds: Array<String>│
│ phone: String           │           │ total: Decimal          │
│ enrolledCourses: Array  │           │ status: Enum(Pending/   │
└─────────────────────────┘           │              Completed) │
                                      │ date: Date              │
                                      │ paymentRef: String      │
                                      │ bankProofNotes: String  │
                                      └─────────────────────────┘

┌─────────────────────────┐
│      COURSE/MODULE      │
├─────────────────────────┤
│ id: String (PK)         │
│ code: String            │
│ title: String           │
│ category: Enum(Course/  │
│                Module)  │
│ subCategory: String     │
│ description: Text       │
│ price: Decimal          │
│ duration: String        │
│ status: Enum            │
│ lastCertified: Date     │
│ recertInterval: Int(24) │
│ books: Array<Book>      │
│ notes: Array<Note>      │
│ quizzes: Array<Quiz>    │
└───────────┬─────────────┘
            │ 1
            │ *
┌───────────▼─────────────┐           ┌─────────────────────────┐
│          QUIZ           │           │      QUIZ ATTEMPT       │
├─────────────────────────┤           ├─────────────────────────┤
│ id: String (PK)         │ 1       * │ id: String (PK)         │
│ title: String           ├───────────┤ studentEmail: String    │
│ description: Text       │           │ studentName: String     │
│ timeLimitMinutes: Int   │           │ courseId: String        │
│ passingScore: Int (75)  │           │ quizId: String          │
│ questionCount: Int (N)  │           │ scorePercent: Int       │
│ questions: Array<MCQ>   │           │ passed: Boolean         │
└─────────────────────────┘           │ totalQuestions: Int     │
                                      │ correctAnswers: Int     │
                                      │ answersBreakdown: JSON  │
                                      │ date: DateTime          │
                                      │ timeSpentSeconds: Int   │
                                      └─────────────────────────┘
```

---

## 7. Verification & Acceptance Criteria

| Requirement ID | Verification Method | Acceptance Criteria |
| :--- | :--- | :--- |
| **FR-PUB-01 to 05** | Inspection & Demonstration | Public pages load without authentication; demo switcher toggles Student, Admin, and Landing views instantly. |
| **FR-STU-01 to 04** | Demonstration | Progress bar updates when enrolled count changes; Course hub renders Books, Notes, and Quizzes tabs correctly. |
| **FR-STU-05 to 06** | Test & Analysis | Starting a quiz draws exactly $N$ random questions from bank; timer decrements; score calculated with 75% pass mark; confetti triggers on pass; breakdown audit displays question keys. |
| **FR-PAY-01 to 04** | Demonstration | Clicking "Enroll Now" displays bank details & unique ref; submitted payment enters `Pending Approval`; appears in admin queue. |
| **FR-ADM-01 to 05** | Demonstration | Admin dashboard displays correct metrics; Course/Module modal allows editing books, notes, and MCQs with radio correct key. |
| **FR-ADM-06 to 07** | Demonstration | Quiz attempts table logs all student tests; "View Breakdown" modal opens granular question audit. |
| **FR-ADM-08 to 10** | Demonstration | Grant Access 3-column view filters courses, lists pending students with wire refs, and batch grants access upon button click. |
| **NFR-PERF-01 to 04** | Automated Test | Production build builds cleanly with zero errors (`npm run build` in < 2s). |
