"use strict";

$(function () {
  console.log('Hello Bootstrap5');
}); // Initialize Swiper
//program

var swiperProgram = new Swiper(".program-swiper", {
  slidesPerView: "auto",
  //設置slider容器能夠同時顯示的slides數量；"auto"則自動根據slides的寬度來設定數量
  spaceBetween: 16,
  //設置間隔，單位px
  grabCursor: true,
  //設置為true時，滑鼠移到Swiper上游標會變成手掌狀，拖動時手掌會成抓緊狀
  breakpointsBase: "container" //設置斷點功能

}); //feedback
// Swiper

var swiperFeedback = new Swiper(".feedback-swiper", {
  // Optional parameters
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
//# sourceMappingURL=all.js.map
