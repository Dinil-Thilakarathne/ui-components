import './style.css'
import gsap from 'gsap'
import { CustomEase } from 'gsap/all'
gsap.registerPlugin(CustomEase)

document.addEventListener('DOMContentLoaded', () => {
  'use strict'

  CustomEase.create(
    "cumtomEase",
    "M0,0 C0.375,0.32 0.634,0.176 0.759,0.406 0.972,0.68 0.818,1.001 1,1 "
  );

  const boxes = gsap.utils.toArray('.box')

  const tl = gsap.timeline()

  tl
    .to('.preloader-text', {
      opacity: 0,
      duration: 2,
      x: 200,
    })
    .to(boxes, {
      clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
      duration: 1,
      ease: 'cumtomEase',
      stagger: .2
    }, "-=.4")
    .to('.preloader', { display: 'none' })
    .from('.hero-header', {
      opacity: 0,
      y: 100
    }, "<")
})

