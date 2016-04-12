var rand = Math.floor(Math.random() * 10) + 1;
var userInput = document.getElementById("userInput");
	
function hah () {
	document.getElementById("number2").innerHTML = rand;
}

function guess() {
	if (rand > userInput.value) {
		document.getElementById("outcome").innerHTML = "Too Low... Such a loser";
		hah();
		setTimeout(clear,3000)
	} else if (rand < userInput.value) {
		document.getElementById("outcome").innerHTML = "Too High.... Wah, wah, wah. You Suck!";
		hah();
		setTimeout(clear,3000)
	} else if (rand == userInput.value) {
		console.log("Holy Crap, You Guessed it Right!!!");
		document.getElementById("outcome").innerHTML = "Holy Crap, You Guessed it Right!!!";
		hah();
		setTimeout(clear,4000)
	} else {
		console.log("WTF dummy, that's not a number");
		setTimeout(clear,3000);
		
	}
}

function clear() {
	rand = Math.floor(Math.random() * 10) + 1;
	userInput.value = "";
	document.getElementById("number2").innerHTML = "";
	document.getElementById("outcome").innerHTML = "";
}



button.onclick = guess;



	//Push the button below to start game. Computer will select a number between 1 and 100.