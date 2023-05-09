function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtnEl = document.querySelector('.change-color');
const typeColorScreenEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

changeColorBtnEl.addEventListener('click', onTargetButton);

function onTargetButton (event) {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  typeColorScreenEl.textContent = bodyEl.style.backgroundColor
}