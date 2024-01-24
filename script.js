// DROP DOWN MENU - opens the drop down menu when clicking the bar icon and closes when clicking x icon

const toggleBtn = document.querySelector("#toggle_btn") 
const toggleBtnIcon = document.querySelector(".burgerlight")
const dropDownMenu = document.querySelector(".dropdown_menu")

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open")
    const isOpen = dropDownMenu.classList.contains("open")
    
    toggleBtnIcon.classList = isOpen
        ? "closelight"
        : "burgerlight"
} 


// Function that changes light mode to dark mode by clicking a button/image

let toggleButton = document.querySelector("#toggleButton");
  console.log(toggleButton);

function darkLightMode() {

  let body = document.querySelector("body");
  console.log(body);

  body.classList.toggle("dark");

  let header = document.querySelector("header");
  console.log(header);

  header.classList.toggle("headerdark");

  let hero = document.querySelector("#hero");
  console.log(hero);

  hero.classList.toggle("herodark");

  let h1 = document.querySelector("h1");
  console.log(h1);

  h1.classList.toggle("darkthree");

  let footer = document.querySelector("footer");
    console.log(footer);

  footer.classList.toggle("footerdark");

  let about = document.querySelector("#about");
  console.log(about);

  about.classList.toggle("aboutdark");

  let projects = document.querySelector("#projects");
  console.log(projects);

  projects.classList.toggle("projectsdark");

  toggleBtnIcon.classList.toggle("burgerdark", body.classList.contains("dark"));

  toggleButton.classList.toggle("buttondark", body.classList.contains("dark"));
}

toggleButton.addEventListener("click", darkLightMode);