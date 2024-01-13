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

// DARKLIGHT-MODE - 