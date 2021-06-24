let displayValue = document.getElementById('display').innerHTML;

function updateDisplay(x) {
    document.getElementById('display').innerHTML += x;
}

const oneButton = document.querySelector('#one');
oneButton.addEventListener('click', () => updateDisplay(1));
const twoButton = document.querySelector('#two');
twoButton.addEventListener('click', () => updateDisplay(2));
const threeButton = document.querySelector('#three');
threeButton.addEventListener('click', () => updateDisplay(3));
const fourButton = document.querySelector('#four');
fourButton.addEventListener('click', () => updateDisplay(4));
const fiveButton = document.querySelector('#five');
fiveButton.addEventListener('click', () => updateDisplay(5));
const sixButton = document.querySelector('#six');
sixButton.addEventListener('click', () => updateDisplay(6));
const sevenButton = document.querySelector('#seven');
sevenButton.addEventListener('click', () => updateDisplay(7));
const eightButton = document.querySelector('#eight');
eightButton.addEventListener('click', () => updateDisplay(8));
const nineButton = document.querySelector('#nine');
nineButton.addEventListener('click', () => updateDisplay(9));
const zeroButton = document.querySelector('#zero');
zeroButton.addEventListener('click', () => updateDisplay(0));

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => updateDisplay('*'));
const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => updateDisplay('/'));
const plusButton = document.querySelector('#plus');
plusButton.addEventListener('click', () => updateDisplay('+'));
const minusButton = document.querySelector('#minus');
minusButton.addEventListener('click', () => updateDisplay('-'));
const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', () => updateDisplay('.'));

const backButton = document.querySelector('#backspace');
backButton.addEventListener('click', () => console.log('Backspace'));
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => document.getElementById('display').innerHTML = '');
const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => console.log('Equals'));


function add(a, b) {
    return (a + b);
}
function subtract(a, b) {
	return (a - b);
}
function multiply(a, b) {
    return (a * b);
}
function divide(a, b) {
    return (a / b);
}

function operate(a, b, operator) {
    switch(operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
    }
}