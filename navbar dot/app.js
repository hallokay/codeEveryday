
const hamburger = document.querySelector('.hamburger'),
     navLinks = document.querySelector('.nav_link'),
     links = document.querySelectorAll('.nav_link li');


hamburger.addEventListener('click',() => {
    navLinks.classList.toggle('active');
})
