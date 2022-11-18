"use strict";
//2. Chức năng Register

const inputFirstName = document.getElementById("input-firstname");
const inputLastName = document.getElementById("input-lastname");
const inputUserName = document.getElementById("input-username");
const inputPass = document.getElementById("input-password");
const inputPassConfirm = document.getElementById("input-password-confirm");
const btn = document.getElementById("btn-submit");

// saveToStorage("userArr", userArr);
btn.addEventListener("click", function () {
  //Lấy dữ liệu nhập vào từ form

  const data = new User(
    inputFirstName.value,
    inputLastName.value,
    inputUserName.value,
    inputPass.value
  );
  const validate = validateData(data);
  if (validate) {
    userArr.push(data);
    saveToStorage("userArr", userArr);
    window.location.href = "/pages/login.html";
    // console.log("aa" + userArr);
    // console.log(data);
  }
  console.log(userArr);
  //localStorage.clear();
});
function validateData(user) {
  let isvalidate = true;
  const a = userArr.filter((element) => {
    return element.username === user.username;
  });
  console.log(a);
  //không có trường bỏ trống
  if (user.firstname.trim() === "") {
    alert("vui lòng nhập first name");
    isvalidate = false;
  }
  if (user.lastname.trim() === "") {
    alert("vui lòng nhập lastname");
    isvalidate = false;
  }
  if (user.username.trim() === "") {
    alert("vui lòng nhập user");
    isvalidate = false;
  }

  // đề password phải nhiều hơn 8 ký tự nên tôi sẽ không đùng trim().length === 0
  if (user.password.length < 8) {
    alert("mật khẩu phải có ký tự không dưới 8 ký tự");
    isvalidate = false;
  }
  if (user.password !== inputPassConfirm.value) {
    // tác dụng của ! () tức là nếu a không bằng b thì alert ra như dòng 60
    //  so sánh như này để password bắt buộc phải trùng với password cofirm
    alert(" password phải trùng với Password Confirm ");
    isvalidate = false;
  }
  // không được trùng với User name đã có sẵn vì khi đăng ký thì không thể có hai tài khoản giống nhau
  if (a.length != 0) {
    alert(`đã tồn tại tài khoản ${user.username}`);
    isvalidate = false;
  }

  return isvalidate; // cần phải return dữ liệu mới vào được , và trước return không được có chấm phẩy ;
}
// userArr.splice(0);
// saveToStorage("userArr", userArr);
console.log(userArr);
