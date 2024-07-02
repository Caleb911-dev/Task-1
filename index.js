const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const today = new Date();
let currentDay = days[today.getDay()];

document.getElementById("day").innerHTML = currentDay;

function updateTime() {
  let currentTime = new Date();
  let hours = currentTime.getUTCHours();
  let minutes = currentTime.getUTCMinutes();
  let seconds = currentTime.getUTCSeconds();
  let currentUTCTime = `${hours}:${minutes}:${seconds}`;

  document.getElementById("time").innerHTML = currentUTCTime;
}

setInterval(updateTime, 1000);
