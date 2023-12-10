import './style.scss'

const menuIcon = document.querySelector('.menu-icon')
const mainItem = document.querySelector('.main-item')
const menuContainer = document.querySelector('.menu-container')
const menuItems = document.querySelectorAll('.menu-item')


function menuToggele() {
    menuContainer.classList.toggle('active')
    menuIcon.classList.toggle('active')
}

mainItem.addEventListener('click', menuToggele)

menuItems.forEach(item => {
    item.addEventListener('click', menuToggele)
})