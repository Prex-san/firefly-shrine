let timer = new Date("June 19, 2024 11:00:00").getTime();
let counterInterval = setInterval(function () {
  let currentDate = new Date().getTime();
  let timeRemaining = timer - currentDate;
  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  let counter = document.querySelector(".timer");

  counter.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
}, 1000);
