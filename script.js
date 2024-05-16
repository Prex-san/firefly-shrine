let timer = new Date(2024, 5, 19, 10, 0, 0, 0);
let counterInterval = setInterval(function () {
  let currentDate = new Date().getTime();
  let timeRemaining = timer - currentDate;
  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  let counter_hours = document.querySelector(".hours");
  let counter_days = document.querySelector(".days");
  let counter_minutes = document.querySelector(".minutes");
  let counter_seconds = document.querySelector(".seconds");

  counter_days.innerHTML = `${days}`;
  counter_hours.innerHTML = `${hours}`;
  counter_minutes.innerHTML = `${minutes}`;
  counter_seconds.innerHTML = `${seconds}`;
}, 1000);

let isPlaying = false;
let mediaControl = document.querySelector(".media-control");
let mediaThemeSong = document.querySelector(".theme-song");
mediaControl.addEventListener("click", () => {
  if (!isPlaying) {
    mediaThemeSong.play();
    mediaThemeSong.loop = true;
    mediaThemeSong.volume = 0.8;
    mediaControl.src = "./res/audio-play.png";
    isPlaying = true;
  } else {
    mediaThemeSong.pause();
    isPlaying = false;
    mediaControl.src = "./res/audio-mute.png";
  }
});

//June 19, 2024 11:00:00
