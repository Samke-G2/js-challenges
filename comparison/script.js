console.log("TYPE COERCION AND COMPARISON") ;

// capture user input in variables

function firstPrompt () {
    num1 = prompt("Enter the first number: ") ;
}

function secondPrompt () {
    num2 = prompt("Enter the second number: ") ;
}


// compare the inputs

    // equality 
    // loop through results to find the appropriate message
function same (num1, num2) {
    let result = "" ;
    if (num1 == num2) {
        result = "Yes, they are!"
    }
    else {
        result = "No, they are not!" 
    }
    console.log("Equality test done") ;
    return result ;
    
}

    // inequality
    // loop through results to find the appropriate message
function diff (num1, num2) {
    let result = "" ;
    if (num1 != num2) {
        result = "Yes, they are!" 
    }
    else {
        result = "No, they are not!"
    }
    console.log("Inquality test done") ;
    return result ;
}


    // strict equality
    
    // strict inequality
   

    // less than or equal to
function lesser (num1, num2) {
    let result = "" ;
    if (num1 <= num2) {
        result = "Yes, it is!" 
    }
    else {
        result = "No, it is not!"
    }
    console.log("Lesser than -or equal to-  test done") ;
    return result ;
}

    // // greater thanor equal to
function greater (num1, num2) {
    let result = "" ;
    if (num1 >= num2) {
        result = "Yes, it is!" 
    }
    else {
        result = "No, it is not!"
    }
    console.log("Greater than - or equal to-  test done") ;
    return result ;
}
    

// display the message      displayed by the alertdisplay function on the html page

// alert display function
function alertDisplay (str) {
    let display = alert (str) ; 
    return display ;
}