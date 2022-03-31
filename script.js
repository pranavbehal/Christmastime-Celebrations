"use strict";

// formSubmitButton.addEventListener("click", () => {
//   document.querySelector(#form-submitted-number)=formCounter++;
// });

// let formSubmittedNumber;

// window.onload = function getFormNumber() {
//   let formSubmittedNumber = document.getElementById("form-submitted-number");
//   return formSubmittedNumber;
// };

// function getFormNumber() {
//   let formSubmittedNumber = document.querySelector("#form-submitted-number");
//   // document.querySelector('#form-submitted-number').textContent = formSubmittedNumber++;
//   // return formSubmittedNumber;
// }

// document.querySelector("#form-submitted-number").textContent =
//   formSubmittedNumber++;

// let formSubmittedNumber = 2;

// function newFormSubmitted(formSubmittedNumber) {
//   formSubmittedNumber = +document.getElementById("form-submitted-number");
//   return formSubmittedNumber;
// }
// // document.getElementById("form-submitted-number").innerHTML =
// //   formSubmittedNumber++;

// console.log(
//   newFormSubmitted(+document.getElementById("form-submitted-number"))
// );

// console.log(document.getElementById("form-submitted-number"));

// window.onload = function () {
//   let people = document.getElementById("#form-submitted-number");

//   document.getElementById("form-submitted-number").innerHTML = people + "test";
// };

let formSubmittedNumber = 538;

// var formSubmitButton = document.getElementById("submit-form");
// formSubmittedNumber = document.getElementById("form-submitted-number");

// console.log(formSubmittedNumber);

// formSubmitButton.onclick = function updateFormSubmitted() {
//   formSubmitButton.innerHTML = formSubmittedNumber++;
//   return formSubmittedNumber;
// };

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

// document.getElementById("submit-btn").addEventListener("click", function () {
//   document.getElementById("hide-rsvp-p").classList.remove("hide");
// });

// const form = document.querySelector("#submit-btn");
// const successMessage = document.querySelector("success_text");

// form.addEventListener("submit", () => {
//   e.preventDefault();
//   successMessage.classList.add("show");
//   setTimeout(() => form.submit(), 2000);
// });

// function message() {
//   var formInput = document.getElementsByClassName("form-input");

//   console.log(document.querySelector("#email_i").value);

//   if (formInput.value === "") {
//     console.log(false);
//   } else {
//     console.log(true);
//     setTimeout(() => {
//       name.value = "";
//       lastname.value = "";
//       email.value = "";
//     }, 10000);
//     document.getElementById("hide-rsvp-p").style.display = "block";
//   }

//   setTimeout(() => {
//     document.getElementById("hide-rsvp-p").style.display = "none";
//   }, 5000);
// }

function message1() {
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
      name.value = "";
      lastname.value = "";
      email.value = "";
    }, 10000);
    document.getElementById("hide-rsvp-p2").style.display = "none";
    document.getElementById("hide-rsvp-p").style.display = "block";
  }
}
