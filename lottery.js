document.getElementById("two").onclick = function two(){
	name1 = prompt("PERSON 1, PLEASE ENTER NAME")
	pay1 = prompt(name1 + ", PLEASE ENTER MONEY AMOUNT(Just in numbers, no extra characters needed.)")
	name2 = prompt("PERSON 2, PLEASE ENTER NAME")
	pay2 = prompt(name2 + ", PLEASE ENTER MONEY AMOUNT(Just in numbers, no extra characters needed.)")
	alert("Please don't click any more numbers at this time as it ruin your experience")
	var money1 = +pay1 + +pay2;
	alert("The person who wins will get $" + money1)
}

document.getElementById("three").onclick = function three(){
	name1 = prompt("PERSON 1, PLEASE ENTER NAME")
	const pay1 = prompt(name1 + ", PLEASE ENTER MONEY AMOUNT(Just in numbers, no extra characters needed.)")
	name2 = prompt("PERSON 2, PLEASE ENTER NAME")
	pay2 = prompt(name2 + ", PLEASE ENTER MONEY AMOUNT(Just in numbers, no extra characters needed.)")
	name3 = prompt("PERSON 3, PLEASE ENTER NAME")
	pay3 = prompt(name3 + ", PLEASE ENTER MONEY AMOUNT(Just in numbers, no extra characters needed.)")
	alert("Please don't click any more numbers at this time as it ruin your experience")
	var money2 = +pay1 + +pay2 + +pay3;
	alert("The person who wins will get $" + money2)
}

document.getElementById("four").onclick = function four(){
	name1 = prompt("PERSON 1, PLEASE ENTER NAME")
	pay1 = prompt(name1 + ", PLEASE ENTER MONEY AMOUNT(Just in numbers, no extra characters needed.)")
	name2 = prompt("PERSON 2, PLEASE ENTER NAME")
	pay2 = prompt(name2 + ", PLEASE ENTER MONEY AMOUNT(Just in numbers, no extra characters needed.)")
	name3 = prompt("PERSON 3, PLEASE ENTER NAME")
	pay3 = prompt(name3 + ", PLEASE ENTER MONEY AMOUNT(Just in numbers, no extra characters needed.)")
	name4 = prompt("PERSON 4, PLEASE ENTER NAME")
	pay4 = prompt(name3 + ", PLEASE ENTER MONEY AMOUNT(Just in numbers, no extra characters needed.)")
	alert("Please don't click any more numbers at this time as it ruin your experience")
	var money3 = +pay1 + +pay2 + +pay3 + +pay4;
	alert("The person who wins will earn $" + money3)
}

document.getElementById("h2").onclick = function() {
	document.getElementById("h2").innerHTML = "Each person(depending on person number) types their number(#1 to #100) in accordingly. If you aren't playing with all 4, only fill in the ones needed. Then hit submit. NUMBERS ONLY"
	document.getElementById("h2").style.color = "blue"
}


function Submit(name1, name2, name3, name4) {
	p1 = document.getElementById("Player1").value;
	p2 = document.getElementById("Player2").value;
	p3 = document.getElementById("Player3").value;
	p4 = document.getElementById("Player4").value;
	if (p1 == "") {
		p1 = null;
	} else if (p2 == "") {
		p2 = null;
	} else if(p3 == "") {
		p3 = null;
	} else if(p4 == "") {
		p4 = null;
	}
	var ranInt = Math.floor(Math.random() * (100 - 0) + 0);


	//Calculations start now

	p1c = ranInt - p1;
	p2c = ranInt - p2;
	p3c = ranInt - p3;
	p4c = ranInt - p4;
	p1c = Math.abs(p1c);
	p2c = Math.abs(p2c);
	p3c = Math.abs(p3c);
	p4c = Math.abs(p4c);


	if (p1c < p2c && p1c < p3c && p1c < p4c) {
		alert(name1 + " is the winner")
		document.getElementById("h1").innerHTML = "Player 1 is the WINNER"
	} else if (p2c < p1c && p2c < p3c && p2c < p4c) {
		alert(name2 + " is the winner")
		document.getElementById("h1").innerHTML = "Player 2 is the WINNER"
	} else if (p3c < p2c && p3c < p1c && p3c < p4c) {
		alert(name3 + " is the winner")
		document.getElementById("h1").innerHTML = "Player 3 is the WINNER"
	} else if (p4c < p2c && p4c < p3c && p4c < p1c) {
		alert(name4 + " is the winner")
		document.getElementById("h1").innerHTML = "Player 4 is the WINNER"
	} else {
		alert("Sorry, something went wrong. Please refresh and try again. It might be 2 people used the same number.")
	}
	console.log(ranInt)
	alert("Check the console log for the random number chosen.")

	//Fix name problem. Need to pass a variable from onclick function to Calculate func
	//Find a way to calculate and display who won what amount of money.(Pass a variable here again.) VARIABLE PROBLEMS
}
