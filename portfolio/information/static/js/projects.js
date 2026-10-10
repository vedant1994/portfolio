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
];
