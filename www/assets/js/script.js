/*
  Template Name: Furea - Furniture eCommerce HTML Template
  Author Name: Hook theme
  Author URL: https://themeforest.net/user/hooktheme
  Version: v1.0.4
*/

"use strict";

// Import API URL
import { API_BASE_URL, PRODUCTS_API_URL } from './config.js';

// Preloader
const preLoader = function () {
  let preloaderWrapper = document.getElementById("preloader");
  window.onload = () => {
    preloaderWrapper.classList.add("addloaded");
  };
};
//preLoader();

// getSiblings
var getSiblings = function (elem) {
  const siblings = [];
  let sibling = elem.parentNode.firstChild;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

/* Slide Up */
var slideUp = (target, time) => {
  const duration = time ? time : 500;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

/* Slide Down */
var slideDown = (target, time) => {
  const duration = time ? time : 500;
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") display = "block";
  target.style.display = display;
  const height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

// Get window top offset
function TopOffset(el) {
  let rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop };
}
// Header sticky activation
const headerStickyWrapper = document.querySelector("header");
const headerStickyTarget = document.querySelector(".header__sticky");

if (headerStickyTarget) {
  window.addEventListener("scroll", function () {
    let StickyTargetElement = TopOffset(headerStickyWrapper);
    let TargetElementTopOffset = StickyTargetElement.top;

    if (window.scrollY > TargetElementTopOffset) {
      headerStickyTarget.classList.add("sticky");
    } else {
      headerStickyTarget.classList.remove("sticky");
    }
  });
}

// Scroll up activation
const scrollTop = document.getElementById("scroll__top");
if (scrollTop) {
  scrollTop.addEventListener("click", function () {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  });
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollTop.classList.add("active");
  } else {
    scrollTop.classList.remove("active");
  }
});
// slider swiper activation
var swiper = new Swiper(".hero__slider--activation", {
  slidesPerView: 1,
  loop: true,
  clickable: true,
  effect: "fade",
  speed: 500,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// product swiper column3 activation
var swiper = new Swiper(".product__swiper--column3", {
  slidesPerView: 3,
  clickable: true,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    280: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
    },
  },
  grid: {
    fill: "row",
    rows: 2,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// product swiper column4 activation
var swiper = new Swiper(".product__swiper--column4", {
  slidesPerView: 4,
  clickable: true,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    280: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// product swiper column5 activation
var swiper = new Swiper(".product__swiper--column5", {
  slidesPerView: 5,
  clickable: true,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    280: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// product list column3 activation
var swiper = new Swiper(".product__list--column3", {
  slidesPerView: 3,
  clickable: true,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    450: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    280: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// testimonial swiper activation
var swiper = new Swiper(".testimonial__swiper--activation", {
  slidesPerView: 2,
  loop: true,
  clickable: true,
  spaceBetween: 30,
  breakpoints: {
    768: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    0: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// testimonial swiper column3 activation
var swiper = new Swiper(".testimonial__swiper--column3", {
  slidesPerView: 3,
  loop: true,
  clickable: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    992: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    0: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// testimonial swiper column4 activation
var swiper = new Swiper(".testimonial__swiper--column4", {
  slidesPerView: 4,
  loop: true,
  clickable: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      spaceBetween: 30,
      slidesPerView: 4,
    },
    992: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    0: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// blog swiper activation
var swiper = new Swiper(".blog__swiper--activation", {
  slidesPerView: 4,
  loop: true,
  clickable: true,
  spaceBetween: 30,
  breakpoints: {
    1500: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// blog swiper column3 activation
var swiper = new Swiper(".blog__swiper--column3", {
  slidesPerView: 3,
  loop: true,
  clickable: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// instagram swiper activation
var swiper = new Swiper(".instagram__swiper--activation", {
  slidesPerView: 7,
  loop: true,
  clickable: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 7,
    },
    992: {
      slidesPerView: 6,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// instagram swiper column5 activation
var swiper = new Swiper(".instagram__swiper--column5", {
  slidesPerView: 5,
  loop: true,
  clickable: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// quickview swiper activation
var swiper = new Swiper(".quickview__swiper--activation", {
  slidesPerView: 1,
  loop: true,
  clickable: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// product details media swiper activation
var swiper = new Swiper(".product__media--nav", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    768: {
      slidesPerView: 5,
    },
    480: {
      slidesPerView: 4,
    },
    320: {
      slidesPerView: 3,
    },
    200: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper(".product__media--preview", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

// tab activation
const tab = function () {
  const tabList = document.querySelectorAll('[data-toggle="tab"]');
  tabList.forEach(function (list) {
    list.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target"),
        target = document.querySelector(targetId);
      this.parentElement
        .querySelectorAll('[data-toggle="tab"]')
        .forEach(function (list) {
          list.classList.remove("active");
        });
      this.classList.add("active");
      target.classList.add("active");
      setTimeout(function () {
        target.classList.add("show");
      }, 150);
      getSiblings(target).forEach(function (pane) {
        pane.classList.remove("show");
        setTimeout(function () {
          pane.classList.remove("active");
        }, 150);
      });
    });
  });
};
tab();

// countdown activation
document.querySelectorAll("[data-countdown]").forEach(function (elem) {
  const countDownItem = function (value, label) {
    return `<div class="countdown__item" ${label}"><span class="countdown__number">${value}</span><p class="countdown__text">${label}</p></div>`;
  };
  const date = new Date(elem.getAttribute("data-countdown")).getTime(),
    second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  const countDownInterval = setInterval(function () {
    let currentTime = new Date().getTime(),
      timeDistance = date - currentTime,
      daysValue = Math.floor(timeDistance / day),
      hoursValue = Math.floor((timeDistance % day) / hour),
      minutesValue = Math.floor((timeDistance % hour) / minute),
      secondsValue = Math.floor((timeDistance % minute) / second);

    elem.innerHTML =
      countDownItem(daysValue, "days") +
      countDownItem(hoursValue, "hrs") +
      countDownItem(minutesValue, "mins") +
      countDownItem(secondsValue, "secs");

    if (timeDistance < 0) clearInterval(countDownInterval);
  }, 1000);
});

// active class remove class activation
const activeClassAction = function (toggle, target) {
  const to = document.querySelector(toggle),
    ta = document.querySelector(target);
  if (to && ta) {
    to.addEventListener("click", function (e) {
      e.preventDefault();
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        ta.classList.remove("active");
      } else {
        this.classList.add("active");
        ta.classList.add("active");
      }
    });
    document.addEventListener("click", function (event) {
      if (
        !event.target.closest(toggle) &&
        !event.target.classList.contains(toggle.replace(/\./, ""))
      ) {
        if (
          !event.target.closest(target) &&
          !event.target.classList.contains(target.replace(/\./, ""))
        ) {
          to.classList.remove("active");
          ta.classList.remove("active");
        }
      }
    });
  }
};

activeClassAction(".account__currency--link", ".dropdown__currency");
activeClassAction(".language__switcher", ".dropdown__language");
activeClassAction(
  ".offcanvas__language--switcher",
  ".offcanvas__dropdown--language"
);
activeClassAction(
  ".offcanvas__account--currency__menu",
  ".offcanvas__account--currency__submenu"
);

// OffCanvas Sidebar Activation
function offcanvsSidebar(openTrigger, closeTrigger, wrapper) {
  let OpenTriggerprimary__btn = document.querySelectorAll(openTrigger);
  let closeTriggerprimary__btn = document.querySelector(closeTrigger);
  let WrapperSidebar = document.querySelector(wrapper);
  let wrapperOverlay = wrapper.replace(".", "");

  function handleBodyClass(evt) {
    let eventTarget = evt.target;
    if (!eventTarget.closest(wrapper) && !eventTarget.closest(openTrigger)) {
      WrapperSidebar.classList.remove("active");
      document
        .querySelector("body")
        .classList.remove(`${wrapperOverlay}_active`);
    }
  }
  if (OpenTriggerprimary__btn && WrapperSidebar) {
    OpenTriggerprimary__btn.forEach(function (singleItem) {
      singleItem.addEventListener("click", function () {
        WrapperSidebar.classList.add("active");
        document
          .querySelector("body")
          .classList.add(`${wrapperOverlay}_active`);
        document.body.addEventListener("click", handleBodyClass.bind(this));
      });
    });
  }

  if (closeTriggerprimary__btn && WrapperSidebar) {
    closeTriggerprimary__btn.addEventListener("click", function () {
      WrapperSidebar.classList.remove("active");
      document
        .querySelector("body")
        .classList.remove(`${wrapperOverlay}_active`);
      document.body.removeEventListener("click", handleBodyClass.bind(this));
    });
  }
}

// Mini Cart
offcanvsSidebar(
  ".minicart__open--btn",
  ".minicart__close--btn",
  ".offCanvas__minicart"
);

// Search Bar
offcanvsSidebar(
  ".search__open--btn",
  ".predictive__search--close__btn",
  ".predictive__search--box"
);

// Offcanvas filter sidebar
offcanvsSidebar(
  ".widget__filter--btn",
  ".offcanvas__filter--close",
  ".offcanvas__filter--sidebar"
);

/* Offcanvas Mobile Menu Function */
const offcanvasHeader = function () {
  const offcanvasOpen = document.querySelector(
    ".offcanvas__header--menu__open--btn"
  ),
    offcanvasClose = document.querySelector(".offcanvas__close--btn"),
    offcanvasHeader = document.querySelector(".offcanvas__header"),
    offcanvasMenu = document.querySelector(".offcanvas__menu"),
    body = document.querySelector("body");
  /* Offcanvas SubMenu Toggle */
  if (offcanvasMenu) {
    offcanvasMenu
      .querySelectorAll(".offcanvas__sub_menu")
      .forEach(function (ul) {
        const subMenuToggle = document.createElement("button");
        subMenuToggle.classList.add("offcanvas__sub_menu_toggle");
        ul.parentNode.appendChild(subMenuToggle);
      });
  }
  /* Open/Close Menu On Click Toggle Button */
  if (offcanvasOpen) {
    offcanvasOpen.addEventListener("click", function (e) {
      e.preventDefault();
      offcanvasHeader.classList.add("open");
      body.classList.add("mobile_menu_open");
    });
  }
  if (offcanvasClose) {
    offcanvasClose.addEventListener("click", function (e) {
      e.preventDefault();
      offcanvasHeader.classList.remove("open");
      body.classList.remove("mobile_menu_open");
    });
  }
  /* Open/Close Sub Menu On Click Toggle Button */
  if (offcanvasMenu) {
    offcanvasMenu
      .querySelectorAll(".offcanvas__sub_menu_toggle")
      .forEach(function (toggle) {
        toggle.addEventListener("click", function (e) {
          e.preventDefault();
          const parent = this.parentElement;
          if (parent.classList.contains("active")) {
            this.classList.remove("active");
            parent.classList.remove("active");
            parent
              .querySelectorAll(".offcanvas__sub_menu")
              .forEach(function (subMenu) {
                subMenu.parentElement.classList.remove("active");
                subMenu.nextElementSibling.classList.remove("active");
                slideUp(subMenu);
              });
          } else {
            this.classList.add("active");
            parent.classList.add("active");
            slideDown(this.previousElementSibling);
            getSiblings(parent).forEach(function (item) {
              item.classList.remove("active");
              item
                .querySelectorAll(".offcanvas__sub_menu")
                .forEach(function (subMenu) {
                  subMenu.parentElement.classList.remove("active");
                  subMenu.nextElementSibling.classList.remove("active");
                  slideUp(subMenu);
                });
            });
          }
        });
      });
  }
  // document.addEventListener("click", function (event) {
  //   if (
  //     !event.target.closest(".offcanvas__header--menu__open--btn") &&
  //     !event.target.classList.contains(
  //       ".offcanvas__header--menu__open--btn".replace(/\./, "")
  //     )
  //   ) {
  //     if (
  //       !event.target.closest(".offcanvas__header") &&
  //       !event.target.classList.contains(".offcanvas__header".replace(/\./, ""))
  //     ) {
  //       offcanvasHeader.classList.remove("open");
  //       body.classList.remove("mobile_menu_open");
  //     }
  //   }
  // });
  // /* Remove Mobile Menu Open Class & Hide Mobile Menu When Window Width in More Than 991 */
  // window.addEventListener("resize", function () {
  //   if (window.outerWidth >= 992) {
  //     offcanvasHeader.classList.remove("open");
  //     body.classList.remove("mobile_menu_open");
  //   }
  // });
};
/* Mobile Menu Active */
offcanvasHeader();

// Qunatity Button Activation
const quantityWrapper = document.querySelectorAll(".quantity__box");
if (quantityWrapper) {
  quantityWrapper.forEach(function (singleItem) {
    let input = singleItem.querySelector(".quantity__number");
    let increaseButton = singleItem.querySelector(".increase");
    let decreaseButton = singleItem.querySelector(".decrease");

    increaseButton.addEventListener("click", function () {
      let value = parseInt(input.value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      input.value = value;
    });

    decreaseButton.addEventListener("click", function () {
      let value = parseInt(input.value, 10);
      value = isNaN(value) ? 0 : value;
      value < 1 ? (value = 1) : "";
      value--;
      input.value = value;
    });
  });
}

// Modal JS
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";
for (const el of openEls) {
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}
for (const el of closeEls) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}
document.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
document.addEventListener("keyup", (e) => {
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

// Accordion
function customAccordion(accordionWrapper, accordionButton, accordionBody) {
  let accoridonButtons = document.querySelectorAll(accordionButton);
  accoridonButtons.forEach(function (item) {
    item.addEventListener("click", function () {
      let singleAccordionWrapper = this.closest(accordionWrapper),
        singleAccordionBody =
          singleAccordionWrapper.querySelector(accordionBody);
      if (singleAccordionWrapper.classList.contains("active")) {
        singleAccordionWrapper.classList.remove("active");
        slideUp(singleAccordionBody);
      } else {
        singleAccordionWrapper.classList.add("active");
        slideDown(singleAccordionBody);
        getSiblings(singleAccordionWrapper).forEach(function (item) {
          let sibllingSingleAccordionBody = item.querySelector(accordionBody);
          item.classList.remove("active");
          slideUp(sibllingSingleAccordionBody);
        });
      }
    });
  });
}
customAccordion(
  ".accordion__items",
  ".accordion__items--button",
  ".accordion__items--body"
);

customAccordion(
  ".widget__categories--menu__list",
  ".widget__categories--menu__label",
  ".widget__categories--sub__menu"
);

// footer widget js
let accordion = true;
const footerWidgetAccordion = function () {
  accordion = false;
  document.querySelectorAll(".footer__widget--button").forEach(function (item) {
    item.addEventListener("click", function () {
      const footerWidget = this.closest(".footer__widget"),
        footerWidgetInner = footerWidget.querySelector(
          ".footer__widget--inner"
        );
      if (footerWidget.classList.contains("active")) {
        footerWidget.classList.remove("active");
        slideUp(footerWidgetInner);
      } else {
        footerWidget.classList.add("active");
        slideDown(footerWidgetInner);
        getSiblings(footerWidget.parentElement).forEach(function (item) {
          const footerWidget = item.querySelector(".footer__widget"),
            footerWidgetInner = item.querySelector(".footer__widget--inner");
          footerWidget.classList.remove("active");
          slideUp(footerWidgetInner);
        });
      }
    });
  });
};

window.addEventListener("load", function () {
  if (accordion) {
    footerWidgetAccordion();
  }
});
window.addEventListener("resize", function () {
  document.querySelectorAll(".footer__widget").forEach(function (item) {
    if (window.outerWidth >= 768) {
      item.classList.remove("active");
      item.querySelector(".footer__widget--inner").style.display = "";
    }
  });
  if (accordion) {
    footerWidgetAccordion();
  }
});

// lightbox Activation
const customLightboxHTML = `<div id="glightbox-body" class="glightbox-container">
    <div class="gloader visible"></div>
    <div class="goverlay"></div>
    <div class="gcontainer">
    <div id="glightbox-slider" class="gslider"></div>
    <button class="gnext gbtn" tabindex="0" aria-label="Next" data-customattribute="example">{nextSVG}</button>
    <button class="gprev gbtn" tabindex="1" aria-label="Previous">{prevSVG}</button>
    <button class="gclose gbtn" tabindex="2" aria-label="Close">{closeSVG}</button>
    </div>
    </div>`;
const lightbox = GLightbox({
  touchNavigation: true,
  lightboxHTML: customLightboxHTML,
  loop: true,
});

// CounterUp Activation
const wrapper = document.getElementById("funfactId");
if (wrapper) {
  const counters = wrapper.querySelectorAll(".js-counter");
  const duration = 1000;

  let isCounted = false;
  document.addEventListener("scroll", function () {
    const wrapperPos = wrapper.offsetTop - window.innerHeight;
    if (!isCounted && window.scrollY > wrapperPos) {
      counters.forEach((counter) => {
        const countTo = counter.dataset.count;

        const countPerMs = countTo / duration;

        let currentCount = 0;
        const countInterval = setInterval(function () {
          if (currentCount >= countTo) {
            clearInterval(countInterval);
          }
          counter.textContent = Math.round(currentCount);
          currentCount = currentCount + countPerMs;
        }, 1);
      });
      isCounted = true;
    }
  });
}

// Category Submenu
const categoryMobileMenu = function () {
  const CategorySubMenu = document.querySelector(".category__mobile--menu");
  if (CategorySubMenu) {
    CategorySubMenu.querySelectorAll(".category__sub--menu").forEach(function (
      ul
    ) {
      let catsubMenuToggle = document.createElement("button");
      catsubMenuToggle.classList.add("category__sub--menu_toggle");
      ul.parentNode.appendChild(catsubMenuToggle);
    });
  }

  if (CategorySubMenu) {
    CategorySubMenu.querySelectorAll(".category__sub--menu_toggle").forEach(
      function (toggle) {
        toggle.addEventListener("click", function (e) {
          e.preventDefault();
          let parent = this.parentElement;
          if (parent.classList.contains("active")) {
            this.classList.remove("active");
            parent.classList.remove("active");
            parent
              .querySelectorAll(".category__sub--menu")
              .forEach(function (subMenu) {
                subMenu.parentElement.classList.remove("active");
                subMenu.nextElementSibling.classList.remove("active");
                slideUp(subMenu);
              });
          } else {
            this.classList.add("active");
            parent.classList.add("active");
            slideDown(this.previousElementSibling);
            getSiblings(parent).forEach(function (item) {
              item.classList.remove("active");
              item
                .querySelectorAll(".category__sub--menu")
                .forEach(function (subMenu) {
                  subMenu.parentElement.classList.remove("active");
                  subMenu.nextElementSibling.classList.remove("active");
                  slideUp(subMenu);
                });
            });
          }
        });
      }
    );
  }
};
categoryMobileMenu();

// Sync cart with server if logged in
export async function syncCartWithServer() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const token = localStorage.getItem('token');
  if (!isLoggedIn || !token) return;
  try {
    // Fetch server cart first
    const res = await fetch(`${API_BASE_URL}/cart`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) return;
    const data = await res.json();
    let serverCart = Array.isArray(data.cart) ? data.cart : [];
    let localCart = JSON.parse(localStorage.getItem('cart')) || [];
    // If server cart is empty, push local cart items to server
    if (serverCart.length === 0 && localCart.length > 0) {
      for (const item of localCart) {
        await fetch(`${API_BASE_URL}/cart/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            product_id: item.id,
            quantity: item.quantity
          })
        });
      }
      // Fetch server cart again after pushing
      const res2 = await fetch(`${API_BASE_URL}/cart`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!res2.ok) return;
      const data2 = await res2.json();
      serverCart = Array.isArray(data2.cart) ? data2.cart : [];
    }
    // Convert server cart to local format and save
    let mergedCart = [];
    for (const serverItem of serverCart) {
      let product = serverItem.product || {};
      let id = product.id || serverItem.product_id || serverItem.id;
      let quantity = serverItem.quantity;
      let title = product.title || '';
      let price = product.selling_price || 0;
      let thumbnail = product.thumbnail_url || 'assets/img/product/product1.webp';
      mergedCart.push({ id, title, price, thumbnail, quantity });
    }
    localStorage.setItem('cart', JSON.stringify(mergedCart));
    if (typeof updateHeaderCart === 'function') updateHeaderCart();
  } catch (err) {
    console.error('Failed to sync cart with server:', err);
  }
}

// Determine current view mode
function getCurrentViewMode() {
  const gridTab = document.querySelector('#product_grid');
  const listTab = document.querySelector('#product_list');

  if (gridTab && gridTab.classList.contains('active')) {
    return 'grid';
  } else if (listTab && listTab.classList.contains('active')) {
    return 'list';
  }

  // Default to grid if we can't determine
  return 'grid';
}

// Render products in grid view
function renderProductsGrid(products, container) {

  products.forEach(product => {
    const col = document.createElement('div');
    col.className = 'col mb-30';
    col.innerHTML = `
      <div class="product__items ">
        <div class="product__items--thumbnail">
          <a class="product__items--link" href="product-details.html?id=${product.id}">
            <img class="product__items--img product__primary--img" src="${product.thumbnail_url || 'assets/img/product/product1.webp'}" alt="product-img">
          </a>
          <div class="product__badge">
            <span class="product__badge--items sale">${product.percentage_discount ? '-' + product.percentage_discount + '%' : ''}</span>
          </div>
        </div>
        <div class="product__items--content text-center">
          <h3 class="product__items--content__title h4"><a href="product-details.html?id=${product.id}">${product.title}</a></h3>
          <div class="product__items--price">
            <span class="current__price">₱${product.selling_price}</span>
            ${product.initial_price && product.initial_price !== product.selling_price ? `<span class='old__price'>₱${product.initial_price}</span>` : ''}
          </div>
          <button class="product__items--action__cart--btn primary__btn add-to-cart-btn" data-product='${JSON.stringify(product)}' type="button">
            <span class="add__to--cart__text">Add to cart</span>          </button>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

// Render products in list view
function renderProductsList(products, container) {
  products.forEach(product => {
    const col = document.createElement('div');
    col.className = 'col mb-30';
    col.innerHTML = `
      <div class="product__items product__list--items border-radius-5 d-flex align-items-center">
        <div class="product__list--items__left d-flex align-items-center">
          <div class="product__items--thumbnail product__list--items__thumbnail">
            <a class="product__items--link" href="product-details.html?id=${product.id}">
              <img class="product__items--img product__primary--img" src="${product.thumbnail_url || 'assets/img/product/product1.webp'}" alt="product-img">
            </a>
            <div class="product__badge">
              <span class="product__badge--items sale">${product.percentage_discount ? '-' + product.percentage_discount + '%' : ''}</span>
            </div>
          </div>
          <div class="product__list--items__content">
            <span class="product__items--content__subtitle mb-5">${product.category || 'Product'}</span>
            <h4 class="product__list--items__content--title mb-15"><a href="product-details.html?id=${product.id}">${product.title}</a></h4>
            <p class="product__list--items__content--desc m-0">${product.description || 'Quality product with excellent features and great value.'}</p>
          </div>
        </div>
        <div class="product__list--items__right">
          <span class="product__list--current__price">₱${product.selling_price}</span>
          ${product.initial_price && product.initial_price !== product.selling_price ? `<span class="product__list--old__price">₱${product.initial_price}</span>` : ''}
          <ul class="rating product__list--rating d-flex">
            <li class="rating__list">
              <span class="rating__list--icon">
                <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                </svg>
              </span>
            </li>
            <li class="rating__list">
              <span class="rating__list--icon">
                <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                </svg>
              </span>
            </li>
            <li class="rating__list">
              <span class="rating__list--icon">
                <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                </svg>
              </span>
            </li>
            <li class="rating__list">
              <span class="rating__list--icon">
                <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                </svg>
              </span>
            </li>
            <li class="rating__list">
              <span class="rating__list--icon">
                <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                </svg>
              </span>
            </li>
          </ul>
          <div class="product__list--action">
            <button class="product__list--action__cart--btn primary__btn add-to-cart-btn" data-product='${JSON.stringify(product)}' type="button">
              <span class="product__list--action__cart--text">Add To Cart</span>
            </button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

// --- Price Filter Logic for shop.html ---
document.addEventListener('DOMContentLoaded', function () {
  (function () {  // Handle both price filter forms (main sidebar and offcanvas)
    const priceFilterForms = document.querySelectorAll('.price__filter--form');
    if (priceFilterForms.length === 0) {
      return;
    }

    let lastFilter = {};
    priceFilterForms.forEach(priceFilterForm => {
      priceFilterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const minInput = priceFilterForm.querySelector('input[name="filter.v.price.gte"]');
        const maxInput = priceFilterForm.querySelector('input[name="filter.v.price.lte"]');
        const min = parseFloat(minInput.value) || null;
        const max = parseFloat(maxInput.value) || null;
        lastFilter = { min, max };
        fetchAndRenderProductsFiltered(1, null, null, min, max);
      });
    });

    // Handle both search forms (main sidebar and offcanvas)
    const searchForms = document.querySelectorAll('.widget__search--form');
    searchForms.forEach(searchForm => {
      searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        fetchAndRenderProductsFiltered(1);
      });
    });
    // Add category click listeners
    const categoryItems = document.querySelectorAll('.widget__categories--menu__list');
    if (categoryItems.length > 0) {
      categoryItems.forEach(item => {
        item.addEventListener('click', function (e) {
          // Remove active class from all items
          categoryItems.forEach(cat => cat.classList.remove('active'));
          // Add active class to clicked item
          this.classList.add('active');
          // Trigger filter
          fetchAndRenderProductsFiltered(1);
        });
      });
    }

    // Helper functions for filters
    function getSelectedCategory() {
      const activeCat = document.querySelector('.widget__categories--menu__list.active .widget__categories--menu__text');
      if (activeCat) return activeCat.textContent.trim();
      return '';
    }

    function getSearchValue() {
      const searchInputs = document.querySelectorAll('.widget__search--form__input');
      for (const input of searchInputs) {
        if (input.value.trim()) return input.value.trim();
      }
      return '';
    }  // API-based filtering with query parameters
    window.fetchAndRenderProductsFiltered = function (page = 1, viewMode = null, sort = null, min = null, max = null) {
      const PAGE_SIZE = 10;
      const currentView = viewMode || (typeof getCurrentViewMode === 'function' ? getCurrentViewMode() : 'grid');

      // Build query parameters
      const params = new URLSearchParams();

      // Price range filters
      if (min !== null && min !== undefined && min !== '') {
        params.append('min_price', min);
      }
      if (max !== null && max !== undefined && max !== '' && max !== Infinity) {
        params.append('max_price', max);
      }

      // Category filter
      const category = getSelectedCategory();
      if (category) {
        params.append('category', category);
      }

      // Search filter
      const search = getSearchValue();
      if (search) {
        params.append('search', search);
      }

      // Pagination
      params.append('page', page);
      params.append('limit', PAGE_SIZE);

      // Sorting
      if (sort) {
        params.append('sort', sort);
      }      // Build final API URL
      const apiUrl = `${PRODUCTS_API_URL}?${params.toString()}`;

      fetch(apiUrl)
        .then(response => {
          return response.json();
        })
        .then(data => {
          let products = Array.isArray(data.products) ? data.products : [];
          // API handles filtering, so use total count from API response
          const totalItems = data.total || products.length;
          const totalPages = Math.ceil(totalItems / PAGE_SIZE);
          const start = (page - 1) * PAGE_SIZE;
          const end = Math.min(start + PAGE_SIZE, totalItems);
          // Products are already paginated by API, so use them directly
          const productsToShow = products;        // Clear both containers
          let gridContainer = document.querySelector('#product_grid .row');
          let listContainer = document.querySelector('#product_list .row');
          // Fallback selectors if main ones don't work
          if (!gridContainer) {
            gridContainer = document.querySelector('#product_grid .product__section--inner .row');
          }
          if (!listContainer) {
            listContainer = document.querySelector('#product_list .product__section--inner .row');
          }

          if (gridContainer) {
            gridContainer.innerHTML = '';
          }
          if (listContainer) {
            listContainer.innerHTML = '';
          }
          // Render to appropriate container
          if (currentView === 'grid' && gridContainer) {
            if (typeof renderProductsGrid === 'function') {
              renderProductsGrid(productsToShow, gridContainer);
            } else {
              console.error('renderProductsGrid function not found');
            }
          } else if (currentView === 'list' && listContainer) {
            if (typeof renderProductsList === 'function') {
              renderProductsList(productsToShow, listContainer);
            } else {
              console.error('renderProductsList function not found');
            }
          }
          // Add to cart button logic for both views
          document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', async function (e) {
              e.preventDefault();
              const product = JSON.parse(this.getAttribute('data-product'));
              let cart = JSON.parse(localStorage.getItem('cart')) || [];
              const idx = cart.findIndex(item => item.id === product.id);
              let quantity = 1;
              if (idx > -1) {
                cart[idx].quantity += 1;
              } else {
                cart.push({
                  id: product.id,
                  title: product.title,
                  price: product.selling_price,
                  thumbnail: product.thumbnail_url || 'assets/img/product/product1.webp',
                  quantity: 1
                });
              }
              localStorage.setItem('cart', JSON.stringify(cart));
              if (typeof updateHeaderCart === 'function') updateHeaderCart();

              // Sync with server if logged in
              const token = localStorage.getItem('token');
              if (token) {
                try {
                  await fetch(`${API_BASE_URL}/cart/add`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ product_id: product.id, quantity: 1 })
                  });
                } catch (err) {
                  console.error('Failed to add to server cart:', err);
                }
              }
            });
          });
          // Pagination controls
          let pagination = document.querySelector('.shop__pagination') || document.querySelector('.pagination') || document.querySelector('.product__pagination');
          if (pagination) {
            pagination.innerHTML = '';
            if (totalPages > 1) {
              pagination.classList.remove('d-none');
              for (let i = 1; i <= totalPages; i++) {
                const pageBtn = document.createElement('button');
                pageBtn.textContent = i;
                pageBtn.className = 'pagination__item' + (i === page ? ' pagination__item--current' : '');
                pageBtn.addEventListener('click', () => fetchAndRenderProductsFiltered(i, currentView, sort, min, max));
                pagination.appendChild(pageBtn);
              }
            } else {
              pagination.classList.add('d-none');
            }
          }
          // Fix product count text
          const countText = document.querySelector('.product__showing--count');
          if (countText) {
            countText.textContent = `Showing ${products.length === 0 ? 0 : start + 1}–${end} of ${totalItems} results`;
          }
        })
        .catch(err => {
          console.error('Failed to fetch products:', err);
        });
    };

    // Test function - call this in console to test if filtering works
    window.testFilter = function () {
      const form = document.querySelector('.price__filter--form');
      const search = document.querySelector('.widget__search--form');
      const categories = document.querySelectorAll('.widget__categories--menu__list');

      // Test API call
      if (typeof fetchAndRenderProductsFiltered === 'function') {
        fetchAndRenderProductsFiltered(1);
      }
    };

    // Optionally, auto-apply filter if values are set on page load
    priceFilterForms.forEach(priceFilterForm => {
      if (priceFilterForm.querySelector('input[name="filter.v.price.gte"]').value || priceFilterForm.querySelector('input[name="filter.v.price.lte"]').value) {
        priceFilterForm.dispatchEvent(new Event('submit'));
      }
    });
    // Load initial products when page loads
    fetchAndRenderProductsFiltered(1);
  })();
});

// Show product details on product-details.html
// function showProductDetails() {
//   // Only run on product-details.html
//   if (!window.location.pathname.endsWith('product-details.html')) return;
//   const params = new URLSearchParams(window.location.search);
//   const id = params.get('id');
//   if (!id) return;
//   const detailsUrl = `${PRODUCTS_API_URL}/${id}`;
//   fetch(detailsUrl)
//     .then(res => res.json())
//     .then(data => {
//       const product = data.product || data; // handle both {product: {...}} and {...}
//       // Example selectors, update as needed to match your HTML
//       const titleEl = document.querySelector('.product__details--title');
//       const priceEl = document.querySelector('.product__details--price');
//       const imgEl = document.querySelector('.product__details--img');
//       const descEl = document.querySelector('.product__details--desc');
//       console.log('Product details:', product);
//       if (titleEl) titleEl.textContent = product.title || '';
//       if (priceEl) priceEl.innerHTML = `<span class="current__price">$${product.selling_price}</span> ${product.initial_price && product.initial_price !== product.selling_price ? `<span class='old__price'>$${product.initial_price}</span>` : ''}`;
//       if (imgEl) imgEl.src = product.thumbnail_url || 'assets/img/product/product1.webp';
//       if (descEl) descEl.textContent = product.description || '';
//     })
//     .catch(err => {
//       console.error('Failed to fetch product details:', err);
//     });
// }

// Shared minicart update logic
export function updateHeaderCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const minicartProductDiv = document.querySelector('.minicart__product');
  const minicartAmountDiv = document.querySelector('.minicart__amount');
  const minicartCountSpans = document.querySelectorAll('.items__count');
  let total = 0;
  if (!minicartProductDiv) return;
  if (cart.length === 0) {
    minicartProductDiv.innerHTML = '<p class="text-center">Your cart is empty.</p>';
    if (minicartAmountDiv) minicartAmountDiv.innerHTML = '';
    minicartCountSpans.forEach(span => span.textContent = '0');
    return;
  }
  let html = '';
  let count = 0;
  cart.forEach((item, idx) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    count += item.quantity;
    html += `<div class="minicart__product--items d-flex">
      <div class="minicart__thumbnail">
        <a href="product-details.html?id=${item.id}"><img src="${item.thumbnail}" alt="${item.title}"></a>
      </div>
      <div class="minicart__text">
        <h4 class="minicart__subtitle"><a href="product-details.html?id=${item.id}">${item.title}</a></h4>
        <div class="minicart__price">
          <span class="current__price">₱${parseFloat(item.price).toFixed(2)}</span>
        </div>
        <div class="minicart__text--footer d-flex align-items-center">
          <div class="quantity__box minicart__quantity">
            <span class="quantity__number">${item.quantity}</span>
          </div>
          <button class="minicart__product--remove" data-idx="${idx}" aria-label="minicart remove btn">Remove</button>
        </div>
      </div>
    </div>`;
  });
  minicartProductDiv.innerHTML = html;
  if (minicartAmountDiv) minicartAmountDiv.innerHTML = `<div class="minicart__amount_list d-flex justify-content-between"><span>Total:</span><span><b>₱${total.toFixed(2)}</b></span></div>`;
  minicartCountSpans.forEach(span => span.textContent = count);
  // Remove item event
  minicartProductDiv.querySelectorAll('.minicart__product--remove').forEach(btn => {
    btn.addEventListener('click', async function () {
      const idx = parseInt(this.getAttribute('data-idx'), 10);
      const removedItem = cart[idx];
      cart.splice(idx, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      if (typeof updateHeaderCart === 'function') updateHeaderCart();
      // If logged in, also remove from server cart
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const token = localStorage.getItem('token');
      if (isLoggedIn && token && removedItem && removedItem.id) {
        try {
          await fetch(`${API_BASE_URL}/cart/remove`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ product_id: removedItem.id })
          });
        } catch (err) {
          console.error('Failed to remove item from server cart:', err);
        }
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  await syncCartWithServer();
  // Initialize with grid view by default
  fetchAndRenderProductsFiltered(1, 'grid');

  // Add event listeners for view toggle buttons
  const gridBtn = document.querySelector('[data-target="#product_grid"]');
  const listBtn = document.querySelector('[data-target="#product_list"]');
  // Sorting implementation
  let currentSort = 'latest';
  const sortSelect = document.querySelector('.product__view--select');
  if (sortSelect) {
    sortSelect.addEventListener('change', function () {
      currentSort = this.value;
      fetchAndRenderProductsFiltered(1, null, currentSort);
    });
  }

  // Update sort on view change
  if (gridBtn) {
    gridBtn.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.product__grid--column__buttons--icons').forEach(btn => {
        btn.classList.remove('active');
      });
      this.classList.add('active');
      const gridTab = document.querySelector('#product_grid');
      const listTab = document.querySelector('#product_list');
      if (gridTab) {
        gridTab.classList.add('active', 'show');
      }
      if (listTab) {
        listTab.classList.remove('active', 'show');
      }
      fetchAndRenderProducts(1, 'grid', currentSort);
    });
  }
  if (listBtn) {
    listBtn.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.product__grid--column__buttons--icons').forEach(btn => {
        btn.classList.remove('active');
      });
      this.classList.add('active');
      const gridTab = document.querySelector('#product_grid');
      const listTab = document.querySelector('#product_list');
      if (gridTab) {
        gridTab.classList.remove('active', 'show');
      }
      if (listTab) {
        listTab.classList.add('active', 'show');
      }
      fetchAndRenderProducts(1, 'list', currentSort);
    });
  }

  // showProductDetails();
  updateHeaderCart();
});


const myAccountBtn = document.querySelector('.my-account');
if (myAccountBtn) {
  myAccountBtn.addEventListener('click', function (e) {
    e.preventDefault();
    // Example login check: replace with your actual logic
    // Assume 'isLoggedIn' is stored in localStorage as 'true' or 'false'
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      window.location.href = 'my-account.html';
    } else {
      window.location.href = 'login.html';
    }
  });
}

// Logout logic for elements with class 'logoutbtn'
document.addEventListener('DOMContentLoaded', function () {
  document.body.addEventListener('click', function (e) {
    const target = e.target.closest('.logoutbtn');
    if (target) {
      // Remove login state and customer info
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('customer');
      localStorage.removeItem('token');
      localStorage.removeItem('cart');
      // Optionally, clear all localStorage: localStorage.clear();
      window.location.href = 'login.html';
    }
  });
});

// Function to load and populate categories dynamically
// Function to load and populate categories dynamically
function loadDynamicCategories() {
  fetch(PRODUCTS_API_URL)
    .then(response => response.json()).then(data => {
      const products = Array.isArray(data.products) ? data.products : [];
      // Deduplicate categories based on name
      const categoriesMap = new Map();
      products.forEach(p => {
        if (p.category && p.category.name && !categoriesMap.has(p.category.name)) {
          categoriesMap.set(p.category.name, p.category);
        }
      });
      const categories = Array.from(categoriesMap.values());

      const categoryContainer = document.getElementById('dynamic-categories');
      if (categoryContainer) {
        categoryContainer.innerHTML = '';

        // Add "All Categories" option
        const allCategoriesLi = document.createElement('li');
        allCategoriesLi.className = 'widget__categories--menu__list';
        allCategoriesLi.innerHTML = `
            <label class="widget__categories--menu__label d-flex align-items-center">
              <img class="widget__categories--menu__img" src="assets/img/product/default-icon.png" alt="categories-img">
              <span class="widget__categories--menu__text">All</span>
            </label>
          `;
        allCategoriesLi.addEventListener('click', function (e) {
          document.querySelectorAll('.widget__categories--menu__list').forEach(cat => cat.classList.remove('active'));
          this.classList.add('active');
          fetchAndRenderProductsFiltered(1);
        });
        categoryContainer.appendChild(allCategoriesLi);

        // Add individual categories
        categories.forEach(category => {
          const li = document.createElement('li');
          li.className = 'widget__categories--menu__list';
          li.innerHTML = `
              <label class="widget__categories--menu__label d-flex align-items-center">
                <img class="widget__categories--menu__img" src="${category.icon || 'assets/img/product/default-icon.png'}" alt="categories-img" style="width: 20px; height: 20px; object-fit: contain;">
                <span class="widget__categories--menu__text">${category.name}</span>
              </label>
            `;
          li.addEventListener('click', function (e) {
            document.querySelectorAll('.widget__categories--menu__list').forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');
            // Store selected category name in a way filter function can read, or pass it if function accepts
            // Assuming fetchAndRenderProductsFiltered reads from active class text content or similar
            // Let's ensure the text content is used correctly.
            // Actually, fetchAndRenderProductsFiltered(1) implies it reads from DOM.
            // We need to verify if fetchAndRenderProductsFiltered reads .widget__categories--menu__text
            fetchAndRenderProductsFiltered(1);
          });
          categoryContainer.appendChild(li);
        });
      }
    })
    .catch(err => {
      console.error('Failed to load categories:', err);
      const categoryContainer = document.getElementById('dynamic-categories');
      if (categoryContainer) {
        categoryContainer.innerHTML = '<li class="widget__categories--menu__list"><span class="widget__categories--menu__text">Failed to load categories</span></li>';
      }
    });
}

// Function to load and populate categories dynamically for offcanvas sidebar
// Function to load and populate categories dynamically for offcanvas sidebar
function loadDynamicCategoriesOffcanvas() {
  fetch(PRODUCTS_API_URL)
    .then(response => response.json())
    .then(data => {
      const products = Array.isArray(data.products) ? data.products : [];
      // Deduplicate categories based on name
      const categoriesMap = new Map();
      products.forEach(p => {
        if (p.category && p.category.name && !categoriesMap.has(p.category.name)) {
          categoriesMap.set(p.category.name, p.category);
        }
      });
      const categories = Array.from(categoriesMap.values());

      const categoryContainer = document.getElementById('dynamic-categories-offcanvas');
      if (categoryContainer) {
        categoryContainer.innerHTML = '';

        // Add "All Categories" option
        const allCategoriesLi = document.createElement('li');
        allCategoriesLi.className = 'widget__categories--menu__list';
        allCategoriesLi.innerHTML = `
            <label class="widget__categories--menu__label d-flex align-items-center">
              <img class="widget__categories--menu__img" src="assets/img/product/default-icon.png" alt="categories-img">
              <span class="widget__categories--menu__text">All Categories</span>
            </label>
          `;
        allCategoriesLi.addEventListener('click', function (e) {
          document.querySelectorAll('.widget__categories--menu__list').forEach(cat => cat.classList.remove('active'));
          this.classList.add('active');
          fetchAndRenderProductsFiltered(1);
        });
        categoryContainer.appendChild(allCategoriesLi);

        // Add individual categories
        categories.forEach(category => {
          const li = document.createElement('li');
          li.className = 'widget__categories--menu__list';
          li.innerHTML = `
              <label class="widget__categories--menu__label d-flex align-items-center">
                <img class="widget__categories--menu__img" src="${category.icon || 'assets/img/product/default-icon.png'}" alt="categories-img" style="width: 20px; height: 20px; object-fit: contain;">
                <span class="widget__categories--menu__text">${category.name}</span>
              </label>
            `;
          li.addEventListener('click', function (e) {
            document.querySelectorAll('.widget__categories--menu__list').forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');
            fetchAndRenderProductsFiltered(1);
          });
          categoryContainer.appendChild(li);
        });
      }
    }).catch(err => {
      console.error('Failed to load categories:', err);
      const categoryContainer = document.getElementById('dynamic-categories-offcanvas');
      if (categoryContainer) {
        categoryContainer.innerHTML = '<li class="widget__categories--menu__list"><span class="widget__categories--menu__text">Failed to load categories</span></li>';
      }
    });
}

// Helper function to format Philippine Peso
function formatPesoPrice(price) {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2
  }).format(price);
}

// Load categories when page loads
loadDynamicCategories();

// Also load categories for offcanvas sidebar
loadDynamicCategoriesOffcanvas();

