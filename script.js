const choices = document.querySelectorAll(".choice");
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const winnerDisplay = document.getElementById("winner");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resetBtn = document.getElementById("reset");

let userScore = 0;
let computerScore = 0;

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.dataset.choice;
    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);

    userChoiceDisplay.textContent = "Your Choice: " + userChoice;
    computerChoiceDisplay.textContent = "Computer Choice: " + computerChoice;
    winnerDisplay.textContent = "Winner: " + winner;

    if (winner === "You") {
      userScore++;
    } else if (winner === "Computer") {
      computerScore++;
    }

    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
  });
});

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function getWinner(user, computer) {
  if (user === computer) {
    return "Draw";
  }
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You";
  } else {
    return "Computer";
  }
}

resetBtn.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userChoiceDisplay.textContent = "Your Choice: -";
  computerChoiceDisplay.textContent = "Computer Choice: -";
  winnerDisplay.textContent = "Winner: -";
  userScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;
});
