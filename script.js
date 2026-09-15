/* =====================================================
   Losseni ZOURI — Portfolio Data Analytics
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initContactForm();
  initMobileNav();
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

    const mailtoUrl = `mailto:losseni.zouri@etu.u-paris.fr?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    window.location.href = mailtoUrl;

    if (confirmation) {
      confirmation.style.display = 'block';
      confirmation.setAttribute('role', 'status');
    }
    form.reset();
  });
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
