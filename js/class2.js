window.addEventListener("load", function () {
  $j = jQuery;

  if ($j(".custom_page_123").length > 0) {
      $j('<div class="qna"></div>').appendTo("#col2");
      $j(".box.text:not(:first-of-type)").each(function () {
          $j(this).appendTo(".qna");
          $j(this).children(".box_content").slideUp();
      });

      $j(".qna .box.text").click(function () {
          if ($j(this).hasClass("qna_show")) {
              $j(".qna_show").children(".box_content").slideUp();
              $j(".qna_show").removeClass("qna_show");
          } else {
              $j(".qna_show").children(".box_content").slideUp();
              $j(".qna_show").removeClass("qna_show");
              $j(this).addClass("qna_show");
              $j(this).children(".box_content").slideDown();
          }
      });
  }
  const btn = document.querySelector(".left-btn");
  btn.addEventListener("click", function () {
      window.location.href = "subscription.html";
  });
  // 스크롤할 내용의 DOM 요소

  var swiper111 = new Swiper(".visualswiper3", {
    autoplay: {
      delay: 4000,
    },
    loop: true,
    slidesPerView: 5,
    spaceBetween: 40,
    navigation: {
      prevEl: ".myclass1 .swiper-button-prev",
      nextEl: ".myclass1 .swiper-button-next",
    },
    breakpoints: {
      0: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
      200: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
      320: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      480: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      740: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      800: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
      1420: {
        spaceBetween: 40,
        slidesPerView: 5,
      },
      1920: {
        spaceBetween: 40,
        slidesPerView: 5,
      },
    }
  });
  
  // 마우스 오버 시 슬라이드 일시 정지
  swiper111.el.onmouseenter = function() {
    swiper111.autoplay.stop();
  };
  
  // 마우스 아웃 시 슬라이드 다시 재생
  swiper111.el.onmouseleave = function() {
    swiper111.autoplay.start();
  };
  
  var swiper444 = new Swiper(".visualswiper4", {
    autoplay: {
      delay: 3000,
    },
    loop: true,
    slidesPerView: 5,
    spaceBetween: 40,
    navigation: {
      prevEl: ".myclass2 .swiper-button-prev",
      nextEl: ".myclass2 .swiper-button-next",
    },
    breakpoints: {
      0: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
      200: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
      320: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      480: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      740: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      800: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
      1420: {
        spaceBetween: 40,
        slidesPerView: 5,
      },
      1920: {
        spaceBetween: 40,
        slidesPerView: 5,
      },
    },
  });
  
  // 마우스 오버 시 슬라이드 일시 정지
  swiper444.el.onmouseenter = function() {
    swiper444.autoplay.stop();
  };
  
  // 마우스 아웃 시 슬라이드 다시 재생
  swiper444.el.onmouseleave = function() {
    swiper444.autoplay.start();
  };
$(function () {
  $(".btn-fold").on("click", function () {
      if (!$(this).closest(".qna-item").hasClass("on")) {
          $(".qna-item").removeClass("on").find(".answer-article").hide();
          var oft = $(this).offset().top;
          $("html,body")
              .stop()
              .animate({ scrollTop: oft - 250 }, 300);
          $(this)
              .closest(".qna-item")
              .addClass("on")
              .find(".answer-article")
              .slideDown(300);
      } else {
          $(this)
              .closest(".qna-item")
              .removeClass("on")
              .find(".answer-article")
              .slideUp(300);
      }
  });
  const items = document.querySelectorAll(".accordion button");

  function toggleAccordion() {
      const itemToggle = this.getAttribute("aria-expanded");

      for (i = 0; i < items.length; i++) {
          items[i].setAttribute("aria-expanded", "false");
      }

      if (itemToggle == "false") {
          this.setAttribute("aria-expanded", "true");
      }
  }

  items.forEach((item) => item.addEventListener("click", toggleAccordion));
});

$(function(){
  $('.customer-logos').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint:1920,
          settings: {
              slidesToShow: 8,
          }
      },
      {
          breakpoint:1024,
          settings: {
              slidesToShow: 6,
          }
      },
      {
          breakpoint:768,
          settings: {
              slidesToShow: 3,
          }
      },
      {
          breakpoint:480,
          settings: {
              slidesToShow:2,
          }
      },
      {
          breakpoint: 320,
          settings: {
              slidesToShow: 2,
          }
      }]
  });
});
});