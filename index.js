$("document").ready(() => {
  //24 hours = 86400 seconds
  timer(86400);
});

function timer(secondsToEnd) {
  let time = secondsToEnd;
  setInterval(() => {
    let days = Math.floor(time / (60 * 60 * 24));
    let hours = Math.floor((time / (60 * 60)) % 24);
    let minutes = Math.floor((time / 60) % 60);
    let seconds = time % 60;

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    $("[data-days]").text(days);
    $("[data-hours]").text(hours);
    $("[data-minutes]").text(minutes);
    $("[data-seconds]").text(seconds);
    console.log(days);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
    time--;
  }, 1000);
}
