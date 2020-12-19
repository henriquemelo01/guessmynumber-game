"use strict";

// Implementing Check button:
const btnCheck = document.querySelector(".check");
btnCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); // We need to convert the type of the input, because it's a string
  console.log(guess, typeof guess); // Testing if the check button function is working
});
