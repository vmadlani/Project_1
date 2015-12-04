$(document).ready(function(){

var p1Score = 0

$( ".draggable1" ).draggable();

$( ".droppable1" ).droppable({
	tolerance : "intersect",
  drop: function() {
  		//console.log($("#ABC").text());
  		//console.log($("#player1Score").text());
  		//alert( "dropped" );
  		
  		//console.log($("#player1Score").text());

		var myNewTextElement = $("#player1Score").text();

		//console.log("hello")

		$("#player1Score").text(p1Score);

		//console.log("hello2")

  }

});



});