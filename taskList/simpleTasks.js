console.log("Simple Task List") ;


let tasks = [] ;


function addTask() {
    let string = prompt("Enter a number and a task to add: ") ;
    tasks.push(string) ;
    console.log(string) ;
}

function removeFirst() {
    let deleted = tasks.shift() ;
    alert("You have removed the task.") ;
    console.log(deleted) ;
}

function removeLast() {
    let deleted = tasks.pop() ;
    alert("You have removed the task.") ;
    console.log(deleted) ;
}

function removeCustom() {
    let removed = prompt("Enter the number of the task you're deleting: ") ;
    tasks.splice(removed-1, 1) ;
    console.log(tasks) ;
}

// make use of alert display function that I created earlier. 
function alertDisplay(str) {
    let display = alert(str) ;
    return display ;
}