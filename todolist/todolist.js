const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// This is a function to add a task to the list from the input box or show a message if you try to add an empty task
// The function for adding a task on the click of the button is in the HTML document todolist.html
// This function also adds the icon for the delete function
// The savedata part makes sure that what you do in the other functions gets saved (see save data function below)
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let img = document.createElement("img");
        img.src = "todolist/trash.png";
        let src = document.getElementById("x")
        li.appendChild(img);
    }
    inputBox.value = "";
    saveData();
}

// This is a function the check off an item in the list if you click the list or delete an item if you click the delete icon
// E stands for event
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


// The save data function saves the data in local storage on your device 
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// The showtask function pulls the data from storage so the last changes you made will still be there when you visit the site again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


