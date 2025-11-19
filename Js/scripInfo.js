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
