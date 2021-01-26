const navBtn = document.querySelector('.nav__button');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.nav__list-wrapper');

window.addEventListener('resize', function() {
    if (window.innerWidth <= 375) {
        menu.style.width = "0%";
        menu.style.display = "none";
    }
    if (window.innerWidth > 375) {
        menu.style.width = "40%";
        menu.style.display = "flex";
    }

})


function navToggle() {
    navBtn.classList.toggle('open');
    if (navBtn.classList.contains('open')) {
        menu.style.width = "100%";
        nav.style.backgroundColor = "black";
        menu.style.display = "flex";
        menu.style.transition = "all 1s ease-in-out";
    } else {
        menu.style.width = "0%";
        nav.style.backgroundColor = "transparent";
        menu.style.transition = "all 200ms ease-in-out";
    }
}
navBtn.addEventListener('click', navToggle);