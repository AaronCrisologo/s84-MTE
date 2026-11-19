    // Close the mobile menu after tapping a link, and highlight the current section.
    document.querySelectorAll('#navbarNav a').forEach(function (link) {
      link.addEventListener('click', function () {
        var nav = document.getElementById('navbarNav');
        if (nav.classList.contains('show')) {
          bootstrap.Collapse.getOrCreateInstance(nav).hide();
        }
      });
    });

    var sections = document.querySelectorAll('section[id], header[id]');
    var links = document.querySelectorAll('#navbarNav a');
    window.addEventListener('scroll', function () {
      var current = '';
      sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 120) { current = section.id; }
      });
      links.forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
      });
    }, { passive: true });