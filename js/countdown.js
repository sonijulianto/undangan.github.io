
var countDownDate = new Date("Jan 28, 2021 15:37:25").getTime();


var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + "<br><small>&nbsp Days &nbsp</small>";
  document.getElementById("hours").innerHTML = hours + "<br><small>&nbsp Hours &nbsp</small> ";
  document.getElementById("minutes").innerHTML = minutes + "<br><small>&nbsp Minutes &nbsp</small> ";
  document.getElementById("seconds").innerHTML = seconds + "<br><small>&nbsp Seconds &nbsp</small> ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "PERNIKAHAN TELAH SELESAI";
  }
}, 1000);