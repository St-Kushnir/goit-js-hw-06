const inputRange = document.querySelector('#font-size-control');
const inputValue = document.querySelector('#text');

inputRange.addEventListener('change', (event) => {
    inputValue.style.fontSize = `${event.currentTarget.value}px`
})

