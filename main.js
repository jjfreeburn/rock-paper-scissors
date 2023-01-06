const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Please enter rock, paper, or scissors");
  }
};
// console.log(getUserChoice("paper"));

const getComputerChoice = function () {
  if (Math.floor(Math.random() * 3) === 0) {
    return "rock";
  } else if (Math.floor(Math.random() * 3) === 1) {
    return "paper";
  } else if (Math.floor(Math.random() * 3) === 2) {
    return "scissors";
  }
};
// console.log(getComputerChoice());

const determineWinner = function (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log("The game was tie");
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("Robot won");
    } else computerChoice === "paper";
    {
      console.log("Human won");
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      console.log("Robot Won");
    } else {
      console.log("Human won");
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("Robot won");
    } else {
      console.log("Human Won");
    }
  }
};
// console.log(determineWinner("paper", "paper"));

const playGame = () => {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();

  console.log(`Human picked ${userChoice}`);
  console.log(`Robot picked ${computerChoice} `);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
