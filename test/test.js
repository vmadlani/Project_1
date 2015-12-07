$(document).ready(function(){

	  var content = [
	    ["TOPIC","ANSWER 1","ANSWER 2","ANSWER 3","ANSWER 4"  ],
	    ["NAME A CHARACTER FROM THE WIZARD OF OZ","TIN MAN","DOROTHY","LION","SCARECROW"  ],
	    ["NAME SOMETHING THAT HELPS YOU FALL ASLEEP","ALCOHOL","SLEEPING PILLS","WATCHING TV","LISTEN TO MUSIC"  ],
	    ["NAME SOMETHING THAT DRIVERS DO WITH THEIR HANDS WHEN THEY SHOULD BE AT THE WHEEL","USE A MOBILE PHONE","PICK YOUR NOSE","SMOKE","MESSING WITH RADIO/CASSETTE"  ],
	    ["NAME SOMETHING ASSOCIATED WITH HIPPIES","DRUGS","LONG HAIR","FLOWERS(POWER)","FREE LOVE"  ],
	    ["NAME A CHOCOLATE BAR BEGINNING WITH THE LETTER 'T'","TWIX","TOBLERONE","TIME-OUT","TOPIC"  ],
	    ["NAME SOMETHING PEOPLE DO WHEN THEY HAVE FINISHED A MEAL","BURP","LIGHT A CIGARETTE","HAVE COFFEE/TEA","WIPE YOUR MOUTH"  ],
	    ["NAME SOMETHING YOU CAN SEE BUT YOU CANNOT TOUCH","THE SUN","THE MOON","THE CLOUDS","A RAINBOW"  ],
	    ["NAME SOMETHING YOU BUY OR HIRE FOR A WEDDING","WEDDING DRESS","SUIT/TOP HAT & TAILS","CAR","FLOWERS"  ]
	  ]


	var p1Score = 0;
	var p2Score = 0;
	var topicAnswerArray = content[5]; // 0, 1, 2, 3, 4
	var choices = ["", "", "", ""];
	var round = 0;
	var correctCells = 0;

var selectionArray = [topicAnswerArray[1], topicAnswerArray[2], topicAnswerArray[3], topicAnswerArray[4]]
console.log(selectionArray);

var randomNumber = Math.random();
var randomNumber2 = Math.random();
var randomNumber3 = Math.random();

if (randomNumber > 0 && randomNumber < 0.25) {
	choices[0] = selectionArray[0]; selectionArray.splice([0], 1);	
} else if (randomNumber > 0.25 && randomNumber < 0.5) {
	choices[0] = selectionArray[1]; selectionArray.splice([1], 1);	
} else if (randomNumber > 0.5 && randomNumber < 0.75) {
	choices[0] = selectionArray[2]; selectionArray.splice([2], 1);	
} else if (randomNumber > 0.75 && randomNumber < 1.0) {
	choices[0] = selectionArray[3]; selectionArray.splice([3], 1);	
} 
//console.log(selectionArray)

if (randomNumber2 > 0 && randomNumber2 < 0.33) {
	choices[1] = selectionArray[0]
		selectionArray.splice([0], 1);	
} else if (randomNumber2 > 0.33 && randomNumber2 < 0.66) {
	choices[1] = selectionArray[1]
	selectionArray.splice([1], 1);	
} else if (randomNumber2 > 0.66 && randomNumber2 < 1.0) {
	choices[1] = selectionArray[2]
	selectionArray.splice([2], 1);	
}
//console.log(selectionArray)

if (randomNumber3 > 0 && randomNumber3 < 0.50) {
	choices[2] = selectionArray[0]
		selectionArray.splice([0], 1);	
} else if (randomNumber3 > 0.50 && randomNumber3 < 1.00) {
	choices[2] = selectionArray[1]
	selectionArray.splice([1], 1);	
}
//console.log(selectionArray)
choices[3] = selectionArray[0]

console.log(choices);













});