const modal = document.querySelector('#modal')
const content = document.querySelector('#content')
const backdrop = document.querySelector('#backdrop')

content.addEventListener('click',(openCard) => {
  modal.classList.add('open')
})

backdrop.addEventListener('click', (closeModal) => {
  modal.classList.remove('open')
}) 