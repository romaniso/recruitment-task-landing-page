(()=>{"use strict";function e(e,a,t,s){$(a).slick({autoplay:s,autoplaySpeed:2e3,dots:!1,infinite:t,speed:300,slidesToShow:e,slidesToScroll:1,responsive:[{breakpoint:1540,settings:{slidesToShow:4,slidesToScroll:4,infinite:t,dots:!1}},{breakpoint:1199.98,settings:{slidesToShow:3,slidesToScroll:3,infinite:t,dots:!1}},{breakpoint:767.98,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})}$("document").ready((function(){var a;a=86400,setInterval((function(){var e=Math.floor(a/86400),t=Math.floor(a/3600%24),s=Math.floor(a/60%60),o=a%60;t=t<10?"0".concat(t):t,s=s<10?"0".concat(s):s,o=o<10?"0".concat(o):o,$("[data-days]").text(e),$("[data-hours]").text(t),$("[data-minutes]").text(s),$("[data-seconds]").text(o),a--}),1e3),e(6,"[data-carousel-producers]",!0,!0),e(5,"[data-carousel-sales]",!0),$("[data-favorite]").on("click",(function(){$(this).toggleClass("clicked")})),$("body").on("click",(function(e){e.target.classList.contains("menu")||e.target.classList.contains("toggle")||($(".menu").removeClass("open"),$("[data-burger]").removeClass("open"))})),$("[data-burger]").on("click",(function(){$(".menu").toggleClass("open"),$("[data-burger]").toggleClass("open")})),$("[data-form-newsletter]").submit((function(e){var a;e.preventDefault(),a=$("#email").val(),/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(a)||($("[data-popup-email]").text("Niepoprawnie wpowadzony e-mail").removeClass("hidden"),$("#email").addClass("invalid")),function(){var e=$("#tel").val();if(!e.length||e.length<9||e.length>14){e.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)||($("#email").addClass("invalid"),$("[data-popup-tel]").text("Niepoprawnie wpowadzony numer telefonu").removeClass("hidden"),$("#tel").addClass("invalid"))}}(),setTimeout((function(){$("#email").removeClass("invalid"),$("[data-popup-email]").addClass("hidden"),$("#tel").removeClass("invalid"),$("[data-popup-tel]").addClass("hidden")}),4e3)}))}))})();