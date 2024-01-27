"use strict";

let firstNumber;
let operator;
let secondNumber;
let displayText = "";
let runningTotal;

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

zeroButton.addEventListener("click", function () {
  displayText = displayText + "0";
  text.textContent = displayText;
});
oneButton.addEventListener("click", function () {
  displayText = displayText + "1";
  text.textContent = displayText;
});
twoButton.addEventListener("click", function () {
  displayText = displayText + "2";
  text.textContent = displayText;
});
threeButton.addEventListener("click", function () {
  displayText = displayText + "3";
  text.textContent = displayText;
});
fourButton.addEventListener("click", function () {
  displayText = displayText + "4";
  text.textContent = displayText;
});
fiveButton.addEventListener("click", function () {
  displayText = displayText + "5";
  text.textContent = displayText;
});
sixButton.addEventListener("click", function () {
  displayText = displayText + "6";
  text.textContent = displayText;
});
sevenButton.addEventListener("click", function () {
  displayText = displayText + "7";
  text.textContent = displayText;
});
eightButton.addEventListener("click", function () {
  displayText = displayText + "8";
  text.textContent = displayText;
});
nineButton.addEventListener("click", function () {
  displayText = displayText + "9";
  text.textContent = displayText;
});
clearButton.addEventListener("click", function () {
  runningTotal = 0;
  displayText = "";
  text.textContent = runningTotal;
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
      return null;
  }
}
