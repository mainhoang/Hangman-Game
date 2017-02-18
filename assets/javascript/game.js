
var game = {

	words: ["banana", "grapes", "orange", "apple", "pineapple", "blueberry"],
	theWord: "",
	lettersInWord: [],
	spaces: 0,
	correctGuesses: [],
	wrongGuesses: [],
	livesRemaining: 9,
	winCounter: 0,
	lossCounter: 0,
	displayLives: document.getElementById("lives"),
	displayWrong: document.getElementById("nope"),
	displayWins: document.getElementById("wins"),
	displayLosses: document.getElementById("losses"),
	displayWord: document.getElementById("word"),
	displayMessage: document.getElementById("message"),
	button: document.getElementById("start-btn"),

	assignBtn(){

		document.getElementById("start-btn").addEventListener("click", function(){

			game.startGame();

		});

	},

	startGame(){

		livesRemaining = 9; // begin with 9 lives
		correctGuesses = [];	// begin with empty array
		wrongGuesses = []; // begin with empty array
		this.button.style.display = "none";

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
			correctGuesses.push("_");

		}

		// display the number of guesses/lives remaining
		this.displayLives.innerHTML = livesRemaining;
		// display underscores, separated with a space
		this.displayWord.innerHTML = correctGuesses.join(" ");

	},

	checkLetter(letter){

		var letterInWord = false;

		for(var i = 0; i < spaces; i++){

			if(theWord[i] === letter){

				letterInWord = true;

			}
		}

		if(letterInWord){

			for(var i = 0; i < spaces; i++){

				if(theWord[i] === letter){

					correctGuesses[i] = letter;
					
				}
			}
		}

		var duplicateLetter = false;

		if(!letterInWord){

			for(var i = 0;i < wrongGuesses.length;i++){

				if(wrongGuesses[i] == letter){

					alert("You've already picked that letter!");
					duplicateLetter = true;

				}

			}

		}

		if(!letterInWord && !duplicateLetter){

			// document.getElementById("myAudio").play();
			livesRemaining--;
			wrongGuesses.push(letter);

		}

	},

	finishGame(){

		this.displayWord.innerHTML = correctGuesses.join(" ");
		this.displayLives.innerHTML = livesRemaining;
		this.displayWrong.innerHTML = wrongGuesses.join("  ");

		if(lettersInWord.join(" ") === correctGuesses.join(" ")){

			this.winCounter++;
			this.displayWins.innerHTML = this.winCounter;
			alert("You win!"); 
			this.startGame();

		}else if(wrongGuesses.length === 9){

			this.lossCounter ++;
			this.displayLosses.innerHTML  = this.lossCounter;
			this.displayWrong.innerHTML = "";
			alert("No fruit for you!");  
			this.startGame();
			this.livesRemaining = 9;
			this.displayLives = livesRemaining;

		}

	},

};

game.assignBtn();
	
document.onkeyup = function(event) {
	
	var code = event.keyCode; // saves keyCode of key to letter variable

	if(code < 65 || code > 90) { 

		// if keyCode of key pressed is less than 65 or greater than 90 (A = 65 & Z = 90)...
		alert("Please enter a letter, A to Z!");

	}else{
		
		var letter = String.fromCharCode(event.keyCode).toLowerCase(); // captures the key press, converts it to lowercase, and saves it to var letter

		game.checkLetter(letter);
		game.finishGame();

	}	

};







