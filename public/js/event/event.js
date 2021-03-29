
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

$(document).ready(function(){
$( ".slide-left" ).click(function() {
    $('.innerLiner').addClass("moveLeft");
	$( ".toggle-cover" ).animate({left:"50%"}, 300);
});

$( ".slide-right" ).click(function() {
    $('.innerLiner').removeClass("moveLeft");
	$( ".toggle-cover" ).animate({left:"-1.5%"}, 300);
});

});



