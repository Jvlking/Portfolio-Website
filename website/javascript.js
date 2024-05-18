showClock();
setInterval(showClock, 1000);

function showClock(){
  //var thisDay = new Date(2018, 5, 18, 9, 31, 27);
  var thisDay = new Date();
  
  var localDate =  thisDay.toLocaleDateString();
  var localTime =  thisDay.toLocaleTimeString();

  document.getElementById('currentTime').innerHTML = '<span>' + localDate + '</span>' + '<span>' + localTime + '</span>';

  var j4Date = nextJuly4(thisDay);
  j4Date.setHours(21);

  let days = (j4Date - thisDay) / 1000 / 60 / 60 / 24;
  let hrs = (days - Math.floor(days)) * 24;
  let mins = (hrs - Math.floor(hrs)) * 60;
  let secs = (mins - Math.floor(mins)) * 60;

  document.getElementById('dLeft').textContent = Math.floor(days);
  document.getElementById('hLeft').textContent = Math.floor(hrs);
  document.getElementById('mLeft').textContent = Math.floor(mins);
  document.getElementById('sLeft').textContent = Math.floor(secs);
}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2025");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}