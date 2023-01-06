//Open stuff on doubleclick
document.querySelectorAll(".openable").forEach((element) => {
  element.addEventListener("dblclick", (event) => {
    let targetToChange = document.getElementById("textfileModal"); //so this element may need to be different?

    targetToChange.classList.remove("hidden");
    targetToChange.classList.add("display");
  });
});

//close on click the X
document.querySelectorAll(".fileBar__close").forEach((element) => {
  element.addEventListener("click", (event) => {
    let targetToHide = document.getElementById("textfileModal");

    targetToHide.classList.add("hidden");
    targetToHide.classList.remove("display");
  });
});
