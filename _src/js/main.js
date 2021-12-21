const startWidth = $(window).width();
// const windowWidth = window.innerWidth;
// let infoSwiper;

// const actualYear = () => {
//   const year = new Date().getFullYear();

//   if (document.querySelector("[data-actual-year]")) {
//     document.querySelector("[data-actual-year]").textContent = year;
//   }
// };

const check = (element) => {
  if (element.length > 0) {
    return true;
  }

  return false;
};

// const getAccordionNav = () => {
//   const accordionNav = $(".nav__item--down");

//   if (check(accordionNav) && windowWidth <= 1000)
//     $(".nav__item--down").accordion({
//       transitionSpeed: 400,
//     });
// };

// const getDropDown = () => {
//   const itemDown = $(".nav__item--down");
//   const classActive = "nav__item--down-active";

//   const addClass = () => {
//     itemDown.addClass(classActive);
//   };

//   const removeClass = () => {
//     itemDown.removeClass(classActive);
//   };

//   if (check(itemDown) && windowWidth > 1000) {
//     itemDown.on("mouseover", () => {
//       addClass();
//     });

//     itemDown.on("mouseleave", () => {
//       removeClass();
//     });
//   }
// };

// const getMenuMobile = () => {
//   const navMenu = document.querySelector(".header__nav");

//   if (navMenu !== null && windowWidth <= 1000) {
//     const linkOpen = $(".header__link--open");
//     const linkClose = $(".header__link--close");
//     const menuLink = $(".menu-link");
//     const subMenuLink = $(".sub-list__link");

//     const menuMobile = new MmenuLight(navMenu);

//     const drawer = menuMobile.offcanvas();

//     linkOpen.on("click", (e) => {
//       e.preventDefault();
//       drawer.open();
//     });

//     linkClose.on("click", (e) => {
//       e.preventDefault();
//       drawer.close();
//     });

//     menuLink.on("click", (e) => {
//       e.preventDefault();
//       drawer.close();
//     });

//     subMenuLink.on("click", (e) => {
//       e.preventDefault();
//       drawer.close();
//     });
//   }
// };

// const createModal = (modal) => {
//   modal.modal({
//     fadeDuration: 200,
//   });
// };

// const getConsultationModal = () => {
//   const modal = $("#modal-consultation");
//   const link = $(".open-modal-consultation");

//   if (check(modal)) {
//     link.on("click", (e) => {
//       e.preventDefault();
//       createModal(modal);
//     });
//   }
// };

// const getSuccessModal = () => {
//   const modal = $("#modal-success");

//   if (check(modal)) {
//     createModal(modal);
//   }
// };

// const sendFormConsultation = () => {
//   const form = $(".form-consultation");

//   if (check(form)) {
//     form.on("submit", (e) => {
//       const data = $(this).serialize();

//       e.preventDefault();

//       $.ajax({
//         url: "https://httpbin.org/anything",
//         method: "post",
//         dataType: "json",
//         data,
//         success(data) {
//           getSuccessModal();
//           form.find(".reset").val("");
//         },
//       });
//     });
//   }
// };

// const sendFormRecord = () => {
//   const form = $(".record-form");

//   if (check(form)) {
//     form.on("submit", (e) => {
//       const data = $(this).serialize();

//       e.preventDefault();

//       $.ajax({
//         url: "https://httpbin.org/anything",
//         method: "post",
//         dataType: "json",
//         data,
//         success(data) {
//           getSuccessModal();
//           form.find(".reset").val("");
//         },
//       });
//     });
//   }
// };

// const getInputMask = () => {
//   const input = $(".mask");

//   if (check(input)) {
//     input.inputmask({
//       // mask: "+7 (999) 999-9999",
//       regex: "\\+7\\([0-79]{1}[0-9]{2}\\)\\-[0-9]{3}\\-[0-9]{4}",
//       keepStatic: true,
//     });
//   }
// };

// const getConsultationSlider = () => {
//   const slider = $(".slider__left");

//   if (check(slider)) {
//     const swiper = new Swiper(".slider__left", {
//       loop: true,
//       spaceBetween: 50,

//       pagination: {
//         el: ".slider__pagination",
//         bulletClass: "slider__bullet",
//         clickable: true,
//       },

//       // Navigation arrows
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     });
//   }
// };

// const getInfoSlider = () => {
//   const slider = $(".slider-info__container");

//   if (check(slider)) {
//     infoSwiper = new Swiper(".slider-info__container", {
//       loop: true,
//       effect: "fade",
//       allowTouchMove: false,
//       initialSlide: 0,
//       fadeEffect: {
//         crossFade: true,
//       },
//     });
//   }
// };

// const getInteriorSlider = () => {
//   const slider = $(".slider-interior__container");
//   const current = $(".interior-controls__current");
//   const sum = $(".interior-controls__sum");

//   if (check(slider) && check(current) && check(sum)) {
//     const swiper = new Swiper(".slider-interior__container", {
//       loop: true,
//       spaceBetween: 50,
//       initialSlide: 0,

//       pagination: {
//         el: ".interior-controls__pagination",
//         bulletClass: "slider__bullet",
//         clickable: true,
//       },

//       navigation: {
//         nextEl: ".interior-controls__next",
//         prevEl: ".interior-controls__prev",
//       },

//       on: {
//         afterInit(e) {
//           current.text(e.realIndex + 1);
//           sum.text(e.slides.length - 2);
//         },

//         slideChange(e) {
//           current.text(e.realIndex + 1);
//         },
//       },

//       controller: {
//         control: infoSwiper,
//       },
//     });
//   }
// };

// const getExamleSlider = () => {
//   const slider = $(".example-slider");
//   const items = $(".example-decor__item");
//   const current = $(".example-slider__index-current");
//   const sum = $(".example-slider__index-sum");
//   let swiper;

//   const changeSlade = (e) => {
//     $(items).on("click", (evt) => {
//       evt.preventDefault();
//       swiper.slideToLoop(Number(evt.target.dataset.slider_num));
//     });
//   };

//   if (check(slider)) {
//     swiper = new Swiper(".example-slider", {
//       spaceBetween: 50,
//       loop: true,
//       autoHeight: true,

//       navigation: {
//         nextEl: ".example-slider__next",
//         prevEl: ".example-slider__prev",
//       },

//       on: {
//         afterInit(e) {
//           $(items[e.realIndex]).addClass("example-decor__item--current");
//           changeSlade(e);
//           current.text(e.realIndex + 1);
//           sum.text(e.slides.length - 2);
//         },

//         slideChange(e) {
//           $(items).removeClass("example-decor__item--current");
//           $(items[e.realIndex]).addClass("example-decor__item--current");
//           current.text(e.realIndex + 1);
//         },
//       },
//     });
//   }
// };

// const marks = new Map([
//   [
//     "mir",
//     [
//       "Салон «Мир мебели»",
//       "Партизанская, 56",
//       "пн - сб  10:00 - 20:00,  вс 11:00 - 19:00",
//     ],
//   ],
//   [
//     "etalon",
//     [
//       "МЦ Эталон",
//       "Партизанская, 63., 2 этаж",
//       "пн - сб 10:00 - 19:00, вс 11:00 - 19:00",
//     ],
//   ],
// ]);

// const getBallon = (name) => {
//   return `<div class="addresses__item">
//     <h3> ${marks.get(name)[0]}</h3>
//       <p>${marks.get(name)[1]}</p>
//       <p>${marks.get(name)[2]}</p>
//   </div>`;
// };

// function initBasketMap() {
//   const myMap = new ymaps.Map("map", {
//     center: [52.27747, 104.30572],
//     zoom: 16,
//     controls: [],
//   });

//   const placemarkMir = new ymaps.Placemark(
//     [52.27707, 104.30592],

//     {
//       balloonContent: getBallon("mir"),
//       maxWidth: 300,
//     },

//     {
//       iconLayout: "default#image",
//       iconImageHref: "./img/svg/mark-map.svg",
//       iconImageSize: [51, 73],
//       iconImageOffset: [-25, -73],
//       // hideIconOnBalloonOpen: false,
//     }
//   );

//   const placemarkEtalon = new ymaps.Placemark(
//     [52.277654, 104.306738],
//     {
//       balloonContent: getBallon("etalon"),
//     },

//     {
//       iconLayout: "default#image",
//       iconImageHref: "./img/svg/mark-map.svg",
//       iconImageSize: [51, 73],
//       iconImageOffset: [-25, -73],
//       // hideIconOnBalloonOpen: false,
//     }
//   );

//   myMap.geoObjects.add(placemarkMir);
//   myMap.geoObjects.add(placemarkEtalon);

//   // myMap.behaviors.disable("scrollZoom");
// }

// const createMap = () => {
//   const map = $("#map");

//   if (check(map)) {
//     ymaps.ready(initBasketMap);
//   }
// };

// const scrollToTop = () => {
//   const link = $(".up__link");
//   const top = $("body,html");

//   if (check(link)) {
//     link.on("click", (e) => {
//       e.preventDefault();

//       top.animate(
//         {
//           scrollTop: 0,
//         },

//         800
//       );
//     });
//   }
// };

// const getAnchor = () => {
//   const anchorLink = $(".anchor");

//   if (check(anchorLink)) {
//     anchorLink.on("click", (e) => {
//       e.preventDefault();
//       console.log(e.target);

//       $("html, body")
//         .stop()
//         .animate(
//           {
//             scrollTop: $($(e.target).attr("href")).offset().top,
//           },

//           800
//         );
//     });
//   }
// };

// const reload = () => {
//   window.onresize = function () {
//     window.location.reload();
//   };
// };

// const scrollFunction = () => {
//   const btnUp = $(".footer__up");
//   const footerHeight = $(".main-footer");
//   const bottom = footerHeight.height() - btnUp.offset().right;

//   if (check(btnUp)) {
//     window.onscroll = () => {
//       const scrollBottom =
//         document.documentElement.scrollHeight -
//         document.documentElement.scrollTop -
//         document.documentElement.clientHeight;

//       if (
//         document.body.scrollTop > 50 ||
//         document.documentElement.scrollTop > 50
//       ) {
//         btnUp.addClass("up--visually");
//       } else {
//         btnUp.removeClass("up--visually");
//       }

//       if (scrollBottom < footerHeight.height()) {
//         btnUp.addClass("up--position");

//         btnUp.css({
//           top: `50px`,
//         });
//       } else {
//         btnUp.removeClass("up--position");

//         btnUp.css({
//           top: `auto`,
//         });
//       }
//     };
//   }
// };

let scroll;

const getScroll = () => {
  const scrollElem = $("[data-scroll-container]");
  const linkToTop = $(".main-footer__up-link");

  if (check(scrollElem)) {
    scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    scroll.on("scroll", (data) => {
      const scrollTop = data.scroll.y;

      if (scrollTop > 100) {
        $(".header").addClass("header--scroll");
      } else {
        $(".header").removeClass("header--scroll");
      }
    });

    if (check(linkToTop)) {
      linkToTop.on("click", () => {
        scroll.scrollTo("top");
      });
    }
  }
};

const resize = () => {
  let resizeTimeout;
  // const startWidth = $(window).width();

  const actualResizeHandler = () => {
    document.location.reload();
  };

  const resizeThrottler = () => {
    const endWidth = $(window).width();
    const deltaWidth = startWidth - endWidth;

    if (!resizeTimeout && Math.abs(deltaWidth) > 100) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        actualResizeHandler();
      }, 1000);
    }
  };

  const addEventResize = () => {
    return window.addEventListener("resize", resizeThrottler, false);
  };

  addEventResize();
};

const createSlider = () => {
  const slider = $(".how__list");

  if (check(slider) && startWidth < 1000) {
    slider.slick({
      slidesToShow: 1,
      speed: 600,
      rows: 0,
    });
  }
};

const createSliderNews = () => {
  const slider = $(".news-list");

  if (check(slider) && startWidth < 768) {
    slider.slick({
      slidesToShow: 1,
      speed: 600,
      rows: 0,
    });
  }
};

const makeRange = (num) => {
  const inputRange = $(`#package-${num}`);

  const getProfit = (proc, sum, modif) => {
    const profit = (sum / 100) * proc * 12;
    $(`.range-box__marga--${modif}`).text(profit.toLocaleString());
    if (modif === 365) {
      $(".range-box__proc--365 span").text(proc);
    }
  };

  const getСalculate = (data) => {
    const sumPretty = data.from_pretty;
    const sumFrom = data.from;
    const { input } = data;
    $(`.range-box__val--${num}`).text(sumPretty);

    if ($(input).is("#package-150")) {
      getProfit(15, sumFrom, 150);
    }

    if ($(input).is("#package-365")) {
      if (sumFrom > 1000 && sumFrom < 2999) {
        getProfit(8, sumFrom, 365);
      }
      if (sumFrom > 3000 && sumFrom < 9999) {
        getProfit(10, sumFrom, 365);
      }
      if (sumFrom > 10000 && sumFrom < 19999) {
        getProfit(12, sumFrom, 365);
      }
      if (sumFrom > 20000) {
        getProfit(15, sumFrom, 365);
      }
    }
  };

  if (check(inputRange)) {
    inputRange.ionRangeSlider({
      min: 1000,
      max: 100000,
      from: 72000,
      step: 500,
      onChange(data) {
        getСalculate(data);
      },
    });
  }
};

const playVideo = () => {
  const btn = $(".video__btn");
  const video = $(".video__body");
  if (check(btn) && check(video)) {
    btn.on("click", (e) => {
      video.trigger("play");
      btn.addClass("video__btn--hidden");
      e.stopPropagation();
    });

    video.on("click", (e) => {
      video.trigger("pause");
      btn.removeClass("video__btn--hidden");
    });
  }
};

const createAccordion = () => {
  $(".accordion").accordion({
    transitionSpeed: 600,
    singleOpen: true,
  });
};

const successHandler = (e) => {
  e.target.reset();

  // if (e.target.id === `pay-form`) {
  //   $(`#modal-success`).modal();
  // }

  if (e.target.id === `exit-form`) {
    window.open("/office-index.html");
  }

  if (e.target.id === `pass-form`) {
    window.open("/form-success.html");
  }

  if (e.target.id === `registration-form`) {
    //
  }
};

// // отправка форм
const sendForm = (e) => {
  const form = e.target;
  const data = $(form).serialize();
  $.ajax({
    url: "https://httpbin.org/anything",
    method: "post",
    dataType: "json",
    data,
    success() {
      successHandler(e);
    },
  });
};

const makeFormEvent = () => {
  const form = $(".form");
  if (check(form)) {
    form.on(`submit`, (e) => {
      e.preventDefault();
      sendForm(e);
    });
  }
};

const createModalReg = () => {
  const link = $(".programs__link, .add__link");
  if (check(link)) {
    link.on("click", (e) => {
      e.preventDefault();
      $("#modal-registration").modal();
      $(".modal__link-close").on("click", () => {
        $.modal.close();
      });
    });
  }
};

const creatTabs = () => {
  const tabsBlock = $("[data-tabs]");

  if (check(tabsBlock)) {
    const tabs = new Tabby("[data-tabs]");
  }
};

const stickyHeader = () => {
  const header = $("#header");
  if (check(header)) {
    header.sticky({
      topSpacing: 0,
      className: "header--scroll",
      zIndex: 5,
    });
  }
};

const stikyLink = () => {
  const link = $(".ref-link");

  if (check(link)) {
    link.sticky({
      topSpacing: 0,
      className: "header--scroll",
      zIndex: 5,
    });


  }
};

if ($("#office-header-nav").length > 0) {
  const menu = new MmenuLight(
    document.querySelector("#office-header-nav"),
    "(max-width: 1000px)"
  );

  const navigator = menu.navigation({
    title: "",
  });

  const drawer = menu.offcanvas();

  $(`.office-header__link-open`).on(`click`, (e) => {
    e.preventDefault();
    drawer.open();
    $(`.office-header__link-open`).addClass(`hidden`);
    $(`.office-header__link-close`).removeClass(`hidden`);
  });

  $(`.office-header__link-close`).on(`click`, (e) => {
    e.preventDefault();
    drawer.close();
    $(`.office-header__link-close`).addClass(`hidden`);
    $(`.office-header__link-open`).removeClass(`hidden`);
  });

  $(`.mm-ocd__backdrop`).on(`click`, () => {
    $(`.office-header__link-close`).addClass(`hidden`);
    $(`.office-header__link-open`).removeClass(`hidden`);
  });
}

const createChart = () => {
  const chart = $("#chartContainer");

  if (check(chart)) {
    const chartNew = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        // text: "Доходность ваших инвестиций",
      },
      backgroundColor: "#21212B",
      axisY: {
        title: "",
        labelFontColor: "#2C2F34",

        // interlacedColor: "rgb(255,250,250)",
        gridColor: "#2C2F34",
      },
      axisX: {
        labelFontColor: "#2C2F34",
      },

      data: [
        {
          type: "splineArea",
          color: "rgba(42, 255, 37, 1)",
          markerSize: 3,
          xValueFormatString: "YYYY",
          yValueFormatString: "$#,##0.##",
          dataPoints: [
            { x: new Date(2000, 0), y: 3289 },
            { x: new Date(2001, 0), y: 3830 },
            { x: new Date(2002, 0), y: 2009 },
            { x: new Date(2003, 0), y: 2840 },
            { x: new Date(2004, 0), y: 2396 },
            { x: new Date(2005, 0), y: 1613 },
            { x: new Date(2006, 0), y: 2821 },
            { x: new Date(2007, 0), y: 2000 },
            { x: new Date(2008, 0), y: 1397 },
            { x: new Date(2009, 0), y: 2506 },
            { x: new Date(2010, 0), y: 2798 },
            { x: new Date(2011, 0), y: 3386 },
            { x: new Date(2012, 0), y: 6704 },
            { x: new Date(2013, 0), y: 6026 },
            { x: new Date(2014, 0), y: 2394 },
            { x: new Date(2015, 0), y: 1872 },
            { x: new Date(2016, 0), y: 2140 },
          ],
        },
      ],
    });
    chartNew.render();
  }
};

const createLightbox = () => {
  const link = $(".education__link");

  if (check(link)) {
    const lightbox = GLightbox({
      selector: ".education__link",
      openEffect: "fade",
      closeEffect: "fade",
    });
  }
};

$(function () {
  // reload();
  // getAccordionNav();
  // getDropDown();
  // getMenuMobile();
  // getConsultationModal();
  // sendFormConsultation();
  // sendFormRecord();
  // getInputMask();
  // getConsultationSlider();
  // getInfoSlider();
  // getInteriorSlider();
  // getExamleSlider();
  // createMap();
  // actualYear();
  // scrollToTop();
  // getAnchor();
  // scrollFunction();

  // getVideoPromo();
  // resize();
  createSlider();
  createSliderNews();
  playVideo();
  makeRange(365);
  makeRange(150);
  // getScroll();
  createAccordion();
  makeFormEvent();
  createModalReg();
  creatTabs();
  stickyHeader();
  createChart();
  createLightbox();
});
