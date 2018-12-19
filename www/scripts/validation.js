$(document).ready(function() {
  $("#Form").on("submit", function() {
    // this variable is true when the form is valid
  var formValid = true;

  // is valid or not.
  var nameIsValid = $("#userName").prop("validity").valid;
  var emailIsValid = $("#userEmail").prop("validity").valid;

  // if the name is valid
  if(nameIsValid) {
    // hide the error
    $("#userNameError").addClass("hidden");
  } else {
    // the form is invalid
    formValid = false;
    // show the error
    $("#userNameError").removeClass("hidden");
  }

  // if the email is valid
  if(emailIsValid) {
    // hide the error
    $("#userEmailError").addClass("hidden");
  } else {
    // the form is invalid
    formValid = false;
    // show the error
    $("#userEmailError").removeClass("hidden");
  }

  // if the form is valid, we allow the user to submit (return true)
  // if the form is invalid, we prevent submission (return false)
  return formValid;
  });;
});
