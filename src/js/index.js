import "../sass/style.scss";

$("document").ready(() => {
  //24 hours = 86400 seconds
  timer(86400);
  carousel(6, "[data-carousel-producers]", true, true);
  carousel(5, "[data-carousel-sales]", true);
  favoriteHandler();
  burgerHandler();
  validateForm();
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

function carousel(slidesToShow, domEl, infinite, autoplay) {
  $(domEl).slick({
    autoplay: autoplay,
    autoplaySpeed: 2000,
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

function validateForm() {
  $("[data-form-newsletter]").submit((e) => {
    e.preventDefault();

    (function validateName() {
      let email = $("#email").val();
      const pattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
      if (!pattern.test(email)) {
        $("[data-popup-email]")
          .text("Niepoprawnie wpowadzony e-mail")
          .removeClass("hidden");
        $("#email").addClass("invalid");
      }
    })();
    (function validateNumber() {
      let number = $("#tel").val();
      if (!number.length || number.length < 9 || number.length > 14) {
        const pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

        if (!number.match(pattern)) {
          $("#email").addClass("invalid");
          $("[data-popup-tel]")
            .text("Niepoprawnie wpowadzony numer telefonu")
            .removeClass("hidden");
          $("#tel").addClass("invalid");
        }
      }
    })();
    setTimeout(() => {
      $("#email").removeClass("invalid");
      $("[data-popup-email]").addClass("hidden");
      $("#tel").removeClass("invalid");
      $("[data-popup-tel]").addClass("hidden");
    }, 4000);
  });
}
