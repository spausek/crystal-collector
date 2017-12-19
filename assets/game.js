 $(document).ready(function() {

//global variables

var redRupee;
var blueRupee;
var greenRupee;
var redRupee;
var mysteryNumber;
var score;
var wins = 0;
var losses = 0;
var rupeeSound = new Audio('./assets/audio/LTTP_Rupee1.wav');
var winSound = new Audio('./assets/audio/LTTP_Secret.wav');
var loseSound = new Audio('./assets/audio/LTTP_Link_Dying.wav');

//Start of game

function gameStart() {
	score = 0;
	mysteryNumber = Math.floor(Math.random() *101) + 19;
	yellowRupee = Math.floor(Math.random()* 12) +1;
	redRupee = Math.floor(Math.random()* 12) +1;
	greenRupee = Math.floor(Math.random()* 12) +1;
	blueRupee = Math.floor(Math.random()* 12) +1;
	$('#mystery-number').html(mysteryNumber)
	$('#user-score').html(score);



	console.log(mysteryNumber);
	console.log(yellowRupee);
	console.log(redRupee);
	console.log(greenRupee);
	console.log(blueRupee);
	


}

function youWin () {
	winSound.play();
	alert("You have solved their mysterious mystery!")
	wins ++;
	$('#win').html(wins);
	gameStart();


}

function youLose (){

	loseSound.play();
	alert("The Rupees' have retained their secrets! Hehehehehe")
	losses ++;
	$('#loss').html(losses);
	gameStart();
}



$('#yellow').on('click', function(){
	score = score + yellowRupee;
	$('#user-score').html(score);

	if (score === mysteryNumber) {
		youWin ();
	}

	else if (score > mysteryNumber) {
		youLose();
	}



	rupeeSound.play();

});

$('#red').on('click', function(){
	score = score + redRupee;
	$('#user-score').html(score);

	if (score === mysteryNumber) {
		youWin ();
	}

	else if (score > mysteryNumber) {
		youLose();
	}

	rupeeSound.play();

});

$('#blue').on('click', function(){
	score = score + blueRupee;
	$('#user-score').html(score);

	if (score === mysteryNumber) {
		youWin ();
	}

	else if (score > mysteryNumber) {
		youLose();
	}

	rupeeSound.play();

});

$('#green').on('click', function(){
	score = score + greenRupee;
	$('#user-score').html(score);

	if (score === mysteryNumber) {
		youWin ();
	}

	else if (score > mysteryNumber) {
		youLose();
	}

	rupeeSound.play();

});


gameStart();





 });