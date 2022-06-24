const search = document.querySelector(".p_search");
const oracle = document.querySelector("");
const ok = document.getElementById("p_ok");
const mod = document.getElementById("p_change");
const cancel = document.getElementById("p_cancel");
const exit = document.getElementById("p_exit");
const textboard = document.getElementById("textboard");
const btnwrap = document.getElementsByClassName("p_buttonwrap");
const main = document.getElementById("p_main");

let number = document.getElementsByClassName("p_num");
let chartnum = null;

search.addEventListener("click", searchclick);

function searchclick() {
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
    chartnum = Number(number[0].innerHTML);
    for (let i = chartnum; i > 1; i--) {
      let parents = document.querySelector(".postmain");
      let create_chart = document.createElement("div");
      create_chart.className = "p_chart";
      parents.append(create_chart);
      for (let i = 1; i <= 5; i++) {
        let parents = document.querySelector(".p_chart");
        let create_chart = document.createElement("div");
        switch (i) {
          case (i = 1):
            create_chart.className = "p_num";
            parents.append(create_chart);
            break;
          case (i = 2):
            create_chart.className = "p_title";
            parents.append(create_chart);
            break;
          case (i = 3):
            create_chart.className = "p_admin";
            parents.append(create_chart);
            break;
          case (i = 4):
            create_chart.className = "p_date";
            parents.append(create_chart);
            break;
          case (i = 5):
            create_chart.className = "p_look";
            parents.append(create_chart);
            break;
          default:
            alert("오류가 발생했습니다.");
        }
      }
    }
  } else {
    alert("취소되었습니다.");
    return false;
  }
});
