let humanScore = 0;
let computerScore = 0;
let optButtons = Array.from(document.querySelectorAll("button"));
let results = document.querySelector("results-container");

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

function playRound(e) {
	console.log("Launching play round" + e);
	humanChoice = parseChoice(e.target.textContent);
	computerChoice = getComputerChoice();

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

optButtons.forEach((button) => button.addEventListener("click", playRound));
