function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const controlEl = document.querySelector('#controls > input');
const boxesEl = document.querySelector('#boxes');


createBtnEl.addEventListener('click', () => createBoxes(controlEl.value));
destroyBtnEl.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
const boxElements = [];
let boxOriginSize = 30;

  for (let i = 1; i <= amount; i += 1) {
    const boxEl = document.createElement('div')
    boxEl.style.backgroundColor = `${getRandomHexColor()}`;
    boxEl.style.width = `${boxOriginSize}px`;
    boxEl.style.height = `${boxOriginSize}px`;
    boxElements.push(boxEl);
    boxOriginSize +=10;
  } 

  boxesEl.append(...boxElements);
};

function destroyBoxes(event) {
  boxesEl.innerHTML = '';
}

//1