var menu=document.getElementById("menu")
var close=document.getElementById("close")
var navcon=document.getElementsByClassName("nav-items-con")
function shownav(){
navcon[0].style=" right: 0;"
close.style="display:block"
}


function hidenav(){
    navcon[0].style=" right: -200px;"
    close.style="display:none"
}

const form = document.getElementById("login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = form.elements["username"].value;
  const password = form.elements["password"].value;

  // Check username format
  const usernameRegex = /^[A-Za-z_]{5,}$/;
  if (!usernameRegex.test(username)) {
    alert("Username must contain at least 5 characters and only alphabets or underscore.");
    return;
  }

  // Check password length
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  // Submit the form
  form.submit();
});


