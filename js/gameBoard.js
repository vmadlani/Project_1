$(document).ready(function(){

var p1Score = 0
var p2Score = 0
var topicAnswerArray = ["NAME A CHOCOLATE BAR BEGINNING WITH THE LETTER 'T'", "TWIX", "TOBLERONE", "TIME_OUT", "TOPIC"] 
var choices = ["TWIX", "TOBLERONE", "TIME_OUT", "TOPIC"]

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

console.log(key1);
console.log(key2);
console.log(key3);
console.log(key4);

$( ".answers" ).draggable();
//$("#TWIX").draggable();
$(key1).draggable();
$(key2).draggable();
$(key3).draggable();
$(key4).draggable();




// $( ".draggable" ).draggable();
//   var choiceID = $(this).val();
//   console.log(choiceID);

$( "#droppable1" ).droppable({
	tolerance : "intersect",
  accept : "#TWIX",
  activeClass: "active",
  hoverClass:  "hover",
   drop: function(event, ui) {  	
    if (true);
    { p1Score++;
	   	$("#player1Score").text(p1Score); }     
  }
 });

$( "#droppable2" ).droppable({
  tolerance : "intersect",
  accept : key2,
  activeClass: "active",
  hoverClass:  "hover",
   drop: function(event, ui) {    
    if (true);
    { p1Score++;
      $("#player1Score").text(p1Score); }     
  }
 });

$( "#droppable3" ).droppable({
  tolerance : "intersect",
  accept : key3,
  activeClass: "active",
  hoverClass:  "hover",
   drop: function(event, ui) {    
    if (true);
    { p1Score++;
      $("#player1Score").text(p1Score); }     
  }
 });

$( "#droppable4" ).droppable({
  tolerance : "intersect",
  accept : key4,
  activeClass: "active",
  hoverClass:  "hover",
   drop: function(event, ui) {    
    if (true);
    { p1Score++;
      $("#player1Score").text(p1Score); }     
  }
 });

  //var choice1 = $("#C1").text();
  //console.log(choice1);



});
// twix, toblerone, time-out, topic