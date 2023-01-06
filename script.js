const openModal = (targetToOpen) => {
  //console.log("called the function");

  let targetToChange = document.getElementById(targetToOpen + "--modal");
  targetToChange.classList.remove("hidden");
  targetToChange.classList.add("display");
};

const closeModal = (targetToClose) => {
  let targetToHide = document.getElementById(targetToClose + "--modal");

  targetToHide.classList.add("hidden");
  targetToHide.classList.remove("display");
};

//Open stuff on doubleclick
document.querySelectorAll(".openable").forEach((element) => {
  element.addEventListener("dblclick", (event) => {
    openModal(element.id);
  });
});

//close on click the X
document.querySelectorAll(".fileBar__close").forEach((element) => {
  element.addEventListener("click", (event) => {
    //console.log(element.id);
    closeModal(element.id);
  });
});
