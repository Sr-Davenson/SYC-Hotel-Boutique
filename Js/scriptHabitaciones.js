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


// === Detectar si es escritorio o móvil ===
function checkScreenSize() {
  const mobileMenu = document.getElementById('mobile-menu');

  if (window.innerWidth > 768) {
    // En escritorio: ocultar el menú móvil
    mobileMenu.style.display = 'none';
  } else {
    // En móvil: mostrar el menú móvil como flex
    mobileMenu.style.display = 'flex';
  }
}

// === Menú hamburguesa ===
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // Verificar tamaño de pantalla al cargar
  checkScreenSize();

  // Verificar tamaño de pantalla al redimensionar
  window.addEventListener('resize', checkScreenSize);

  hamburgerBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
  });

  // Cerrar menú al hacer clic en un enlace
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });

  // Cerrar menú al hacer clic fuera de él
  document.addEventListener('click', function (event) {
    if (!mobileMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
      mobileMenu.classList.remove('open');
    }
  });

  // === Animaciones al hacer scroll ===
  const animatedElements = document.querySelectorAll('.animated');

  if (animatedElements.length === 0) {
    console.warn('No se encontraron elementos con clase .animated');
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});



