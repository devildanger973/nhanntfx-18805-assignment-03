"use strict";
function getFromStorage(key) {
  //console.log("type key " + localStorage.getItem(key));
  return JSON.parse(localStorage.getItem(key));
}
function saveToStorage(key, value) {
  //console.log("save" + JSON.stringify(value)[0]);
  localStorage.removeItem(key);
  localStorage.setItem(key, JSON.stringify(value));
}
//lưu dữ liệu đã register
const users = getFromStorage("userArr") ? getFromStorage("userArr") : [];
const userArr = users.map(function (user) {
  return parseUser(user);
});
//lưu dữ liệu login
let userActive = getFromStorage("userActive")
  ? parseUser(getFromStorage("userActive"))
  : null;

// chuyển từ JS Object sang Class Instance
function parseUser(userData) {
  const user = new User(
    userData.firstname,
    userData.lastname,
    userData.username,
    userData.password
  );

  return user;
}
//8. Hiển thị Todo List
let todos = getFromStorage("todoTask") ? getFromStorage("todoTask") : [];
const todoArr = todos.map(function (user) {
  return parseTodoTask(user);
});
saveToStorage("todoTask", todoArr);
// console.log(todoArr);
//
function parseTodoTask(taskdata) {
  const user = new Task(taskdata.task, taskdata.owner, taskdata.isDone);
  return user;
}
