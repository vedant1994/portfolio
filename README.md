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
├── .env                          # API keys & local secrets (Git-ignored)
├── .env.example                  # Shared template for environment variables
├── .gitignore                    # Global git ignore configuration
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

## 🛠️ How to Add New Projects

Adding a new project case study takes 10 seconds:

1. Open [`portfolio/information/static/js/projects.js`](file:///c:/Users/BAPS/OneDrive/Portfolio/portfolio/information/static/js/projects.js) (or `js/projects.js`).
2. Add a new project object to `projectsData`:
   ```javascript
   {
     id: "my-new-project",
     title: "My New AI App",
     badge: "Full-Stack",
     tagline: "Short 1-line description of what the project does.",
     image: "assets/images/my_project_preview.jpg",
     githubUrl: "https://github.com/vedant1994/my-new-project",
     liveUrl: "https://my-app.vercel.app",
     tools: ["Python", "Django", "TypeScript", "Vercel"],
     whatIBuilt: "Detailed 1-line summary of what was built.",
     lessonsLearned: [
       "Real technical lesson 1.",
       "Real technical lesson 2.",
       "Real technical lesson 3."
     ],
     nextImprovements: "Feature planned for the next sprint.",
     category: "Web App"
   }
   ```
3. Refresh the page—your new case-study card will render automatically!

---

## ☁️ Production Deployment

### Option 1: Vercel (Recommended 1-Click)
1. Push code to GitHub.
2. Go to [Vercel.com](https://vercel.com) and import the repository `portfolio`.
3. Set root directory to `portfolio`.
4. Add Environment Variable: `WEB3FORMS_ACCESS_KEY` = `your_key`.
5. Click **Deploy**.

### Option 2: Render / Railway
1. Create a new Web Service pointing to your repository.
2. Build command: `pip install -r requirements.txt`
3. Start command: `gunicorn portfolio.wsgi:application`

---

## 📬 Contact & Links

* **Developer**: Vedant Rathavi
* **Email**: [vedantrathavi2006@gmail.com](mailto:vedantrathavi2006@gmail.com)
* **GitHub**: [github.com/vedant1994](https://github.com/vedant1994)
* **LinkedIn**: [linkedin.com/in/vedant-rathavi-336537390](https://www.linkedin.com/in/vedant-rathavi-336537390/)
* **Wholesaler ERP Repository**: [github.com/vedant1994/wholesaler-erp](https://github.com/vedant1994/wholesaler-erp)
