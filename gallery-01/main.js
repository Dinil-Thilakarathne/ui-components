import './scss/style.scss'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'

const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const imgGallery = [
  "img-1.jpg",
  "img-2.jpg",
  "img-3.jpg",
  "img-4.jpg",
  "img-5.jpg",
  "img-6.jpg",
]

const imgGalleryElement = document.querySelector('.img-gallery')

imgGallery.forEach(img => {
  const image = document.createElement('img')
  image.setAttribute('src', img)
  image.classList.add('image-element')
  imgGalleryElement.appendChild(image)

})

const imageElements = document.querySelectorAll('.image-element')
const mainImageElemnt = document.querySelector('.main-img__image')

imageElements.forEach(img => {
  img.addEventListener('click', (e) => {
    const clickedImgSrc = e.target.getAttribute('src');
    const lastPreviewImg = document.querySelector(".main-img img:last-child")

    // changeImgOpacity(img)
    changeImg(lastPreviewImg, clickedImgSrc, img)

  })
})

imageElements[0].classList.add('active')


function changeImg(lastImg, newImgSrc, clickedImg) {

  const t1 = gsap.timeline()

  t1.to(imageElements, {
    opacity: 0.4
  }).to(clickedImg, {
    opacity: 1,
    duration: 1
  }, "<")
    .to(lastImg, {
      scale: 1.75,
      right: "50%",
      duration: 1.75
    }, "<")

  const newImg = document.createElement('img')
  newImg.src = newImgSrc
  newImg.style.position = "absolute"
  newImg.style.right = "-100%"

  const imgWrapper = document.querySelector('.main-img')
  imgWrapper.appendChild(newImg)

  t1.to(newImg, {
    right: 0,
    duration: 1.5,
  }, "<")

}