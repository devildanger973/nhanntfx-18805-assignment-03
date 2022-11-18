"use strict";
//9. Thay đổi thiết lập
if (userActive) {
  const inputPageSize = document.getElementById("input-page-size");
  const inputCategory = document.getElementById("input-category");
  const saveSetting = document.getElementById("btn-submit");

  saveSetting.addEventListener("click", function (e) {
    const isValidate = validate();
    if (isValidate) {
      userActive.category = inputCategory.value;
      userActive.pagesize = Number(inputPageSize.value);
      console.log(userActive);
      saveToStorage("userArr", userArr);
      console.log(userArr);
      const index = userArr.findIndex(
        (user) => userActive.username === user.username
      );
      console.log(index);
      userArr[index] = userActive;
      saveToStorage("userActive", userActive);

      inputPageSize.value = "";
      inputCategory.value = "General";
    }
  });
  function validate() {
    if (inputPageSize.value === "") {
      alert("nhập pageSize");
      return false;
    } else {
      return true;
    }
  }
} else {
  window.location.href = "/pages/login.html";
  alert("Vui lòng đăng nhập!!");
}
