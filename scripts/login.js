"use strict";
// //lấy dữ liệu mảng userArr từ localStorage.

const inputUserName = document.getElementById("input-username");
const inputPass = document.getElementById("input-password");
const btn = document.getElementById("btn-submit");
const currentUser = [];
console.log(userArr);
btn.addEventListener("click", function () {
  const validate = validateData();
  if (validate) {
    const user = userArr.find(
      (element) =>
        element.username === inputUserName.value &&
        element.password === inputPass.value
    );
    if (user) {
      alert("bạn đăng nhập thành công " + user.username);
      saveToStorage("userActive", user);
      window.location.assign("../index.html");
    } else {
      alert("tài khoản này chưa được đăng ký , vui lòng đăng kí tài khoản");
    }
    console.log(user);
    console.log(userArr);

    return user;
  }
  // userArr.splice(0);
  // saveToStorage("login", JSON.stringify(userArr));
});

function validateData() {
  // console.log("use " + use[0].userName);
  if (inputUserName.value.trim() === "" || inputPass.value.trim() === "") {
    alert("không được để trống!!!");
    return false;
  } else {
    return true;
  }
}
// console.log(userArr);
