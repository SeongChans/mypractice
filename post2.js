const searchbtn = document.getElementById("searchbtn");
const searchtext = document.getElementById("search");
const title = document.querySelectorAll(".p_m_m_c_page2 .p_m_m_c_title a");

const titlepage = document.querySelectorAll(".p_m_m_c_page2");
const clickcate = document.getElementsByClassName("click");
const cate = document.querySelectorAll(".p_m_m_c_page2 .p_m_m_c_cate");
const navop = document.querySelectorAll(".navop");

const navcircle = document.querySelector(".circle");
let counter = 0;

const profile = document.querySelector(".profile");
const profileex = document.querySelectorAll(".p_m_m_c_page2 .p_m_m_c_admin");
const discountbtn = document.getElementById("left");
const plusbtn = document.getElementById("right");
const pagenum = document.getElementsByClassName("pagenum");
const clickpagenum = document.querySelectorAll(".pagenum");

function clickcategory() {
  for (i = 0; i < titlepage.length; i++) {
    titlepage[i].style.display = "flex";
    if (clickcate[0].innerText == "전체") {
      continue;
    } else if (cate[i].innerText.indexOf(clickcate[0].innerText) != -1) {
      titlepage[i].style.display = "flex";
    } else if (cate[i].innerText.indexOf(clickcate[0].innerText) == -1) {
      titlepage[i].style.display = "none";
    }
  }
}
searchbtn.addEventListener("click", () => {
  if (searchtext.value != "") {
    for (let i = 0; i < title.length; i++) {
      titlepage[i].style.display = "none";
      console.log(searchtext.value);
      console.log(title[i]);
      if (title[i].innerText.indexOf(searchtext.value) != -1) {
        titlepage[i].style.display = "flex";
      } else {
        console.log(searchtext.value.indexOf(title[i].innerText));
      }
    }
  } else if (searchtext.value == "") {
    alert("검색창에 입력해주세요.");
    for (let i = 0; i < title.length; i++) {
      titlepage[i].style.display = "flex";
    }
  }
});
function leftnavmove() {
  navop.forEach((option) => option.classList.remove("click"));
  this.classList.add("click");
  clickcategory(clickcate);
}
navop.forEach((option) => option.addEventListener("click", leftnavmove));

function mouseevent() {
  profileex.forEach((object) => profile.classList.remove("mouseout"));
  profile.classList.add("mousein");
}
function mouseenvetout() {
  profileex.forEach((object) => profile.classList.remove("mousein"));
  profile.classList.add("mouseout");
}
profileex.forEach((object) => object.addEventListener("mouseover", mouseevent));

profileex.forEach((object) =>
  object.addEventListener("mouseout", mouseenvetout)
);

discountbtn.addEventListener("click", () => {
  if (parseInt(pagenum[0].innerText) <= 1) {
    alert("더이상 뒤로갈 수 없습니다.");
    counter = 5;
  } else if (parseInt(pagenum[0].innerText) >= 1) {
    for (let i = 0; i < 5; i++) {
      pagenum[i].innerText = parseInt(pagenum[i].innerText) - 5;
    }
  }
});
plusbtn.addEventListener("click", () => {
  if (parseInt(pagenum[0].innerText) >= 1) {
    for (let i = 0; i < 5; i++) {
      pagenum[i].innerText = parseInt(pagenum[i].innerText) + 5;
    }
  }
});
function pageclickevent() {
  clickpagenum.forEach((item) => item.classList.remove("nowpage"));
  this.classList.add("nowpage");
}
clickpagenum.forEach((item) => item.addEventListener("click", pageclickevent));
