function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

const createBoxes = amount => {
  boxes.innerHTML = '';
  const fragment = document.createDocumentFragment();
  const boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize + i * 10}px`;
    box.style.height = `${boxSize + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  boxes.appendChild(fragment);
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
  boxes.classList.remove('active');
};

const onCreateBtnClick = () => {
  const amount = input.value;

  if (amount < 1 || amount > 100) {
    input.value = '';
    return;
  }

  boxes.classList.add('active');
  createBoxes(amount);
  input.value = '';
};

createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', destroyBoxes);
