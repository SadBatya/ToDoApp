const text = document.querySelector("h3");
const styles = window.getComputedStyle(text);
const panel = document.querySelector('#panel')
const type = panel.data
let fontSize = parseInt(styles.fontSize);

// panel.addEventListener('click', (e) => {
//   const datatype = e.target.dataset.type
//   if(datatype === 'plus'){
//     fontSize++
//     text.style.fontSize = fontSize + 'px'
//   }else if(datatype === 'minus'){
//     fontSize--
//     text.style.fontSize = fontSize + 'px'
//   }else if(datatype === 'normal'){
//     text.style.fontWeight = 'normal'
//     text.style.fontStyle = 'normal'
//   }else if(datatype === 'bold'){
//     text.style.fontWeight = 'bold'
//   }else if(datatype === 'italic'){
//     text.style.fontStyle = 'italic'
//   }
// })

// думаю с помощью switch будет выглядеть красивее и понятнее
panel.addEventListener('click', (e) => {
  const datatype = e.target.dataset.type
  switch (datatype) {
    case 'plus':
      fontSize++
      text.style.fontSize = fontSize + 'px'
      break;
    case 'minus':
      fontSize--
      text.style.fontSize = fontSize + 'px'
      break;
    case 'normal':
      text.style.fontWeight = 'normal'
      text.style.fontStyle = 'normal'
      break;
    case 'bold':
      text.style.fontWeight = 'bold'
      break
    case 'italic':
      text.style.fontStyle = 'italic'
      break
  }
})