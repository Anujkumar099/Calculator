// script.js
let display = document.getElementById('display');

function append(char) {
  if (display.innerText === '0') {
    display.innerText = char;
  } else {
    display.innerText += char;
  }
}

function clearAll() {
  display.innerText = '0';
}

function clearEntry() {
  let current = display.innerText;
  display.innerText = current.length > 1 ? current.slice(0, -1) : '0';
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = 'Error';
  }
}