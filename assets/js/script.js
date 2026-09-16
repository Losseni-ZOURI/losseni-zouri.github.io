/* =====================================================
   Losseni ZOURI — Portfolio Data Analytics
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initContactForm();
  initMobileNav();
  initStatCounters();
});

/**
 * Révèle progressivement les blocs au scroll.
 * Désactivé automatiquement si l'utilisateur préfère moins d'animations
 * (les éléments restent alors directement visibles via le CSS de repli).
 */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('in'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => io.observe(el));
}

/**
 * Le formulaire de contact ouvre le client mail de l'utilisateur (mailto:)
 * plutôt que de simuler un envoi côté serveur inexistant sur GitHub Pages.
 * Le message de confirmation reflète donc bien ce qui vient de se passer :
 * le client mail a été ouvert, pas "le message a été envoyé".
 */
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const confirmation = document.getElementById('form-ok');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.querySelector('#c-name').value.trim();
    const email = form.querySelector('#c-email').value.trim();
    const subject = form.querySelector('#c-subject').value.trim();
    const message = form.querySelector('#c-msg').value.trim();

    const mailSubject = subject || 'Contact depuis le portfolio';
    const mailBody = `De : ${name} <${email}>\n\n${message}`;

    const mailtoUrl = `mailto:zourilossenii@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    window.location.href = mailtoUrl;

    if (confirmation) {
      confirmation.style.display = 'block';
      confirmation.setAttribute('role', 'status');
    }
    form.reset();
  });
}

/**
 * Anime les chiffres clés de 0 jusqu'à leur valeur réelle au moment où ils
 * entrent dans le viewport. Les valeurs sont de vraies données du portfolio
 * (nombre de projets, de stages...), pas des métriques inventées.
 */
function initStatCounters() {
  const counters = document.querySelectorAll('.stat-value[data-count-to]');
  if (!counters.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    counters.forEach(el => { el.textContent = el.dataset.countTo; });
    return;
  }

  const animateCount = (el) => {
    const target = parseInt(el.dataset.countTo, 10);
    if (!Number.isFinite(target)) return;
    const duration = 900;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(el => io.observe(el));
}

/**
 * Menu mobile : bouton hamburger contrôlant l'affichage des liens de nav.
 * Se ferme au clic sur un lien, à l'extérieur, ou avec la touche Échap.
 */
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  const close = () => {
    toggle.setAttribute('aria-expanded', 'false');
    links.classList.remove('is-open');
  };
  const open = () => {
    toggle.setAttribute('aria-expanded', 'true');
    links.classList.add('is-open');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? close() : open();
  });

  links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  document.addEventListener('click', (e) => {
    if (!links.contains(e.target) && !toggle.contains(e.target)) close();
  });
}
