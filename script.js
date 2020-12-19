"use strict";

// Select elements:
const inputNumber = document.querySelector(".guess"); // Select input box

// Generate random number between 1 and 20:
const maxNumber = 20;
const randomNumber = function () {
  const number = Math.floor(Math.random() * maxNumber + 1);
  return number;
};

const computer = randomNumber();

// Implementing Check button (Event):
const btnCheck = document.querySelector(".check");
btnCheck.addEventListener("click", function () {
  const guess = Number(inputNumber.value); // We need to convert the type of the input, because it's a string
  console.log(guess, typeof guess); // Testing if the check button function is working

  if (!guess) {
    document.querySelector(".message").textContent =
      "🚨 Fill the box with a number";
  }

  if (guess === computer) {
    document.querySelector(".message").textContent = "🎉 Correct number!! ";
  }
});
