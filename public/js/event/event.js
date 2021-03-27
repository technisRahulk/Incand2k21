
var downArrow = document.getElementById("btn1");
var upArrow = document.getElementById("btn2");
var online = document.getElementById("online_event");
var offline = document.getElementById("offline_event");
var day1 = document.getElementById("day1");
var day2 = document.getElementById("day2");
var toggle = document.getElementById("switch");

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

