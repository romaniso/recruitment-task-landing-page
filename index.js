$("document").ready(() => {
  //24 hours = 86400 seconds
  timer(86400);
  carousel(6, "[data-carousel-producers]", false);
  carousel(5, "[data-carousel-sales]", true);
  favoriteHandler();
  burgerHandler();
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
    time--;
  }, 1000);
}

function carousel(slidesToShow, domEl, infinite) {
  $(domEl).slick({
    dots: false,
    infinite: infinite,
    speed: 300,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: infinite,
          dots: false,
        },
      },
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: infinite,
          dots: false,
        },
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

function favoriteHandler() {
  $("[data-favorite]").on("click", function () {
    $(this).toggleClass("clicked");
  });
}

function burgerHandler() {
  $("body").on("click", (e) => {
    if (
      !e.target.classList.contains("menu") &&
      !e.target.classList.contains("toggle")
    ) {
      $(".menu").removeClass("open");
      $("[data-burger]").removeClass("open");
    }
  });

  $("[data-burger]").on("click", () => {
    $(".menu").toggleClass("open");
    $("[data-burger]").toggleClass("open");
  });
}
