/**
 * main.js - Core Application Controller
 * Vedant Rathavi Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeManager();
  initMobileNav();
  renderProjects();
  initScrollReveal();
  initContactForm();
  initCopyEmail();
});

function initThemeManager() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = prefersDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', initialTheme);
    updateThemeIcon(initialTheme);
  }

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById('theme-icon');
  if (!themeIcon) return;
  themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  themeIcon.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
}

function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container || typeof projectsData === 'undefined') return;

  container.innerHTML = projectsData.map(project => `
    <article class="project-card reveal" id="project-${project.id}">
      <div class="project-media">
        <img src="${project.image}" alt="${project.title} Preview" loading="lazy" width="600" height="400">
        <span class="project-badge-tag">${project.badge}</span>
      </div>
      <div class="project-body">
        <div class="project-header">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-tagline">${project.tagline}</p>
        </div>

        <div class="project-section-title">What I Built</div>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">
          ${project.whatIBuilt}
        </p>

        <div class="project-section-title">Tools & AI Used</div>
        <div class="project-tools-list">
          ${project.tools.map(tool => `<span class="tool-chip">${tool}</span>`).join('')}
        </div>

        <div class="project-section-title">What I Learned</div>
        <ul class="lessons-list">
          ${project.lessonsLearned.map(lesson => `<li>${lesson}</li>`).join('')}
        </ul>

        <div class="project-section-title">Next Improvement</div>
        <div class="improvement-box">
          💡 ${project.nextImprovements}
        </div>

        <div class="project-links">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub Repository
          </a>
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;">
            Live Project ↗
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));
}

/* ==========================================================================
   WEB3FORMS REAL AJAX SUBMISSION HANDLER
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form || !status) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      const formData = new FormData(form);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();

      if (response.status === 200 && data.success) {
        status.className = 'form-status success';
        status.textContent = '✓ Thank you! Your message has been sent to Vedant successfully.';
        form.reset();
      } else {
        status.className = 'form-status error';
        status.textContent = data.message || '⚠️ Something went wrong. Please check your inputs and try again.';
      }
    } catch (err) {
      status.className = 'form-status error';
      status.textContent = '⚠️ Network error. Please try again later.';
    } finally {
      btn.textContent = originalText;
      btn.disabled = false;
      status.style.display = 'block';
    }
  });
}

function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = 'vedantrathavi2006@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      const origText = copyBtn.textContent;
      copyBtn.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = origText;
      }, 2000);
    }).catch(() => {
      alert(`Email: ${email}`);
    });
  });
}
