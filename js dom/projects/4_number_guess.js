let random;
let input = document.getElementById("guessField");
let submit_btn = document.getElementById("subt");
let guesses_made = document.querySelector(".guesses");
let remaining = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let newGameBtn = document.getElementById("newBtn");
let prevGuesses = [];
let no_of_guess = 0;
let playGame = true;
let attempts = 10;
let remaining_chances = attempts - no_of_guess;
document.querySelector(".lastResult").innerHTML = ` ${remaining_chances}`;
newGameBtn.addEventListener("click", function (e) {
  newGame();
});
submit_btn.addEventListener("click", function (e) {
  if (playGame) {
    e.preventDefault();
    const curr_guess = input.value;
    // console.log(curr_guess);
    validateGuess(curr_guess);
  } else {
    displaymessage(`You have spent all your chances`);
  }
});

function generateRandom() {
  random = parseInt(Math.random() * 100 + 1);
}
generateRandom();
function validateGuess(curr_guess) {
  if (isNaN(curr_guess)) alert("Please enter a valid number");
  else if (curr_guess < 1) alert("Please enter a number greater than 0");
  else if (curr_guess > 100) alert("Please enter a number less than 100");
  else {
    prevGuesses.push(curr_guess);
    // console.log(prevGuesses);
    checkguess(parseInt(curr_guess));
  }
}

function checkguess(curr_guess) {
  no_of_guess++;
  remaining_chances = attempts - no_of_guess;
  remaining.innerHTML = `${remaining_chances}`;
  input.value = "";
  displayguess(curr_guess);
  if (curr_guess === random) {
    endGame(true);
    return;
  } else if (curr_guess < random) {
    displaymessage(`Your guess is too low.`);
  } else if (curr_guess > random) {
    displaymessage(`Your guess is too high.`);
  }
  if (remaining_chances === 0) {
    endGame(false);
    return;
  }
}
function displayguess(curr_guess) {
  guesses_made.innerHTML += `${curr_guess} `;
}
function displaymessage(message) {
  lowOrHi.innerHTML = message;
}
function endGame(win) {
  input.value = "";
  input.setAttribute("disabled", "");
  submit_btn.setAttribute("disabled", "");
  playGame = false;
  if (win)
    displaymessage(
      `You won the game ! The number is ${random} same as your guess`,
    );
  else displaymessage(`Game Over ! The number is ${random}`);
}
function newGame() {
  input.value = "";
  input.removeAttribute("disabled");
  submit_btn.removeAttribute("disabled");
  generateRandom();
  prevGuesses = [];
  guesses_made.innerHTML = "";
  displaymessage("");
  console.log(prevGuesses);
  no_of_guess = 0;
  playGame = true;
  remaining_chances = attempts - no_of_guess;
  remaining.innerHTML = remaining_chances;
}
