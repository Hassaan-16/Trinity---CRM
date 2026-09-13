# Trinity Aviation Academy — Enterprise Platform

An educational and examination management platform for aviation engineering students preparing for **EASA Part-66 Basic Licences** (Modules 1–17) and **EASA Part-145 / Part-M** statutory recurrent certifications (Human Factors, Fuel Tank Safety Phase 2, EWIS, Continuing Airworthiness, Maintenance Planning, QA Systems).

---

## 📁 Project Structure

The project has been restructured into clean `frontend/` and `backend/` directories with a unified root `.gitignore`:

```
Trinity---CRM/
├── .gitignore                   # Unified root .gitignore (Node, Python, Django, IDEs)
├── README.md                    # Project documentation & runbook
│
├── frontend/                    # React 19 + Bootstrap 5 + Vite SPA (Vercel-ready)
│   ├── src/                     # React application source code
│   │   ├── components/          # Navigation, modals, role switchers
│   │   ├── context/             # AppContext state & simulation layer
│   │   ├── data/                # Initial EASA Part-66 & Part-145 datasets
│   │   └── pages/               # Public, Student, and Admin portals
│   ├── index.html               # Main HTML entry point
│   ├── vite.config.js           # Vite build configuration
│   ├── vercel.json              # SPA routing rewrite rule
│   └── package.json             # Frontend dependencies & scripts
│
├── backend/                     # Django 5.2 + DRF + Celery + PostgreSQL Service
│   ├── config/                  # Settings, WSGI/ASGI, URLs, Nginx, Docker env
│   │   ├── settings/            # base.py, dev.py, prod.py, stage.py
│   │   └── env/                 # Environment variable configurations
│   ├── project/                 # Django domain apps
│   │   ├── users/               # Custom User (email-based, 2 roles: Admin/Student, Google OAuth)
│   │   ├── curriculum/          # Subjects (Part-66/145), Books (PDFs), Notes, last_certified
│   │   ├── assessments/         # Quizzes (editable question count), Question Banks, Grading
│   │   ├── enrollments/         # Orders (wire proof), Entitlements, 3-column Grant Access
│   │   └── core/                # Base models, logging, health checks
│   ├── manage.py                # Django CLI management script
│   ├── Makefile                 # Docker compose lifecycle commands
│   ├── pyproject.toml           # Python dependencies and tool configs
│   └── Dockerfile               # Production container image definition
│
└── documentation/               # Specifications & Architectural Documentation
    ├── srs/
    │   ├── SRS.md               # IEEE 830 compliant Software Requirements Specification
    │   └── index.html           # Interactive visual HTML presentation of the SRS
    └── architecture/
        └── BACKEND_ARCHITECTURE.md  # Detailed backend architectural design & models
```

---

## ✈️ Core Capabilities

1. **User Identity & Roles:**
   - Strictly 2 user types: **Admin** and **Student**.
   - Email is the primary unique identifier.
   - **Google OAuth 2.0**: Native sign-in and registration with Google accounts.

2. **Curriculum & Recertification (`last_certified`):**
   - EASA Part-66 modules (1–17) and Part-145/M courses.
   - **2-Year Recurrent Training Cycle**: Tracks `last_certified` and triggers recertification exams every 24 months per EASA Part-145.A.30(e).

3. **Anti-Cheat Random Question Sampling:**
   - Quizzes have an editable `question_count` ($N$).
   - When a student launches a test, $N$ questions are randomly drawn from the question bank.
   - Answer keys and explanations are concealed server-side until submission.
   - Automatic grading against the official **75% EASA pass mark**.

4. **External Bank Wire & 3-Column Grant Access:**
   - Bank transfer settlement with unique reference generation (`TRIN-STU-XXXX`).
   - Admin manages access in a 3-column matrix: Select Subject $\rightarrow$ No Access / Applied students (with pending wire references) $\rightarrow$ Has Access list with revocation.

---

## 🚀 Getting Started

### 1. Running the Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
# Application starts at http://localhost:3000
```

### 2. Running the Backend (Django)
```bash
cd backend

# Option A: Local Python virtual environment
python -m venv venv
venv\Scripts\activate          # On Windows
pip install -r config/requirements/local.txt
python manage.py migrate
python manage.py runserver 8000

# Option B: Docker Compose
make dev.up.d
```

---

## 📖 Documentation
- **Interactive SRS Document:** [`documentation/srs/index.html`](documentation/srs/index.html)
- **Raw SRS Markdown:** [`documentation/srs/SRS.md`](documentation/srs/SRS.md)
- **Backend Architecture Blueprint:** [`documentation/architecture/BACKEND_ARCHITECTURE.md`](documentation/architecture/BACKEND_ARCHITECTURE.md)
