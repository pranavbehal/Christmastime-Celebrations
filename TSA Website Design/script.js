"use strict";

// formSubmitButton.addEventListener("click", () => {
//   document.querySelector(#form-submitted-number)=formCounter++;
// });

let formSubmittedNumber;

window.onload = function getFormNumber() {
  let formSubmittedNumber = document.getElementById("form-submitted-number");
  return formSubmittedNumber;
};

function getFormNumber() {
  let formSubmittedNumber = document.querySelector("#form-submitted-number");
  // document.querySelector('#form-submitted-number').textContent = formSubmittedNumber++;
  // return formSubmittedNumber;
}

document.querySelector("#form-submitted-number").textContent =
  formSubmittedNumber++;

console.log(getFormNumber());
