import './style.scss'
import { gsap } from 'gsap'

const openBtn = document.querySelector('.header-menu__btn')
const closeBtn = document.querySelector('.menu-close__btn')
const sideBar = document.querySelector('.sidebar')
const sidebarLinks = gsap.utils.toArray('.sidebar__item')
const sidebarLinksBgFill = gsap.utils.toArray('.sidebar__item .link-bg-fill')
const sidebarSocialLinks = gsap.utils.toArray('.social-list__item')
const bgOverlay = document.querySelector('.bg-overlay')

// animated timeline 
const tlOpen = gsap.timeline({ defaults: { duration: .25, ease: "power2.ease" } })

// Set initial states
gsap.set(sideBar, { x: -450 });
gsap.set([".sidebar-top .text", ".sidebar-bottom .text"], { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" });
gsap.set([".sidebar-top .divider", ".sidebar-bottom .divider"], { width: 0 });
gsap.set(sidebarLinksBgFill, { clipPath: "circle(0% at 0 100%)" });
gsap.set(sidebarSocialLinks, { opacity: 0, y: '10%', x: '-5%' });
gsap.set([closeBtn, sidebarLinks], { opacity: 0, y: '20%', x: '-20%' });
gsap.set(bgOverlay, { display: "none" })

// Add animations to the timeline
tlOpen
  .to(sideBar, {
    x: 0,
    duration: .5
  })
  .to(bgOverlay, {
    display: "block"
  }, "<")
  .to(closeBtn, {
    opacity: 1,
    y: 0
  })
  .to([".sidebar-top .text", ".sidebar-bottom .text"], {
    clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
    stagger: .5,
    duration: .25
  })
  .to([".sidebar-top .divider", ".sidebar-bottom .divider"], {
    width: "100%",
    stagger: .75,
  }, "<")
  .to(sidebarSocialLinks, {
    opacity: 1,
    x: 0,
    y: 0,
    stagger: .25
  })
  .to(sidebarLinks, {
    opacity: 1,
    x: 0,
    y: 0,
    duration: .5,
    stagger: .55
  }, "<")

tlOpen.paused(true)

function openMenu() {
  tlOpen.play()
}
function closeMenu() {
  tlOpen.reverse(1.5)
}

openBtn.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu)

// sidebar links hover effect 
function linkHover(e) {
  const currentLink = e.target
  currentLink.classList.add("active")
  const linkBg = currentLink.querySelector('.link-bg-fill')
  const linkSvgIcon = currentLink.querySelector(".svg-icon")

  gsap.to(linkSvgIcon, {
    scale: 1,
    display: "block"
  })
  gsap.to(linkBg, {
    clipPath: "circle(150% at 0 100%)"
  })

}
function linkLeave(e) {
  const currentLink = e.target
  currentLink.classList.remove("active")
  const linkBg = currentLink.querySelector('.link-bg-fill')
  const linkSvgIcon = currentLink.querySelector(".svg-icon")

  gsap.to(linkSvgIcon, {
    scale: 0,
    display: "none"
  })
  gsap.to(linkBg, {
    clipPath: "circle(0% at 0 100%)"
  })


}
sidebarLinks.forEach((link) => {
  link.addEventListener('mouseenter', linkHover);
  link.addEventListener('mouseleave', linkLeave);
})

// hide sidebar 
bgOverlay.addEventListener('click', closeMenu)
sidebarLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    tlOpen.reverse(1.5)
    tlOpen.eventCallback('onReverseComplete', redirectToURL)
  })
})

// optional 
function redirectToURL() {
  window.location.href = '';
}