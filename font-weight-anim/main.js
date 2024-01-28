import './style.scss'

const animText = "Animmmmmated text"
const animTextWrapper = document.querySelector('.animated-text')

const animTextArray =  animText.split('')

animTextArray.forEach(letter => {
  const letterElement = document.createElement('span')
  letterElement.textContent = letter
  letterElement.classList.add('letter')

  animTextWrapper.appendChild(letterElement)
});