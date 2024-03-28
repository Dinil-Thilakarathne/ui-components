import './style.css'

const awardItems = document.querySelectorAll('.award-list__item')


awardItems.forEach(awardItem => {
    awardItem.addEventListener('mouseenter', () => {
        awardItem.classList.add('active')
    })
    awardItem.addEventListener('mouseleave', () => {
        awardItem.classList.remove('active')
    })
})