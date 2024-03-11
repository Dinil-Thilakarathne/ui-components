import './styles.scss'

const scrollers = document.querySelectorAll('.scroller');


function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);


    const scrollerInnerWrapper =  scroller.querySelector('.scroller__inner-wrappper');
    const scrollerInner =  scroller.querySelector('.scroller__inner');
    const scrollerInnerContent = Array.from(scrollerInner.children);

    const dupilcatedItem = scrollerInner.cloneNode(true)
    dupilcatedItem.setAttribute('aria-hidden', true)
    scrollerInner.parentElement.appendChild(dupilcatedItem)
  })
}

addAnimation()