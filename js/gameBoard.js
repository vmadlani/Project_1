$(document).ready(function(){

var p1Score = 0;
var p2Score = 0;
var topicAnswerArray = ["NAME A CHOCOLATE BAR BEGINNING WITH THE LETTER 'T'", "TWIX", "TOBLERONE", "TIME_OUT", "TOPIC"]; 
var choices = ["TWIX", "TIME_OUT", "TOPIC", "TOBLERONE"];
var round = 0;

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
    helper : "clone", cursor : "move"
});

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
      if (round%2 === 0) {p1Score++;} else {p2Score++}
      console.log("correct")}
    else {console.log("wrong")
    }
    //$( "#droppable1" ).text(topicAnswerArray[1])
    round++;
    $("#player1Score").text("player 1 score: " + (p1Score));
    $("#player2Score").text("player 2 score: " + (p2Score));
    $("#round").text("round: " + (round));
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
      {$( "#droppable2" ).text(topicAnswerArray[2])
      if (round%2 === 0) {p1Score++;} else {p2Score++};
      console.log("correct")}
    else {console.log("wrong")
    }
    round++;
    $("#player1Score").text("player 1 score: " + (p1Score));
    $("#player2Score").text("player 2 score: " + (p2Score));
    $("#round").text("round: " + (round));
  }
 });

$( "#droppable3" ).droppable({
  tolerance : "intersect",
  //accept : key3,
  //activeClass: "active",
  hoverClass:  "hover",
   drop: function(event, ui) {    
    if (event.toElement.innerHTML === topicAnswerArray[3]) 
      {$( "#droppable3" ).text(topicAnswerArray[3])
      if (round%2 === 0) {p1Score++;} else {p2Score++};
      //alert("correct")
      console.log("correct")}
    else { console.log("wrong")
    }
    round++;
    $("#player1Score").text("player 1 score: " + (p1Score));
    $("#player2Score").text("player 2 score: " + (p2Score));
    $("#round").text("round:" + (round));
  }
 });

$( "#droppable4" ).droppable({
  tolerance : "intersect",
  //accept : key4,
  //activeClass: "active",
  hoverClass:  "hover",
   drop: function(event, ui) {    
    if (event.toElement.innerHTML === topicAnswerArray[4]) 
      {$( "#droppable4" ).text(topicAnswerArray[4])
      if (round%2 === 0) {p1Score++;} else {p2Score++};}
      //alert("correct")
    else {console.log("wrong")
    }
    round++;
    $("#player1Score").text("player 1 score: " + (p1Score));
    $("#player2Score").text("player 2 score: " + (p2Score));
    $("#round").text("round:" + (round));
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
