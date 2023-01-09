# Project: FakeOS

## Project Outline

- For this project, I have chosen to replicate a windows 10 desktop operating system. this selection was made entirely because I am running windows 10 myself, making it much simpler to identify elements and replicate details quickly. Being a desktop OS, the design orientation is portrait mode.

- I have used a combination of HTML, CSS and SASS, as well as javascript to create the primary elements of the MVP. The FakeOS is actually a single page website with modals used to simulate different applications. There are three of these "apps", including a text element, a form, and an image. These can be opened either by double clicking the desktop "shortcut" icons, or via a single click of the relevant app icon in the start menu. The start menu is accessed by clicking the windows image in the bottom left corner, and displays various system icons with no functionality, as well as the apps themselves, which can be opened by clicking on them. The apps can be closed using the close button ("X") in the top right corner of each. Any number of the modals can be open at any one time, with their close buttons being unique to each of them. The time and date is also taken from the users local time zone and displayed in the bottom right corner when the page is loaded.

### Links

- Github Repo: <https://github.com/MartinO55/FakeOS>

- Live deployment: <https://martino55.github.io/FakeOS/>

### Features

- You will be creating an SPA (Single Page Application)
- Desktop has a wallpaper that fits the viewport
- There will be selectable icons
- Selecting an icon will open an "app", creating a _modal_ to display some content
- Able to close an app
- There will be a selectable menu
- Selecting the menu will display a list of text and icons
- The current time is displayed somewhere

## MVP

### HTML/SCSS

- Wallpaper scales to fit the viewport
- Minimum 3 icons on desktop
- The menu is positioned in the appropriate place (bottom left on windows, top of the screen on android)
- Apps look consistent
- Menu contains a flex with content inside it
- Apps should be able to contain text, an image or a form

### JavaScript

- Put your js code into separate files
- Your icons and menu should add event listener for the click event, don't use the html onclick attribute
- Give your functions and variables good names
- Use the arrow syntax to declare functions

### Github

- Create a repo on github with a README
- Clone Repo
- Create and checkout develop branch
- Push all changes to your develop branch
- When submitting create a pull request from develop into main for review
- Add coach as a reviewer
