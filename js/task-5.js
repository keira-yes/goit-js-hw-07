function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const button = document.querySelector('.change-color');
const output = document.querySelector('.color');

const onButtonClick = () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  output.textContent = color;
};

button.addEventListener('click', onButtonClick);
