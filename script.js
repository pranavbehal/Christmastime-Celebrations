"use strict";

function message() {
  var firstNameInput = document.querySelector("#fname_i");
  var lastNameInput = document.querySelector("#lname_i");
  var emailInput = document.querySelector("#email_i");
  var submitButton = document.querySelector("#submit-btn");
  if (
    firstNameInput.value === "" ||
    lastNameInput.value === "" ||
    emailInput.value === ""
  ) {
    document.getElementById("hide-rsvp-p2").style.display = "block";
  } else {
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    document.getElementById("hide-rsvp-p2").innerHTML =
      "Your message has been sent.";
    document.getElementById("hide-rsvp-p2").style.display = "block";
    submitButton.style.display = "none";
    setTimeout(() => {
      document.getElementById("hide-rsvp-p2").style.display = "none";
      document.getElementById("hide-rsvp-p2").innerHTML =
        "Please fill out all of the fields!";
      submitButton.style.display = "block";
    }, 5000);
  }
}

function contactMessage() {
  var firstNameInputC = document.querySelector("#cfname");
  var lastNameInputC = document.querySelector("#clname");
  var emailInputC = document.querySelector("#cemail");
  var subjectInputC = document.querySelector("#csubject");
  var messageInputC = document.querySelector("#cmessage");
  var submitButtonC = document.querySelector("#contact-submit-button");
  if (
    firstNameInputC.value === "" ||
    lastNameInputC.value === "" ||
    emailInputC.value === "" ||
    subjectInputC.value === "" ||
    messageInputC.value === ""
  ) {
    document.getElementById("hide-contact-p2").style.display = "block";
  } else {
    firstNameInputC.value = "";
    lastNameInputC.value = "";
    emailInputC.value = "";
    subjectInputC.value = "";
    messageInputC.value = "";
    document.getElementById("hide-contact-p2").innerHTML =
      "Your message has been sent.";
    document.getElementById("hide-contact-p2").style.display = "block";
    submitButtonC.style.display = "none";
    setTimeout(() => {
      document.getElementById("hide-contact-p2").style.display = "none";
      document.getElementById("hide-contact-p2").innerHTML =
        "Please fill out all of the fields!";
      submitButtonC.style.display = "block";
    }, 5000);
  }
}
