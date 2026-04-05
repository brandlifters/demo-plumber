/* ============================================================
   FlowRight Plumbing Co. — Main Script
   BrandLifters Demo Site
   ============================================================ */

/* ---------- Sticky Nav Shadow on Scroll ---------- */
const nav = document.getElementById('nav');

if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}


/* ---------- Mobile Nav Toggle ---------- */
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}


/* ---------- Demo Contact Form ---------- */
const contactForm  = document.getElementById('contact-form');
const formSuccess  = document.getElementById('form-success');

if (contactForm && formSuccess) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic field check (visual only — no real validation needed for demo)
    const required = contactForm.querySelectorAll('[required]');
    let allFilled = true;

    required.forEach(field => {
      if (!field.value.trim()) {
        allFilled = false;
        field.style.borderColor = 'var(--red)';
        field.addEventListener('input', () => {
          field.style.borderColor = '';
        }, { once: true });
      }
    });

    if (!allFilled) return;

    // Show success state
    contactForm.style.display = 'none';
    formSuccess.style.display = 'block';
  });
}


/* ---------- FAQ Accordion (details/summary) ---------- */
// Close other open items when one opens — optional UX enhancement
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      faqItems.forEach(other => {
        if (other !== item && other.open) {
          other.removeAttribute('open');
        }
      });
    }
  });
});


/* ---------- Smooth Anchor Scroll ---------- */
// Only for same-page anchor links (# links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      const offset = nav ? nav.offsetHeight + 16 : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
