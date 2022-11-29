/*These are the constant variables that don't change*/
const display = document.querySelector('.display');
const controlButtons = document.querySelector('.controls').children;
const allSymbols = ['+', '-', 'X', '÷', '%', 'C', '='];

/*The variables. Is it stating the default value is to be nothing?*/
let firstValue = '';
let secondValue = '';
let symbol = '';
let result = '';

const calculate = () => {
  firstValue = parseFloat(firstValue);
  secondValue = parseFloat(secondValue);

  /* This is the actual code for the calculating */
  if (symbol === '+') result = firstValue + secondValue;
  if (symbol === '-') result = firstValue - secondValue;
  if (symbol === 'X') result = firstValue * secondValue;
  if (symbol === '÷') result = firstValue / secondValue;
  if (symbol === '%') result = firstValue % secondValue;

  /*display div rules?*/
  display.innerText = result;
  firstValue = result;
  secondValue = '';
};

/* Not sure on these, lots of if statements, but need to break down bit by bit*/
for (let button of controlButtons) {
  button.addEventListener('click', () => {
    const { innerText: btnValue } = button;
    const btnValueIsSymbol = allSymbols.includes(btnValue);

    if (!secondValue && btnValue === '=') return null;
    /*This if statement clears display if button C is called?*/
    if (btnValue === 'C') {
      firstValue = secondValue = symbol = '';
      return (display.innerText = '');
    }

    if (firstValue && btnValueIsSymbol) {
      secondValue && calculate();
      symbol = btnValue;
    } else if (!symbol) firstValue += btnValue;
    else if (symbol) secondValue += btnValue;

    /* this makes sure the = sign is not added to the display div?*/
    if (btnValue !== '=') display.innerText += btnValue;
  });
}

/*Youtube link= https://www.youtube.com/watch?v=RtgES9srcFg*/
