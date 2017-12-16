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

	alert("You have solved their mysterious mystery!")
	wins ++;
	$("#win").html(wins);
	gameStart();

}

function youLose (){

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

});

$('#red').on('click', function(){
	score = score + yellowRupee;
	$('#user-score').html(score);

	if (score === mysteryNumber) {
		youWin ();
	}

	else if (score > mysteryNumber) {
		youLose();
	}

});

$('#blue').on('click', function(){
	score = score + yellowRupee;
	$('#user-score').html(score);

	if (score === mysteryNumber) {
		youWin ();
	}

	else if (score > mysteryNumber) {
		youLose();
	}

});

$('#green').on('click', function(){
	score = score + yellowRupee;
	$('#user-score').html(score);

	if (score === mysteryNumber) {
		youWin ();
	}

	else if (score > mysteryNumber) {
		youLose();
	}

});


gameStart();





 });