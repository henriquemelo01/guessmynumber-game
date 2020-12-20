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

let computer = randomNumber();
let score = maxNumber;
let highscores = [];

// Comparing highscores, using an array with parameter and return max value:
const compareHighscores = function (arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    if (currentValue > max) {
      max = arr[i];
    }
  }
  return max;
};

// Reset:

const reset = function () {
  computer = randomNumber();
  document.body.style.backgroundColor = "#222";
  msg.textContent = "Start guessing...";
  score = maxNumber;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  inputNumber.value = "";
};

// Implementing Check button (Event):
const btnCheck = document.querySelector(".check");
btnCheck.addEventListener("click", function () {
  const guess = Number(inputNumber.value); // We need to convert the type of the input, because it's a string
  console.log(guess, typeof guess); // Testing if the check button function is working

  // Testing input:

  if (!guess) {
    document.querySelector(".message").textContent =
      "🚨 Fill the box with a number";
  } else {
    if (score > 0) {
      score--;
      document.querySelector(".score").textContent = score; // Change score
    }
    if (score === 0) {
      msg.textContent = "🛑 You lost the game ! Try again";
      document.body.style.backgroundColor = "rgb(148, 30, 30)";
    }

    if (guess === computer && score > 0) {
      msg.textContent = "🎉 Correct number!! ";
      document.querySelector(".number").textContent = computer;
      document.body.style.backgroundColor = "rgb(19, 141, 19)";
      highscores.push(score); // add score from array
    } else if (guess > computer && score > 0) {
      msg.textContent = "📈 Too High ";
    } else if (guess < computer && score > 0) {
      msg.textContent = "📉 Too Low ";
    }

    const maxHighscore = compareHighscores(highscores);
    document.querySelector(".highscore").textContent = maxHighscore;
  }
});

// // Implementing Again button (Event):
const btnAgain = document.querySelector(".again");
btnAgain.addEventListener("click", function () {
  reset();
});
