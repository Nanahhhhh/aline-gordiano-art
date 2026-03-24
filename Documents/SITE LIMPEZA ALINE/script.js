/* ============================================================
   ALINE'S CLEANING — SCRIPT
   Navbar scroll state · Mobile menu · FAQ accordion ·
   Scroll-triggered fade-in · Hero parallax
   ============================================================ */

(function () {
  'use strict';

  /* ── 1. NAVBAR ── transparent → solid on scroll ─────── */
  const navbar = document.getElementById('navbar');

  function refreshNavbar() {
    navbar.classList.toggle('is-scrolled', window.scrollY > 50);
  }

  window.addEventListener('scroll', refreshNavbar, { passive: true });
  refreshNavbar(); // run on load


  /* ── 2. MOBILE HAMBURGER MENU ───────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');
  let menuOpen    = false;

  function openMenu() {
    menuOpen = true;
    hamburger.classList.add('is-open');
    navMenu.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menuOpen = false;
    hamburger.classList.remove('is-open');
    navMenu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    menuOpen ? closeMenu() : openMenu();
  });

  // Close when any menu link is tapped
  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on outside tap
  document.addEventListener('click', function (e) {
    if (menuOpen && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });


  /* ── 3. SMOOTH SCROLL for anchor links ──────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#' || !href) return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      var offset = 76; // navbar height
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });


  /* ── 4. FAQ ACCORDION ───────────────────────────────── */
  var faqButtons = document.querySelectorAll('.faq-q');

  faqButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      var answerId = this.getAttribute('aria-controls');
      var answerEl = document.getElementById(answerId);

      // Collapse all others
      faqButtons.forEach(function (otherBtn) {
        var otherId = otherBtn.getAttribute('aria-controls');
        var otherEl = document.getElementById(otherId);
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          if (otherEl) otherEl.classList.remove('is-open');
        }
      });

      // Toggle this one
      if (expanded) {
        this.setAttribute('aria-expanded', 'false');
        answerEl && answerEl.classList.remove('is-open');
      } else {
        this.setAttribute('aria-expanded', 'true');
        answerEl && answerEl.classList.add('is-open');
      }
    });
  });


  /* ── 5. SCROLL REVEAL (Subtle & Elegant) ──────────── */
  const revealTargets = document.querySelectorAll(
    '.hero-body, .intro-strip .container, .section:not(.faq) .section-header, .svc-card, .price-card, .pillar, .review-card, .area-pill, .contact-layout, .meta-row'
  );

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealTargets.forEach((el, index) => {
      el.classList.add('reveal');
      
      // Stagger within the same row/container slightly
      // Based on relative position to avoid long delays on deep scrolls
      const delay = (index % 4) * 0.1; 
      el.style.transitionDelay = delay + 's';
      
      revealObserver.observe(el);
    });
  } else {
    // Fallback for older browsers
    revealTargets.forEach(el => el.classList.add('active'));
  }


  /* ── 6. HERO CANVAS PARALLAX (subtle) ──────────────── */
  var heroCanvas = document.querySelector('.hero-canvas');
  if (heroCanvas) {
    window.addEventListener('scroll', function () {
      var sy = window.scrollY;
      if (sy < window.innerHeight) {
        heroCanvas.style.transform = 'translateY(' + (sy * 0.28) + 'px)';
      }
    }, { passive: true });
  }

})();
