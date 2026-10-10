# ⚡ Vedant Rathavi — Personal Portfolio & Product Showcase

> **"I learn deeply from every project I build. I take ideas from zero to a live deployed product using AI with deep conceptual understanding."**

Welcome to the personal portfolio website of **Vedant Rathavi**. This repository contains a full-stack, data-driven portfolio designed, engineered, and deployed using Django, HTML5, Vanilla CSS3, ES6 JavaScript, and Web3Forms.

---

## 🌟 Key Highlights & Architecture

* **💡 Idea → Live Product Focus**: Every section showcases practical execution, real technical lessons learned, and zero-fluff capabilities.
* **📦 Featured Case Study — [Wholesaler ERP System](https://github.com/vedant1994/wholesaler-erp)**: An end-to-end Enterprise Resource Planning platform built with Django & Python, featuring transactional SQL schemas, RBAC security, and automated financial reporting.
* **🚀 Data-Driven Case Studies**: Project cards are dynamically populated via `js/projects.js` for effortless project additions.
* **🌓 Dual Theme System**: Automatic system preference detection (`prefers-color-scheme`) with smooth manual light/dark mode persistence via `localStorage`.
* **✉️ Direct Web3Forms AJAX Contact Form**: Built-in AJAX fetch integration submitting messages directly to `vedantrathavi2006@gmail.com` with real-time user feedback.
* **🎨 Modern Responsive Typography**: Custom font system (`Space Grotesk`, `Inter`, `JetBrains Mono`) with fluid CSS `clamp()` scaling and WCAG AA accessibility contrast.
* **☁️ Cloud & Production Ready**: Pre-configured with `requirements.txt` and `vercel.json` for 1-click cloud deployment on Vercel, Render, Railway, or Netlify.

---

## 📁 Repository Directory Structure

```text
Portfolio/
├── README.md                     # Project documentation
├── index.html                    # Standalone static site entrypoint
├── css/                          # CSS stylesheet (design system, dark/light themes)
├── js/                           # JavaScript controllers & project data repository
├── assets/images/                # Profile picture & project screenshots
└── portfolio/                    # Full Django Web Application
    ├── .env                      # Django API secrets (Git-ignored)
    ├── .env.example              # Template for Django environment variables
    ├── .gitignore                # Django git ignore rules
    ├── manage.py                 # Django CLI management entrypoint
    ├── requirements.txt          # Production dependencies (gunicorn, whitenoise)
    ├── vercel.json               # 1-Click Vercel deployment configuration
    ├── portfolio/                # Core Django configuration (settings.py, urls.py, wsgi.py)
    └── information/              # Information App
        ├── urls.py               # Route handlers
        ├── views.py              # Ingests .env secrets & renders index.html
        ├── static/               # Django static assets (css, js, images)
        └── templates/
            ├── index.html        # Main Django template
            └── dashboard.html    # Legacy template alias
```

---

## 🚀 Quickstart & Local Setup

### Prerequisites
* **Python 3.10+**
* **Git**

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/vedant1994/portfolio.git
   cd portfolio
   ```

2. **Set Up Environment Variables**:
   Copy `.env.example` to `.env` in both root and `portfolio/` directory:
   ```bash
   cp portfolio/.env.example portfolio/.env
   ```
   *Fill in your secret keys in `portfolio/.env`:*
   ```env
   WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
   DEBUG=True
   ```

3. **Set Up Virtual Environment & Run Django**:
   ```bash
   # Navigate to the Django project folder
   cd portfolio

   # Create and activate virtual environment
   python -m venv venv
   source venv/bin/activate    # On macOS/Linux
   .\venv\Scripts\activate     # On Windows

   # Run system check & start development server
   python manage.py check
   python manage.py runserver
   ```

4. Open your browser and navigate to `http://127.0.0.1:8000/`.

---

## 📬 Contact & Links

* **Developer**: Vedant Rathavi
* **Email**: [vedantrathavi2006@gmail.com](mailto:vedantrathavi2006@gmail.com)
* **GitHub**: [github.com/vedant1994](https://github.com/vedant1994)
* **LinkedIn**: [linkedin.com/in/vedant-rathavi-336537390](https://www.linkedin.com/in/vedant-rathavi-336537390/)
* **Wholesaler ERP Repository**: [github.com/vedant1994/wholesaler-erp](https://github.com/vedant1994/wholesaler-erp)
