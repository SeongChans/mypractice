const search = document.getElementById("search");
const searchtext = document.querySelector(".p_m_s_title input");
const navclick = document.querySelectorAll(".navop");
const navcircle = document.querySelector(".circle");
let counter = 0;

const profile = document.querySelector(".profile");
const profileex = document.querySelectorAll(".p_m_m_c_page2 .p_m_m_c_admin");
const discountbtn = document.getElementById("left");
const plusbtn = document.getElementById("right");
const pagenum = document.getElementsByClassName("pagenum");
search.addEventListener("click", () => {
  if (searchtext.innerText != "") alert("현재 목록에 없습니다.");
  else if (searchtext.innerText == "") alert("검색창에 입력해주세요.");
});
function leftnavmove() {
  navclick.forEach((option) => option.classList.remove("click"));
  this.classList.add("click");
}
navclick.forEach((option) => option.addEventListener("click", leftnavmove));

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
