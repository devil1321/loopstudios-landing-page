const navBtn = document.querySelector('.nav__button');
const navLinks = document.querySelectorAll('.nav__link');
const navItems = document.querySelectorAll('.nav__item');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.nav__list-wrapper');
const heroText = document.querySelector('.hero__text');
const body = document.querySelector('body')
const navHeader = document.querySelector('.nav__header')

window.addEventListener('resize', function() {
    if(window.innerWidth === 320 && window.innerHeight === 568){
        navHeader.style.padding = '0.5625rem'
        heroText.style.fontSize = '2rem'
    }else{
        heroText.style.fontSize = '2.5rem'
    }
    if (window.innerWidth <= 1040) {
        menu.style.width = "0%";
        menu.style.display = "none";
    }
    if (window.innerWidth >= 1040) {
        menu.style.width = "40%";
        menu.style.display = "flex";
        nav.style.position = 'absolute'
        body.style.position = 'static'
        navLinks.forEach(link =>{
            link.style.fontSize = '0.9375rem'
        })
    }else{
         navLinks.forEach(link => {
            link.style.fontSize = "2rem";
        })
    }
    if (window.innerHeight <= 375) {
        navLinks.forEach(link => {
            link.style.fontSize = "1rem";
        })
        navItems.forEach(item => {
            item.style.margin = "1rem 0rem";
        })

    } else {
       
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
        nav.style.position = 'fixed'
        body.style.position = 'fixed'
        nav.style.height = '100vh'
    } else {
        menu.style.width = "0%";
        nav.style.backgroundColor = "transparent";
        menu.style.transition = "all 200ms ease-in-out";
        nav.style.position = 'absolute'
        body.style.position = 'static'
        nav.style.height = '100px'

    }
}
navBtn.addEventListener('click', navToggle);