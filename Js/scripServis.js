// === Animaciones al hacer scroll ===
document.addEventListener('DOMContentLoaded', function () {
  const animatedElements = document.querySelectorAll('.animated, .experiencia');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});

