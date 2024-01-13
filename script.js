// DROP DOWN MENU - opens the drop down menu when clicking the bar icon and closes when clicking x icon

const toggleBtn = document.querySelector("#toggle_btn") 
const toggleBtnIcon = document.querySelector(".burger")
const dropDownMenu = document.querySelector(".dropdown_menu")

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open")
    const isOpen = dropDownMenu.classList.contains("open")
    
    toggleBtnIcon.classList = isOpen
        ? "close"
        : "burger"
} 

// DARKLIGHT-MODE - Changes darkmode automatically at set time or manually by user clicking togglebutton

// Function that automatically turns on dark mode after 18
// Dark mode function
function darkMode() {
    let body = document.querySelector("body");
    console.log(body);

    body.classList.add("dark");

    let header = document.querySelector("header");
    console.log(header);

    header.classList.add("darktwo");

    let h1 = document.querySelector("h1");
    console.log(h1);

    h1.classList.add("darkthree");

    toggleButton.classList.add("darkfour");
}

let intervalId;

// Check the time function - if the clock is 18, then switch to dark mode
function checkTime() {
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  if (hours >= 18 && minutes >= 0) {
      darkMode();
  }
}

// Function that changes light mode to dark mode by clicking a button/image

function darkLightMode() {
  let toggleButton = document.querySelector("#toggleButton");
  console.log(toggleButton);
  let body = document.querySelector("body");
  console.log(body);

  body.classList.toggle("dark");

  let header = document.querySelector("header");
  console.log(header);

  header.classList.toggle("darktwo");

  let h1 = document.querySelector("h1");
  console.log(h1);

  h1.classList.toggle("darkthree");

  toggleButton.classList.toggle("darkfour");
}

toggleButton.addEventListener("click", darkLightMode);

// Function that checks the time every second
intervalId = setInterval(checkTime, 1000);

// Function that prevents the page from automatically changing back to dark mode if the user changes to light mode after 18
toggleButton.addEventListener("click", function() {
  clearInterval(intervalId);
});