import './style.scss'
import { gsap } from 'gsap'

const magneticBtn = document.querySelector(".magnetic-btn")
const magneticBtnText = magneticBtn.querySelector(".text")

console.log(magneticBtnText);

// add animation 
const activeAnimation = (e) => {
  let boundBox = magneticBtn.getBoundingClientRect()
  const magneticBtnStrength = 40
  const magneticBtnTextStrength = 80
  const newX = ((e.clientX - boundBox.left) / magneticBtn.offsetWidth).toFixed(2) - 0.5
  const newY = ((e.clientY - boundBox.top) / magneticBtn.offsetHeight).toFixed(2) - 0.5


  gsap.to(magneticBtn, {
    x: newX * magneticBtnStrength,
    y: newY * magneticBtnStrength,
    duration: 1,
    ease: "Power4.easeOut"
  })

  gsap.to(magneticBtnText, {
    x: newX * magneticBtnTextStrength,
    y: newY * magneticBtnTextStrength,
    duration: 1,
    ease: "Power4.easeOut"
  })

}

// remove animation 
const removeAnimation = (e) => {

  gsap.to([magneticBtn, magneticBtnText], {
    x: 0,
    y: 0,
    duration: 0.5,
    ease: 'elastic.out',
  });
}

let timeoutId;

magneticBtn.addEventListener('mousemove', (e) => {
  activeAnimation(e);
  clearTimeout(timeoutId);
})
magneticBtn.addEventListener('mouseleave', () => {
  timeoutId = setTimeout(removeAnimation, 500);
});

window.addEventListener('mouseleave', removeAnimation)