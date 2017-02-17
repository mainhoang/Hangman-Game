var game = {

	words: ["banana", "grapes", "orange", "apple", "pineapple", "blueberry"],
	theWord: "",
	str: "",
	lettersInWord: [],
	spaces: 0,
	correctGuessesAndSpaces: [],
	inCorrect: [],
	livesRemaining: 9,
	winCounter: 0,
	lossCounter: 1,
	displayLives: document.getElementById("lives"),
	displayWrong: document.getElementById("nope"),
	displayWins: document.getElementById("wins"),
	displayLosses: document.getElementById("losses"),
	displayWord: document.getElementById("word"),

}