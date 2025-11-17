document.addEventListener('DOMContentLoaded', function () {
  // === Validación de fechas y WhatsApp (como antes) ===
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('fechaEntrada').min = today;
  document.getElementById('fechaSalida').min = today;

  document.getElementById('formReserva').addEventListener('submit', function (e) {
    const entrada = new Date(document.getElementById('fechaEntrada').value);
    const salida = new Date(document.getElementById('fechaSalida').value);
    if (entrada >= salida) {
      e.preventDefault();
      alert('La fecha de salida debe ser posterior a la de entrada.');
    }
  });

  document.getElementById('btnWhatsApp').addEventListener('click', function (e) {
    e.preventDefault();

    const habitacion = document.getElementById('habitacion').value;
    const entrada = document.getElementById('fechaEntrada').value;
    const salida = document.getElementById('fechaSalida').value;
    const huéspedes = document.getElementById('huéspedes').value;

    if (!habitacion || !entrada || !salida || !huéspedes) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const mensaje = `Hola, quiero reservar una habitación ${habitacion} para ${huéspedes} huéspedes.\nEntrada: ${entrada}\nSalida: ${salida}\n\n¿Disponible?`;
    const numero = "+573232356766"; // Cambia por tu número real
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  });

  // === Animaciones al hacer scroll ===
  const animatedElements = document.querySelectorAll('.animated');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.1 } // Animar cuando el 10% del elemento es visible
  );

  animatedElements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
  });
});
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const dotsContainer = document.getElementById('carouselDots');

// Crear puntos indicadores
images.forEach((img, index) => {
  const dot = document.createElement('div');
  dot.classList.add('carousel-dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

function updateDots() {
  document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentImageIndex);
  });
}

function showImage(index) {
  // Ocultar todas las imágenes
  images.forEach(img => img.classList.remove('active'));
  // Mostrar la imagen actual
  images[index].classList.add('active');
  currentImageIndex = index;
  updateDots();
}

function nextImage() {
  const totalImages = images.length;
  const nextIndex = (currentImageIndex + 1) % totalImages;
  showImage(nextIndex);
}

function prevImage() {
  const totalImages = images.length;
  const prevIndex = (currentImageIndex - 1 + totalImages) % totalImages;
  showImage(prevIndex);
}

function goToSlide(index) {
  showImage(index);
}

let autoSlideInterval;

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextImage();
  }, 4000); // Cambia cada 5 segundos (5000 ms)
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Iniciar el carrusel automático al cargar la página
window.addEventListener('load', startAutoSlide);

// Opcional: Pausar al pasar el mouse encima del carrusel
document.querySelector('.carousel-container')?.addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.carousel-container')?.addEventListener('mouseleave', startAutoSlide);
