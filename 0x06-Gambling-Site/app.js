// 1 - Deposit some money
// 2 - Determine number of lines to bet on
// 3 - Collect a bet amount of money
// 4 - spin the slot machine
// 5 - Check if the user won
// 6 - Give the user their winning or subtract their wasting
// 7 - Check for amount remainder
// 8 - Play again

const prompt = require("prompt-sync")();
const max = 3;

function randomInt(range) {
	return Math.floor(Math.random() * range);
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

const deposit = () => {
	while (true) {
		const depositAmount = prompt("How much do you wanna deposit: ");
		const numberDepositAmount = parseFloat(depositAmount);
		if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
			console.log("Invalid Entry, try again!!");
		} else {
			return numberDepositAmount;
		}
	}
};


const betLines = () => {
	while (true) {
		const input = prompt("How many lines you wanna bet on: ");
		const number = parseInt(input);
		if (isNaN(number) || (number <= 0 || number > 4)) {
			console.log("You can only bet on lines between 1 - 3.");
		}
		else {
			return number;
		}
	}
}

const betAmount = (capital) => {
	while (true) {
		const input = prompt("What's the bet amount: ");
		const bet = parseFloat(input);
		if (isNaN(bet) || bet <= 0) {
			console.log("Invalid Amount, try again.");
		}
		else if (bet > capital) {
			console.log("Your bet exceed your Deposit.");
		}
		else {
			return bet;
		}
	}
}


const spin = () => {
	const row1 = randomInt(max);
	const row2 = randomInt(max);
	const row3 = 0
	if (row1 === row2 === row3)
		return true;
	else {
		return false;
	}
}
async function run() {
	await sleep(10000);
}



//===========================================================================
// Testing Deposit function
let amout = deposit();
const lines = betLines();
let bet = betAmount(amout);
console.log("You've deposit $" + amout);
console.log("Welcome to our world");
console.log("Amount = " + amout);
console.log("Lines  = " + lines);
console.log("Bet    = " + bet);
console.log("Let's Start");
prompt("press any key to continue...");
console.log("Spining...")
run();
const spining = spin();
if (spining) {
	amout += bet;
	console.log("You made it");
	console.log("Amount = " + amout);
}
else {
	amout -= bet;
	console.log("You fucked up.");
	console.log("Amount = " + amout);

}
prompt("press any key to continue...");
