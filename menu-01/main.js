import './style.scss'

const topnavOpenBtn = document.querySelector('#btnOpen')
const media = window.matchMedia('(width < 40em)');
const topNavMenu = document.querySelector('.topnav__menu');
const navLinks = document.querySelectorAll('.topnav__link')

let isOpen = false

function handleBtnClick() {
  isOpen = !isOpen
  topnavOpenBtn.setAttribute('aria-expanded', isOpen.toString());

  if (isOpen) {
    topNavMenu.removeAttribute('inert');
    topNavMenu.removeAttribute('style');
  }
}

function setupTopNav(e) {
  if (e.matches) {
    // is mobile
    console.log('is mobile');
    topNavMenu.setAttribute('inert', '');
    topNavMenu.style.transition = 'none';
  } else {
    // is tablet/desktop
    console.log('is desktop');
    topNavMenu.removeAttribute('inert');

    setTimeout(() => {
      isOpen = false
      topnavOpenBtn.setAttribute('aria-expanded', isOpen.toString())
    }, 500);
  }
}

setupTopNav(media);

topnavOpenBtn.addEventListener('click', handleBtnClick)

media.addEventListener('change', function (e) {
  setupTopNav(e);
});

navLinks.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault()
    handleBtnClick()
  })
});