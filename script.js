let runningTotal1 = [];
let runningTotal2 = [];
let num1;
let num2;
let currentOperator;

function updateNumber(x) {
    if (currentOperator) {
        document.getElementById('display').innerText = '';
    }    
    if (num1 && currentOperator) {
        runningTotal2.push(x);
        num2 = runningTotal2.join('');
        document.getElementById('display').innerText = num2;
    }
    else {
        runningTotal1.push(x)
        num1 = runningTotal1.join('');
        document.getElementById('display').innerText = num1;
    }
}

function updateOperator(x) {
    if (num2) {
        numberCrunch();
        currentOperator = x;
    }
    else if (num1) {
        currentOperator = x;
    }
    else {
        return;
    }
}

function equals() {
    if (num2) {
        numberCrunch();
        currentOperator = '';
    }
    else {
        return;
    }
}

function numberCrunch() {
    num1 = parseFloat(runningTotal1.join(''));
    num2 = parseFloat(runningTotal2.join(''));
    result = calculate(num1, currentOperator, num2);
    document.getElementById('display').innerText = result;
    num1 = result;
    num2 = '';
    runningTotal1 = [num1];
    runningTotal2 = [];
}

function decimalCheck() {
    if (currentOperator) {
        return num2.includes('.') ? '' : updateNumber('.');
    }
    else {
        return num1.includes('.') ? '' : updateNumber('.');
    }
}

function backSpace() {
    if (num1 && currentOperator) {
        runningTotal2.splice(-1);
        num2 = runningTotal2.join('');
        document.getElementById('display').innerText = num2;
    }
    else {
        runningTotal1.splice(-1);
        num1 = runningTotal1.join('');
        document.getElementById('display').innerText = num1;
    }
}

function clearAll() {
    document.getElementById('display').innerText = '';
    runningTotal1 = [];
    runningTotal2 = [];
    num1 = '';
    num2 = '';
    currentOperator = '';
}

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
        case "+":
            return rounded(add(a, b));
        case "-":
            return rounded(subtract(a, b));
        case "*":
            return rounded(multiply(a, b));
        case "/":
            return (b == 0) ? 8008135 : rounded(divide(a, b));
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
multiplyButton.addEventListener('click', () => updateOperator('*'));
const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => updateOperator('/'));
const plusButton = document.querySelector('#plus');
plusButton.addEventListener('click', () => updateOperator('+'));
const minusButton = document.querySelector('#minus');
minusButton.addEventListener('click', () => updateOperator('-'));
const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', () => decimalCheck());

const backButton = document.querySelector('#backspace');
backButton.addEventListener('click', () => backSpace());
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => clearAll());
const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => equals());

window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
      return;
    }
    if (event.code === "Numpad1"){
        updateNumber(1);
    } else if (event.code === "Numpad2"){
        updateNumber(2);
    } else if (event.code === "Numpad3"){
        updateNumber(3);
    } else if (event.code === "Numpad4"){
        updateNumber(4);
    } else if (event.code === "Numpad5"){
        updateNumber(5);
    } else if (event.code === "Numpad6"){
        updateNumber(6);
    } else if (event.code === "Numpad7"){
        updateNumber(7);
    } else if (event.code === "Numpad8"){
        updateNumber(8);
    } else if (event.code === "Numpad9"){
        updateNumber(9);
    } else if (event.code === "Numpad0"){
        updateNumber(0);
    } else if (event.code === "NumpadDivide"){
        updateOperator('/');
    } else if (event.code === "NumpadMultiply"){
        updateOperator('*');
    } else if (event.code === "NumpadAdd"){
        updateOperator('+');
    } else if (event.code === "NumpadSubtract"){
        updateOperator('-');
    } else if (event.code === "NumpadEnter"){
        equals();
    } else if (event.code === "Backspace"){
        backSpace();
    } else if (event.code === "Delete"){
        clearAll();
    } else if (event.code === "NumpadDecimal"){
        decimalCheck();
    }
    event.preventDefault();
  }, true);