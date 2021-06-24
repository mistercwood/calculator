let displayValue = document.getElementById('display').innerHTML;
let runningTotal = [];

function updateCount(x) {
    document.getElementById('display').innerHTML += x;
    runningTotal.push(x);
}

function clearAll() {
    document.getElementById('display').innerHTML = '';
    runningTotal = [];
}

const oneButton = document.querySelector('#one');
oneButton.addEventListener('click', () => updateCount(1));
const twoButton = document.querySelector('#two');
twoButton.addEventListener('click', () => updateCount(2));
const threeButton = document.querySelector('#three');
threeButton.addEventListener('click', () => updateCount(3));
const fourButton = document.querySelector('#four');
fourButton.addEventListener('click', () => updateCount(4));
const fiveButton = document.querySelector('#five');
fiveButton.addEventListener('click', () => updateCount(5));
const sixButton = document.querySelector('#six');
sixButton.addEventListener('click', () => updateCount(6));
const sevenButton = document.querySelector('#seven');
sevenButton.addEventListener('click', () => updateCount(7));
const eightButton = document.querySelector('#eight');
eightButton.addEventListener('click', () => updateCount(8));
const nineButton = document.querySelector('#nine');
nineButton.addEventListener('click', () => updateCount(9));
const zeroButton = document.querySelector('#zero');
zeroButton.addEventListener('click', () => updateCount(0));

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => updateCount('&#215;'));
const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => updateCount('&#247;'));
const plusButton = document.querySelector('#plus');
plusButton.addEventListener('click', () => updateCount('&#43;'));
const minusButton = document.querySelector('#minus');
minusButton.addEventListener('click', () => updateCount('&#8722;'));
const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', () => updateCount('.'));

const backButton = document.querySelector('#backspace');
backButton.addEventListener('click', () => console.log('Backspace'));
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => clearAll());
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
        case "&#43;":
            return add(a, b);
            break;
        case "&#8722;":
            return subtract(a, b);
            break;
        case "&#215;":
            return multiply(a, b);
            break;
        case "&#247;":
            return divide(a, b);
            break;
    }
}