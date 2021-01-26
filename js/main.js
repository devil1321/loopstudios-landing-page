const navBtn = document.querySelector('.nav__button');
const navLinks = document.querySelectorAll('.nav__link');
const navItems = document.querySelectorAll('.nav__item');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.nav__list-wrapper');
const heroText = document.querySelector('.hero__text');

window.addEventListener('resize', function() {
    if (window.innerWidth <= 1040) {
        menu.style.width = "0%";
        menu.style.display = "none";
    }
    if (window.innerWidth > 1040) {
        menu.style.width = "40%";
        menu.style.display = "flex";
    }
    if (window.innerHeight <= 375) {
        navLinks.forEach(link => {
            link.style.fontSize = "1rem";
        })
        navItems.forEach(item => {
            item.style.margin = "1rem 0rem";
        })

    } else {
        navLinks.forEach(link => {
            link.style.fontSize = "2rem";
        })
        navItems.forEach(item => {
            item.style.margin = " 1.25rem 0rem"
        })
    }
    if (window.innerHeight <= 320) {
        heroText.style.marginTop = "6.60rem";
    } else {
        heroText.style.marginTop = "6.25rem";
    }
    if (window.innerWidth === 1366 && window.innerHeight === 1024) {
        navLinks.forEach(link => {
            link.style.fontSize = "1rem";
        })
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