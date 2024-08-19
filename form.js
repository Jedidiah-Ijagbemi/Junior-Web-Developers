// Form validation for Login Page
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent default form submission behavior

  // validate username and password
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if ((username === "admin", "excel" && password === "472580", "0852")) {
    window.location.href = "post.html";
    alert("Welcome");
  } else {
    alert("Username or password incorrect. Please try again.");
  }
});