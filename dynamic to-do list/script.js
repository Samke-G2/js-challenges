console.log("Dynamic To-Do List") ;

// 1. Create the HTML structure for the to-do list app. Include an input field, a submit button, and an empty list element:


// 2. Create a JavaScript function to add a new task to the list:
function addTask() {
    let taskInput = document.getElementById("taskInput") ;
    let taskList = document.getElementById("taskList") ;

    if (taskInput.value.trim() !== "") {
        let listItem = document.createElement("li") ;

        let checkBox = document.createElement("input") ;
        checkBox.type = "checkbox"

        let taskText = document.createTextNode(taskInput.value) ;

        let deleteButton = document.createElement("button") ;
        deleteButton.textContent = "Delete" ;

        listItem.appendChild(checkBox) ;
        listItem.appendChild(taskText) ;
        listItem.appendChild(deleteButton) ;

        taskList.appendChild(listItem) ;

        taskInput.value = "" ;
    }
}

/*
This function first checks if the input field is not empty.
If it’s not, the function creates a new list item 
with a checkbox, the task text, and a delete button, then appends it to the task list.
Finally, it clears the input field.
*/


// 3. Add an event listener to the “Add Task” button to call the addTask() function when clicked:
let addButton = document.getElementById("addTask") ;
addButton.addEventListener("click", addTask) ;


// 4. Implement the delete functionality using delegation:
let taskList = document.getElementById("taskList") ;
taskList.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON" && event.target.textContet === "Delete") {
        let listItem = event.target.parentElement;
        taskList.removeChild(listItem) ;
    }
}) ;