const search = document.querySelector(".p_search");
const oracle = document.querySelector(".oracle");
const select_t = document.querySelector("#select_t");
const ok = document.getElementById("p_ok");
const mod = document.getElementById("p_change");
const cancel = document.getElementById("p_cancel");
const exit = document.getElementById("p_exit");
const textboard = document.getElementById("textboard");
const btnwrap = document.getElementsByClassName("p_buttonwrap");
const maintitle = document.querySelector(".postmain .p_chart");
const chartwrap = document.querySelectorAll(".chartwrap .p_chart");
const title1 = document.getElementById("1");
const title2 = document.getElementById("2");
const title3 = document.getElementById("3");
const title4 = document.getElementById("4");
const title5 = document.getElementById("5");
const title6 = document.getElementById("6");
const title7 = document.getElementById("7");
const title8 = document.getElementById("8");
const title9 = document.getElementById("9");
const title10 = document.getElementById("10");

const main = document.getElementById("p_main");

const chartdata = document.querySelector(".chartwrap");

title1.addEventListener("click", setchart);
title2.addEventListener("click", setchart);
title3.addEventListener("click", setchart);
title4.addEventListener("click", setchart);
title5.addEventListener("click", setchart);
title6.addEventListener("click", setchart);
title7.addEventListener("click", setchart);
title8.addEventListener("click", setchart);
title9.addEventListener("click", setchart);
title10.addEventListener("click", setchart);

function setchart(e) {
  console.log(e.);
  maintitle.style.display = "none";
  main.style.display = "block";
  btnwrap[0].style.display = "flex";
  for (i = 0; i < chartwrap - 1; i++) {
    chartwrap[i].classList.add("off");
  }
  title1.classList.add("off");
  title2.classList.add("off");
  title3.classList.add("off");
  title4.classList.add("off");
  title5.classList.add("off");
  title6.classList.add("off");
  title7.classList.add("off");
  title8.classList.add("off");
  title9.classList.add("off");
  title10.classList.add("off");
}
/* .addEventListener("click", () => {

})*/

search.addEventListener("click", searchclickmoving);

function searchclickmoving() {
  if (search.classList.contains("searchclick") == true) {
    search.classList.remove("searchclick");
    search.classList.add("searchoff");
  } else if (search.classList.contains("searchclick") == false) {
    search.classList.remove("searchoff");
    search.classList.add("searchclick");
  } else {
    alert("오류발생");
  }
}

mod.addEventListener("click", () => {
  if (confirm("수정하시겠습니까?") == true) {
    ok.style.display = "block";
    cancel.style.display = "block";
    mod.style.display = "none";
    exit.style.display = "none";
    textboard.style.backgroundColor = "#fff";
    textboard.style.height = "60%";
    textboard.readOnly = false;
  } else {
    alert("취소되었습니다.");
    return false;
  }
});

cancel.addEventListener("click", () => {
  if (confirm("취소하시겟습니까?") == true) {
    mod.style.display = "block";
    exit.style.display = "block";
    ok.style.display = "none";
    cancel.style.display = "none";
    textboard.style.backgroundColor = "transparent";
    textboard.style.height = "fit-content";
    textboard.readOnly = true;
  } else {
    alert("취소되었습니다.");
    return false;
  }
});

exit.addEventListener("click", () => {
  if (confirm("나가시겠습니까?") == true) {
    btnwrap[0].style.display = "none";
    main.style.display = "none";
    chartdata.style.display = "block";
  } else {
    alert("취소되었습니다.");
    return false;
  }
});
