"use strict";
//1. Tạo Class User
class User {
  constructor(
    firstName,
    lastName,
    username,
    password,
    pagesize = 5,
    category = "business"
  ) {
    this.firstname = firstName;
    this.lastname = lastName;
    this.username = username;
    this.password = password;
    this.pagesize = pagesize;
    this.category = category;
  }
}
//8. Hiển thị Todo List
class Task {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}
