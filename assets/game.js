 $(document).ready(function() {

//global variables


var mysteryNumber;
var score;
var wins = 0;
var losses = 0;

//Start of game

function gameStart() {

	mysteryNumber = Math.floor(Math.random() *101) + 19;

	console.log(mysteryNumber);
	var numberArray =  [];

	for (var i = 0; i < 4; i ++) {
		var randomNumber = Math.floor(Math.random() *12) +1;
		console.log(randomNumber);
	}





}

gameStart();





 });