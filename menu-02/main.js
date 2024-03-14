const menuBtn = document.querySelector('.menu-icon')
const haderNav = document.querySelector('.header-nav')

menuBtn.addEventListener('click', () => {
    haderNav.classList.toggle('active')
})