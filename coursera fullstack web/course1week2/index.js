var startNow = function() {
	//declare available colors
	var colors = ["blue", "gray", "yellow", "green"];

	//sort
	colors = colors.sort();

	//choose color
	var chosenColor = colors[Math.floor(Math.random() * (colors.length - 0)) + 0];
	console.log("I've choose " + chosenColor);

	//construct message
	var message = "I've choosen a color among ";
	for (var i = 0 ; i < colors.length ; i++) {
		message += colors[i];
		if (i == (colors.length-2)){
			message += " and ";
		} else if (i != (colors.length-1)) {
			message += ", ";
		}
	}

	//display message
	console.log(message + "\n\n");


	for (var j = 0; j < colors.length; j++) {
		console.log("If I answer " + colors[j]);
		if (parseInt(colors.indexOf(colors[j])) > parseInt(colors.indexOf(chosenColor))) {
			console.log("It will be 'Alphabetically higher than what I've choose'\n\n");
		} else if (parseInt(colors.indexOf(colors[j])) < parseInt(colors.indexOf(chosenColor))) {
			console.log("It will be 'Alphabetically lower than what I've choose'\n\n");
		} else if (parseInt(colors.indexOf(colors[j])) == parseInt(colors.indexOf(chosenColor))) {
			console.log("It will be 'Alphabetically same than what I've choose'\n\n");
		} else {
			console.log("I don't get the answer.");
		}
	};


};
console.log("hi");
startNow();