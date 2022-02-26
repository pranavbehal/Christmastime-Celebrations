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

document.onmousemove = function (e) {
  (document.getElementsByClassName("cards").style.transform =
    "rotateY(" + e.clientX / 50 + "deg)"),
    "rotateX(" + e.clientY / 20 + "deg)";
};
