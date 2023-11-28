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
    if (event.target.tagName === "BUTTON" && event.target.textContent === "Delete") {
        let listItem = event.target.parentElement;
        taskList.removeChild(listItem) ;
    }
}) ;
/*
This code adds a ‘click’ event listener to the “taskList” ul element and uses event delegation to check if the clicked element is a delete button. 
If it is, the code removes the corresponding list item from the list.
*/


// 5. Implement the "mark as complete" functionality:
taskList.addEventListener("change", function(event) {
    if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
        let listItem = event.target.parentElement ;
        listItem.style.textDecoration = event.target.checked ? "line-through" : "none" ;
    }
}) ;
/*
This code adds a ‘change’ event listener to the “taskList” ul element and uses event delegation to check if the changed element is a checkbox.
If it is, the code toggles the text decoration of the corresponding list item based on the checkbox’s checked state.
*/