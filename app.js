const modal = document.querySelector('#modal');
const content = document.querySelector('#content');
const backdrop = document.querySelector('#backdrop');

const technologies = [
  {title: 'HTML', description: 'HTML text', type: 'html', done: true},
  {title: 'CSS', description: 'CSS text', type: 'css', done: true},
  {title: 'JavaScript', description: 'JS text', type: 'javascript', done: false},
  {title: 'React', description: 'React text', type: 'react', done: false},
  {title: 'Git', description: 'GIT text', type: 'git', done: false},
];

content.addEventListener('click', (openCard) => {
  modal.classList.add('open');
});

backdrop.addEventListener('click', (closeModal) => {
  modal.classList.remove('open');
});

function init() {
  if (technologies.length === 0) {
    content.innerHTML = `<p class='empty'>Нет задач</p>`;
  } else {
    let html = '';
    for (let i = 0; i < technologies.length; i++) {
      const tech = technologies[i];
      html += toCard(tech)
    }
    content.innerHTML = html
    // content.innerHTML = technologies.map(toCard).join('');
  }
}

function toCard(tech) {
  const doneClass = tech.done ? 'done' : ''
  return`<div class='card ${doneClass}'>
          <h3>${tech.title}</h3>
        </div> `;
}


init()