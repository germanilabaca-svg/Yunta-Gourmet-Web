// ============ Yunta Gourmet — landing interactions ============

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('siteHeader');
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  const yearEl = document.getElementById('year');
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  // Footer year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header background on scroll
  const onScroll = () => {
    const scrolled = window.scrollY > 40;
    header.classList.toggle('is-scrolled', scrolled);
    // Mirrored on <body> so the sibling .main-nav (kept outside the header on
    // purpose — see styles.css) can match the header's scrolled state without
    // needing to be a descendant of it.
    document.body.classList.toggle('is-scrolled', scrolled);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile nav toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = document.body.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // Contact form -> mailto fallback (no backend attached yet)
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = form.nombre.value.trim();
      const email = form.email.value.trim();
      const motivo = form.motivo.value.trim();
      const mensaje = form.mensaje.value.trim();

      if (!nombre || !email || !mensaje) {
        formStatus.textContent = 'Por favor completa los campos requeridos.';
        return;
      }

      const subject = encodeURIComponent(
        motivo ? `Yunta Gourmet — ${motivo}` : 'Yunta Gourmet — Contacto desde el sitio web'
      );
      const body = encodeURIComponent(
        `Nombre: ${nombre}\nEmail: ${email}\nMotivo: ${motivo || '-'}\n\nMensaje:\n${mensaje}`
      );

      window.location.href = `mailto:contacto@thieleilabaca.com?subject=${subject}&body=${body}`;
      formStatus.textContent = 'Abriendo tu cliente de correo…';
    });
  }
});
