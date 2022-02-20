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

var formSubmittedNumber = 538;

// var formSubmitButton = document.getElementById("submit-form");
// formSubmittedNumber = document.getElementById("form-submitted-number");

// console.log(formSubmittedNumber);

// formSubmitButton.onclick = function updateFormSubmitted() {
//   formSubmitButton.innerHTML = formSubmittedNumber++;
//   return formSubmittedNumber;
// };

function onClick() {
  formSubmittedNumber++;
  document.getElementById("form-submitted-number");
}

var clicks = 538;

function onClick() {
  clicks += 1;
  document.getElementById("form-submitted-number").innerHTML = clicks;
}

sessionStorage.setItem("clicks", "");
