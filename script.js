document.addEventListener('DOMContentLoaded', function () {
    var swiper;

    function initializeSwiper() {
        if (window.innerWidth <= 720) {
            swiper = new Swiper('.MySwiper', {
                loop: false,
                slidesPerView: 1,
                spaceBetween: 10,
                slidesPerGroup: 1,
                slidesOffsetAfter: 0,
                navigation: {
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        } else if (window.innerWidth <= 1000) {
            swiper = new Swiper('.MySwiper', {
                loop: true,
                slidesPerView: 2,
                spaceBetween: 10,
                slidesPerGroup: 1,
                slidesOffsetAfter: 0,
                navigation: {
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }  else if (window.innerWidth <= 1300) {
            swiper = new Swiper('.MySwiper', {
                loop: true,
                slidesPerView: 3,
                spaceBetween: 10,
                slidesPerGroup: 1,
                slidesOffsetAfter: 0,
                navigation: {
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            }); }
            else {
            swiper = new Swiper('.MySwiper', {
                loop: true,
                slidesPerView: 4,
                spaceBetween: 10,
                slidesPerGroup: 1,
                slidesOffsetAfter: 50,
                navigation: {
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }
    }

    initializeSwiper();

    window.addEventListener('resize', function () {
        var slidesPerView = getSlidesPerView();

        if (swiper.params.slidesPerView !== slidesPerView) {
            swiper.destroy();
            initializeSwiper();
        }
    });

    function getSlidesPerView() {
        var screenWidth = window.innerWidth;
        if (screenWidth <= 720) {
            return 1;
        } else if (screenWidth<=1000){
            return 2;
        } else if (screenWidth <= 1300) {
            return 3;
        } else {
            return 4;
        }
    }
});


    var popup = document.getElementById("popup");
    var openPopupButton = document.getElementById("open-popup");
    var closeButton = document.querySelector('.popup_close')
    openPopupButton.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("open");
    });

    closeButton.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.remove('open');
  });
  var popup = document.getElementById("popup");
  var openPopupButton = document.getElementById("open-popup");
  openPopupButton.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("open");
  });
  var input = document.querySelector("#phone");
  var iti = window.intlTelInput(input, {
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    initialCountry: "ua",
    separateDialCode: true,
  });

  document
    .querySelector(".popup_second_button")
    .addEventListener("click", function () {
      var isValid = iti.isValidNumber();
      if (isValid) {
        alert("Введено дійсний номер телефону: " + iti.getNumber());
      } else {
        alert("Недійсний номер телефону!");
      }
    });
