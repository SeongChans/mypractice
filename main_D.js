"use strict";

const slidepage = document.querySelector(".main_ul_wrap");
const slideLbtn = document.getElementById("left");
const slideRbtn = document.getElementById("right");
const buttonpage = document.querySelector(".main_b");
const pagenum = document.querySelectorAll(".main_b_b");

let slide = document.querySelectorAll(".main_item");
let slidesize = slide[0].clientWidth;
let itemnumber = 0;

slideRbtn.addEventListener("click", () => {
  clearInterval();
  if (itemnumber < slide.length - 1) {
    itemnumber++;
    slidepage.style.transform = "translateX(" + -100 * itemnumber + "%)";
    pagenum.forEach((item) => item.classList.remove("click"));
    pagenum[itemnumber].classList.add("click");
  } else if (itemnumber == slide.length - 1) {
    itemnumber = 0;
    slidepage.style.transform = "translateX(" + -100 * itemnumber + "%)";
    pagenum.forEach((item) => item.classList.remove("click"));
    pagenum[itemnumber].classList.add("click");
  } else {
    console.log("응, 실패야");
  }
});
slideLbtn.addEventListener("click", () => {
  if (itemnumber > 0) {
    itemnumber--;
    slidepage.style.transform = "translateX(" + -100 * itemnumber + "%)";
    pagenum.forEach((item) => item.classList.remove("click"));
    pagenum[itemnumber].classList.add("click");
  } else if (itemnumber == 0) {
    itemnumber = 2;
    slidepage.style.transform = "translateX(" + -100 * itemnumber + "%)";
    pagenum.forEach((item) => item.classList.remove("click"));
    pagenum[itemnumber].classList.add("click");
  } else {
    console.log("응, 실패야");
  }
});
function clickbutton() {
  pagenum.forEach((item) => item.classList.remove("click"));
  this.classList.add("click");
  console.log(this.id);
  if (this.id == "button1") {
    itemnumber = 0;
    slidepage.style.transform = "translateX(" + -100 * itemnumber + "%)";
  } else if (this.id == "button2") {
    itemnumber = 1;
    slidepage.style.transform = "translateX(" + -100 * itemnumber + "%)";
  } else if (this.id == "button3") {
    itemnumber = 2;
    slidepage.style.transform = "translateX(" + -100 * itemnumber + "%)";
  }
}
pagenum.forEach((item) => item.addEventListener("click", clickbutton));
