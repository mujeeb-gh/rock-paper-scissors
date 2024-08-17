

let getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  randInt = Math.floor(Math.random() * choices.length);
  return choices[randInt];
};

let getHumanChoice = () => {
  choice = prompt("Enter Your Choice (rock, paper, scissors))").toLowerCase();
  if ((choice != "rock" && choice != "paper" && choice != "scissors") || (choice == null)){
    alert(`${choice} is an invalid choice! Click "OK" to try again`);
    return getHumanChoice()
  };
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  console.log(`You: ${humanChoice}\nComputer: ${computerChoice}`);
  if (humanChoice === computerChoice){
    humanScore += 0;
    computerScore += 0;
  } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
    humanScore++;
    console.log(`${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`${computerChoice} beats ${humanChoice}`);
  }
};





function playGame (){
  for (let i = 1; i<=5; i++){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}`);
  };
  
  if (computerScore === humanScore){
    console.log("That's a tie!");
  } else if (computerScore < humanScore){
    console.log("You win!");
  } else {
    console.log("Computer wins!");
  }
}

playGame()