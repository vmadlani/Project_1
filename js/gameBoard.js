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
$(key1).draggable({
  helper : "clone",
  cursor : "move"
});
$(key2).draggable({
  helper : "clone"
});
$(key3).draggable({
  helper : "clone"
});
$(key4).draggable({
  helper : "clone"
});


// $( ".draggable" ).draggable();
//   var choiceID = $(this).val();
//   console.log(choiceID);

// THIS WORKSSSSS!!!!!
$( "#droppable1" ).droppable({
	tolerance : "intersect",
  //accept : key1,
  //activeClass: "active",
  hoverClass:  "hover",
   drop: function(event, ui) {  	
    console.log(event);
    console.log(event.target.innerHTML);
    console.log(topicAnswerArray[1]);
    console.log(event.toElement.innerHTML);
    if (event.toElement.innerHTML === topicAnswerArray[1]) 
      {alert("hallejulah!!!")}
    else {alert("wrong")}
    //$( "#droppable1" ).text(topicAnswerArray[1])
    p1Score++;
    //alert("correct!")
  }     
     
 });

$( "#droppable2" ).droppable({
  tolerance : "intersect",
  accept : key2,
  activeClass: "active",
  hoverClass:  "hover",
   drop: function(event, ui) {    
    $( "#droppable2" ).text(topicAnswerArray[2])
    p1Score++;
    alert("correct!")
  }
 });

$( "#droppable3" ).droppable({
  tolerance : "intersect",
  accept : key3,
  activeClass: "active",
  hoverClass:  "hover",
   drop: function(event, ui) {    
    $( "#droppable3" ).text(topicAnswerArray[3])
    p1Score++;
    alert("correct!")
  }
 });

$( "#droppable4" ).droppable({
  tolerance : "intersect",
  accept : key4,
  activeClass: "active",
  hoverClass:  "hover",
   drop: function(event, ui) {    
    $( "#droppable4" ).text(topicAnswerArray[4])
    p1Score++;
    alert("correct!")
  }
 });

  //var choice1 = $("#C1").text();
  //console.log(choice1);

});
// twix, toblerone, time-out, topic