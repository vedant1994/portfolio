# ⚡ Vedant Rathavi — Personal Portfolio & Case Study Showcase

> **"I learn deeply from every project I build. I take ideas from zero to a live deployed product using AI with deep conceptual understanding."**

This repository contains the personal portfolio website of **Vedant Rathavi**. It features a production-ready, data-driven architecture built with **Django**, **HTML5**, **Vanilla CSS3**, **ES6 JavaScript**, and **Web3Forms**.

---

## 🚀 Key Features

* **💡 Idea → Live Product Mindset**: Designed to showcase real-world execution, technical lessons learned, and proof of capabilities without buzzword fluff.
* **📦 Featured Case Study — [Wholesaler ERP System](https://github.com/vedant1994/wholesaler-erp)**: End-to-end Enterprise Resource Planning platform for wholesale inventory & financial workflow tracking, built with Python & Django.
* **📊 Data-Driven Project Management**: All project cards are populated dynamically via [`js/projects.js`](file:///c:/Users/BAPS/OneDrive/Portfolio/js/projects.js), making it simple to add or update case studies.
* **🌓 Automatic & Manual Dark/Light Mode**: Detects system preferences (`prefers-color-scheme`) with a toggle switch that persists user settings in `localStorage`.
* **✉️ Web3Forms AJAX Contact System**: Direct contact form integration sending messages straight to `vedantrathavi2006@gmail.com` with real-time submission feedback.
* **🎨 Modern Responsive Typography**: Uses `Space Grotesk` (Headings), `Inter` (Body), and `JetBrains Mono` (Code & Accents) with fluid `clamp()` type scaling and WCAG AA contrast compliance.
* **☁️ Multi-Platform Deployment Ready**: Deployable as either a Django Web App (on Vercel/Render/Railway) or a Static Site (on GitHub Pages/Netlify).

---

## 📁 Accurate Project Directory Structure

```text
Portfolio/
├── .env                          # Master environment variables & API keys (Git-ignored)
├── .env.example                  # Template for environment variables
├── .gitignore                    # Master git ignore file (Python, Django, secrets, cache)
├── README.md                     # Comprehensive project documentation
├── index.html                    # Root static HTML site entrypoint
├── css/
│   └── styles.css                # Master CSS stylesheet (design system, clamp typography, themes)
├── js/
│   ├── main.js                   # UI controllers (theme switcher, mobile nav, Web3Forms fetch)
│   └── projects.js               # Data-driven project repository array
├── assets/
│   └── images/
│       ├── profile_pic.jpeg      # Developer avatar picture
        └── wholesaler_erp.jpg    # Wholesaler ERP case-study preview
└── portfolio/                    # Full Django Web Application Subdirectory
    ├── manage.py                 # Django management CLI script
    ├── requirements.txt          # Django dependencies (Django, Gunicorn, Whitenoise)
    ├── vercel.json               # Vercel deployment configuration
    ├── portfolio/                # Django project settings & routing
    │   ├── settings.py           # Core Django settings
    │   ├── urls.py               # Root URL router
    │   ├── wsgi.py               # WSGI entrypoint for production server
    │   └── asgi.py               # ASGI entrypoint
    └── information/              # Primary Django Application
        ├── urls.py               # Application URL routes
        ├── views.py              # Ingests root .env secrets & renders index.html
        ├── static/               # Django static files
        │   ├── css/styles.css
        │   ├── js/main.js
        │   ├── js/projects.js
        │   └── images/
        │       ├── profile_pic.jpeg
        │       └── wholesaler_erp.jpg
        └── templates/
            ├── index.html        # Primary Django HTML template
            └── dashboard.html    # Additional template entrypoint
```

---

## ⚙️ Environment Configuration

Secret keys and API tokens are managed via the root [`.env`](file:///c:/Users/BAPS/OneDrive/Portfolio/.env) file:

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Configure your keys inside `.env`:
   ```env
   # Environment Variables & API Keys
   WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
   DJANGO_SECRET_KEY=your_django_secret_key_here
   DEBUG=True
   ```

> **Note**: The `.env` file is git-ignored to keep private API credentials safe.

---

## 💻 Local Setup & Development Instructions

### Option A: Running as a Django Web Application

1. **Clone & Navigate**:
   ```bash
   git clone https://github.com/vedant1994/portfolio.git
   cd portfolio/portfolio
   ```

2. **Create & Activate Virtual Environment**:
   ```bash
   # Windows (PowerShell)
   python -m venv venv
   .\venv\Scripts\activate

   # macOS / Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install Dependencies & Check System**:
   ```bash
   pip install -r requirements.txt
   python manage.py check
   ```

4. **Start Django Server**:
   ```bash
   python manage.py runserver
   ```
   Open `http://127.0.0.1:8000/` in your browser.

---

### Option B: Running as a Standalone Static Site

Simply open [`index.html`](file:///c:/Users/BAPS/OneDrive/Portfolio/index.html) directly in any modern web browser or serve it using a lightweight local web server:
```bash
npx serve .
```

---

## 🛠️ Adding New Projects

To add or update project case studies:

1. Open [`js/projects.js`](file:///c:/Users/BAPS/OneDrive/Portfolio/js/projects.js) (and [`portfolio/information/static/js/projects.js`](file:///c:/Users/BAPS/OneDrive/Portfolio/portfolio/information/static/js/projects.js)).
2. Add a project entry to `projectsData`:
   ```javascript
   {
     id: "my-project-id",
     title: "Project Title",
     badge: "Full-Stack",
     tagline: "Short 1-line description of what the project does.",
     image: "assets/images/my_project_preview.jpg",
     githubUrl: "https://github.com/vedant1994/my-repo",
     liveUrl: "https://my-live-project.com",
     tools: ["Python / Django", "JavaScript", "PostgreSQL"],
     whatIBuilt: "Summary of what was built.",
     lessonsLearned: [
       "Real lesson 1.",
       "Real lesson 2.",
       "Real lesson 3."
     ],
     nextImprovements: "Planned future enhancements.",
     category: "Full-Stack"
   }
   ```
3. The portfolio will immediately render the updated project card.

---

## 📬 Contact & Links

* **Developer**: Vedant Rathavi
* **Email**: [vedantrathavi2006@gmail.com](mailto:vedantrathavi2006@gmail.com)
* **GitHub**: [github.com/vedant1994](https://github.com/vedant1994)
* **LinkedIn**: [linkedin.com/in/vedant-rathavi-336537390](https://www.linkedin.com/in/vedant-rathavi-336537390/)
* **Wholesaler ERP Repository**: [github.com/vedant1994/wholesaler-erp](https://github.com/vedant1994/wholesaler-erp)
