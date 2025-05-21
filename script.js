/* I will write two functions
The first one will manage the 'AI' choice
The second one will manage the 'players' choiced
getComputerChoice will get a random number between 1 and 3 (included)
Then, depending on the number, it will select rock, paper or scissors

getHumanChoice will get the players selection using a prompt

I will need a scoreboard saving both players and 'AI' scoring

Playing: Another function will receive both 'AI' and players selection
The winner should be determined by the classic game rules
Rock beats scissors
Paper beats rock
Scissors beats paper
The winner will be announced by console
The scorings would be incremented for the winner*/

let humanScore = 0;
let computerScore = 0;

function getChoice(num) {
  let choice;
  switch (num) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
  }

  return choice;
}

function parseChoice(choice) {
  switch (choice) {
    case "rock":
      return 1;
    case "paper":
      return 2;
    case "scissors":
      return 3;
  }
}

function getComputerChoice() {
  let choice;

  let randomN = Math.floor(Math.random() * 3 + 1);

  choice = getChoice(randomN);

  return choice;
}

function getHumanChoice() {
  let choice = prompt("Give me your option (rock, paper, scissors)");

  choice = choice.toLowerCase();

  return choice;
}

function playRound(humanChoice, computerChoice) {


  humanChoice = parseChoice(humanChoice);
  computerChoice = parseChoice(computerChoice);

  console.log("HumanChoice " + humanChoice);
  console.log("ComputerChoice " + computerChoice);

  if (humanChoice === computerChoice) {
    return console.log("Draw!");
  }

  if (humanChoice == 1 && computerChoice != 2) {
    humanScore++;
    console.log("Human Wins!");
    console.log("Human: " + humanScore + "\n" + "Compt: " + computerScore);
    return;
  } else if (humanChoice == 1) {
    computerScore++;
    console.log("Computer wins!");
    console.log("Human: " + humanScore + "\n" + "Compt: " + computerScore);
    return;
  }

  if (humanChoice == 2 && computerChoice != 3) {
    humanScore++;
    console.log("Humnan Wins");
    console.log("Human: " + humanScore + "\n" + "Compt: " + computerScore);
    return;
  } else if (humanChoice == 2) {
    computerScore++;
    console.log("Computer Wins");
    console.log("Human: " + humanScore + "\n" + "Compt: " + computerScore);
    return;
  }

  if (humanChoice == 3 && computerChoice != 1) {
    humanScore++;
    console.log("Human Wins");
    console.log("Human: " + humanScore + "\n" + "Compt: " + computerScore);
    return;
  } else {
    computerScore++;
    console.log("Computer Wins");
    console.log("Human: " + humanScore + "\n" + "Compt: " + computerScore);
    return;
  }


}

function playGame(){

    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
}

playGame();
