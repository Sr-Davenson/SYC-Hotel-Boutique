                              // === Animaciones al hacer scroll ===
document.addEventListener('DOMContentLoaded', function () {
  const habitaciones = document.querySelectorAll('.habitacion.animated');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 } // Aparece cuando el 10% del elemento es visible
  );

  habitaciones.forEach((hab) => {
    observer.observe(hab);
  });
});
