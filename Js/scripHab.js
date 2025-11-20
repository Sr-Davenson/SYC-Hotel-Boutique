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
  }, 5000); // Cambia cada 5 segundos (5000 ms)
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Iniciar el carrusel automático al cargar la página
window.addEventListener('load', startAutoSlide);

// Opcional: Pausar al pasar el mouse encima del carrusel
document.querySelector('.carousel-container')?.addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.carousel-container')?.addEventListener('mouseleave', startAutoSlide);

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
  { threshold: 0.1 }
);

animatedElements.forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
  observer.observe(el);
});

// === Formulario de Reserva ===
document.addEventListener('DOMContentLoaded', function () {
  const today = new Date().toISOString().split('T')[0];
  const entradaInput = document.getElementById('entrada-doble');
  const salidaInput = document.getElementById('salida-doble');

  if (entradaInput && salidaInput) {
    entradaInput.min = today;
    salidaInput.min = today;

    // Validar que la salida sea posterior a la entrada
    entradaInput.addEventListener('change', function () {
      salidaInput.min = entradaInput.value;
    });

    // Manejo del formulario
    const form = document.querySelector('.formReserva');
    const tipoHabitacion = form.getAttribute('data-habitacion');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const entrada = document.getElementById('entrada-doble').value;
      const salida = document.getElementById('salida-doble').value;

      if (!entrada || !salida) {
        alert('Por favor, completa todas las fechas.');
        return;
      }

      const entradaDate = new Date(entrada);
      const salidaDate = new Date(salida);

      if (entradaDate >= salidaDate) {
        alert('La fecha de salida debe ser posterior a la de entrada.');
        return;
      }

      // Generar mensaje de WhatsApp
      // Formatear fecha a dd/mm/aaaa
function formatDate(dateString) {
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
}

// Generar mensaje de WhatsApp
const entradaFormateada = formatDate(entrada);
const salidaFormateada = formatDate(salida);

const mensaje = `Hola, quiero reservar una habitación ${tipoHabitacion}.\nEntrada: ${entradaFormateada}\nSalida: ${salidaFormateada}\n\n¿Está disponible?`;

      const numero = "+573232356766"; // Tu número de WhatsApp
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

      // Abrir WhatsApp
      window.open(url, '_blank');
    });
  }
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