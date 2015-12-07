$(document).ready(function(){

  var content = [
    ["TOPIC","ANSWER 1","ANSWER 2","ANSWER 3","ANSWER 4"  ],
    ["NAME A CHARACTER FROM THE WIZARD OF OZ","TIN MAN","DOROTHY","LION","SCARECROW"  ],
    ["NAME SOMETHING THAT HELPS YOU FALL ASLEEP","ALCOHOL","SLEEPING PILLS","WATCHING TV","LISTEN TO MUSIC"  ],
    ["NAME SOMETHING THAT DRIVERS DO WITH THEIR HANDS WHEN THEY SHOULD BE AT THE WHEEL","USE A MOBILE PHONE","PICK YOUR NOSE","SMOKE","MESSING WITH RADIO OR CASSETTE"  ],
    ["NAME SOMETHING ASSOCIATED WITH HIPPIES","DRUGS","LONG HAIR","FLOWER POWER","FREE LOVE"  ],
    ["NAME A CHOCOLATE BAR BEGINNING WITH THE LETTER 'T'","TWIX","TOBLERONE","TIME-OUT","TOPIC"  ],
    ["NAME SOMETHING PEOPLE DO WHEN THEY HAVE FINISHED A MEAL","BURP","LIGHT A CIGARETTE","HAVE COFFEE OR TEA","WIPE YOUR MOUTH"  ],
    ["NAME SOMETHING YOU CAN SEE BUT YOU CANNOT TOUCH","THE SUN","THE MOON","THE CLOUDS","A RAINBOW"  ],
    ["NAME SOMETHING YOU BUY OR HIRE FOR A WEDDING","WEDDING DRESS","SUIT and TOP HAT AND TAILS","CAR","FLOWERS"  ]
  ]

var p1Score = 0;
var p2Score = 0;
var p1Lives = 3;
var p2Lives = 3;
var choices = ["", "", "", ""];
var round = 0;
var turn = 0;
var topicAnswerArray = []

$("#reset").click(function (){
  reset();
  //console.log("reset")
});

var randomIndex = Math.round((Math.random()*7.5)+0.5);
console.log(randomIndex);
var topicAnswerArray = content[randomIndex]; // 0, 1, 2, 3, 4
$("#topic").text(topicAnswerArray[0]);


setChoices = function() {
// LONG WINDED RANDOM SORTER FOR CHOICES ARRAY <<START>>
// LONG WINDED RANDOM SORTER FOR CHOICES ARRAY <<START>>
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
if (randomNumber2 > 0 && randomNumber2 < 0.33) {
  choices[1] = selectionArray[0]; selectionArray.splice([0], 1);  
} else if (randomNumber2 > 0.33 && randomNumber2 < 0.66) {
  choices[1] = selectionArray[1]; selectionArray.splice([1], 1);  
} else if (randomNumber2 > 0.66 && randomNumber2 < 1.0) {
  choices[1] = selectionArray[2]; selectionArray.splice([2], 1);  
}
if (randomNumber3 > 0 && randomNumber3 < 0.50) {
  choices[2] = selectionArray[0]; selectionArray.splice([0], 1);  
} else if (randomNumber3 > 0.50 && randomNumber3 < 1.00) {
  choices[2] = selectionArray[1]; selectionArray.splice([1], 1);  
}
choices[3] = selectionArray[0]
console.log(choices);
return choices;
// LONG WINDED RANDOM SORTER FOR CHOICES ARRAY <<END>>
// LONG WINDED RANDOM SORTER FOR CHOICES ARRAY <<END>>
}

setChoices();
$("#player1Score").text("player 1 score: " + (p1Score));
$("#player2Score").text("player 2 score: " + (p2Score));
$("#round").text("round: " + (round));

$("#C1").text(choices[0]);
$("#C2").text(choices[1]);
$("#C3").text(choices[2]);
$("#C4").text(choices[3]);

$( ".answers" ).draggable({ 
  helper : "clone", 
  cursor : "move" 
});

checkWinner = function() {
  if (($("#droppable1").text() !== "most popular") && ($("#droppable2").text() !== "2nd most popular")  && ($("#droppable3").text() !== "3rd most popular") && ($("#droppable4").text() !== "least popular")){
    reset();
    //alert("HELLO")
    if (p1Score > p2Score) {
      $("#displayBoard").text("Player 1 has won this round - well done!");
      //console.log(round);
      round++;
      reset();
    } else if (p2Score > p1Score) {
      $("#displayBoard").text("Player 2 has won this round - well done!");
      //console.log(round);
      round++;
      reset();
    } else {
      $("#displayBoard").text("Looks like a tie, next round!");
      //console.log(round);
      round++;
      reset();
    }
    // $("#round").text("round: " + (round));
    // reset();
  };
} //TAKEN OUT CHUNK OF CODE REFERENCE "DRAGGABLE QUALITIES"

// THIS WORKSSSSS!!!!!
$( "#droppable1" ).droppable({
	tolerance : "intersect",
  //accept : key1,
  //activeClass: "active",
  hoverClass:  "hover",
   drop: function(event, ui) {  	
    if (event.toElement.innerHTML === topicAnswerArray[1]) 
      {$( "#droppable1" ).text(topicAnswerArray[1]);
      $("#"+event.toElement.id).text("SELECTED")
      if (turn%2 === 0) {p1Score=p1Score+40;} else {p2Score=p2Score+40}
      $("#displayBoard").text("Nice one - correct")}
    else {$("#displayBoard").text("Sorry dude - that's wrong")
    } //$( "#droppable1" ).text(topicAnswerArray[1])
    turn++;
    $("#player1Score").text("player 1 score: " + (p1Score));
    $("#player2Score").text("player 2 score: " + (p2Score));
    $("#turn").text("turn: " + (turn));
    checkWinner();
  }     
 });

$( "#droppable2" ).droppable({
  tolerance : "intersect",
  //accept : key2,
  //activeClass: "active",
  hoverClass:  "hover",
   drop: function(event, ui) {    
    if (event.toElement.innerHTML === topicAnswerArray[2]) 
      //{console.log(event.toElement.innerHTML);
      {$("#"+event.toElement.id).text("SELECTED")
      $( "#droppable2" ).text(topicAnswerArray[2]);
      if (turn%2 === 0) {p1Score=p1Score+30;} else {p2Score=p2Score+30};
      $("#displayBoard").text("Nice one - correct")}
    else {$("#displayBoard").text("Sorry dude - that's wrong")
    }
    turn++;
    $("#player1Score").text("player 1 score: " + (p1Score));
    $("#player2Score").text("player 2 score: " + (p2Score));
    $("#turn").text("turn: " + (turn));
    checkWinner();
  }
 });

$( "#droppable3" ).droppable({
  tolerance : "intersect",
  //accept : key3,
  //activeClass: "active",
  hoverClass:  "hover",
   drop: function(event, ui) {    
    if (event.toElement.innerHTML === topicAnswerArray[3]) 
      //{$("#"+event.toElement.innerHTML).text("already selected");
      {$( "#droppable3" ).text(topicAnswerArray[3]);
      $("#"+event.toElement.id).text("SELECTED")
      if (turn%2 === 0) {p1Score=p1Score+20;} else {p2Score=p2Score+20};
    $("#displayBoard").text("Nice one - correct")}
    else {$("#displayBoard").text("Sorry dude - that's wrong")
    }
    turn++;
    $("#player1Score").text("player 1 score: " + (p1Score));
    $("#player2Score").text("player 2 score: " + (p2Score));
    $("#turn").text("turn:" + (turn));
    checkWinner();
  }
 });

$( "#droppable4" ).droppable({
  tolerance : "intersect",
  //accept : key4,
  //activeClass: "active",
  hoverClass:  "hover",
   drop: function(event, ui) {    
    if (event.toElement.innerHTML === topicAnswerArray[4])    
      //{$("#"+event.toElement.innerHTML).text("already selected");
      {$( "#droppable4" ).text(topicAnswerArray[4]);
      $("#"+event.toElement.id).text("SELECTED")
      if (turn%2 === 0) {p1Score=p1Score+10;} else {p2Score=p2Score+10};
      //alert("correct")
      $("#displayBoard").text("Nice one - correct")}
      else {$("#displayBoard").text("Sorry dude - that's wrong")
    }
    turn++;
    $("#player1Score").text("player 1 score: " + (p1Score));
    $("#player2Score").text("player 2 score: " + (p2Score));
    $("#turn").text("turn:" + (turn));
    checkWinner();
  }
 });


// reset function
reset = function() {
  turn = 0;
  round++;
  $("#round").text("round: " + (round));
  var randomIndex = Math.round((Math.random()*7.5)+0.5);
  console.log(randomIndex);
  var topicAnswerArray = content[randomIndex]; // 0, 1, 2, 3, 4
  $("#topic").text(topicAnswerArray[0]);

  setChoices();

  $("#droppable1").text("most popular");
  $("#droppable2").text("2nd most popular");
  $("#droppable3").text("3rd most popular");
  $("#droppable4").text("least popular");
   
  $("#C1").text(choices[0]);
  $("#C2").text(choices[1]);
  $("#C3").text(choices[2]);
  $("#C4").text(choices[3]);

   };
 
// LEAVE THESE ALONE  
});
