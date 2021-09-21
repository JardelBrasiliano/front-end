console.log('teste script');
const text = document.getElementById('text');
const textArr = text.innerHTML.split('');

const newEl = document.createElement('h1');

newEl.innerHTML = `
  ${textArr.map( letter => `<span style="${randomVisibility()}">${letter}</span>`).join('')}
`;
console.log('teste script', newEl);

newEl.classList.add('overLay');

document.body.appendChild(newEl);

function randomVisibility() {
  return Math.random() < 0.4 ? 'visibility: hidden' : 'visibility: visible';
}

