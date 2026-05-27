// Smooth scroll for sidebar nav links
document.querySelectorAll('.sidebar-nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
    // Move focus to the section for keyboard/screen reader users
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
});

// Active nav highlight via IntersectionObserver
const sections = document.querySelectorAll('main .section[id]');
const navLinks = document.querySelectorAll('.sidebar-nav a[href^="#"]');

function setActive(id) {
  navLinks.forEach(link => {
    const isActive = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) setActive(entry.target.id);
  });
}, {
  rootMargin: '-10% 0px -55% 0px',
  threshold: 0,
});

sections.forEach(section => observer.observe(section));
