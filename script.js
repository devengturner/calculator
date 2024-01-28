"use strict";

let firstNumber;
let operator;
let secondNumber;
let displayText = "";
let runningTotal = 0;

const text = document.querySelector(".text");

const zeroButton = document.querySelector(".btn--0");
const oneButton = document.querySelector(".btn--1");
const twoButton = document.querySelector(".btn--2");
const threeButton = document.querySelector(".btn--3");
const fourButton = document.querySelector(".btn--4");
const fiveButton = document.querySelector(".btn--5");
const sixButton = document.querySelector(".btn--6");
const sevenButton = document.querySelector(".btn--7");
const eightButton = document.querySelector(".btn--8");
const nineButton = document.querySelector(".btn--9");
const clearButton = document.querySelector(".btn--ac");
const addButton = document.querySelector(".btn--plus");
const minusButton = document.querySelector(".btn--minus");
const multiplyButton = document.querySelector(".btn--multiply");
const divideButton = document.querySelector(".btn--divide");
const decButton = document.querySelector(".btn--dec");
const equalsButton = document.querySelector(".btn--equal");
const posNegButton = document.querySelector(".btn--plusminus");
const percentButton = document.querySelector(".btn--percent");

zeroButton.addEventListener("click", function () {
  if (firstNumber != undefined && operator == undefined) {
    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
    displayText = "";
    text.textContent = "";
  }

  displayText = displayText + "0";
  text.textContent = displayText;
});
oneButton.addEventListener("click", function () {
  if (firstNumber != undefined && operator == undefined) {
    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
    displayText = "";
    text.textContent = "";
  }

  displayText = displayText + "1";
  text.textContent = displayText;
});
twoButton.addEventListener("click", function () {
  if (firstNumber != undefined && operator == undefined) {
    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
    displayText = "";
    text.textContent = "";
  }

  displayText = displayText + "2";
  text.textContent = displayText;
});
threeButton.addEventListener("click", function () {
  if (firstNumber != undefined && operator == undefined) {
    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
    displayText = "";
    text.textContent = "";
  }

  displayText = displayText + "3";
  text.textContent = displayText;
});
fourButton.addEventListener("click", function () {
  if (firstNumber != undefined && operator == undefined) {
    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
    displayText = "";
    text.textContent = "";
  }

  displayText = displayText + "4";
  text.textContent = displayText;
});
fiveButton.addEventListener("click", function () {
  if (firstNumber != undefined && operator == undefined) {
    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
    displayText = "";
    text.textContent = "";
  }

  displayText = displayText + "5";
  text.textContent = displayText;
});
sixButton.addEventListener("click", function () {
  if (firstNumber != undefined && operator == undefined) {
    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
    displayText = "";
    text.textContent = "";
  }

  displayText = displayText + "6";
  text.textContent = displayText;
});
sevenButton.addEventListener("click", function () {
  if (firstNumber != undefined && operator == undefined) {
    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
    displayText = "";
    text.textContent = "";
  }
  displayText = displayText + "7";
  text.textContent = displayText;
});
eightButton.addEventListener("click", function () {
  if (firstNumber != undefined && operator == undefined) {
    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
    displayText = "";
    text.textContent = "";
  }

  displayText = displayText + "8";
  text.textContent = displayText;
});
nineButton.addEventListener("click", function () {
  if (firstNumber != undefined && operator == undefined) {
    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
    displayText = "";
    text.textContent = "";
  }

  displayText = displayText + "9";
  text.textContent = displayText;
});
clearButton.addEventListener("click", function () {
  firstNumber = undefined;
  operator = undefined;
  secondNumber = undefined;
  displayText = "";
  text.textContent = "";
  decButton.disabled = false;
});
equalsButton.addEventListener("click", function () {
  if (firstNumber && operator) {
    secondNumber = Number(displayText);
    displayText = String(operate(operator, firstNumber, secondNumber));
    runningTotal = operate(operator, firstNumber, secondNumber);
    text.textContent = displayText;
    firstNumber = Number(displayText);
    operator = undefined;
  }
});
decButton.addEventListener("click", function () {
  if (displayText.includes(".")) {
    decButton.disabled = true;
  } else {
    displayText = displayText + ".";
    text.textContent = displayText;
  }
});
addButton.addEventListener("click", function () {
  if (firstNumber == undefined) {
    firstNumber = Number(displayText);
    displayText = "";
    operator = "+";
  } else if (operator == undefined) {
    firstNumber = Number(displayText);
    operator = "+";
    displayText = "";
  } else {
    secondNumber = Number(displayText);

    displayText = operate(operator, firstNumber, secondNumber);
    runningTotal = operate(operator, firstNumber, secondNumber);
    text.textContent = displayText;

    firstNumber = Number(displayText);
    operator = "+";
    displayText = "";
  }
  decButton.disabled = false;
});
minusButton.addEventListener("click", function () {
  if (firstNumber == undefined) {
    firstNumber = Number(displayText);
    displayText = "";
    operator = "-";
  } else if (operator == undefined) {
    firstNumber = Number(displayText);
    operator = "-";
    displayText = "";
  } else {
    secondNumber = Number(displayText);

    displayText = operate(operator, firstNumber, secondNumber);
    runningTotal = operate(operator, firstNumber, secondNumber);
    text.textContent = displayText;

    firstNumber = Number(displayText);
    operator = "-";
    displayText = "";
  }
  decButton.disabled = false;
});
multiplyButton.addEventListener("click", function () {
  if (firstNumber == undefined) {
    firstNumber = Number(displayText);
    displayText = "";
    operator = "*";
  } else if (operator == undefined) {
    firstNumber = Number(displayText);
    operator = "*";
    displayText = "";
  } else {
    secondNumber = Number(displayText);

    displayText = operate(operator, firstNumber, secondNumber);
    runningTotal = operate(operator, firstNumber, secondNumber);
    text.textContent = displayText;

    firstNumber = Number(displayText);
    operator = "*";
    displayText = "";
  }
  decButton.disabled = false;
});
divideButton.addEventListener("click", function () {
  if (firstNumber == undefined) {
    firstNumber = Number(displayText);
    displayText = "";
    operator = "/";
  } else if (operator == undefined) {
    firstNumber = Number(displayText);
    operator = "/";
    displayText = "";
  } else {
    secondNumber = Number(displayText);

    displayText = operate(operator, firstNumber, secondNumber);
    runningTotal = operate(operator, firstNumber, secondNumber);
    text.textContent = displayText;

    firstNumber = Number(displayText);
    operator = "/";
    displayText = "";
  }
  decButton.disabled = false;
});
posNegButton.addEventListener("click", function () {
  if (displayText != "") {
    if (displayText.charAt(0) == "-") {
      displayText = displayText.substring(1);
      runningTotal = Number(displayText);
      text.textContent = displayText;
    } else {
      displayText = "-" + displayText;
      runningTotal = Number(displayText);
      text.textContent = displayText;
    }
  }
});
percentButton.addEventListener("click", function () {
  if (displayText != "") {
    displayText = displayText / 100;
    runningTotal = Number(displayText);
    text.textContent = displayText;
  }
});

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(sign, a, b) {
  switch (sign) {
    case "+":
      return add(a, b);

    case "-":
      return subtract(a, b);

    case "*":
      return multiply(a, b);

    case "/":
      return divide(a, b);

    default:
  }
}
