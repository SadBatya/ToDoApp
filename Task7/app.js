const form = document.querySelector('form')
const tasks = document.querySelector('.list')
const btn = document.querySelector('button')
const input = document.querySelector('input')

form.addEventListener('submit', (e) => {
  e.preventDefault()
})

btn.addEventListener('click', () => {
  const task = document.createElement('li')
  task.innerText = input.value
  tasks.append(task)
  input.value = ''
})