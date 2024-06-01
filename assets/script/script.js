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
