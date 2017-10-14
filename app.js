// Global Variables
//=====================================
// var blueCrystal = 0;
// var redCrystal = 0;
// var greenCrystal = 0;
// var yellowCrystal = 0;

var crystal = {
	blue:
	{
		name: "blue",
		value: 0
	},
	green:
	{
		name: "green",
		value: 0
	},
	red:
	{
		name: "red",
		value: 0
	},
	yellow:
	{
		name: "yellow",
		value: 0
	},
	
};

// Scores (current and target)

var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;


// Functions
// ====================================

// Get random numbers
var getRandom = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1))+ min;
}

// Start game
var startGame = function () {
	// reset current score
	currentScore = 0;
	// set new tartget score between 19-120
	targetScore = getRandom(19, 120);
	// set different values for each of the crystals (between 1 and 12)
	crystal.blue.value = getRandom(1, 12);
	crystal.red.value = getRandom(1, 12);
	crystal.green.value = getRandom(1, 12);
	crystal.yellow.value = getRandom(1, 12);

	// change the HTML to reflect all of these changes

	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);

	// Testing
	console.log("___________________________________________");
	console.log("target Score: " + targetScore);
	console.log("blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);
	console.log("____________________________________________");
}

// Click responding to the crystals
var addValues = function(crystal) {
	currentScore = currentScore + crystal.value;

	// Change current score
	$("#yourScore").html(currentScore);

	// Call to check for win
	checkWin();

	// Testing Console
	console.log("Your Score: " + currentScore);
}

// Check to see if game is won or lost

var checkWin = function() {
	// Check if current score is larger than current score
	if(currentScore > targetScore) {
		alert("Sorry, You lost!");
		console.log("You Lost!");

		// add to win counter
		lossCount++;

		// Change html to reflect loss count
		$("#lossCount").html(lossCount);
		console.log(lossCount);

		// restart the game
		startGame();
	}

	else if(currentScore == targetScore) {
		alert("Congratulations, You Won!");
		console.log("You Won!");

		// add to loss counter
		winCount++;

		// Change html to reflect win count
		$("#winCount").html(winCount);

		// restart the game
		startGame();
	}

}


// Main Process
// ====================================
$("#blue").click(function() {
	addValues(crystal.blue);
});
$("#green").click(function() {
	addValues(crystal.green);
});
$("#red").click(function() {
	addValues(crystal.red);
});
$("#yellow").click(function() {
	addValues(crystal.yellow);
});

startGame();

