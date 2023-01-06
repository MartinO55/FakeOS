//functions that find the modal being targeted based on the id of the element being clicked
const openModal = (targetToOpen) => {
  let targetToChange = document.getElementById(targetToOpen + "--modal"); //so because we name the html elements just so, these always find them in the right place
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
    closeModal(element.id);
  });
});
