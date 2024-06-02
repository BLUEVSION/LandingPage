document.addEventListener('DOMContentLoaded', function() {
    const fadeInTitle = document.getElementById('fade-in-title');

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
