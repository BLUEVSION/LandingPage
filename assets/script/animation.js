//PROBLEMA TITLE

document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById('fade-in-title');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                title.classList.add('fade-in');
                observer.unobserve(title);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(title);
});

//PROBLEMA VIDEO

document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector(".ocean1__background");

    function checkVisibility() {
        const rect = video.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

        if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
            video.classList.add("visible");
            window.removeEventListener("scroll", checkVisibility); // Remove o listener para evitar chamadas repetidas
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Verifica a visibilidade ao carregar a página
});



document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.hidden').forEach(element => {
        observer.observe(element);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector('.impactos__title');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                title.classList.add('visible');
                observer.unobserve(title);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(title);
});


document.addEventListener('DOMContentLoaded', function() {
 
    const target = document.querySelector('.cosneq__slogan');
  

    const options = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.1 
    };
  
   
    const callback = function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
        }
      });
    };
  
   
    //FOOTER 

    const observer = new IntersectionObserver(callback, options);
  
    if (target) {
      observer.observe(target);
    }
  });


  document.addEventListener("DOMContentLoaded", function() {
    var title = document.querySelector('.footer__title');
    var titlePosition = title.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    function fadeInTitle() {
        if (titlePosition < screenPosition) {
            title.classList.add('active');
        }
    }

    fadeInTitle();

    window.addEventListener('scroll', fadeInTitle);
});




//HAMBUGER

document.getElementById('hamburger').addEventListener('click', function(event) {
    const checkbox = this.querySelector('input');
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    event.stopPropagation();

    if (checkbox.checked) {
        sideMenu.classList.add('open');
        overlay.classList.add('visible');
    } else {
        sideMenu.classList.remove('open');
        overlay.classList.remove('visible');
    }
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('hamburger').querySelector('input').checked = false;
    document.getElementById('sideMenu').classList.remove('open');
    this.classList.remove('visible');
});

document.addEventListener('click', function(event) {
    const sideMenu = document.getElementById('sideMenu');
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('overlay');

    if (!sideMenu.contains(event.target) && !hamburger.contains(event.target)) {
        hamburger.querySelector('input').checked = false;
        sideMenu.classList.remove('open');
        overlay.classList.remove('visible');
    }
});



