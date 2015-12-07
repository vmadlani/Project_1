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

// var i = Math.round(Math.random());
// //Generate random answers in the choices array
// choices[0]= 
// choices[1]=
// choices[2]=
// choices[3]=

$("#player1Score").text("player 1 score: " + (p1Score));
$("#player2Score").text("player 2 score: " + (p2Score));
$("#round").text("round: " + (round));

$("#C1").text(choices[0]);
$("#C2").text(choices[1]);
$("#C3").text(choices[2]);
$("#C4").text(choices[3]);

$("#C1").attr("id",choices[0])
$("#C2").attr("id",choices[1])
$("#C3").attr("id",choices[2])
$("#C4").attr("id",choices[3])

var key1 = "#" + topicAnswerArray[1]
var key2 = "#" + topicAnswerArray[2]
var key3 = "#" + topicAnswerArray[3]
var key4 = "#" + topicAnswerArray[4]

console.log(key1 , key2, key3, key4);

$( ".answers" ).draggable({
    helper : "clone", 
    cursor : "move"
});

$(key1).draggable({
  helper : "clone", cursor : "move"
});
$(key2).draggable({
  helper : "clone", cursor : "move"
});
$(key3).draggable({
  helper : "clone", cursor : "move"
});
$(key4).draggable({
  helper : "clone", cursor : "move"
});

console.log("enabled")
//$( ".answers" ).draggable( 'disable' );
//console.log("disabled")

checkWinner = function() {
  console.log($(key1).text());
  if (($(key1).text() === "already selected") && ($(key2).text() === "already selected")  && ($(key3).text() === "already selected") && ($(key4).text() === "already selected")){
    alert("HELLO")
    reset();
  };
}

reset = function() {
  console.log("RESET")
}

//TAKEN OUT CHUNK OF CODE REFERENCE "DRAGGABLE QUALITIES"

// THIS WORKSSSSS!!!!!
$( "#droppable1" ).droppable({
	tolerance : "intersect",
  //accept : key1,
  //activeClass: "active",
  hoverClass:  "hover",
   drop: function(event, ui) {  	
    //console.log(event);
    //console.log(event.target.innerHTML);
    //console.log(topicAnswerArray[1]);
    //console.log(event.toElement.innerHTML);
    if (event.toElement.innerHTML === topicAnswerArray[1]) 
      {$( "#droppable1" ).text(topicAnswerArray[1]);
      //console.log(event.toElement.innerHTML);
      //console.log($("#"+event.toElement.innerHTML));
      $("#"+event.toElement.innerHTML).text("already selected");
      //console.log(choices.index[event.toElement.innerHTML])
      //alert("stop")
      //console.log($("#"+event.toElement.innerHTML));
      //var currentBox = $("#"+event.toElement.innerHTML)
      //currentBox.draggable("disable");
      //$(""#"" + event.toElement.innerHTML+ """).draggable("disable");
      //event.toElement.addClass(".done);
      if (round%2 === 0) {p1Score=p1Score+40;} else {p2Score=p2Score+40}
      $("#displayBoard").text("Nice one - correct")}
    else {$("#displayBoard").text("Sorry dude - that's wrong")
    }
    //$( "#droppable1" ).text(topicAnswerArray[1])
    round++;
    $("#player1Score").text("player 1 score: " + (p1Score));
    $("#player2Score").text("player 2 score: " + (p2Score));
    $("#round").text("round: " + (round));
    checkWinner();
    //$("p1Score").text("HELLO")
    //alert("correct!")
  //$("#round").text("round: " + (round));
  }     
 });

$( "#droppable2" ).droppable({
  tolerance : "intersect",
  //accept : key2,
  //activeClass: "active",
  hoverClass:  "hover",
   drop: function(event, ui) {    
    if (event.toElement.innerHTML === topicAnswerArray[2]) 
      {$( "#droppable2" ).text(topicAnswerArray[2]);
      $("#"+event.toElement.innerHTML).text("already selected");
      if (round%2 === 0) {p1Score=p1Score+30;} else {p2Score=p2Score+30};
      $("#displayBoard").text("Nice one - correct")}
    else {$("#displayBoard").text("Sorry dude - that's wrong")
    }
    round++;
    $("#player1Score").text("player 1 score: " + (p1Score));
    $("#player2Score").text("player 2 score: " + (p2Score));
    $("#round").text("round: " + (round));
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
      {$( "#droppable3" ).text(topicAnswerArray[3]);
      $("#"+event.toElement.innerHTML).text("already selected");
      if (round%2 === 0) {p1Score=p1Score+20;} else {p2Score=p2Score+20};
    $("#displayBoard").text("Nice one - correct")}
    else {$("#displayBoard").text("Sorry dude - that's wrong")
    }
    round++;
    $("#player1Score").text("player 1 score: " + (p1Score));
    $("#player2Score").text("player 2 score: " + (p2Score));
    $("#round").text("round:" + (round));
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
      {$( "#droppable4" ).text(topicAnswerArray[4]);
      $("#"+event.toElement.innerHTML).text("already selected");
      if (round%2 === 0) {p1Score=p1Score+10;} else {p2Score=p2Score+10};
      //alert("correct")
      $("#displayBoard").text("Nice one - correct")}
      else {$("#displayBoard").text("Sorry dude - that's wrong")
    }
    round++;
    $("#player1Score").text("player 1 score: " + (p1Score));
    $("#player2Score").text("player 2 score: " + (p2Score));
    $("#round").text("round:" + (round));
    checkWinner();
  }
 });

  //var choice1 = $("#C1").text();
  //console.log(choice1);

});
// twix, toblerone, time-out, topic

// REFERENCE: DRAGGABLE QUALITIES
// $(key1).draggable({
//   helper : "clone", cursor : "move"
// });
// $(key2).draggable({
//   helper : "clone", cursor : "move"
// });
// $(key3).draggable({
//   helper : "clone", cursor : "move"
// });
// $(key4).draggable({
//   helper : "clone", cursor : "move"
// });
