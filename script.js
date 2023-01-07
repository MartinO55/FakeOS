let startMenuOpen = false; //we need this to make a toggle for the start menu

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

//open and close start menu functions
const openStartmenu = () => {
  //get the start menu group
  let startMenu = document.getElementById("StartMenu__holder");
  startMenu.classList.add("display");
  startMenu.classList.remove("hidden");
  //show it
};

const closeStartmenu = () => {
  //get the start menu group
  let startMenu = document.getElementById("StartMenu__holder");
  startMenu.classList.add("hidden");
  startMenu.classList.remove("display");
  //hide it
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

document.querySelectorAll(".Taskbar__Start--Button").forEach((element) => {
  element.addEventListener("click", (event) => {
    //if start menu is closed, open it - else if it is open, close it
    if (startMenuOpen) {
      closeStartmenu();
      startMenuOpen = false;
    } else openStartmenu();
    startMenuOpen = true;

    //pop up the start menu( really fast go up)
  });
});
