const openModal = (targetToOpen) => {
  console.log("called the function");

  let targetToChange = document.getElementById("textfileModal"); //so this element may need to be different?

  targetToChange.classList.remove("hidden");
  targetToChange.classList.add("display");
};

//Open stuff on doubleclick
document.querySelectorAll(".openable").forEach((element) => {
  element.addEventListener("dblclick", (event) => {
    openModal(this);
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
