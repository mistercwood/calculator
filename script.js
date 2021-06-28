let runningTotal1 = [];
let runningTotal2 = [];
let num1;
let num2;
let currentOperator;

function updateNumber(x) {
    document.getElementById('display').innerHTML += x;
    if (num1 && currentOperator) {
        runningTotal2.push(x);
        num2 = runningTotal2.join('');
    }
    else {
        runningTotal1.push(x)
        num1 = runningTotal1.join('');
    }
}

function updateOperator(x) {
    if (num1 && num2 && currentOperator) {
        num1 = parseFloat(runningTotal1.join(''));
        num2 = parseFloat(runningTotal2.join(''));
        result = calculate(num1, currentOperator, num2);
        document.getElementById('display').innerHTML = result;
        document.getElementById('display').innerHTML += x;
        num1 = result;
        num2 = '';
        runningTotal1 = [num1];
        runningTotal2 = [];
        currentOperator = x;
    }
    else if (num1 && currentOperator) {
        currentOperator = x;
        document.getElementById('display').innerHTML += x;
    }
    else if (num1) {
        currentOperator = x;
        document.getElementById('display').innerHTML += x;
    }
    else {
        return;
    }
}

function equals() {
    if (num1 && num2 && currentOperator) {
        num1 = parseFloat(runningTotal1.join(''));
        num2 = parseFloat(runningTotal2.join(''));
        result = calculate(num1, currentOperator, num2);
        document.getElementById('display').innerHTML = result;
        num1 = result;
        num2 = '';
        runningTotal1 = [num1];
        runningTotal2 = [];
        currentOperator = '';
    }
    else {
        return;
    }
}

function decimalCheck() {
    if (currentOperator) {
        return  num2.includes('.') ? '' : updateNumber('.');
    }
    else {
        return num1.includes('.') ? '' : updateNumber('.');
    }
}

function clearAll() {
    document.getElementById('display').innerHTML = '';
    runningTotal1 = [];
    runningTotal2 = [];
    num1 = '';
    num2 = '';
    currentOperator = '';
}

// function backSpace() {
//     runningTotal.splice(-1);
//     document.getElementById('display').innerHTML = runningTotal.join('');
// }

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

function rounded(value) {
    return Number(Math.round(value+'e'+5)+'e-'+5);
}

function calculate(a, operator, b) {
    switch(operator) {
        case "&#43;":
            return rounded(add(a, b));
            break;
        case "&#8722;":
            return rounded(subtract(a, b));
            break;
        case "&#215;":
            return rounded(multiply(a, b));
            break;
        case "&#247;":
            return (b == 0) ? 80085 : rounded(divide(a, b));
            break;
    }
}

const oneButton = document.querySelector('#one');
oneButton.addEventListener('click', () => updateNumber(1));
const twoButton = document.querySelector('#two');
twoButton.addEventListener('click', () => updateNumber(2));
const threeButton = document.querySelector('#three');
threeButton.addEventListener('click', () => updateNumber(3));
const fourButton = document.querySelector('#four');
fourButton.addEventListener('click', () => updateNumber(4));
const fiveButton = document.querySelector('#five');
fiveButton.addEventListener('click', () => updateNumber(5));
const sixButton = document.querySelector('#six');
sixButton.addEventListener('click', () => updateNumber(6));
const sevenButton = document.querySelector('#seven');
sevenButton.addEventListener('click', () => updateNumber(7));
const eightButton = document.querySelector('#eight');
eightButton.addEventListener('click', () => updateNumber(8));
const nineButton = document.querySelector('#nine');
nineButton.addEventListener('click', () => updateNumber(9));
const zeroButton = document.querySelector('#zero');
zeroButton.addEventListener('click', () => updateNumber(0));

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => updateOperator('&#215;'));
const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => updateOperator('&#247;'));
const plusButton = document.querySelector('#plus');
plusButton.addEventListener('click', () => updateOperator('&#43;'));
const minusButton = document.querySelector('#minus');
minusButton.addEventListener('click', () => updateOperator('&#8722;'));
const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', () => decimalCheck());

const backButton = document.querySelector('#backspace');
backButton.addEventListener('click', () => backSpace());
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => clearAll());
const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => equals());
