"use strict";
//4. Home Page
const loginModel = document.getElementById("login-modal");
const mainContent = document.getElementById("main-content");
const welcomeMessage = document.getElementById("welcome-message");
const btn = document.getElementById("btn-logout");
console.log(userActive);
// currentUser.splice(0);
// saveToStorage("login", JSON.stringify(currentUser));
if (!userActive) {
  loginModel.style.display = "block";
  mainContent.style.display = "none";
} else {
  loginModel.style.display = "none";
  mainContent.style.display = "block";
  welcomeMessage.innerHTML = `Welcome  ${userActive.firstname}`;
  // console.log(currentUser[0].lastName);
}
//5. Chức năng Logout
btn.addEventListener("click", function () {
  userActive = null;
  saveToStorage("userActive", userActive);
  console.log(userActive);
  loginModel.style.display = "block";
  mainContent.style.display = "none";
  // console.log(currentUser);
});
