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
  //show it
  startMenu.classList.add("startDisplay");
  startMenu.classList.remove("startHidden");
};

const closeStartmenu = () => {
  //get the start menu group
  let startMenu = document.getElementById("StartMenu__holder");
  //hide it
  startMenu.classList.add("startHidden");
  startMenu.classList.remove("startDisplay");
};

//Open stuff on doubleclick
document.querySelectorAll(".openable").forEach((element) => {
  element.addEventListener("dblclick", (event) => {
    openModal(element.id);
  });
});

//open stuff fron the start menu with a single click
document.querySelectorAll(".startOpenable").forEach((element) => {
  element.addEventListener("click", (event) => {
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
      startMenuOpen = false;
      closeStartmenu();
    } else if (!startMenuOpen) {
      startMenuOpen = true;
      openStartmenu();
    }

    //pop up the start menu( really fast go up)
  });
});

//time and dates
let timeAndDate = new Date();
console.log(timeAndDate);
document.getElementById(
  "taskbar__Clock"
).innerHTML = `${timeAndDate.getHours()}:${timeAndDate.getMinutes()}`;

document.getElementById(
  "taskbar__Date"
).innerHTML = `${timeAndDate.getDate()}/${
  timeAndDate.getMonth() + 1
}/${timeAndDate.getFullYear()}`;

//making modals draggable; this took as long as you think it did to implement
// create a variable that references the element we want to drag - initialize to null
let dragging = null;

// store some offset coorindates for the element we're dragging
let dragOffsetX = 0;
let dragOffsetY = 0;

document.addEventListener("mousemove", (event) => {
  if (dragging) {
    dragging.style.left = event.clientX - dragOffsetX + "px";
    dragging.style.top = event.clientY - dragOffsetY + "px";
  }
});

document.addEventListener("mouseup", (event) => {
  if (dragging) {
    dragging.classList.remove("dragging");
    dragging = null;
  }
});

document.querySelectorAll(".draggable").forEach((element) => {
  element.addEventListener("mousedown", (event) => {
    dragging = event.target;
    dragOffsetX = event.offsetX;
    dragOffsetY = event.offsetY;
    event.target.classList.add("dragging");
  });
});
