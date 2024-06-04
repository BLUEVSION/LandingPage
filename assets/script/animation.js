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


//FLIP


document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os quadrados
    const squares = document.querySelectorAll('.impactos__list li.square');

    // Adiciona um event listener para cada quadrado
    squares.forEach(square => {
        square.addEventListener('click', function() {
            // Alterna a classe de flip
            this.classList.toggle('flip');
        });
    });
});



