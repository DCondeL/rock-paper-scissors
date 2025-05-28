let humanScore = 0;
let computerScore = 0;
let optButtons = Array.from(document.querySelectorAll("button"));
let roundResult = document.querySelector("#round-result");
let playerChoiceText = document.querySelector("#player-choice");
let computerChoiceText = document.querySelector("#computer-choice");
let choicesText = document.querySelector("#choices";

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
	choice = choice.toLowerCase();
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

	return parseChoice(choice);
}

function getHumanChoice() {
	let choice = prompt("Give me your option (rock, paper, scissors)");

	choice = choice.toLowerCase();

	return choice;
}

function getRoundResult(humanChoice, computerChoice) {
	console.log("HumanChoice " + humanChoice);
	console.log("ComputerChoice " + computerChoice);

	if (humanChoice === computerChoice) {
		return "Draw!";
	}

	if (humanChoice == 1 && computerChoice != 2) {
		//humanScore++;
		return "Human Wins!";
	} else if (humanChoice == 1) {
		//computerScore++;
		return "Computer wins!";
	}

	if (humanChoice == 2 && computerChoice != 3) {
		//humanScore++;
		return "Humnan Wins";
	} else if (humanChoice == 2) {
		//computerScore++;
		return "Computer Wins";
	}

	if (humanChoice == 3 && computerChoice != 1) {
		//humanScore++;
		return "Human Wins";
	} else {
		//computerScore++;
		return "Computer Wins";
	}
}

function displayChoices(humanChoice, computerChoice) {
	playerChoiceText.textContent = humanChoice;
	computerChoiceText.textContent = computerChoice;
}

function playRound(e) {
	humanChoice = parseChoice(e.target.textContent);
	computerChoice = getComputerChoice();

	let roundWinner = getRoundResult(humanChoice, computerChoice);
	roundResult.textContent = roundWinner;
	displayChoices(humanChoice, computerChoice);
}

optButtons.forEach((button) => button.addEventListener("click", playRound));
