//addEventListener("dblclick")
//let opened = null;

// let target = document.getElementById(".textfileModal");

// let process =document.addEventListener("click", openWindow);

// function openWindow() {
//   target.style.backgroundColor = "red";
//   console.log(target);
// }

document.querySelectorAll(".openable").forEach((element) => {
  element.addEventListener("dblclick", (event) => {
    //opened = event.target;
    let targetToChange = document.getElementById("textfileModal");
    console.log(targetToChange);
    targetToChange.classList.remove("hidden");
    targetToChange.classList.add("display");
    //event.target.classList.remove("hidden");
    //event.target.classList.add("displayable");
  });
});

document.querySelectorAll(".fileBar__close").forEach((element) => {
  element.addEventListener("click", (event) => {
    let targetToHide = document.getElementById("textfileModal");

    targetToHide.classList.add("hidden");
    targetToHide.classList.remove("display");
  });
});

//so this should toggle the target to visible on click (should be dblclick)
// document.addEventListener("click", (event) => {
//   if (opened) {
//     opened.classList.add(".displayable");
//     opened.classList.remove(".hidden");
//   }
// });
