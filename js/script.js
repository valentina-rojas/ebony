document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var images = document.getElementsByClassName("clickable");
    var currentIndex = 0;

    function openModal(index) {
        modal.style.display = "flex";
        modalImg.src = images[index].src;
        currentIndex = index;
    }

    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', (function(index) {
            return function() {
                openModal(index);
            };
        })(i));
    }

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    };
    
    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var prevButton = document.getElementsByClassName("prev")[0];
    var nextButton = document.getElementsByClassName("next")[0];

    prevButton.onclick = function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        modalImg.src = images[currentIndex].src;
    }

    nextButton.onclick = function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        modalImg.src = images[currentIndex].src;
    };

    document.addEventListener("keydown", function (event) {
        if (modal.style.display === "flex") {
          if (event.key === "ArrowLeft") {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
            modalImg.src = images[currentIndex].src;
          } else if (event.key === "ArrowRight") {
            currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
            modalImg.src = images[currentIndex].src;
          } else if (event.key === "Escape") {
            modal.style.display = "none";
          }
        }
      });
});

/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}; 


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});



/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });




