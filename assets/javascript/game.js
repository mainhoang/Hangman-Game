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

	startGame(){

		livesRemaining = 9; // begin with 9 lives
		correctGuessesAndSpaces = [];	// begin with empty array
		inCorrect = []; // begin with empty array

		// picks a random element from the words[] & saves to theWord variable
		theWord = this.words[Math.floor(Math.random() * this.words.length)];

		// splits theWord string with "" & saves each letter in theWord as a string in lettersInWord[]
		lettersInWord = theWord.split("");

		// saves number of elements in lettersInWord[] as number of spaces
		spaces = lettersInWord.length;

		// for each space, (not spaces.length) because space is a number value, not array
		// ex: if spaces = 8, do XXX 8 times
		for(var i = 0; i < spaces; i++){

			//push an underscore into the correctGuessesAndSpaces[]
			correctGuessesAndSpaces.push("_");

		}

		// display the number of guesses/lives remaining
		this.displayLives.innerHTML = livesRemaining;
		// display underscores, separated with a space
		this.displayWord.innerHTML = correctGuessesAndSpaces.join(" ");

	},

	checkLetter(letter){

		var letterInWord = false;

		for(var i = 0; i < spaces; i++){

			if(theWord[i] === letter){

				letterInWord = true;

			}
		}
		console.log(theWord[i]);

		if(letterInWord){

			for(i = 0; i < spaces; i++){

				if(theWord[i] === letter){

					correctGuessesAndSpaces[i] = letter;
				}

			}

		}else{

			livesRemaining --;
			inCorrect.push(letter);

		}
	},

	finishGame(){

		this.displayWord.innerHTML = correctGuessesAndSpaces.join(" ");
		this.displayLives.innerHTML = livesRemaining;
		this.displayWrong.innerHTML = inCorrect.join(" ");

		console.log(lettersInWord);
		console.log(correctGuessesAndSpaces);

		if(lettersInWord.join(" ") === correctGuessesAndSpaces.join(" ")){

			this.winCounter++;
			this.displayWins.innerHTML = this.winCounter;
			this.displayLosses.innerHTML = "0";
			alert("You win!!");

			this.startGame();

		}else if(livesRemaining === 0){

			this.displayLives = livesRemaining;
			this.lossCounter ++;
			this.displayLosses.innerHTML  = this.lossCounter;
			this.displayWrong.innerHTML = "";
			alert("No fruit for you!");  


			// write a function to display "win" or "lose" text



			this.startGame();

		}
	},
};

game.startGame();
	
document.onkeyup = function(event) {

	// saves keyCode of key to letter variable
	var code = event.keyCode;

	console.log(letter);

	// if keyCode of key pressed is less than 65 or greater than 90 (A = 65 & Z = 90)...
	if(code < 65 || code > 90) {

		alert("Please enter a letter, A to Z!");

	}else{

		// captures the key press, converts it to lowercase, and saves it to var letter
		var letter = String.fromCharCode(event.keyCode).toLowerCase();

		game.checkLetter(letter);
		game.finishGame();

		console.log("typed letter", letter);

	}	
};







