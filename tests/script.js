document.getElementById('menuToggle').addEventListener('click', function(event) {
    event.stopPropagation();
    this.classList.toggle('open');
    document.getElementById('sideMenu').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('visible');
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('menuToggle').classList.remove('open');
    document.getElementById('sideMenu').classList.remove('open');
    this.classList.remove('visible');
});

document.addEventListener('click', function(event) {
    const sideMenu = document.getElementById('sideMenu');
    const menuToggle = document.getElementById('menuToggle');
    const overlay = document.getElementById('overlay');
    
    if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        menuToggle.classList.remove('open');
        sideMenu.classList.remove('open');
        overlay.classList.remove('visible');
    }
});
