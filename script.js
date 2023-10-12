function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

function expandCard(card) {
    card.classList.toggle('expanded');
    var description = card.querySelector('.description');
    description.style.display = (description.style.display === 'none') ? 'block' : 'none';
}

window.addEventListener('DOMContentLoaded', () => {
  const image = document.querySelector('.imagenSup');

  image.addEventListener('click', () => {
    image.style.transform = 'translateX(50%)';
  });


});

document.addEventListener('DOMContentLoaded', function() {
  const verMasBtns = document.querySelectorAll('.ver-mas');

  verMasBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const parrafoAdicional = this.nextElementSibling;
      parrafoAdicional.style.display = (parrafoAdicional.style.display === 'none') ? 'block' : 'none';
    });
  });
});

/** SLIDER INICIO */
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

function updateSlider() {
    const translateX = -currentIndex * 33.33;
    slider.style.transform = `translateX(${translateX}%)`;
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

setInterval(nextSlide, 5000);

/**formulario validacion */
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente.

    // Obtener valores de los campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validar los campos (aquí puedes agregar más validaciones según tus necesidades)
    if (name.trim() === "") {
        alert("Por favor, ingrese su nombre.");
        return;
    }

    // Validación de correo electrónico básica
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingrese una dirección de correo electrónico válida.");
        return;
    }

    if (message.trim() === "") {
        alert("Por favor, ingrese un mensaje.");
        return;
    }

    // Si pasa la validación, puedes enviar el formulario o realizar otras acciones aquí.
    // Por ejemplo, puedes enviar los datos a un servidor.
    // form.submit(); // Descomenta esta línea si deseas enviar el formulario.

    alert("Formulario enviado correctamente.");
});

/**CONSULTA API */
const gallery = document.querySelector('.gallery');

// Función para cargar imágenes aleatorias desde Picsum con desenfoque.
function fetchImages() {
    const imageCount = 9; // Cantidad de imágenes que deseas cargar

    for (let i = 0; i < imageCount; i++) {
        const imgElement = document.createElement('img');
        imgElement.src = `https://picsum.photos/400/500/?grey=2&random=${i}`;
        gallery.appendChild(imgElement);
    }
}

fetchImages();

