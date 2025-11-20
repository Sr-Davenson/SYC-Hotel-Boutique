// === Animaciones al hacer scroll ===
document.addEventListener('DOMContentLoaded', function () {
  // Selecciona todos los elementos con clase .animated
  const animatedElements = document.querySelectorAll('.animated');

  // Verifica que existan elementos
  if (animatedElements.length === 0) {
    console.warn('No se encontraron elementos con clase .animated');
    return;
  }

  // Crea el observador
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Agrega la clase visible para activar la animación
          entry.target.classList.add('visible');
        }
      });
    },
    { 
      threshold: 0.1, // Se activa cuando el 10% del elemento es visible
      rootMargin: '0px 0px -50px 0px' // Ajusta el área de activación
    }
  );

  // Observa cada elemento
  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});


// === Detectar zoom y cambiar a menú móvil ===
function detectZoom() {
  const scale = window.devicePixelRatio || 1;
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const desktopMenu = document.querySelector('.desktop-menu');

  if (scale >= 2) {
    // Zoom 175% o más: activar menú móvil
    desktopMenu.style.display = 'none';
    hamburgerMenu.style.display = 'block';
  } else {
    // Zoom normal: mantener menú de escritorio
    desktopMenu.style.display = 'flex';
    hamburgerMenu.style.display = 'none';
  }
}

// === Menú hamburguesa con control de display ===
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // Detectar zoom al cargar
  detectZoom();

  // Detectar zoom al redimensionar
  window.addEventListener('resize', detectZoom);

  hamburgerBtn.addEventListener('click', function () {
    // Cambia el display a flex antes de activar la clase open
    mobileMenu.style.display = 'flex';
    
    // Añade la clase open para deslizar el menú
    mobileMenu.classList.toggle('open');
  });

  // Cerrar menú al hacer clic en un enlace
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      
      // Después de un breve delay, oculta el menú
      setTimeout(() => {
        mobileMenu.style.display = 'none';
      }, 400); // 400ms = duración de la animación
    });
  });

  // Cerrar menú al hacer clic fuera de él
  document.addEventListener('click', function (event) {
    if (!mobileMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
      mobileMenu.classList.remove('open');
      
      // Después de un breve delay, oculta el menú
      setTimeout(() => {
        mobileMenu.style.display = 'none';
      }, 400);
    }
  });
});