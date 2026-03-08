// ===========================
// THE STRUCTURE OF POWER
// Interactive CLI-Aesthetic Report
// ===========================

(function () {
  'use strict';

  // --- Active TOC tracking ---
  const sections = document.querySelectorAll('.section');
  const tocLinks = document.querySelectorAll('.toc-link');
  const sidebar = document.getElementById('sidebar');
  const mobileToggle = document.getElementById('mobileToggle');

  function updateActiveToc() {
    const scrollPos = window.scrollY + 100;

    let currentSection = null;
    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        currentSection = section.id;
      }
    });

    tocLinks.forEach(function (link) {
      if (link.getAttribute('data-section') === currentSection) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Throttled scroll listener
  var scrollTimeout;
  window.addEventListener('scroll', function () {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(function () {
      scrollTimeout = null;
      updateActiveToc();
    }, 50);
  });

  updateActiveToc();

  // --- Mobile TOC toggle ---
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });
  }

  // Close sidebar on link click (mobile)
  tocLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 900) {
        sidebar.classList.remove('open');
      }
    });
  });

  // Close sidebar on outside click (mobile)
  document.addEventListener('click', function (e) {
    if (window.innerWidth <= 900 &&
        sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        !mobileToggle.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });

  // --- Smooth scroll for TOC links ---
  tocLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      // Only handle hash links — let cross-page links navigate normally
      if (!href || href.charAt(0) !== '#') return;
      e.preventDefault();
      var targetId = href.substring(1);
      var target = document.getElementById(targetId);
      if (target) {
        var offset = target.offsetTop - 50;
        window.scrollTo({ top: offset, behavior: 'smooth' });
        history.pushState(null, null, '#' + targetId);
      }
    });
  });

  // --- Keyboard navigation ---
  document.addEventListener('keydown', function (e) {
    // 'j' = next section, 'k' = previous section
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    var sectionIds = Array.from(sections).map(function (s) { return s.id; });
    var activeLink = document.querySelector('.toc-link.active');
    var currentIdx = activeLink
      ? sectionIds.indexOf(activeLink.getAttribute('data-section'))
      : -1;

    if (e.key === 'j' && currentIdx < sectionIds.length - 1) {
      e.preventDefault();
      var nextSection = document.getElementById(sectionIds[currentIdx + 1]);
      window.scrollTo({ top: nextSection.offsetTop - 50, behavior: 'smooth' });
    }

    if (e.key === 'k' && currentIdx > 0) {
      e.preventDefault();
      var prevSection = document.getElementById(sectionIds[currentIdx - 1]);
      window.scrollTo({ top: prevSection.offsetTop - 50, behavior: 'smooth' });
    }

    // 't' = toggle TOC on mobile
    if (e.key === 't' && window.innerWidth <= 900) {
      e.preventDefault();
      sidebar.classList.toggle('open');
    }
  });

  // --- Handle initial hash ---
  if (window.location.hash) {
    var hashTarget = document.querySelector(window.location.hash);
    if (hashTarget) {
      setTimeout(function () {
        window.scrollTo({ top: hashTarget.offsetTop - 50, behavior: 'smooth' });
      }, 100);
    }
  }
})();
