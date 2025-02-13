window.onload = function () {
    setTimeout(() => {
        const ventana = document.querySelector('.inicio');

        if (ventana) {
            ventana.style.opacity = '1'; // Hace visible el carrusel
            ventana.style.transform = 'translateX(0)'; // Lo mueve al centro
        }

        // 🔥 Aplicamos la animación solo a la primera diapositiva
        const primerItem = document.querySelector('.carousel-item.active');

        if (primerItem) {
            primerItem.classList.add('animar-entrada'); // Agregamos clase para la animación
        }

        // 🛠️ Después de la animación, aseguramos que Bootstrap maneje el carrusel
        setTimeout(() => {
            if (primerItem) {
                primerItem.classList.remove('animar-entrada'); // Removemos la animación
            }
        }, 500); // Se elimina después de 1 segundo
    }, 500);
};






document.addEventListener("DOMContentLoaded", () => {
    const contenido = document.getElementById("miContenido");
    const sectionPrecios = document.getElementById("precios");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contenido.classList.add("visible");
                
            }
        });
    }, {
        root: null, // Observa el viewport
        threshold: 0.5 // Se activa cuando el 20% de la sección es visible
    });

    observer.observe(sectionPrecios);
});


document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar"); // Asegúrate de que la clase coincide con la barra de navegación
    

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled"); // Agrega la clase cuando haces scroll
        } else {
            navbar.classList.remove("scrolled"); // Quita la clase cuando estás arriba
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
  
    document.addEventListener("scroll", function () {
      let scrollPosition = window.scrollY;
  
      navbarLinks.forEach(function (link) {
        let section = document.querySelector(link.getAttribute("href"));
        if (section) {
          let sectionTop = section.offsetTop - 100; // Ajusta según la altura del navbar
          let sectionHeight = section.offsetHeight;
  
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        }
      });
    });
  });
  