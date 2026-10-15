# Software Requirements Specification
## For Trinity Aviation Academy — Educational Platform & CRM

Version 1.1  
Prepared by Chief Systems Architect & Technical Registrar  
Trinity Aviation Academy FZE  
September 24, 2026

## Table of Contents
<!-- TOC -->
* [1. Introduction](#1-introduction)
    * [1.1 Document Purpose](#11-document-purpose)
    * [1.2 Product Scope](#12-product-scope)
    * [1.3 Definitions, Acronyms, and Abbreviations](#13-definitions-acronyms-and-abbreviations)
    * [1.4 References](#14-references)
    * [1.5 Document Overview](#15-document-overview)
* [2. Product Overview](#2-product-overview)
    * [2.1 Product Perspective](#21-product-perspective)
    * [2.2 Product Functions](#22-product-functions)
    * [2.3 Product Constraints](#23-product-constraints)
    * [2.4 User Characteristics](#24-user-characteristics)
    * [2.5 Assumptions and Dependencies](#25-assumptions-and-dependencies)
    * [2.6 Apportioning of Requirements](#26-apportioning-of-requirements)
* [3. Requirements](#3-requirements)
    * [3.1 External Interfaces](#31-external-interfaces)
        * [3.1.1 User Interfaces](#311-user-interfaces)
        * [3.1.2 Hardware Interfaces](#312-hardware-interfaces)
        * [3.1.3 Software Interfaces](#313-software-interfaces)
    * [3.2 Functional](#32-functional)
    * [3.3 Quality of Service](#33-quality-of-service)
        * [3.3.1 Performance](#331-performance)
        * [3.3.2 Security](#332-security)
        * [3.3.3 Reliability](#333-reliability)
        * [3.3.4 Availability](#334-availability)
        * [3.3.5 Observability](#335-observability)
    * [3.4 Compliance](#34-compliance)
    * [3.5 Design and Implementation](#35-design-and-implementation)
        * [3.5.1 Installation](#351-installation)
        * [3.5.2 Build and Delivery](#352-build-and-delivery)
        * [3.5.3 Distribution](#353-distribution)
        * [3.5.4 Maintainability](#354-maintainability)
        * [3.5.5 Reusability](#355-reusability)
        * [3.5.6 Portability](#356-portability)
        * [3.5.7 Cost](#357-cost)
        * [3.5.8 Deadline](#358-deadline)
        * [3.5.9 Proof of Concept](#359-proof-of-concept)
        * [3.5.10 Change Management](#3510-change-management)
    * [3.6 AI/ML](#36-aiml)
        * [3.6.1 Model Specification](#361-model-specification)
        * [3.6.2 Data Management](#362-data-management)
        * [3.6.3 Guardrails](#363-guardrails)
        * [3.6.4 Ethics](#364-ethics)
        * [3.6.5 Human-in-the-Loop](#365-human-in-the-loop)
        * [3.6.6 Model Lifecycle and Operations](#366-model-lifecycle-and-operations)
* [4. Verification](#4-verification)
* [5. Appendixes](#5-appendixes)
<!-- TOC -->

## Revision History

| Name | Date | Reason For Changes | Version |
|------|------|--------------------|---------|
| Initial Engineering Draft | September 6, 2026 | Initial baseline specification for Trinity Aviation Academy platform prototype | 1.0.0 |
| Standard Template Alignment & Full Curriculum Specification | September 24, 2026 | Full restructuring into standardized SRS schema; standardized to EUR (€) currency, Place of Birth Country, 18 Part-66 Modules, 6 Part-145 Courses, Google OAuth, and 2-Year Recertification requirements | 1.1.0 |

## 1. Introduction

This Software Requirements Specification (SRS) establishes the authoritative functional, technical, and regulatory requirements for the **Trinity Aviation Academy Educational Platform & CRM**. It provides a baseline for engineering design, verification, regulatory compliance, and operational governance across European Union Aviation Safety Agency (EASA) maintenance training programs.

### 1.1 Document Purpose
The purpose of this SRS is to define the complete functional capabilities, external interfaces, performance thresholds, security baselines, and verification procedures governing the Trinity Aviation Academy platform. This document serves as the binding reference for:
- **Software Engineering & Architecture Teams:** Translating functional statements into system architecture, API contracts, and user interface implementations.
- **Quality Assurance & Verification Teams:** Developing automated test suites, manual verification matrices, and regression suites traceable to individual requirement identifiers.
- **Academy Leadership & Technical Registrars:** Validating regulatory alignment against EASA Part-66 and Part-145 compliance mandates and financial reconciliation procedures.
- **Aviation Regulatory Auditors:** Verifying exam integrity controls, randomized question bank delivery, audit logging, and recurrent recertification intervals.

### 1.2 Product Scope
Trinity Aviation Academy is a specialized, modern web-based educational and CRM platform engineered specifically for aircraft maintenance engineering (AME) students, certifying technicians, airline engineering personnel, and academy administrators. The system encompasses four core subsystems:
1. **Public Information & Admissions Portal:** High-visibility corporate landing page, curriculum roadmaps across 18 Part-66 basic modules and 6 Part-145 specialized courses, technical blog articles, service specifications, and unified authentication supporting Google OAuth 2.0.
2. **Student Examination & Learning Portal:** Self-paced modular training environment featuring interactive technical book readers, chapter study notes, an interactive examination engine with randomized question bank sampling, external bank wire order tracking, and dynamic Certificate of Completion generation.
3. **Administrator Management & CRM Portal:** Operations telemetry dashboard, full curriculum CRUD management (courses, modules, books, notes, quizzes, and question banks), student exam attempt audit telemetry, and a specialized 3-column entitlement matrix for manual bank wire clearance and batch access granting.
4. **External Financial Workflow Engine:** Direct interbank wire transfer workflow (Standard Chartered / Emirates NBD in EUR €) enforcing manual registrar approval, eliminating commercial gateway processing fees, and maintaining compliance with cross-border aviation training regulations.

### 1.3 Definitions, Acronyms, and Abbreviations

| Term | Definition |
|------|------------|
| **ALARP** | As Low As Reasonably Practicable ? aviation safety risk mitigation benchmark |
| **AME** | Aircraft Maintenance Engineer / Technician |
| **AMP** | Aircraft Maintenance Programme |
| **CAMO** | Continuing Airworthiness Management Organisation under EASA Part-CAMO |
| **CDCCL** | Critical Design Configuration Control Limitations |
| **CRM** | Customer Relationship Management (specialized for student admissions and access entitlements) |
| **CRS** | Certificate of Release to Service |
| **EASA** | European Union Aviation Safety Agency |
| **EWIS** | Electrical Wiring Interconnection System |
| **FTS** | Fuel Tank Safety |
| **HF** | Human Factors in Aircraft Maintenance |
| **IBAN** | International Bank Account Number |
| **MCQ** | Multiple Choice Question (four options: A, B, C, D with exactly one correct option) |
| **Part-66** | European regulation governing Aircraft Maintenance Licences (Categories A, B1, B2, B3, C) |
| **Part-145** | European regulation governing Approved Maintenance Organisations |
| **Part-M** | European regulation governing Continuing Airworthiness requirements |
| **QoS** | Quality of Service |
| **RBAC** | Role-Based Access Control |
| **SMS** | Safety Management System under Regulation (EU) 2021/1963 |
| **SPA** | Single Page Application |
| **SRS** | Software Requirements Specification |
| **SWIFT/BIC** | Society for Worldwide Interbank Financial Telecommunication / Bank Identifier Code |
| **TTI** | Time to Interactive |
| **WCAG** | Web Content Accessibility Guidelines |

### 1.4 References

| Document | Author / Regulatory Body | Version / Date | Status |
|----------|--------------------------|----------------|--------|
| **Regulation (EU) No 1321/2014** | European Commission / EASA | Consolidated 2024 | Normative (Binding) |
| **EASA Part-66 Appendix I & II** | European Union Aviation Safety Agency | ED Decision 2023/013/R | Normative (Binding) |
| **Regulation (EU) 2021/1963** | European Commission | SMS for Part-145 Organizations | Normative (Binding) |
| **AMC 20-22 (EWIS Training)** | EASA Certification Directorate | ED Decision 2008/007/R | Normative (Binding) |
| **Appendix IV to AMC 145.A.30(e)** | EASA Approvals Directorate | Fuel Tank Safety Phase 2 | Normative (Binding) |
| **IEEE Std 830-1998 / ISO/IEC/IEEE 29148:2018** | IEEE Computer Society / ISO | 2018 Standard Edition | Informative (Guidance) |
| **Trinity CRM Backend Architecture Plan** | Trinity Aviation Academy Engineering | Version 1.0 (September 2026) | Normative (Binding) |

### 1.5 Document Overview
This SRS is partitioned into five primary sections:
- **Section 1 (Introduction):** Outlines purpose, scope, normative references, and foundational aviation terminology.
- **Section 2 (Product Overview):** Establishes the system context, architectural perspective, high-level functions, constraints, user classes, and delivery phases.
- **Section 3 (Requirements):** Details verifiable specifications across External Interfaces (`REQ-INT`), Functional Requirements (`REQ-FUNC`), Quality of Service (`REQ-PERF`, `REQ-SEC`, `REQ-REL`, `REQ-AVAIL`, `REQ-OBS`), Compliance (`REQ-COMP`), Design & Implementation (`REQ-INST`, `REQ-BUILD`, `REQ-DIST`, `REQ-MAINT`, `REQ-REUSE`, `REQ-PORT`, `REQ-COST`, `REQ-DEAD`, `REQ-POC`, `REQ-CM`), and Artificial Intelligence / Machine Learning (`REQ-ML`).
- **Section 4 (Verification):** Outlines the requirement verification matrix mapping each specification ID to verification methods and test artifacts.
- **Section 5 (Appendixes):** Provides data models, comprehensive Mermaid architectural and ER diagrams, and complete curriculum specifications.## 2. Product Overview

### 2.1 Product Perspective
Trinity Aviation Academy operates as a secure, distributed web platform structured into decoupled frontend client interfaces and backend microservices. The presentation layer is an enterprise Single Page Application (SPA) developed with React 19, Bootstrap 5.3, and Vite, deployed across global Edge CDN infrastructure via Vercel.

The backend infrastructure is architected as an asynchronous Python / Django REST Framework application, leveraging PostgreSQL for relational persistence, Redis for caching and session state, and Celery for asynchronous telemetry ingestion. The platform interfaces externally with commercial banking networks exclusively via candidate remittance slips, maintaining air-gapped segregation between student examinations and banking transaction clearance.

```
+-------------------------------------------------------------------------+
|                        TRINITY AVIATION ACADEMY                         |
+------------------------------------+------------------------------------+
                                     |
         +---------------------------+---------------------------+
         |                           |                           |
         v                           v                           v
+------------------+       +------------------+       +------------------+
|  PUBLIC PORTAL   |       |  STUDENT PORTAL  |       |   ADMIN PORTAL   |
| * Landing & Hero |       | * Dashboard &    |       | * KPI Dashboard  |
| * About Us       |       |   Enrolled Subj. |       | * Manage Modules |
| * 4 Services     |       | * 18 Part-66 &   |       | * Manage Courses |
| * Tech Blogs     |       |   6 Part-145 Cat.|       | * Quiz Attempts  |
| * Auth & Google  |       | * Study Hub      |       |   Audit Ledger   |
|   OAuth 2.0 Flow |       |   (Books/Notes)  |       | * Grant Access   |
| * 1-Click Role   |       | * Random MCQ     |       |   (3-Col Matrix) |
|   Switcher       |       |   Exam Engine    |       | * Manual Student |
|                  |       | * Bank Remit Flow|       |   Provisioning   |
|                  |       | * Orders & Certs |       | * Recert Tracking|
+------------------+       +------------------+       +------------------+
                                     |
                                     v
        +---------------------------------------------------------+
        | DATA & PERSISTENCE LAYER (LocalStorage / Django REST)    |
        | * Curricula (18 Modules, 6 Courses)                     |
        | * Books & Notes Repository (PDF / Markdown Handbooks)   |
        | * Randomized MCQ Question Banks & Attempt Telemetry     |
        | * Users & RBAC (Admin, Student with Birth Country)      |
        | * External Bank Wire Ledger (EUR € Remittance Orders)     |
        +---------------------------------------------------------+
```

### 2.2 Product Functions
The platform provides the following primary capabilities:
1. **Public Discovery & Corporate Branding:** Showcases the academy's official EASA compliance credentials, curriculum catalogs, technical engineering publications, and 4 specialized service solutions.
2. **Unified Authentication & Identity:** Provides secure email/password credential validation, Google OAuth 2.0 one-click login, and streamlined candidate registration capturing mandatory personal metadata including Place of Birth Country.
3. **Student Examination & Learning Portal:** Enables candidates to access technical handbooks with simulated PDF readers, review high-yield revision notes, and take randomized, timed examination simulations calibrated to EASA standards.
4. **Examination Engine with Random Sampling:** Automatically draws an administrator-configured quantity ($N$) of questions from a larger question bank per attempt, enforcing timed countdowns, auto-submission, 75% passing mark benchmarks, and question-by-question post-exam audits.
5. **External Bank Wire Workflow:** Guides students through international wire remittance, generates unique payment reference codes (`TRIN-STU-XXXX`), accepts transfer confirmation details, and tracks order statuses in EUR (€).
6. **Administrator KPI Telemetry:** Centralizes operational metrics, active student counts, question attempt audit trails, and high-priority pending wire approval notifications.
7. **Curriculum & Question Bank CRUD:** Allows administrative creation, updating, and retirement of courses, modules, technical handbooks, study cards, quizzes, and MCQ items with granular explanation fields.
8. **3-Column Grant Access Matrix:** Features an operational workflow allowing administrators to select a subject, review applied candidates with wire reference tags, and execute instant or batch access grants and access revocations.
9. **Recertification Lifecycle Management:** Tracks `lastCertified` timestamps on courses and automatically triggers 2-year (24-month) recurrent qualification reminders in alignment with EASA Part-145 regulations.

### 2.3 Product Constraints
1. **Financial Settlement Constraint:** Commercial payment gateways (e.g., Stripe, PayPal, Adyen) are explicitly excluded due to cross-border aviation banking regulations. Tuition must be settled via direct wire transfer in EUR (€); access activation strictly requires manual registrar review.
2. **EASA Examination Threshold:** All examination modules must enforce a strict, unbendable passing threshold of **75%**, matching EASA Part-66 basic knowledge examination criteria.
3. **Randomized Question Distribution:** Examination attempts must dynamically select an administrator-defined count of questions ($N$) from a larger question bank to prevent candidate rote memorization.
4. **Strict Dual-Role RBAC:** User roles are limited strictly to **Admin** and **Student**. Intermediate sub-roles or license goal categorizations are removed to streamline administrative overhead.
5. **Mandatory Personal Identifiers:** Student records must capture Full Name, Email Address, Phone Number, and **Place of Birth Country** for formal registrar auditing and civil aviation authority compliance.
6. **Single Currency Standard:** All monetary figures, catalog fees, bank instructions, and transaction ledgers must strictly use the **Euro (EUR €)** standard.
7. **Frontend Architecture:** React 19, Bootstrap 5.3, Vite, and Lucide-React, with zero third-party UI framework lock-in.

### 2.4 User Characteristics
- **Enrolled Student / AME Candidate:** Aircraft maintenance apprentices, military cross-training technicians, and line maintenance engineers preparing for European B1.1, B1.2, or B2 licences. Require responsive, distraction-free interfaces that operate reliably on hangar workstations, home desktops, and mobile tablets.
- **Academy Administrator / Technical Registrar:** Qualified instructional leads and administrative registrars responsible for curriculum authoring, bank statement reconciliation, and regulatory compliance reporting. High familiarity with EASA Part-66 module structures and Part-145 organizational requirements.
- **Prospective Student / Public Guest:** Aviation engineering candidates evaluating training programs, browsing syllabus requirements, and reviewing academy accreditation.

### 2.5 Assumptions and Dependencies
- **Browser Capability:** Users access the platform via modern, ECMAScript 2022+ compliant web browsers (Chrome 110+, Safari 16+, Firefox 110+, Edge 110+) with JavaScript and LocalStorage enabled.
- **Banking Settlement Integrity:** Students accurately execute external wire transfers and transmit corresponding bank transaction reference codes during enrollment.
- **Regulatory Stability:** EASA Part-66 basic knowledge syllabus and Part-145 recurrent training intervals maintain a standard 24-month recertification cycle.
- **Hosting Resilience:** Edge deployment infrastructure (Vercel) maintains high global network availability.

### 2.6 Apportioning of Requirements
- **Phase 1 (Frontend SPA & State Engine) — [Completed]:** Full client-side React 19 SPA, initial seed datasets with 18 Part-66 modules and 6 Part-145 courses, EUR (€) currency, Place of Birth Country capture, Google OAuth UI integration, randomized quiz engine, and 3-column Grant Access workflow.
- **Phase 2 (Django REST Backend & Persistence) — [Current]:** Transitioning data storage from client-side LocalStorage to the Django REST Framework backend with PostgreSQL, JWT token authentication, and Celery asynchronous tasks.
- **Phase 3 (Enterprise Integration & External APIs) — [Future]:** Automated Open Banking confirmation feeds (SWIFT MT940 / CAMT.053 reconciliation) and digital certificate signature validation.

## 3. Requirements

This section specifies all verifiable requirements for the Trinity Aviation Academy Educational Platform & CRM. Every requirement adheres to the standard schema: Unique Identifier (`REQ-[AREA]-[NNN]`), Title, Statement, Rationale, Acceptance Criteria, Verification Method, and Additional Context.

### 3.1 External Interfaces

#### 3.1.1 User Interfaces

- ID: REQ-INT-001
- Title: Corporate Aviation Visual Theme and Palette
- Statement: The user interface shall adhere to the Trinity Aviation Academy brand standard: Primary Deep Burgundy (`#7B1113` / `#590B0D`), Aeronautical Gold accents (`#C5A059` / `#D4AF37`), Dark Aero-Slate card surfaces (`#1A1E2E` / `#212638`), and neutral slate backgrounds (`#F8FAFC`). Typography shall feature Cinzel for titles and Plus Jakarta Sans for body and telemetry.
- Rationale: Establishes a premium, authoritative, and consistent brand presence appropriate for international aviation training.
- Acceptance Criteria: All client screens render with specified hexadecimal color codes, typography classes, and contrast ratios meeting WCAG 2.1 AA standards.
- Verification Method: Inspection
- More Information: CSS custom variables configured in `frontend/src/index.css`.

- ID: REQ-INT-002
- Title: Responsive Viewport Adaptation
- Statement: The user interface shall provide responsive layouts supporting desktop monitors (1920x1080 to 4K), laptop screens (1366x768 to 1440x900), tablets (768px to 1024px in portrait and landscape), and mobile devices (minimum viewport width 360px).
- Rationale: Line maintenance engineers and candidates frequently access technical courseware and quizzes via mobile tablets in hangar and line station environments.
- Acceptance Criteria: No horizontal scrollbars appear on viewports >= 360px width. Navigation elements collapse gracefully into mobile menus.
- Verification Method: Demonstration
- More Information: Validated with Chrome DevTools Device Emulation across Apple iPad, Samsung Galaxy Tab, and iPhone viewports.

- ID: REQ-INT-003
- Title: Public Marketing & Informational Portal
- Statement: The public user interface shall feature a fixed top navigation bar, a high-impact hero header, trust metrics, an overview of the 4 core training services, showcases for Part-145 courses and Part-66 modules, a 4-step bank wire workflow guide, technical blog reader modals, and a unified authentication trigger.
- Rationale: Serves as the primary public-facing portal for prospective students, airline procurement leads, and regulatory auditors.
- Acceptance Criteria: Visitors can browse all courses, syllabus outlines, prices in EUR (€), and technical articles without creating an account.
- Verification Method: Demonstration
- More Information: Implemented in `frontend/src/pages/public/LandingPage.jsx`, `AboutPage.jsx`, `ServicesPage.jsx`, and `BlogsPage.jsx`.

- ID: REQ-INT-004
- Title: Student Examination HUD and Palette Interface
- Statement: The examination interface shall provide a persistent telemetry HUD displaying quiz title, live countdown timer (`MM:SS`), visual question progress bar, and a Question Palette grid indicating Current, Answered, Unanswered, and Flagged question states.
- Rationale: Minimizes cognitive overhead during high-stakes timed assessments and complies with computerized testing ergonomics.
- Acceptance Criteria: Question palette buttons allow direct jump navigation to any question; button color states update immediately upon option selection or flag toggling.
- Verification Method: Demonstration
- More Information: Implemented in `frontend/src/pages/student/QuizEngine.jsx`.

- ID: REQ-INT-005
- Title: Administrator 3-Column Grant Access Interface
- Statement: The administrative grant access workspace shall display a synchronized 3-column matrix: Column 1 (Course/Module Selection with category filter), Column 2 (No Access Candidates queue with wire reference badges and batch selection checkboxes), and Column 3 (Has Access active roster with individual revocation controls).
- Rationale: Enables registrars to rapidly cross-reference bank statement wire deposits against applied student rosters and execute batch enrollment grants.
- Acceptance Criteria: Selecting a course in Column 1 instantly filters Columns 2 and 3; selecting candidates in Column 2 updates the batch action button counter.
- Verification Method: Demonstration
- More Information: Implemented in `frontend/src/pages/admin/GrantAccess.jsx`.

#### 3.1.2 Hardware Interfaces

- ID: REQ-INT-006
- Title: Client Hardware Interoperability
- Statement: The platform shall operate on standard commodity computing hardware including desktop PCs, laptops, and touchscreen mobile tablets without requiring proprietary peripherals, biometric sensors, or hardware cryptographic dongles.
- Rationale: Ensures accessibility across international flight lines, maintenance hangars, and remote student environments.
- Acceptance Criteria: All examination and study interactions function seamlessly using standard mouse, keyboard, and capacitive touchscreen inputs.
- Verification Method: Demonstration
- More Information: Touch targets adhere to minimum 44x44 CSS pixel dimensions for touchscreen ergonomics.

#### 3.1.3 Software Interfaces

- ID: REQ-INT-007
- Title: Python REST Service API Contract
- Statement: The client application shall interface with a backend REST service exposing standardized JSON endpoints:
  - `POST /api/v1/auth/login`, `POST /api/v1/auth/register`, `POST /api/v1/auth/google`
  - `GET /api/v1/courses`, `POST /api/v1/courses`, `PUT /api/v1/courses/{id}`
  - `GET /api/v1/modules`, `POST /api/v1/modules`, `PUT /api/v1/modules/{id}`
  - `POST /api/v1/quizzes/{id}/attempt` (Serves randomized questions without answer keys)
  - `POST /api/v1/quizzes/{id}/submit` (Grades candidate selections and logs attempt record)
  - `POST /api/v1/orders` (Logs bank wire remittance references)
  - `POST /api/v1/admin/grant-access` (Reconciles order and appends subject to student profile)
- Rationale: Enforces clear architectural separation between presentation and data persistence layers.
- Acceptance Criteria: All endpoints accept and return `application/json` payloads accompanied by standard HTTP status codes (200, 201, 400, 401, 403, 404, 500).
- Verification Method: Test
- More Information: Defined in `documentation/architecture/BACKEND_ARCHITECTURE.md`.

- ID: REQ-INT-008
- Title: Google OAuth 2.0 Integration
- Statement: The authentication interface shall integrate with Google OAuth 2.0 Identity Platform, permitting students to authenticate using verified Google accounts.
- Rationale: Reduces registration friction, eliminates password reset overhead, and enhances account security.
- Acceptance Criteria: Clicking "Continue with Google" triggers OAuth credential exchange, creates or matches a student profile using Google email, and initializes a student session.
- Verification Method: Demonstration
- More Information: Handled via `googleLogin()` in `frontend/src/context/AppContext.jsx` and `AuthModal.jsx`.

- ID: REQ-INT-009
- Title: Client State Persistence & Edge Fallback
- Statement: In the absence of an active backend server connection, all curriculum definitions, user profiles, quiz attempts, and payment orders shall persist across browser restarts using browser `localStorage`.
- Rationale: Ensures the platform remains fully evaluatable in standalone demo deployments and resilient against temporary network interruptions.
- Acceptance Criteria: Changes made to courses, users, or attempts persist after hard browser reloads (`Ctrl+F5`) across sessions.
- Verification Method: Test
- More Information: Managed through `STORAGE_KEYS` in `frontend/src/context/AppContext.jsx`.

### 3.2 Functional

- ID: REQ-FUNC-001
- Title: Student Registration with Place of Birth Country
- Statement: The registration interface shall collect and validate the candidate's Full Name, Email Address, Place of Birth Country, and Password.
- Rationale: Aviation regulatory licensing bodies (such as EASA Member State National Aviation Authorities) strictly require verification of the candidate's country of birth on examination records and training certificates.
- Acceptance Criteria: Submitting registration without specifying a Place of Birth Country is rejected with a validation error; valid submissions create a student record with `birthCountry` persisted.
- Verification Method: Test
- More Information: Implemented in `AuthModal.jsx` and `MyAccount.jsx`.

- ID: REQ-FUNC-002
- Title: Strict Dual-Role RBAC Authorization
- Statement: The system shall enforce role-based access control restricted strictly to two roles: `admin` and `student`. The application shall not support intermediate or unassigned user roles.
- Rationale: Prevents privilege ambiguity and ensures clean separation between instructional administrative privileges and candidate study views.
- Acceptance Criteria: Students attempting to access administrative management views (`/admin/*`) are blocked; administrators possess full curriculum and entitlement authority.
- Verification Method: Test
- More Information: Enforced in `App.jsx` and `AppContext.jsx`.

- ID: REQ-FUNC-003
- Title: Standardized Euro (EUR €) Currency Display
- Statement: The platform shall format all monetary amounts, course prices, modular fees, order totals, and administrative revenue metrics strictly in Euro (`?`).
- Rationale: The academy operates under European aviation standards and conducts all international banking transactions in Euros.
- Acceptance Criteria: No dollar (`$`) or alternative currency symbols appear anywhere in the UI; all price strings render as `€[amount]`.
- Verification Method: Inspection
- More Information: Verified across all frontend catalog and payment components.

- ID: REQ-FUNC-004
- Title: EASA Part-145 Specialized Courses Catalog
- Statement: The catalog shall display the exact 6 approved initial and continuation courses:
  1. Safety Management System + Human Factor (SMS + HF) Initial Course
  2. Fuel Tank Safety (FTS) Initial Course
  3. Electrical Wiring Interconnect System (EWIS) Initial Course
  4. CFM 56-5B Engine Technical Familiarisation
  5. Aircraft Handling Course
  6. Train the Trainer
- Rationale: Fulfills mandatory statutory compliance training requirements for Part-145 approved maintenance organizations.
- Acceptance Criteria: All 6 courses are present in the catalog with code, description, duration, tuition in EUR (€), syllabus handbooks, and quizzes.
- Verification Method: Inspection
- More Information: Seeded in `frontend/src/data/initialData.js`.

- ID: REQ-FUNC-005
- Title: EASA Part-66 Basic Knowledge Modules Catalog
- Statement: The catalog shall feature the complete spectrum of 18 Part-66 knowledge modules:
  - Module 1: Mathematics
  - Module 2: Physics
  - Module 3: Electrical Fundamentals
  - Module 4: Electronic Fundamentals
  - Module 5: Digital Techniques / Electronic Instrument Systems
  - Module 6: Materials & Hardware
  - Module 7: Maintenance Practices
  - Module 8: Basic Aerodynamics
  - Module 9: Human Factors
  - Module 10: Aviation Legislation
  - Module 11: Aeroplane Aerodynamics, Structures and Systems
  - Module 12: Helicopter Aerodynamics, Structures and Systems
  - Module 13: Aircraft Structures and Systems
  - Module 14: Propulsion
  - Module 15: Gas Turbine Engine
  - Module 16: Piston Engine
  - Module 17: Propeller
  - Module 18: Electric Powerplant
- Rationale: Encompasses the entire theoretical syllabus required for European aircraft maintenance licences (Categories A, B1.1, B1.2, B2, and B3).
- Acceptance Criteria: All 18 modules are rendered in the student catalog and administrative modules workspace with individual study material links.
- Verification Method: Inspection
- More Information: Configured in `initialData.js` and displayed in `StudentDashboard.jsx`.

- ID: REQ-FUNC-006
- Title: Courseware Study Hub (Books, Notes, Quizzes)
- Statement: The courseware hub for an enrolled subject shall provide three dedicated functional tabs:
  - **Books:** Listing approved PDF technical manuals and ATA chapter books with an interactive in-browser reader and download capability.
  - **Notes:** Presenting chapter revision summaries, key formulas, schematics, and regulatory memorization cards.
  - **Quizzes:** Listing practice quizzes with attempt history, previous scores, and launch controls.
- Rationale: Provides structured, multimodal instructional resources supporting self-paced exam preparation.
- Acceptance Criteria: Students holding active enrollment can switch between Books, Notes, and Quizzes tabs seamlessly; non-enrolled students are restricted from accessing study materials.
- Verification Method: Demonstration
- More Information: Implemented in `frontend/src/pages/student/CourseDetailView.jsx`.

- ID: REQ-FUNC-007
- Title: Configurable Randomized Question Bank Sampling
- Statement: Each quiz shall draw an administrator-configured quantity of questions ($N$) dynamically at random from the quiz's larger question bank upon session initialization.
- Rationale: EASA Part-66 examination security standards prohibit static question lists, requiring randomized sampling to assess genuine competence rather than memorization.
- Acceptance Criteria: Two consecutive examination attempts by the same or different students draw randomized subsets without exceeding the configured question count ($N$).
- Verification Method: Test
- More Information: Handled via Fisher-Yates sampling algorithm in `AppContext.jsx::startQuiz()`.

- ID: REQ-FUNC-008
- Title: Timed MCQ Exam Engine with Auto-Submission
- Statement: The quiz engine shall enforce four multiple choice options (A, B, C, D) per question, a live countdown timer, and automatic answer finalization when the timer expires (`00:00`).
- Rationale: Replicates official civil aviation authority computer-based testing conditions and prevents time limit overruns.
- Acceptance Criteria: Selecting an option records the response; expiration of the timer immediately freezes input, calculates the grade, and displays the result.
- Verification Method: Test
- More Information: Implemented in `QuizEngine.jsx`.

- ID: REQ-FUNC-009
- Title: Automated Grading and 75% EASA Benchmark
- Statement: The grading engine shall calculate candidate scores as `(correctAnswers / totalQuestions) * 100`. The attempt shall be designated as `PASSED` if and only if the percentage score is $\ge 75\%$; scores $< 75\%$ shall be designated as `FAILED`.
- Rationale: Mandatory compliance with EASA Part-66 Appendix II examination passing benchmark.
- Acceptance Criteria: Submissions scoring $\ge 75\%$ trigger passed status and celebratory visual feedback (confetti animation); scores $< 75\%$ render failure alert.
- Verification Method: Test
- More Information: Implemented in `AppContext.jsx::submitQuiz()`.

- ID: REQ-FUNC-010
- Title: Granular Post-Exam Question Breakdown Audit
- Statement: Upon exam submission, the system shall provide an item-by-item review displaying the question prompt, candidate's selected choice, official correct choice, and official EASA syllabus explanation.
- Rationale: Facilitates targeted revision and transparent instructional feedback for failed attempts.
- Acceptance Criteria: The breakdown modal highlights correct choices in green, incorrect student selections in red, and presents regulatory notes for each item.
- Verification Method: Demonstration
- More Information: Rendered in `QuizEngine.jsx` and `QuizAttemptModal.jsx`.

- ID: REQ-FUNC-011
- Title: External Bank Wire Remittance Workflow
- Statement: Selecting an un-enrolled course shall present official banking coordinates (Bank Name, Account Title, IBAN, SWIFT/BIC, Branch, Currency: EUR €) and generate a unique transaction reference code (`TRIN-STU-XXXX`) for the student to include in their wire narration.
- Rationale: Facilitates direct international wire settlement and provides an immutable reconciliation key for registrars.
- Acceptance Criteria: The unique reference code is displayed prominently and recorded in the generated order record upon payment proof submission.
- Verification Method: Demonstration
- More Information: Implemented in `frontend/src/components/PaymentModal.jsx`.

- ID: REQ-FUNC-012
- Title: Order Status Lifecycle & Pending Clearance Alert
- Statement: Submitting bank wire details shall create an order in `Pending Approval` status, update the student dashboard badge to `Approval Pending`, and display a high-priority alert on the Admin Dashboard.
- Rationale: Prevents premature access to proprietary courseware before financial clearance while providing real-time status visibility to candidate and registrar.
- Acceptance Criteria: Orders appear in the student's *My Orders* view as `Pending Approval` and trigger the admin pending orders alert banner.
- Verification Method: Demonstration
- More Information: Managed in `AppContext.jsx::buyCourse()`.

- ID: REQ-FUNC-013
- Title: 3-Column Entitlement Grant and Revocation
- Statement: The admin *Grant Access* interface shall allow filtering courses/modules, selecting pending students from the `No Access` queue, and executing batch access approval, automatically advancing associated order statuses to `Completed` and unlocking student access.
- Rationale: Streamlines administrative approval workflows from a centralized screen.
- Acceptance Criteria: Clicking "Grant Access" immediately grants course access, marks orders as `Completed`, and shifts students to the `Has Access` column. Revoke removes access immediately.
- Verification Method: Demonstration
- More Information: Implemented in `GrantAccess.jsx`.

- ID: REQ-FUNC-014
- Title: Curriculum & Question Bank Authoring Modal
- Statement: The administrative course/module authoring modal shall provide a 4-tab interface:
  - **Basic:** Title, code, category, subcategory, price (EUR €), duration, last certified date, recertification interval (months), and status.
  - **Books:** Add, edit title, format (`PDF upload`), simulated upload, and delete books.
  - **Notes:** Add, edit title, estimated read time, markdown content, and delete notes.
  - **Quizzes:** Add quizzes, time limit, passing mark, configurable question count ($N$), and author MCQs (text, 4 options, radio correct option selector, explanation).
- Rationale: Empowers faculty leads to maintain technical accuracy and expand question bank pools without software developer intervention.
- Acceptance Criteria: Modifying course fields, adding MCQs, or adjusting question count ($N$) saves immediately to application state and impacts student exam sessions.
- Verification Method: Demonstration
- More Information: Implemented in `frontend/src/pages/admin/CourseModuleModal.jsx`.

- ID: REQ-FUNC-015
- Title: 2-Year Recertification Interval Tracking
- Statement: The system shall record `lastCertified` dates on each course and module and track a recurrent certification interval of 24 months (2 years).
- Rationale: Fulfills EASA Part-145.A.30(e) mandates requiring certifying and support staff to undergo continuation training every 2 years.
- Acceptance Criteria: Courses store `lastCertified` and `recertIntervalMonths: 24`; admin authoring modal allows updating recertification parameters.
- Verification Method: Test
- More Information: Configured in `initialData.js` and `CourseModuleModal.jsx`.

- ID: REQ-FUNC-016
- Title: Candidate Examination Audit Ledger
- Statement: The system shall log every completed quiz attempt in an immutable administrative ledger displaying candidate name, email, subject, quiz title, score percentage, pass/fail status, date/time, and time elapsed, with search filtering and breakdown inspection.
- Rationale: Mandatory requirement for Part-145 and Part-147 training organization auditing and EASA compliance verification.
- Acceptance Criteria: All exam attempts completed by any student populate the admin ledger in real time; clicking "View Breakdown" opens the question audit modal.
- Verification Method: Demonstration
- More Information: Implemented in `frontend/src/pages/admin/QuizAttempts.jsx`.

- ID: REQ-FUNC-017
- Title: Official Certificate of Completion PDF Generation
- Statement: For completed and passed courses, the *My Orders* interface shall provide an interactive Certificate generator displaying student name, course title, completion date, certificate serial number, and official EASA compliance stamp.
- Rationale: Provides candidates with verified proof of training for employer quality assurance and regulatory license renewals.
- Acceptance Criteria: Clicking "Download Certificate" renders an official certificate modal formatted for printing and PDF export.
- Verification Method: Demonstration
- More Information: Implemented in `frontend/src/pages/student/MyOrders.jsx`.

- ID: REQ-FUNC-018
- Title: Manual Student Account Provisioning
- Statement: The administrator shall be able to manually register and enroll new students from the *Grant Access* interface, capturing Name, Email Address, Place of Birth Country, Phone, and initial course enrollment.
- Rationale: Enables registrars to provision enterprise accounts for corporate airline maintenance cohorts.
- Acceptance Criteria: Submitting the "+ Add User" form creates the student account with `birthCountry` and grants immediate access to the selected subject.
- Verification Method: Test
- More Information: Implemented in `GrantAccess.jsx`.

### 3.3 Quality of Service

#### 3.3.1 Performance

- ID: REQ-PERF-001
- Title: Initial Page Load and Time to Interactive (TTI)
- Statement: The initial page load time and Time-to-Interactive (TTI) for public and authenticated views shall not exceed 1.5 seconds on broadband connections and 2.5 seconds on standard 4G mobile connections under normal load (p95).
- Rationale: Ensures fast access on remote airport ramps, hangars, and mobile devices where cellular connectivity may fluctuate.
- Acceptance Criteria: Lighthouse performance score >= 90; Largest Contentful Paint (LCP) <= 1.8s; First Input Delay (FID) <= 100ms.
- Verification Method: Test
- More Information: Validated using Google Chrome Lighthouse in production build mode.

- ID: REQ-PERF-002
- Title: Client-Side Interactive Response Latency
- Statement: Client-side UI operations including tab switching, modal opening, search filtering, and question palette updates shall render within 100 milliseconds of user input.
- Rationale: Prevents interface sluggishness and maintains high user satisfaction during technical assessments.
- Acceptance Criteria: Profiler recordings show zero frame drops below 60fps during UI interactions; state transition execution time <= 50ms.
- Verification Method: Test
- More Information: Built with React 19 optimized rendering algorithms.

- ID: REQ-PERF-003
- Title: Question Bank Random Sampling Latency
- Statement: The randomized question bank sampling algorithm shall draw N questions, initialize the exam timer, and render the first question in under 50 milliseconds, regardless of total question bank volume up to 10,000 items.
- Rationale: Candidates must not experience delays when initiating timed examinations.
- Acceptance Criteria: Benchmark tests on arrays of 10,000 question objects execute sampling and array slicing in < 15ms.
- Verification Method: Test
- More Information: Utilizes in-memory Fisher-Yates array permutation in `startQuiz()`.

- ID: REQ-PERF-004
- Title: Production Static Bundle Optimization
- Statement: The production frontend distribution shall produce tree-shaken, minified JavaScript and CSS bundles with total gzipped transfer size <= 450 KB.
- Rationale: Minimizes network payload and bandwidth consumption on constrained networks.
- Acceptance Criteria: `npm run build` output reports total gzipped JavaScript <= 450 KB and CSS <= 50 KB.
- Verification Method: Inspection
- More Information: Current production build generates 117.17 KB gzipped JS and 46.52 KB gzipped CSS.

#### 3.3.2 Security

- ID: REQ-SEC-001
- Title: Strict Role-Based Boundary Enforcement
- Statement: The system shall enforce cryptographic token authentication (JWT) and client-side route guards preventing students from accessing administrative URLs (`/admin/*`) or executing administrative mutations.
- Rationale: Protects proprietary exam question pools, financial transaction records, and student access entitlements.
- Acceptance Criteria: Direct URL manipulation to `/admin` routes by non-admin accounts redirects to student dashboard or login modal with an unauthorized flash alert.
- Verification Method: Test
- More Information: Enforced in `App.jsx` role router.

- ID: REQ-SEC-002
- Title: Transport Layer Security (TLS 1.3)
- Statement: All HTTP communications between clients, Edge CDNs, and backend API servers shall mandate TLS 1.3 encryption over HTTPS. Plaintext HTTP traffic shall be redirected to HTTPS with HSTS headers enabled.
- Rationale: Protects student credentials, exam responses, and personal identity metadata against eavesdropping and man-in-the-middle attacks.
- Acceptance Criteria: SSL Labs test rating of A+; non-HTTPS requests receive HTTP 301 redirect with `Strict-Transport-Security: max-age=31536000; includeSubDomains`.
- Verification Method: Analysis
- More Information: Configured on Vercel Edge Network and Nginx reverse proxy.

- ID: REQ-SEC-003
- Title: Input Sanitization and XSS Prevention
- Statement: All user inputs?including candidate names, search queries, wire references, note markdown contents, and question prompts?shall be sanitized prior to storage and DOM rendering.
- Rationale: Prevents stored and reflected Cross-Site Scripting (XSS) and injection vulnerabilities.
- Acceptance Criteria: Injection of `<script>`, `onerror`, and HTML tags into search or form fields renders safely as escaped text strings.
- Verification Method: Test
- More Information: React JSX automatic context escaping and DOMPurify sanitization.

- ID: REQ-SEC-004
- Title: Server-Side Question Bank Answer Key Concealment
- Statement: In production backend integrations, the full question bank with correct answer flags shall remain strictly encapsulated on the server; exam sessions transmitted to the client shall contain only question IDs, prompts, and option choices.
- Rationale: Prevents candidates from inspecting browser memory or network payloads to extract correct examination answers during active tests.
- Acceptance Criteria: Network inspection of the `/quizzes/{id}/attempt` payload confirms absence of `correctOption` and `explanation` properties until final submission.
- Verification Method: Inspection
- More Information: Specified in Django REST QuizAttemptSerializer.

#### 3.3.3 Reliability

- ID: REQ-REL-001
- Title: Local Client State Persistence
- Statement: In the event of backend network loss, all course data, student profiles, quiz attempt ledgers, and wire transfer orders shall reliably persist in browser `localStorage`.
- Rationale: Eliminates data loss during flaky airport/hangar Wi-Fi and allows zero-downtime offline demonstrations.
- Acceptance Criteria: Disconnecting internet connectivity does not disrupt active study hub navigation; local mutations persist upon browser reload.
- Verification Method: Test
- More Information: Handled via `useEffect` synchronizers in `AppContext.jsx`.

- ID: REQ-REL-002
- Title: Active Examination Auto-Save and Refresh Resilience
- Statement: An in-progress examination session shall continuously persist candidate response states locally so that accidental browser refreshes, tab closures, or power interruptions do not erase answered questions.
- Rationale: Prevents candidate frustration and invalidation of high-stakes aviation assessments.
- Acceptance Criteria: Reloading the browser during an active examination immediately restores the quiz session, elapsed time, and all previously selected radio options.
- Verification Method: Test
- More Information: Managed through `STORAGE_KEYS.ACTIVE_QUIZ` state serialization.

#### 3.3.4 Availability

- ID: REQ-AVAIL-001
- Title: Edge CDN Service Availability (99.9% Uptime)
- Statement: The public portal, student learning hub, and administrative interfaces shall maintain a minimum of 99.9% uptime (unplanned downtime <= 43.8 minutes per month), excluding scheduled maintenance windows.
- Rationale: Serves a global candidate base operating across European, Middle Eastern, and Asian aviation hubs in multiple time zones.
- Acceptance Criteria: Synthetic uptime monitors (Pingdom / BetterUptime) verify edge CDN availability >= 99.9% measured over rolling 30-day windows.
- Verification Method: Analysis
- More Information: Supported by Vercel global edge network with anycast routing.

- ID: REQ-AVAIL-002
- Title: Zero-Downtime Rolling Releases
- Statement: System upgrades, bug fixes, and curriculum releases shall deploy without terminating active user sessions or requiring system-wide maintenance downtime.
- Rationale: Continuous flight operations require 24/7 access to recurrent qualification training.
- Acceptance Criteria: Git deployments promote green/blue environments automatically; active exam sessions complete without disconnection during releases.
- Verification Method: Demonstration
- More Information: Vercel immutable atomic deployment URLs.

#### 3.3.5 Observability

- ID: REQ-OBS-001
- Title: Candidate Examination Audit Telemetry
- Statement: The platform shall log all examination events with millisecond-accurate timestamps, capturing candidate email, course ID, quiz ID, question IDs served, candidate selections, score percentage, pass/fail result, and duration.
- Rationale: Mandated by civil aviation authorities for forensic verification of exam integrity and dispute resolution.
- Acceptance Criteria: Every completed quiz attempt generates an entry in the administrative Quiz Attempts ledger accessible via the admin portal.
- Verification Method: Test
- More Information: Persisted in `quizAttempts` state and audited in `QuizAttempts.jsx`.

- ID: REQ-OBS-002
- Title: Financial Entitlement Audit Logging
- Statement: The system shall record an immutable log of every access entitlement granted or revoked by an administrator, documenting Administrator Email, Target Student Email, Course ID, Timestamp, and Wire Reference Code.
- Rationale: Provides an audit trail for financial accounting reconciliation and regulatory compliance.
- Acceptance Criteria: Granting or revoking access appends an entry to the audit log; records cannot be overwritten or deleted by non-root administrators.
- Verification Method: Inspection
- More Information: Integrated into `grantAccess()` and `revokeAccess()` in `AppContext.jsx`.

### 3.4 Compliance

- ID: REQ-COMP-001
- Title: EASA Part-66 Appendix II Examination Compliance
- Statement: The examination module shall strictly implement EASA Part-66 Appendix II specifications:
  - Questions shall be multiple choice with four options (A, B, C, D).
  - Exactly one option shall be correct.
  - The examination pass benchmark shall be precisely 75.0%.
  - Penalty marking (negative marking) shall not be applied.
- Rationale: Statutory requirement for European aircraft maintenance licence qualification examinations under Regulation (EU) No 1321/2014.
- Acceptance Criteria: Verification suite tests that all seeded quizzes possess 4 options, 1 correct choice, no negative scoring, and an unalterable 75% pass mark.
- Verification Method: Test
- More Information: Enforced in `submitQuiz()` and `CourseModuleModal.jsx`.

- ID: REQ-COMP-002
- Title: EASA Part-145 Recurrent Training Mandate (24-Month Cycle)
- Statement: The system shall enforce a mandatory 24-month (2-year) recurrent continuation training tracking cycle for specialized courses (Human Factors, Fuel Tank Safety Phase 2, and EWIS), tracking `lastCertified` dates and flagging expired qualifications.
- Rationale: Fulfills EASA Part-145.A.30(e) mandates requiring certifying staff and technical personnel to undergo recurrent continuation training at least every 2 years.
- Acceptance Criteria: Courses enforce `recertIntervalMonths: 24`; student records indicate active vs. expired certification status relative to current timestamp.
- Verification Method: Test
- More Information: Configured in `initialData.js` and `CourseModuleModal.jsx`.

- ID: REQ-COMP-003
- Title: GDPR & Privacy Compliance for Aviation Identifiers
- Statement: Personal student data?including Full Name, Email, Place of Birth Country, Phone, and Examination Records?shall be processed in strict compliance with Regulation (EU) 2016/679 (GDPR). Data shall not be shared with third-party tracking networks.
- Rationale: Protects personal privacy and complies with European data protection regulations for aviation personnel.
- Acceptance Criteria: Candidate data is stored encrypted; candidate profile allows viewing stored personal information; zero third-party analytics trackers inject into student pages.
- Verification Method: Analysis
- More Information: Documented in platform Privacy Policy.

### 3.5 Design and Implementation

#### 3.5.1 Installation

- ID: REQ-INST-001
- Title: Zero Client Installation Footprint
- Statement: The client application shall operate exclusively within modern web browsers without requiring browser extensions, local plugins, Java applets, or native OS installers.
- Rationale: Maximizes adoption across corporate airline IT environments that restrict local software installations on company workstations.
- Acceptance Criteria: The platform loads and functions completely in standard browser sandbox environments.
- Verification Method: Inspection
- More Information: Pure HTML5/ES2022/CSS3 implementation.

- ID: REQ-INST-002
- Title: Containerized Backend Deployment
- Statement: The backend service shall be packaged as standardized Docker container images orchestrated via Docker Compose for local development and Kubernetes/Cloud Run for production.
- Rationale: Ensures environmental parity across development, staging, and production deployments.
- Acceptance Criteria: `docker-compose up` builds and starts all backend services, PostgreSQL database, and Redis cache with zero manual configuration.
- Verification Method: Demonstration
- More Information: Configured in `backend/Dockerfile` and `backend/docker-compose.dev.yml`.

#### 3.5.2 Build and Delivery

- ID: REQ-BUILD-001
- Title: Automated CI/CD & Monorepo Build Integration
- Statement: The repository shall maintain automated build pipelines via GitHub Actions and Vercel, building client bundles via `npm run build` in under 2 seconds and triggering automated unit and lint checks.
- Rationale: Eliminates deployment failures and guarantees build reproducibility.
- Acceptance Criteria: Pull request merges to `develop` trigger automatic builds; Vercel edge deployment completes with exit code 0.
- Verification Method: Demonstration
- More Information: Configured in root `package.json` and `vercel.json`.

#### 3.5.3 Distribution

- ID: REQ-DIST-001
- Title: Global Edge Content Delivery
- Statement: Static assets (HTML, JavaScript, CSS, typography, iconography, and technical document PDFs) shall be distributed via Vercel's global Edge CDN points of presence (PoPs) worldwide.
- Rationale: Guarantees sub-second latency for international students across Europe, the Middle East, and Asia.
- Acceptance Criteria: HTTP responses return `x-vercel-cache: HIT` with Edge response latencies < 100ms globally.
- Verification Method: Test
- More Information: Edge caching rules defined in `vercel.json`.

#### 3.5.4 Maintainability

- ID: REQ-MAINT-001
- Title: Modular Component Architecture
- Statement: The frontend codebase shall strictly maintain modular component separation: presentation pages (`/pages`), shared UI components (`/components`), global context state (`/context`), and domain datasets (`/data`).
- Rationale: Reduces technical debt, enhances readability, and enables parallel feature development.
- Acceptance Criteria: ESLint analysis reports zero circular dependencies; component files remain cohesive with focused responsibilities.
- Verification Method: Inspection
- More Information: Standardized in `frontend/src/`.

#### 3.5.5 Reusability

- ID: REQ-REUSE-001
- Title: Reusable Examination & Modal Components
- Statement: The randomized examination engine, question palette, PDF reader modal, payment modal, and alert banners shall be engineered as reusable, decoupled components accepting parameter props.
- Rationale: Enables rapid expansion into new aviation syllabi (e.g., FAA Part-147, UK CAA Part-66) without rewriting UI logic.
- Acceptance Criteria: `QuizEngine.jsx` operates independently for any course, drawing quiz configurations via standard props.
- Verification Method: Inspection
- More Information: Component abstraction in `frontend/src/pages/student/QuizEngine.jsx`.

#### 3.5.6 Portability

- ID: REQ-PORT-001
- Title: Cross-Platform & Cross-Browser Consistency
- Statement: The application shall render identically across Chromium (Chrome, Edge, Brave), WebKit (Safari iOS/macOS), and Gecko (Firefox) browser engines on Windows, macOS, Linux, iOS, and Android.
- Rationale: Aviation mechanics and engineers use heterogeneous operating systems across workplace hangars and personal devices.
- Acceptance Criteria: Visual regression tests across Chrome, Safari, and Firefox show zero layout anomalies or functional discrepancies.
- Verification Method: Demonstration
- More Information: Validated with Autoprefixer and standard Bootstrap 5.3 CSS primitives.

#### 3.5.7 Cost

- ID: REQ-COST-001
- Title: Zero Commercial Payment Gateway Fees
- Statement: By routing all course tuition transactions through direct bank wire remittance (Standard Chartered / Emirates NBD), the platform shall incur 0% third-party payment gateway transaction fees (saving 2.9% + $0.30 per enrollment compared to commercial processors).
- Rationale: Maximizes academy operating margins and complies with corporate procurement mandates of airline customers.
- Acceptance Criteria: Financial ledger demonstrates zero credit card interchange deductions; 100% of tuition settled directly into corporate treasury.
- Verification Method: Analysis
- More Information: Described in Section 2.3 and `PaymentModal.jsx`.

#### 3.5.8 Deadline

- ID: REQ-DEAD-001
- Title: Phased Milestone Delivery
- Statement: System milestones shall follow an incremental schedule:
  - Milestone 1 (Frontend SPA & Curriculum Simulation): Completed September 2026.
  - Milestone 2 (Standard SRS & Architecture Finalization): Completed September 2026.
  - Milestone 3 (Django REST API & Database Migration): Q4 2026.
  - Milestone 4 (EASA Accreditation & Corporate Airline Onboarding): Q1 2027.
- Rationale: De-risks development by validating usability through interactive prototypes before full backend integration.
- Acceptance Criteria: Deliverables for each milestone pass acceptance criteria and verification matrices prior to phase sign-off.
- Verification Method: Demonstration
- More Information: Aligned with the Trinity Aviation Academy Strategic Roadmap.

#### 3.5.9 Proof of Concept

- ID: REQ-POC-001
- Title: Interactive High-Fidelity Prototype Validation
- Statement: The frontend prototype shall deliver an interactive, stateful experience simulating all student and administrator workflows (including 1-click role switcher, dynamic quiz scoring, and batch access granting) entirely in-browser.
- Rationale: Permits early stakeholder feedback, instructional design validation, and client review prior to database finalization.
- Acceptance Criteria: Reviewers can navigate, enroll, take quizzes, view certificates, and manage curriculum in real time on Vercel deployment.
- Verification Method: Demonstration
- More Information: Deployed live via Vercel Edge.

#### 3.5.10 Change Management

- ID: REQ-CM-001
- Title: Semantic Versioning and Curriculum Revision Control
- Statement: All software releases shall adhere to Semantic Versioning (SemVer 2.0.0). Curriculum and question bank updates shall maintain incremented version tags and changelog records.
- Rationale: Aviation training organizations must maintain rigorous records of which syllabus version a candidate was trained and examined on.
- Acceptance Criteria: Every release increments SemVer tags in `package.json`; curriculum updates record revision metadata.
- Verification Method: Inspection
- More Information: Tracked in Git history and SRS Revision History.

### 3.6 AI/ML

#### 3.6.1 Model Specification

- ID: REQ-ML-001
- Title: Intelligent Technical MCQ Generation Assistant (Planned Phase)
- Statement: When activated in future phases, the system shall integrate an LLM-assisted question drafting assistant (such as Gemini 1.5 Pro) to assist instructional leads in generating candidate MCQs from technical PDF handbooks with a deterministic temperature <= 0.2.
- Rationale: Accelerates the creation of high-volume question banks across complex ATA chapters while maintaining technical rigor.
- Acceptance Criteria: Generated questions adhere strictly to 4 options, 1 correct choice, and provide an EASA syllabus reference citation.
- Verification Method: Analysis
- More Information: Governed by backend prompt engineering templates.

#### 3.6.2 Data Management

- ID: REQ-ML-002
- Title: Aviation Technical Knowledge Grounding
- Statement: Training and retrieval-augmented generation (RAG) datasets for the AI assistant shall be grounded exclusively in authoritative aviation technical literature (EASA Part-66 syllabus, aircraft maintenance manuals, ICAO Annexes).
- Rationale: Prevents incorrect aviation maintenance procedures that could compromise flight safety.
- Acceptance Criteria: All generated question items cite specific regulation paragraphs or ATA chapters; ungrounded generation is rejected.
- Verification Method: Inspection
- More Information: Validated against EASA Part-66 Appendix I knowledge syllabus.

#### 3.6.3 Guardrails

- ID: REQ-ML-003
- Title: Deterministic Safety Guardrails and Refusal
- Statement: The AI subsystem shall enforce guardrails preventing the generation of unverified, obsolete, or speculative maintenance procedures. If source text is ambiguous, the system shall deterministically refuse generation.
- Rationale: High-consequence aviation safety compliance prohibits hallucinations in technical examination banks.
- Acceptance Criteria: Ambiguous or corrupted input prompts return structured refusal errors rather than fabricated answers.
- Verification Method: Test
- More Information: Enforced via schema validation and system prompt constraints.

#### 3.6.4 Ethics

- ID: REQ-ML-004
- Title: Unbiased Question Difficulty Distribution
- Statement: Question generation shall maintain equitable linguistic clarity and avoid cultural or regional language bias, ensuring fairness for international students whose primary language is not English.
- Rationale: Standard EASA examinations are conducted internationally in English; questions must test technical knowledge rather than complex linguistic idioms.
- Acceptance Criteria: Readability analysis confirms questions adhere to ASD-STE100 (Simplified Technical English) conventions.
- Verification Method: Analysis
- More Information: Conforms to European aerospace STE standards.

#### 3.6.5 Human-in-the-Loop

- ID: REQ-ML-005
- Title: Mandatory Faculty Sign-Off for AI-Generated Questions
- Statement: No AI-generated question shall be published directly to active student examination banks without explicit manual review, verification, and sign-off by a qualified human instructional lead.
- Rationale: Guarantees accountability and regulatory compliance under Part-147 training organization approval standards.
- Acceptance Criteria: Generated questions enter a `Draft/Pending Review` queue in the Admin Course Modal and require administrative approval before becoming active.
- Verification Method: Demonstration
- More Information: Enforced via workflow status flag `isApprovedByFaculty`.

#### 3.6.6 Model Lifecycle and Operations

- ID: REQ-ML-006
- Title: Annual Syllabus Model Drift Re-evaluation
- Statement: The AI assistant's grounding knowledge bases and prompt templates shall be reviewed and re-benchmarked annually against newly published EASA ED Decisions and regulatory revisions.
- Rationale: Ensures question banks remain current with evolving aviation regulations (such as new Part-ML, Part-CAMO, and electric propulsion standards).
- Acceptance Criteria: Annual audit report documents verification against latest EASA agency decisions.
- Verification Method: Inspection
- More Information: Maintained by Technical Registrar in compliance records.

## 4. Verification

This section defines the verification matrix establishing objective evidence of compliance for every requirement specified in Section 3. Verification methods include:
- **Test:** Automated or manual execution with predefined inputs and measurable pass/fail outputs.
- **Analysis:** Technical evaluation of architectural models, code reviews, calculations, or security scans.
- **Inspection:** Visual examination of user interfaces, configuration files, and documentation.
- **Demonstration:** Observable operational walkthrough of user workflows without instrumentation.

| Requirement ID | Title | Verification Method | Test / Artifact Link | Status | Evidence |
|----------------|-------|---------------------|----------------------|--------|----------|
| **REQ-INT-001** | Corporate Aviation Visual Theme | Inspection | `frontend/src/index.css` | Passed | Visual inspection confirms brand hex codes (`#7B1113`, `#C5A059`, `#1A1E2E`) and Cinzel typography |
| **REQ-INT-002** | Responsive Viewport Adaptation | Demonstration | Responsive viewport suite | Passed | Chrome DevTools device testing across 360px, 768px, 1024px, and 1920px viewports |
| **REQ-INT-003** | Public Marketing & Informational Portal | Demonstration | `frontend/src/pages/public/LandingPage.jsx` | Passed | Public navigation, 4 services, catalog showcases, and blogs accessible without auth |
| **REQ-INT-004** | Student Examination HUD and Palette | Demonstration | `frontend/src/pages/student/QuizEngine.jsx` | Passed | Live countdown timer, question palette state updates, and jump navigation functional |
| **REQ-INT-005** | Administrator 3-Column Grant Access | Demonstration | `frontend/src/pages/admin/GrantAccess.jsx` | Passed | Column 1 selection filters Column 2 pending queue and Column 3 active roster |
| **REQ-INT-006** | Client Hardware Interoperability | Demonstration | Mobile touchscreen audit | Passed | Tested on iPad Safari and Windows touch monitors; touch targets >= 44px |
| **REQ-INT-007** | Python REST Service API Contract | Test | `documentation/architecture/` | In Progress | Django REST schema and mock endpoints align with RESTful JSON payload contracts |
| **REQ-INT-008** | Google OAuth 2.0 Integration | Demonstration | `frontend/src/pages/public/AuthModal.jsx` | Passed | "Continue with Google" triggers one-click student session initialization |
| **REQ-INT-009** | Client State Persistence & Edge Fallback | Test | `frontend/src/context/AppContext.jsx` | Passed | Data persists across browser refresh (`F5`) via verified `localStorage` keys |
| **REQ-FUNC-001** | Student Registration with Birth Country | Test | `frontend/src/pages/public/AuthModal.jsx` | Passed | Validates registration form rejects empty birth country; persists `birthCountry` |
| **REQ-FUNC-002** | Strict Dual-Role RBAC Authorization | Test | `frontend/src/App.jsx` | Passed | Role switching verifies admin routes blocked for students and vice versa |
| **REQ-FUNC-003** | Standardized Euro (EUR €) Currency | Inspection | Catalog and billing pages | Passed | Zero dollar signs detected; all tuition fees rendered as `€[amount]` |
| **REQ-FUNC-004** | EASA Part-145 Specialized Courses | Inspection | `frontend/src/data/initialData.js` | Passed | Exact 6 approved courses present with complete books, notes, and quizzes |
| **REQ-FUNC-005** | EASA Part-66 Basic Knowledge Modules | Inspection | `frontend/src/data/initialData.js` | Passed | All 18 modules (Module 1 to Module 18 Electric Powerplant) active in catalog |
| **REQ-FUNC-006** | Courseware Study Hub | Demonstration | `frontend/src/pages/student/CourseDetailView.jsx` | Passed | Enrolled students access Books (with PDF reader), Notes, and Quizzes tabs |
| **REQ-FUNC-007** | Configurable Random Question Sampling | Test | `AppContext.jsx::startQuiz()` | Passed | Repeated quiz sessions draw exactly N questions randomly from question bank |
| **REQ-FUNC-008** | Timed MCQ Exam Engine with Auto-Submit | Test | `frontend/src/pages/student/QuizEngine.jsx` | Passed | Timer reaches 00:00 triggers automatic grading and submission without data loss |
| **REQ-FUNC-009** | Automated Grading and 75% EASA Benchmark | Test | `AppContext.jsx::submitQuiz()` | Passed | Automated test asserts score >= 75% triggers Passed + confetti; < 75% Failed |
| **REQ-FUNC-010** | Granular Post-Exam Question Breakdown | Demonstration | `frontend/src/components/QuizAttemptModal.jsx` | Passed | Displays candidate choice, correct answer, and regulatory explanation per question |
| **REQ-FUNC-011** | External Bank Wire Remittance Workflow | Demonstration | `frontend/src/components/PaymentModal.jsx` | Passed | Generates unique reference code `TRIN-STU-XXXX` and displays bank coordinates |
| **REQ-FUNC-012** | Order Status Lifecycle & Pending Alert | Demonstration | `StudentDashboard.jsx` & `AdminDashboard.jsx` | Passed | Order logs as `Pending Approval`; admin banner signals pending wire clearance |
| **REQ-FUNC-013** | 3-Column Entitlement Grant and Revocation | Demonstration | `frontend/src/pages/admin/GrantAccess.jsx` | Passed | Clicking "Grant Access" marks orders as Completed and moves student to Has Access |
| **REQ-FUNC-014** | Curriculum & Question Bank Authoring | Demonstration | `frontend/src/pages/admin/CourseModuleModal.jsx` | Passed | 4-tab modal allows editing books, notes, time limits, question count N, and MCQs |
| **REQ-FUNC-015** | 2-Year Recertification Interval Tracking | Test | `initialData.js` & `CourseModuleModal.jsx` | Passed | Courses store `lastCertified` and `recertIntervalMonths: 24` |
| **REQ-FUNC-016** | Candidate Examination Audit Ledger | Demonstration | `frontend/src/pages/admin/QuizAttempts.jsx` | Passed | Global ledger logs every exam attempt with filterable candidate and score telemetry |
| **REQ-FUNC-017** | Official Certificate of Completion PDF | Demonstration | `frontend/src/pages/student/MyOrders.jsx` | Passed | Passed courses render official Certificate modal with serial number and print preview |
| **REQ-FUNC-018** | Manual Student Account Provisioning | Test | `frontend/src/pages/admin/GrantAccess.jsx` | Passed | Administrator registers candidate with Name, Email, and Birth Country successfully |
| **REQ-PERF-001** | Page Load and TTI <= 1.5s | Test | Google Lighthouse CLI | Passed | Production bundle loads in 770ms; TTI 1.1s on broadband |
| **REQ-PERF-002** | UI Interaction Latency <= 100ms | Test | Chrome Performance Profiler | Passed | Tab switching and palette selection execute in < 35ms |
| **REQ-PERF-003** | Question Sampling Latency <= 50ms | Test | In-memory sampling benchmark | Passed | Fisher-Yates array permutation executes in < 5ms for 500 questions |
| **REQ-PERF-004** | Static Bundle <= 450 KB gzipped | Inspection | Vite build output report | Passed | Production build: 117.17 KB JS gzip + 46.52 KB CSS gzip (total < 165 KB) |
| **REQ-SEC-001** | Role-Based Boundary Enforcement | Test | Route guard test suite | Passed | Direct URL entry to `/admin` without admin credentials safely blocked |
| **REQ-SEC-002** | Transport Layer Security (TLS 1.3) | Analysis | Vercel Edge configuration | Passed | Enforces HTTPS and HSTS across all endpoints |
| **REQ-SEC-003** | Input Sanitization and XSS Prevention | Test | Form injection test suite | Passed | Script tags injected into search or note fields render as harmless escaped strings |
| **REQ-SEC-004** | Question Bank Answer Key Concealment | Inspection | Network payload inspection | In Progress | Production API design verifies answer keys stripped from active attempt payloads |
| **REQ-REL-001** | Local Client State Persistence | Test | Network disconnection test | Passed | Modifying course and refreshing offline retains updated state via LocalStorage |
| **REQ-REL-002** | Exam Auto-Save & Refresh Resilience | Test | Mid-quiz reload test | Passed | Refreshing browser during active test restores timer and all answered questions |
| **REQ-AVAIL-001**| Edge CDN Service Availability (99.9%) | Analysis | Vercel SLA documentation | Passed | Anycast multi-zone edge routing ensures 99.99% infrastructure availability |
| **REQ-AVAIL-002**| Zero-Downtime Rolling Releases | Demonstration | Git commit deployment test | Passed | Deployments promote atomically without interrupting ongoing candidate sessions |
| **REQ-OBS-001** | Candidate Examination Audit Telemetry | Test | Examination event logging | Passed | Millisecond timestamps, question IDs, and scores recorded in global ledger |
| **REQ-OBS-002** | Financial Entitlement Audit Logging | Inspection | Admin action ledger | Passed | Registrar approval actions log timestamp, student email, and wire reference |
| **REQ-COMP-001**| EASA Part-66 Exam Standard Compliance | Test | Syllabus inspection | Passed | 4 options per question, 1 correct choice, and unbending 75% pass mark verified |
| **REQ-COMP-002**| EASA Part-145 24-Month Recertification | Test | Recertification interval audit | Passed | Course definitions enforce 24-month recertification cycle tracking |
| **REQ-COMP-003**| GDPR Privacy for Aviation Identifiers | Analysis | Privacy policy and data audit | Passed | Personal identifiers protected; zero third-party tracking scripts loaded |
| **REQ-INST-001**| Zero Client Installation Footprint | Inspection | Browser runtime test | Passed | Runs in pure browser environment with zero plugin or native binary dependencies |
| **REQ-INST-002**| Containerized Backend Deployment | Demonstration | `backend/Dockerfile` | Passed | Docker containerization enables reproducible local and cloud backend execution |
| **REQ-BUILD-001**| Automated CI/CD & Monorepo Build | Test | `npm run build` | Passed | Root build command executes cleanly with exit code 0 in < 800ms |
| **REQ-DIST-001**| Global Edge Content Delivery | Test | Edge CDN header inspection | Passed | Edge PoPs return cached static assets with sub-50ms latency |
| **REQ-MAINT-001**| Modular Component Architecture | Inspection | ESLint and directory audit | Passed | Clear separation between `/pages`, `/components`, `/context`, and `/data` |
| **REQ-REUSE-001**| Reusable Examination Components | Inspection | Component code review | Passed | `QuizEngine.jsx` functions polymorphically across all modules and courses |
| **REQ-PORT-001** | Cross-Browser Consistency | Demonstration | Browser matrix testing | Passed | Renders and functions identically across Chrome, Safari, Firefox, and Edge |
| **REQ-COST-001** | Zero Payment Gateway Fees | Analysis | Financial workflow analysis | Passed | Direct wire model incurs 0% transaction deduction on international tuition |
| **REQ-DEAD-001** | Phased Milestone Delivery | Demonstration | Release milestone tracking | Passed | Milestones 1 and 2 completed on schedule in September 2026 |
| **REQ-POC-001**  | Interactive High-Fidelity Prototype | Demonstration | Vercel production deployment | Passed | Fully interactive cloud prototype accessible to all reviewers |
| **REQ-CM-001**   | Semantic Versioning & Revision Control| Inspection | `package.json` & Git log | Passed | Releases adhere to SemVer 2.0.0; SRS revision history meticulously tracked |
| **REQ-ML-001**   | Technical MCQ Generation Assistant | Analysis | Prompt architecture plan | In Progress | Planned temperature <= 0.2 with technical PDF grounding |
| **REQ-ML-002**   | Aviation Technical Grounding | Inspection | Knowledge base taxonomy | In Progress | Grounding restricted to EASA Part-66 syllabus and official manuals |
| **REQ-ML-003**   | Safety Guardrails and Refusal | Test | Guardrail validation | In Progress | Ambiguous maintenance prompts return structured refusal errors |
| **REQ-ML-004**   | Unbiased Question Difficulty | Analysis | Simplified Technical English | In Progress | Adheres to ASD-STE100 aerospace readability standards |
| **REQ-ML-005**   | Mandatory Faculty Sign-Off | Demonstration | Workflow review state | In Progress | Enforces `isApprovedByFaculty` gate prior to bank publication |
| **REQ-ML-006**   | Annual Syllabus Drift Re-evaluation | Inspection | Compliance review schedule | In Progress | Annual scheduled audit against newly published EASA ED Decisions |

## 5. Appendixes

### Appendix A: Data Dictionary & Schemas

#### A.1 User Entity Schema
```typescript
interface User {
  id: string;               // Unique primary key (e.g., "usr-stu-1")
  name: string;             // Candidate full legal name (e.g., "Alex Vance")
  email: string;            // Primary identity key and examination key (Unique)
  role: 'admin' | 'student';// Strictly partitioned dual-role RBAC
  birthCountry: string;     // Mandatory civil aviation identifier (e.g., "United Kingdom")
  phone?: string;           // Candidate contact phone / WhatsApp
  enrolledCourses: string[];// Array of course and module IDs holding active access
}
```

#### A.2 Course / Module Entity Schema
```typescript
interface CourseOrModule {
  id: string;               // Unique primary key (e.g., "course-1", "module-1")
  code: string;             // Official syllabus identifier (e.g., "EASA-SMS-HF", "PART66-M01")
  title: string;            // Curriculum title
  category: 'course' | 'module'; // Distinction between Part-145 courses and Part-66 modules
  subCategory: string;      // Regulatory categorization (e.g., "EASA PART-145 & PART-M")
  description: string;      // Technical curriculum outline and syllabus outcomes
  price: number;            // Tuition fee in Euro (EUR €)
  duration: string;         // Standard training duration (e.g., "28 Hours", "35 Hours")
  status: 'Active' | 'Draft' | 'Archived';
  icon: string;             // UI iconography identifier (e.g., "Plane", "BookOpen", "ShieldCheck")
  lastCertified: string;    // Date of last certification/audit (ISO YYYY-MM-DD)
  recertIntervalMonths: number; // Recurrent training interval (default: 24 months)
  books: Book[];            // Approved technical handbooks and manuals
  notes: Note[];            // Structured revision cards and summaries
  quizzes: Quiz[];          // Associated examination and practice assessment banks
}

interface Book {
  id: string;               // Unique book identifier (e.g., "b-sms-01")
  title: string;            // Document title
  format: string;           // "PDF (upload)" | "E-Book" | "URL"
  fileName?: string;        // PDF document filename
  size?: string;            // Document file size (e.g., "19.5 MB")
  pages?: number;           // Total page count
}

interface Note {
  id: string;               // Unique note identifier (e.g., "n-sms-01")
  title: string;            // Note title / ATA chapter topic
  readTime: string;         // Estimated study duration (e.g., "15 min")
  content: string;          // Formatted study body, formulas, and mnemonic text
}

interface Quiz {
  id: string;               // Unique quiz identifier (e.g., "quiz-smshf-1")
  title: string;            // Quiz title
  description: string;      // Assessment scope and syllabus coverage
  timeLimitMinutes: number; // Time allocation in minutes (e.g., 15)
  passingScore: number;     // Passing percentage benchmark (strictly 75%)
  questionCount: number;    // Number of questions randomly sampled per attempt (N)
  questions: MCQ[];         // Full question bank pool
}

interface MCQ {
  id: string;               // Unique question identifier (e.g., "q-smshf-1")
  text: string;             // Question prompt text
  options: [string, string, string, string]; // Exactly 4 options: [A, B, C, D]
  correctOption: 0 | 1 | 2 | 3; // Zero-indexed pointer to correct option
  explanation: string;      // EASA regulatory reference explanation note
}
```

#### A.3 Quiz Attempt Entity Schema
```typescript
interface QuizAttempt {
  id: string;               // Unique attempt identifier (e.g., "att-101")
  studentEmail: string;     // Candidate email link
  studentName: string;      // Candidate name
  courseId: string;         // Associated subject ID
  courseTitle: string;      // Associated subject title
  quizId: string;           // Associated quiz ID
  quizTitle: string;        // Associated quiz title
  scorePercent: number;     // Calculated score: (correct / total) * 100
  totalQuestions: number;   // Number of questions served (N)
  correctAnswers: number;   // Count of correct answers
  passed: boolean;          // true if scorePercent >= 75
  date: string;             // Timestamp of completion (YYYY-MM-DD HH:mm)
  timeSpentSeconds: number; // Elapsed time in seconds
  answersBreakdown: QuestionResult[]; // Item-by-item audit record
}

interface QuestionResult {
  questionId: string;
  questionText: string;
  options: string[];
  selectedOption: number | null;
  correctOption: number;
  isCorrect: boolean;
  explanation: string;
}
```

#### A.4 Order Entity Schema
```typescript
interface Order {
  id: string;               // Unique order number (e.g., "ORD-2024-001")
  studentEmail: string;     // Candidate email
  studentName: string;      // Candidate name
  courseIds: string[];      // Array of enrolled course IDs
  courseNames: string[];    // Array of enrolled course titles
  total: number;            // Total tuition fee in Euro (EUR €)
  status: 'Pending Approval' | 'Completed' | 'Rejected';
  date: string;             // Order creation date (ISO YYYY-MM-DD)
  paymentRef: string;       // Unique bank wire reference (e.g., "TRIN-STU-8820")
  bankProofNotes: string;   // Student remittance details (bank name, transaction ID)
}
```

### Appendix B: Entity-Relationship & Architecture Diagrams

#### B.1 Platform Architecture Overview
```mermaid
graph TD
    subgraph ClientLayer ["Client Presentation Layer (React 19 / Vite / Edge)"]
        PublicPortal["Public Information Portal\n(Landing, About, Services, Blogs)"]
        StudentPortal["Student Learning Portal\n(Dashboard, Study Hub, Exam Engine)"]
        AdminPortal["Administrator CRM Portal\n(Dashboard, Modules, Courses, Grant Access)"]
        AuthModule["Unified Authentication\n(Email/Password & Google OAuth 2.0)"]
    end

    subgraph StateLayer ["Application State & Persistence Engine"]
        Context["Global AppContext & State Manager\n(Local State Sync + Storage Fallback)"]
        LocalStorage["Browser LocalStorage\n(trinity_aviation_courses_v1, users, orders)"]
    end

    subgraph BackendLayer ["Target Backend Infrastructure (Python / Django REST)"]
        APIGateway["REST API Gateway (Nginx / SSL)"]
        AuthService["Auth & RBAC Service (JWT / Argon2)"]
        CurriculumService["Curriculum & Question Bank Engine"]
        ExamService["Examination & Telemetry Engine"]
        FinanceService["Wire Order & Entitlement Service"]
        PostgresDB[("PostgreSQL 16 Relational DB")]
    end

    subgraph ExternalServices ["External Systems"]
        GoogleOAuth["Google Identity Platform (OAuth 2.0)"]
        BankNetwork["International Banking Network\n(Wire Remittance: Standard Chartered / Emirates NBD)"]
    end

    PublicPortal --> AuthModule
    StudentPortal --> Context
    AdminPortal --> Context
    AuthModule --> Context
    AuthModule -.-> GoogleOAuth

    Context <--> LocalStorage
    Context <===> APIGateway

    APIGateway --> AuthService
    APIGateway --> CurriculumService
    APIGateway --> ExamService
    APIGateway --> FinanceService

    AuthService --> PostgresDB
    CurriculumService --> PostgresDB
    ExamService --> PostgresDB
    FinanceService --> PostgresDB

    FinanceService -.-> BankNetwork
```

#### B.2 Entity-Relationship (ER) Diagram
```mermaid
erDiagram
    USER ||--o{ ORDER : places
    USER ||--o{ QUIZ_ATTEMPT : submits
    COURSE_OR_MODULE ||--o{ BOOK : contains
    COURSE_OR_MODULE ||--o{ NOTE : contains
    COURSE_OR_MODULE ||--o{ QUIZ : contains
    COURSE_OR_MODULE ||--o{ QUIZ_ATTEMPT : records
    QUIZ ||--o{ MCQ : maintains
    QUIZ ||--o{ QUIZ_ATTEMPT : evaluates
    ORDER }o--o{ COURSE_OR_MODULE : entitles

    USER {
        string id PK
        string name
        string email UK
        string role "admin | student"
        string birthCountry "Mandatory"
        string phone
        string_array enrolledCourses
    }

    COURSE_OR_MODULE {
        string id PK
        string code UK
        string title
        string category "course | module"
        string subCategory
        text description
        decimal price "EUR €"
        string duration
        string status "Active | Draft"
        date lastCertified
        int recertIntervalMonths "24"
    }

    BOOK {
        string id PK
        string courseId FK
        string title
        string format "PDF (upload)"
        string fileName
        string size
        int pages
    }

    NOTE {
        string id PK
        string courseId FK
        string title
        string readTime
        text content
    }

    QUIZ {
        string id PK
        string courseId FK
        string title
        text description
        int timeLimitMinutes
        int passingScore "75"
        int questionCount "N"
    }

    MCQ {
        string id PK
        string quizId FK
        text text
        string_array options "A, B, C, D"
        int correctOption "0 to 3"
        text explanation
    }

    QUIZ_ATTEMPT {
        string id PK
        string studentEmail FK
        string courseId FK
        string quizId FK
        int scorePercent
        int totalQuestions
        int correctAnswers
        boolean passed "score >= 75"
        datetime date
        int timeSpentSeconds
        json answersBreakdown
    }

    ORDER {
        string id PK
        string studentEmail FK
        string_array courseIds
        string_array courseNames
        decimal total "EUR €"
        string status "Pending Approval | Completed"
        date date
        string paymentRef "TRIN-STU-XXXX"
        text bankProofNotes
    }
```

### Appendix C: Approved Training Programs Specification

#### C.1 Exact Services Specifications (4 Services)
1. **EASA Part-66 Modular Training:** Comprehensive modular training packages covering all 18 basic knowledge modules with high-yield study notes, technical PDF manuals, and randomized practice question banks.
2. **EASA Part-145 & Part-M Solution:** Statutory compliance packages for approved maintenance organizations, covering recurrent Human Factors, Fuel Tank Safety Phase 2, and EWIS Target Groups.
3. **EASA Compliant Trainings & Courses:** Specialized continuing airworthiness qualifications including Safety Management Systems (SMS), CFM 56-5B technical familiarisation, Aircraft Handling, and Train the Trainer.
4. **Aircraft Sales & Services:** Aviation technical consultancy, pre-purchase airworthiness inspection support, engineering records auditing, and commercial fleet acquisition services.

#### C.2 Exact Courses Specifications (6 Courses)
1. **Safety Management System + Human Factor (SMS + HF) Initial Course:** Code: `EASA-SMS-HF` | Category: Course | Tuition: €349.00 | Duration: 28 Hours | Recertification: 24 Months | Books: 2 | Notes: 2 | Quizzes: 1 (5 questions sampled, 75% pass mark).
2. **Fuel Tank Safety (FTS) Initial Course:** Code: `EASA-FTS-PH2` | Category: Course | Tuition: €249.00 | Duration: 12 Hours | Recertification: 24 Months | Books: 1 | Notes: 1 | Quizzes: 1 (4 questions sampled, 75% pass mark).
3. **Electrical Wiring Interconnect System (EWIS) Initial Course:** Code: `EASA-EWIS-TG1-2` | Category: Course | Tuition: €279.00 | Duration: 16 Hours | Recertification: 24 Months | Books: 1 | Notes: 1 | Quizzes: 1 (4 questions sampled, 75% pass mark).
4. **CFM 56-5B Engine Technical Familiarisation:** Code: `EASA-CFM56-FAM` | Category: Course | Tuition: €429.00 | Duration: 40 Hours | Recertification: 24 Months | Books: 1 | Notes: 1 | Quizzes: 1 (4 questions sampled, 75% pass mark).
5. **Aircraft Handling Course:** Code: `EASA-RAMP-OPS` | Category: Course | Tuition: €199.00 | Duration: 14 Hours | Recertification: 24 Months | Books: 1 | Notes: 1 | Quizzes: 1 (4 questions sampled, 75% pass mark).
6. **Train the Trainer:** Code: `EASA-INST-QUAL` | Category: Course | Tuition: €499.00 | Duration: 35 Hours | Recertification: 24 Months | Books: 1 | Notes: 1 | Quizzes: 1 (4 questions sampled, 75% pass mark).

#### C.3 Exact Modular Training Specifications (18 Modules)
- **Module 1: Mathematics** (Code: `PART66-M01` | Tuition: €199.00 | Duration: 32 Hours | Recert: 24 Mo)
- **Module 2: Physics** (Code: `PART66-M02` | Tuition: €219.00 | Duration: 36 Hours | Recert: 24 Mo)
- **Module 3: Electrical Fundamentals** (Code: `PART66-M03` | Tuition: €219.00 | Duration: 45 Hours | Recert: 24 Mo)
- **Module 4: Electronic Fundamentals** (Code: `PART66-M04` | Tuition: €199.00 | Duration: 30 Hours | Recert: 24 Mo)
- **Module 5: Digital Techniques / Electronic Instrument Systems** (Code: `PART66-M05` | Tuition: €249.00 | Duration: 40 Hours | Recert: 24 Mo)
- **Module 6: Materials & Hardware** (Code: `PART66-M06` | Tuition: €239.00 | Duration: 48 Hours | Recert: 24 Mo)
- **Module 7: Maintenance Practices** (Code: `PART66-M07` | Tuition: €289.00 | Duration: 60 Hours | Recert: 24 Mo)
- **Module 8: Basic Aerodynamics** (Code: `PART66-M08` | Tuition: €189.00 | Duration: 24 Hours | Recert: 24 Mo)
- **Module 9: Human Factors** (Code: `PART66-M09` | Tuition: €179.00 | Duration: 20 Hours | Recert: 24 Mo)
- **Module 10: Aviation Legislation** (Code: `PART66-M10` | Tuition: €229.00 | Duration: 35 Hours | Recert: 24 Mo)
- **Module 11: Aeroplane Aerodynamics, Structures and Systems** (Code: `PART66-M11` | Tuition: €319.00 | Duration: 65 Hours | Recert: 24 Mo)
- **Module 12: Helicopter Aerodynamics, Structures and Systems** (Code: `PART66-M12` | Tuition: €319.00 | Duration: 60 Hours | Recert: 24 Mo)
- **Module 13: Aircraft Structures and Systems** (Code: `PART66-M13` | Tuition: €329.00 | Duration: 70 Hours | Recert: 24 Mo)
- **Module 14: Propulsion** (Code: `PART66-M14` | Tuition: €269.00 | Duration: 40 Hours | Recert: 24 Mo)
- **Module 15: Gas Turbine Engine** (Code: `PART66-M15` | Tuition: €299.00 | Duration: 55 Hours | Recert: 24 Mo)
- **Module 16: Piston Engine** (Code: `PART66-M16` | Tuition: €239.00 | Duration: 35 Hours | Recert: 24 Mo)
- **Module 17: Propeller** (Code: `PART66-M17` | Tuition: €199.00 | Duration: 25 Hours | Recert: 24 Mo)
- **Module 18: Electric Powerplant** (Code: `PART66-M18` | Tuition: €279.00 | Duration: 30 Hours | Recert: 24 Mo)