"use strict";

// Select elements:
const inputNumber = document.querySelector(".guess"); // Select input box
const msg = document.querySelector(".message");

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
  } else {
    if (guess === computer) {
      msg.textContent = "🎉 Correct number!! ";
      document.body.style.backgroundColor = "green";
    } else if (guess > computer) {
      msg.textContent = "📈 Too High ";
    } else if (guess < computer) {
      msg.textContent = "📉 Too Low ";
    }
  }
});
