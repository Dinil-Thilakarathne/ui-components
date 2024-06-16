//retro grig
const body = document.querySelector('body');
const size = 75
const retroGrid = document.querySelector('.retro-grid')
let rowCount, colCount;
let r = document.querySelector(":root");

r.style.setProperty("--size", `${size}px`);

function updateBg() {
    retroGrid.innerHTML = ''
    let width = body.offsetWidth
    let height = body.offsetHeight

    rowCount = Math.ceil(height / size)
    colCount = Math.ceil(width / size)

    r.style.setProperty("--row-count", `${rowCount}`);
    r.style.setProperty("--col-count", `${colCount}`);

    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < colCount; j++) {
            let div = document.createElement('span')
            div.classList.add('grid-item')
            retroGrid.appendChild(div)
        }
    }
    console.log(rowCount, colCount);
}

window.addEventListener('resize', updateBg);

updateBg()