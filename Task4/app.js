const plusFontSizeBtn = document.querySelector('#plus');
const minusFontSizeBtn = document.querySelector('#minus');
const normalizeBtn = document.querySelector('#normal');
const fontWeightBoldBtn = document.querySelector('#bold');
const fontStyleItalicdBtn = document.querySelector('#italic');
const text = document.querySelector('h3');
let fontSizeValue = 20


plusFontSizeBtn.addEventListener('click', () => {
  fontSizeValue++
  text.style.fontSize = fontSizeValue + 'px'
});

minusFontSizeBtn.addEventListener('click', () => {
  fontSizeValue--
  text.style.fontSize = fontSizeValue + 'px'
})

fontWeightBoldBtn.addEventListener('click', () => {
  text.style.fontWeight = 'bold';
});

fontStyleItalicdBtn.addEventListener('click', () => {
  text.style.fontStyle = 'italic';
});

normalizeBtn.addEventListener('click', () => {
  text.style.fontWeight = 'normal';
  text.style.fontStyle = 'normal';
});
 