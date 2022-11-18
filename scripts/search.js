"use strict";
//10. search
const setting = getFromStorage("userActive", userActive);
if (userActive) {
  const inputQuery = document.getElementById("input-query");
  const btn = document.getElementById("btn-submit");
  const newsContainer = document.getElementById("news-container");
  const btnprev = document.getElementById("btn-prev");
  const btnnext = document.getElementById("btn-next");
  const pagenum = document.getElementById("page-num");
  let totalResults = 0;
  let searched = "";
  ///////////////
  async function search(page, pageSize, search) {
    const res = await fetch(
      `https://newsapi.org/v2/everything?page=${page}&pageSize=${pageSize}&q=${search}&apiKey=bd145816f44a4e24bd94a84dbfa63811`
    );
    const data = await res.json();
    pageData(data, pageSize);
  }

  btn.addEventListener("click", function (e) {
    const isValidate = validate();
    if (isValidate) {
      search(1, setting.pagesize, inputQuery.value);
      searched = inputQuery.value;
      inputQuery.value = "";
    }
  });
  function validate() {
    if (inputQuery.value === "") {
      alert("nhập mục cần tìm kiếm");
      return false;
    } else {
      return true;
    }
  }
  function pageData(data, pageSize) {
    totalResults = data.totalResults;
    const page = totalResults / pageSize;
    checkNext(page);
    checkPrev();
    let html = "";
    data.articles.forEach(function (articlesArr) {
      html += `
    <div class="card flex-row flex-wrap">
    <div class="card mb-3" style="">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${articlesArr.urlToImage}"
            class="card-img"
            alt="MIT researchers uncover ‘unpatchable’ flaw in Apple M1 chips - TechCrunch">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${articlesArr.title}</h5>
            <p class="card-text">${articlesArr.content}</p>
            <a href="${articlesArr.url}"
              class="btn btn-primary">View</a>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    });
    newsContainer.innerHTML = html;
    //console.log(articlesArr);
  }
  btnnext.addEventListener("click", function () {
    search(++pagenum.textContent, setting.pagesize, searched);
  });
  btnprev.addEventListener("click", function () {
    search(--pagenum.textContent, setting.pagesize, searched);
  });
  function checkPrev() {
    if (pagenum.textContent == 1) {
      btnprev.style.display = "none";
    } else {
      btnprev.style.display = "block";
    }
  }
  function checkNext(page) {
    if (pagenum.textContent == Math.ceil(page)) {
      btnnext.style.display = "none";
    } else {
      btnnext.style.display = "block";
    }
  }
} else {
  window.location.href = "/pages/login.html";
  alert("Vui lòng đăng nhập!!");
}
