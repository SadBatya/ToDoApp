const redBox = document.querySelector('#box1');
const orangeBox = document.querySelector('#box2');
const greenBox = document.querySelector('#box3');

//Поменять класс "green" на "orange" и "circle" (для зеленого квадрата).
greenBox.addEventListener('click', () => {
  if (
    greenBox.classList.contains('orange') &&
    greenBox.classList.contains('circle')
  ) {
    greenBox.classList.add('green');
    greenBox.classList.remove('orange');
    greenBox.classList.remove('circle');
  } else {
    greenBox.classList.remove('green');
    greenBox.classList.add('orange');
    greenBox.classList.add('circle');
  }
});

//Поменять класс "orange" на "blue" (для оранжевого квадрата).
orangeBox.addEventListener('click', () => {
  orangeBox.classList.remove('orange');
  orangeBox.classList.add('blue');
});

//Добавить класс "circle" и превратить в круг (для красного квадрата).
redBox.addEventListener('click', () => {
  redBox.classList.add('blue');
});
