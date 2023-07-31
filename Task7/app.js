const form = document.querySelector('form');
const tasks = document.querySelector('.list');
const btn = document.querySelector('button');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

btn.addEventListener('click', () => {
  if (input.value.trim() === '') {
    input.style.border = 'red solid 1px'
    setTimeout(() => {input.style.border = '1px solid rgba(151, 158, 162, 0.3)'}, 1000)
    input.value = ''
  } else {
    const task = document.createElement('li');
    task.innerText = input.value;
    tasks.append(task);
    input.value = '';
  }
});
