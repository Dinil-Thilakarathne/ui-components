import './styles.scss'

const scrollers = document.querySelectorAll('.scroller');


function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);


    const scrollerInner =  scroller.querySelector('.scroller__inner');
    const scrollerInnerContent = Array.from(scrollerInner.children);

    scrollerInnerContent.forEach(item => {
      const dupilcatedItem = item.cloneNode(true)
      // console.log(dupilcatedItem);

      dupilcatedItem.setAttribute('aria-hidden', true)

      scrollerInner.appendChild(dupilcatedItem)
    })
  })
}

addAnimation()