import './styles.scss'
import { gsap } from 'gsap'

const counter3 = document.querySelector('.counter-3')
const home = document.querySelector('.home')

for(let i = 0; i <2; i++){
    for(let j =0; j < 10; j++){
        const div = document.createElement('div')
        div.className = 'num'
        div.textContent = j
        counter3.appendChild(div)
    }

}

const finalDiv =  document.createElement('div')
finalDiv.className = 'num'
finalDiv.textContent = '0'
counter3.appendChild(finalDiv)

function animate(counter, duration, delay =0){
    const numHeight = counter.querySelector('.num').clientHeight
    console.log(numHeight);
    const totalDistance = (counter.querySelectorAll('.num').length - 1) * numHeight 
    console.log(totalDistance);

    gsap.to(counter, {
        y: -totalDistance,
        duration: duration,
        delay, delay,
        ease: 'power2.inOut',
    })

}
animate(counter3, 5)
animate(document.querySelector('.counter-2'), 6)
animate(document.querySelector('.counter-1'), 2, 4)

const t1 = gsap.timeline()

t1
.to('.loader-bar', {
    width:'100%',
    duration:6,
    ease: 'power2.inOut'
})
.to('.loader',{
    rotate:  '90deg',
})
.to('.loader',{
    height:'100vw',
    width: '100vh',
    ease: 'power2.in'
})


const t2 = gsap.timeline()
t2.pause()

t2
.to(home, {
    display: 'flex'
})
t1.eventCallback('onComplete', () => {
    t2.play()
})