document.addEventListener('DOMContentLoaded', function() {
    const fadeInTitle = document.getElementsByClassName('fade-in-title');

    function checkScroll() {
        const rect = fadeInTitle.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
            fadeInTitle.classList.add('fade-in');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Para verificar se o elemento já está visível ao carregar a página
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



