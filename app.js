const plusFontSizeBtn = document.querySelector('#plus');
const minusFontSizeBtn = document.querySelector('#minus');
const normalizeBtn = document.querySelector('#normal');
const fontWeightBoldBtn = document.querySelector('#bold');
const fontStyleItalicdBtn = document.querySelector('#italic');
const text = document.querySelector('h3');
const styleText = window.getComputedStyle(text)
let fontSizeText = parseInt(styleText.fontSize)



plusFontSizeBtn.addEventListener('click', () => {
  fontSizeText++
  text.style.fontSize = fontSizeText + 'px'
});

minusFontSizeBtn.addEventListener('click', () => {
  fontSizeText--
  text.style.fontSize = fontSizeText + 'px'
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
 