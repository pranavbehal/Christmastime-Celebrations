"use strict";

let clicks = 538;

function onClick() {
  formSubmittedNumber++;
  document.getElementById("form-submitted-number");
}

function onClick() {
  clicks += 1;
  document.getElementById("form-submitted-number").innerHTML = clicks;
}

/*
 */

const cards = document.querySelector("#cards");
const images = document.querySelectorAll(".card__img");
const backgrounds = document.querySelectorAll(".card__bg");
const range = 40;

/*
let timeout;
document.addEventListener(
  "mousemove",
  ({ x, y }) => {
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(() => {
      const yValue = calcValue(y, window.innerHeight);
      const xValue = calcValue(x, window.innerWidth);

      cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

      [].forEach.call(images, (image) => {
        image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
      });

      [].forEach.call(backgrounds, (background) => {
        background.style.backgroundPosition = `${xValue * 0.45}px ${
          -yValue * 0.45
        }px`;
      });
    });
  },
  false
);
*/

// document.addEventListener("mousemove", ({ x, y }) => {
//   if (timeout) {
//     window.cancelAnimationFrame(timeout);
//   }

//   timeout = window.requestAnimationFrame(() => {
//     const yValue = calcValue(y, window.innerHeight);
//     const xValue = calcValue(x, window.innerWidth);

//     cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
//   });
// });

// document.onmousemove = function (xValue, yValue) {
//   window.requestAnimationFrame(() => {
//     const yValue = calcValue(y, window.innerHeight);
//     const xValue = calcValue(x, window.innerWidth);

//     document.getElementById(
//       "cards"
//     ).style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
//   });
// };

// function tilt(e) {
//   (document.getElementById("cards").style.transform =
//     "rotateX(" + e.clientX / 20 + "deg)"),
//     (document.getElementById("cards").style.transform =
//       "rotateY(" + e.clientY / 20 + "deg)");
// }

// document.addEventListener("mousemove", tilt);
/*
document.onmousemove = function (e) {
  let screenWidth1 = screen.width;
  let screenWidth2 = screen.width / 2;
  let screenWidth3 = screen.width / 3;
  let screenWidth4 = screen.width / 4;
  let screenWidth5 = screen.width / 5;
  let screenWidth6 = screen.width / 6;
  let screenWidth7 = screen.width / 7;
  let screenWidth10 = screen.width / 10;
  (document.getElementById("big-card1").style.transform =
    "rotateY(" + (e.clientX + screenWidth10) / 70 + "deg)")(
    (document.getElementById("big-card2").style.transform =
      "rotateY(" + (e.clientX - screenWidth1) / 70 + "deg)")
  );
};
*/

function toggleCard1() {
  let clock1 = document.getElementsByClassName("card__one");
  let displaySettingClock1 = clock1.style.display;
}

const accordian = document.getElementsByClassName("contentBox");

for (i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

/* */

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

function message() {
  var firstNameInput = document.querySelector("#fname_i");
  var lastNameInput = document.querySelector("#lname_i");
  var emailInput = document.querySelector("#email_i");
  if (
    firstNameInput.value === "" ||
    lastNameInput.value === "" ||
    emailInput.value === ""
  ) {
    document.getElementById("hide-rsvp-p2").style.display = "block";
  } else {
    console.log(true);
    setTimeout(() => {
      firstNameInput.value = "";
      lastNameInput.value = "";
      emailInput.value = "";
    }, 1);
    document.getElementById("hide-rsvp-p2").innerHTML =
      "Success! We'll send you an email when tickets are available to order online.";
    setTimeout(() => {
      document.getElementById("hide-rsvp-p2").style.display = "none";
      document.getElementById("hide-rsvp-p2").innerHTML =
        "Please fill out all of the fields!";
    }, 5000);
  }
}

function contactMessage() {
  var firstNameInputC = document.querySelector("#cfname");
  var lastNameInputC = document.querySelector("#clname");
  var emailInputC = document.querySelector("#cemail");
  var subjectInputC = document.querySelector("#csubject");
  var messageInputC = document.querySelector("#cmessage");
  if (
    firstNameInputC.value === "" ||
    lastNameInputC.value === "" ||
    emailInputC.value === "" ||
    subjectInputC.value === "" ||
    messageInputC.value === ""
  ) {
    document.getElementById("hide-contact-p2").style.display = "block";
  } else {
    console.log(true);
    setTimeout(() => {
      firstNameInputC.value = "";
      lastNameInputC.value = "";
      emailInputC.value = "";
      subjectInputC.value = "";
      messageInputC.value = "";
    }, 1);
    document.getElementById("hide-contact-p2").innerHTML =
      "Your message has been sent.";
    setTimeout(() => {
      document.getElementById("hide-contact-p2").style.display = "none";
      document.getElementById("hide-contact-p2").innerHTML =
        "Please fill out all of the fields!";
    }, 5000);
  }
}

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
      $(".homenav").css("background", "redhomenav");
    } 
    
    else {
      $(".homenav").css("background", "none");
    }
  });
// $(document).ready(function () {
//   $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll > 300) {
//       $(".homenav").css("background", "redhomenav");
//     } else {
//       $(".homenav").css("background", "none");
//     }
//   });
// });

// $(document).ready(function () {
//   $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll > 300) {
//       document.getElementById("nav").classList.remove("homenav");
//       document.getElementById("nav").classList.add("redhomenav");
//     } else {
//       document.getElementById("nav").classList.add("homenav");
//       document.getElementById("nav").classList.remove("redhomenav");
//     }
//   });
// });

document.addEventListener("scroll", function () {
  var scroll = body.scrollTop;
  if (scroll > 300) {
    document.getElementById("nav").classList.remove("homenav");
    document.getElementById("nav").classList.add("redhomenav");
  } else {
    document.getElementById("nav").classList.add("homenav");
    document.getElementById("nav").classList.remove("redhomenav");
  }
});

document.addEventListener("scroll", function () {
  var scroll = body.scrollTop;
  if (scroll > 300) {
    document.getElementById("nav").classList.remove("homenav");
    document.getElementById("nav").classList.add("redhomenav");
  } else {
    document.getElementById("nav").classList.add("homenav");
    document.getElementById("nav").classList.remove("redhomenav");
  }
});
