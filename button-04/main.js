
function splitTextIntoSpans(target) {
    let elements = document.querySelectorAll(target)
    elements.forEach((element) => {
        element.classList.add('split-text')
        let text = element.innerText
        let splitText = text
            .split(" ")
            .map(function (word) {
                let char = word.split('').map(char => {
                    return `<span class="split-char">${char}</span>`
                }).join('')
                return `<span class="split-word">${char}&nbsp</span>`
            }).join('')

        element.innerHTML = splitText
    })
}
const cloneElement = (element) => element.cloneNode(true)

const placeCloneElement = (element, target) => {
    target.appendChild(cloneElement(element))
}


splitTextIntoSpans('.animated-btn .text')
const animBtns = document.querySelectorAll('.animated-btn')

animBtns.forEach((element) => {
    placeCloneElement(element.querySelector('.text'), element.querySelector('.wrapper'))
})

function animate(element) {
    let textSpans = element.querySelectorAll('.split-text')
    textSpans.forEach((text) => {
        gsap.to(text.querySelectorAll('.split-char'), { yPercent: -100, stagger: 0.1 })
    })
}
function cleanup(element) {
    let textSpans = element.querySelectorAll('.split-text')
    textSpans.forEach((text) => {
        gsap.to(text.querySelectorAll('.split-char'), { yPercent: 0, stagger: 0.1 })
    })
}
animBtns.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        animate(element)
    })
    element.addEventListener('mouseleave', () => {
        cleanup(element)
    })
})
