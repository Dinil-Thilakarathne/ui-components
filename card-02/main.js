import './style.scss'

const toggeleBtns = document.querySelectorAll('.toggele-btn')
const card = document.querySelector('.card')

toggeleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    card.classList.toggle('active')
  })
})