"use strict";
//8. Hiển thị Todo List
if (userActive) {
  // console.log(userActive);
  // console.log("=================");

  // console.log(userArr);

  const todoList = document.getElementById("todo-list");
  const btnAdd = document.getElementById("btn-add");
  const inputtask = document.getElementById("input-task");

  //a. Thêm mới Todo và Lưu dữ liệu vào LocalStorage
  btnAdd.addEventListener("click", function () {
    // const data = new task();
    if (inputtask.value.trim() === "") {
      alert("Nhập title");
    } else {
      const task = new Task(inputtask.value, userActive.username, false);
      console.log("item");

      console.log(task);
      todoArr.push(task);
      saveToStorage("todoTask", todoArr);
      displayTodoList();
      inputtask.value = ""; // reset dữ liêu từ form nhập
    }
  });
  // b. Hiển thị các Task
  function displayTodoList() {
    let html = "";
    todoArr
      .filter((todo) => todo.owner == userActive.username)
      .forEach((todo) => {
        html += `
    <li  class=${todo.isDone ? "checked" : ""} id="todo">${
          todo.task
        }<span class="close">×</span></li>`;
      });
    todoList.innerHTML = html;
    deleteTask();
    toggleTask();
  }
  displayTodoList();
  //c. Toggle Task
  function toggleTask() {
    document.querySelectorAll("#todo-list li").forEach(function (li) {
      li.addEventListener("click", function (e) {
        // console.log("click");
        if (e.target != li.children[0]) {
          //khi click x thì không check.
          li.classList.toggle("checked");
        }
        const a = todoArr.find(
          (item) =>
            item.owner === userActive.username &&
            item.task === li.textContent.slice(0, -1) // li.textcontent.slice(0,-1) loại bỏ x khỏi chuỗi
        );
        // console.log("check");
        // console.log(a);
        // console.log(todoArr);

        // thảy đổi thuộc tính is done
        if (todoArr.length > 0) {
          a.isDone = li.classList.contains("checked") ? true : false;
          saveToStorage("todoTask", todoArr);
        }
      });
    });
  }
  //d. Delete Task
  function deleteTask() {
    document.querySelectorAll("#todo-list .close").forEach((close) => {
      close.addEventListener("click", function (e) {
        console.log("click x");

        const index = todoArr.findIndex(
          (item) =>
            item.owner === userActive.username &&
            item.task === close.parentElement.textContent.slice(0, -1)
        );
        console.log(index);
        todoArr.splice(index, 1);
        saveToStorage("todoTask", todoArr);
        displayTodoList();
      });
    });
  }
} else {
  window.location.href = "/pages/login.html";
  alert("Vui lòng đăng nhập!!");
}
