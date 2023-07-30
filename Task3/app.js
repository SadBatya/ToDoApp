const myTasksBox = document.querySelector('ul');
const tasksArray = [
  { title: 'Выучить JS', done: true, type: 'javascript' },
  { title: 'Попрактиковаться с GIT', done: false, type: 'github' },
  { title: 'Изучить React', done: false, type: 'react' },
  { title: 'Понять NodeJS', done: false, type: 'nodejs' },
  { title: 'Устроиться на работу', done: false, type: 'job' },
];



const tasks = tasksArray.map(task => {
  return `
     <li>
        <label data-type=${task.type}>
          <input type="checkbox" ${task.done ? 'checked' : ''} /> ${task.title}
        </label>
      </li>
  `
})

myTasksBox.innerHTML = tasks.join('')