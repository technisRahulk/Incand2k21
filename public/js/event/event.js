
var downArrow = document.getElementById("btn1");
var upArrow = document.getElementById("btn2");
var day1 = document.getElementById("day1");
var day2 = document.getElementById("day2");

downArrow.onclick = function () {
    'use strict';
    day1.style = "display: none";
    day2.style = "display: block";
};

upArrow.onclick = function () {
    'use strict';
    day2.style = "display: none";
    day1.style = "display: block";
};
// $(document).ready(function(){
//     $(".slide-left").click(function () {
//         $('#offline_event').toggle('slide', {direction: "left"}, 1000);
//     });
// });
// $(document).ready(function(){
//     $(".slide-right").click(function () {
//         $('#online_event').toggle('slide', {direction: "right"}, 1000);
//     });
// });

$(document).ready(function(){
$( ".slide-left" ).click(function() {
	// $( "#offline_event" ).animate({width:"0" }, 1000);
	// $( "#online_event" ).animate({width:"100%" }, 1000);
        // $('#offline_event').removeClass("moveRight").addClass("moveLeft");
        // $('#online_event').removeClass("moveRight").addClass("moveLeft");
        $('.innerLiner').addClass("moveLeft");

	// $( ".innerLiner" ).animate({backgroundPositionX:"-100%"}, 1000);
	$( ".toggle-cover" ).animate({left:"50%"}, 300);
});

$( ".slide-right" ).click(function() {
        // $('#online_event').toggle('slide', {direction: "right"}, 1000);
        $('.innerLiner').removeClass("moveLeft");

	// $( "#online_event" ).animate({width:"0" }, 1000);
	// $( "#offline_event" ).animate({width:"100%" }, 1000);
	$( ".toggle-cover" ).animate({left:"-1.5%"}, 300);
});

});



