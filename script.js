let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

let optButtons = Array.from(document.querySelectorAll("button"));
let roundResult = document.querySelector("#round-result");
let playerChoiceText = document.querySelector("#player-choice");
let computerChoiceText = document.querySelector("#computer-choice");
let computerScoreText = document.querySelector("#computer-score");
let playerScoreText = document.querySelector("#player-score");
let gameResultText = document.querySelector("#game-result");
let choicesDiv = document.querySelector("#choices");
let roundsDiv = document.querySelector("#rounds");

let playerWins = "Player Wins!";
let computerWins = "Computer Wins!";
let draw = "Draw!";

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

function unparseChoice(choice) {
	switch (choice) {
		case 1:
			return "rock";
		case 2:
			return "paper";
		case 3:
			return "scissors";
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
	if (humanChoice === computerChoice) {
		return draw;
	}

	if (humanChoice == 1 && computerChoice != 2) {
		//humanScore++;
		return playerWins;
	} else if (humanChoice == 1) {
		//computerScore++;
		return computerWins;
	}

	if (humanChoice == 2 && computerChoice != 3) {
		//humanScore++;
		return playerWins;
	} else if (humanChoice == 2) {
		//computerScore++;
		return computerWins;
	}

	if (humanChoice == 3 && computerChoice != 1) {
		//humanScore++;
		return playerWins;
	} else {
		//computerScore++;
		return computerWins;
	}
}

function displayChoices(humanChoice, computerChoice) {
	let modifyFirstLetter = unparseChoice(humanChoice);
	playerChoiceText.textContent =
		modifyFirstLetter.charAt(0).toUpperCase() + modifyFirstLetter.slice(1);
	modifyFirstLetter = unparseChoice(computerChoice);
	computerChoiceText.textContent =
		modifyFirstLetter.charAt(0).toUpperCase() + modifyFirstLetter.slice(1);
}

function updateScores(winner) {
	if (winner.valueOf() === draw.valueOf()) {
		return;
	}
	if (winner.valueOf() === computerWins.valueOf()) {
		return computerScore++;
	}

	return humanScore++;
}

function updateDisplayScores() {
	playerScoreText.textContent = humanScore;
	computerScoreText.textContent = computerScore;
}

function displayOverallWinner() {
	if (humanScore > computerScore) {
		return (gameResultText.textContent = playerWins);
	}
	if (computerScore > humanScore) {
		return (gameResultText.textContent = computerWins);
	}

	return "Its a Draw!";
}

function hideFinalGameUI() {
	roundsDiv.style.display = "none";
	choicesDiv.style.display = "none";
}

function playRound(e) {
	if (roundsPlayed === 5) {
		return;
	}
	humanChoice = parseChoice(e.target.id);
	computerChoice = getComputerChoice();

	let roundWinner = getRoundResult(humanChoice, computerChoice);
	roundResult.textContent = roundWinner;
	displayChoices(humanChoice, computerChoice);
	updateScores(roundWinner);
	updateDisplayScores();
	if (roundWinner.valueOf() === draw.valueOf()) {
		return;
	}
	roundsPlayed++;
	if (roundsPlayed === 5) {
		displayOverallWinner();
		hideFinalGameUI();
	}
}

optButtons.forEach((button) => button.addEventListener("click", playRound));
