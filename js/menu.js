// Menú hamburguesa y barra lateral para navegación móvil

document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.querySelector('.hamburger-menu');
  var sidebar = document.querySelector('.mobile-sidebar');
  var body = document.body;
  if (hamburger && sidebar) {
    hamburger.addEventListener('click', function() {
      sidebar.classList.toggle('active');
      body.classList.toggle('menu-open');
    });
    sidebar.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        sidebar.classList.remove('active');
        body.classList.remove('menu-open');
      });
    });
  }
});
