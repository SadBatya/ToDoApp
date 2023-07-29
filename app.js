const tasksArray = [
  { title: 'Выучить JS', type: false, type: 'javascript' },
  { title: 'GIT', type: false, type: 'github' },
  { title: 'React', type: false, type: 'react' },
  { title: 'NodeJS', type: false, type: 'nodejs' },
  { title: 'Job', type: false, type: 'job' },
];

const myTasksBox = document.querySelectorAll('ul');

tasksArray.map((task) => {
  let html = task.title
  myTasksBox.innerHTML = `
    <li>
      <label data-type=${task.type}>
        <input type="checkbox" checked /> ${task.title}
      </label>
    </li>
  `;
});
