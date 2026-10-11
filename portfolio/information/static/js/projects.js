/**
 * projects.js - Data-driven Project Repository
 */

const projectsData = [
  {
    id: "wholesaler-erp",
    title: "Wholesaler ERP System",
    badge: "Featured Project",
    tagline: "End-to-end Enterprise Resource Planning platform for wholesale inventory & financial workflow tracking.",
    image: "/static/images/wholesaler_erp.jpg",
    githubUrl: "https://github.com/vedant1994/wholesaler-erp",
    tools: ["Python / Django", "HTML5 / CSS3 / JavaScript", "SQLite / PostgreSQL", "Gemini AI", "Antigravity IDE"],
    whatIBuilt: "Designed and engineered a full-featured ERP system for wholesalers to manage inventory stock, supplier orders, invoices, and automated financial reports in one unified portal.",
    lessonsLearned: [
      "Architected transactional database schemas with strict integrity constraints to eliminate inventory race conditions during high-volume sales.",
      "Engineered granular Role-Based Access Control (RBAC) to enforce secure multi-tier user permissions across accounting and warehouse modules.",
      "Used AI pairing for rapid unit test generation and mock data synthesis, reducing turnaround time by 60% while maintaining high test coverage.",
      "Mastered Django ORM query optimization and indexing to keep complex analytics query responses well under 150ms."
    ],
    nextImprovements: "Add Celery + Redis worker queues for background PDF invoice generation and automated Webhook notifications for low stock alerts.",
    category: "Full-Stack"
  },
  {
    id: "job-tracker-ai",
    title: "Job Tracker — AI-Powered Application Manager",
    badge: "AI & Full-Stack",
    tagline: "Smart application tracker integrating Gemini AI for automated cover letters, interview Q&A, and resume match scoring.",
    image: "/static/images/job_tracker.jpg",
    githubUrl: "https://github.com/vedant1994/job-tracker",
    tools: ["Laravel 12 / PHP 8.2", "Google Gemini AI", "Blade Templates", "Tailwind CSS v4", "Alpine.js", "MySQL / SQLite"],
    whatIBuilt: "Built a full-stack web application to help job seekers track applications with complete CRUD operations, status analytics, and automated Gemini AI cover letters and resume-to-job match scoring (0-100).",
    lessonsLearned: [
      "Integrated Google Gemini AI via Laravel HTTP Client with prompt engineering for structured gap analysis.",
      "Designed relational schema connecting users, applications, and AI generation history tables via Eloquent ORM.",
      "Implemented secure authentication and profile management using Laravel Breeze."
    ],
    nextImprovements: "Add email integration to automatically parse incoming interview invites from recruiter emails.",
    category: "AI & Full-Stack"
  },
  {
    id: "weighbridge-erp",
    title: "Weighbridge Industrial ERP System",
    badge: "Production Experience",
    tagline: "Industrial vehicle weighment and slip generation software deployed in active production.",
    image: "/static/images/weighbridge_erp.jpg",
    tools: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5 / CSS3", "MVC Architecture"],
    whatIBuilt: "Contributed to live production ERP software managing vehicle entry/exit, gross/tare/net weight capture, and automated ticket/slip generation with reporting history.",
    lessonsLearned: [
      "Wrote and optimized complex MySQL queries for high-speed vehicle weighment logs and history reporting.",
      "Built dynamic, responsive front-end pages and slip generation views with cross-browser compatibility.",
      "Collaborated with QA and senior developers to resolve production bugs and maintain zero downtime."
    ],
    nextImprovements: "Integrate hardware serial communication for direct weight scale sensor readings.",
    category: "Enterprise ERP"
  }
];
