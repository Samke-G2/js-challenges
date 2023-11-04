console.log("SQUARE ROOT CALCULATOR") ;


// capture user input of a number
function inputPrompt() {
    num = prompt("Enter a positive number") ;
    return num
}

// create a function, including try-catch, to find the square and throw an error message if the inout is a negative number
function getSquare(num) {
    let root;

    try {
        if (num<0) {
            throw new Error ("Input has to be a positive number.") ;
        }
        root = Math.sqrt(num) ;
        console.log("The square root of ", num, "is ", root) ;
    } catch (error) {
        console.log("An error has occured: ", error.message) ;
    }
}

// alert display function (NOT WORKING AS EXPECTED, FOR SOME REASON.)
function alertDisplay () {
    let display = alert () ;
    return display ;
}

// TESTS
/* const num1 = 100;
const num2 = -25;

let firstSquare = getSquare(num1) ;
console.log(firstSquare);

let secondSquare = getSquare(num2) ;
console.log(secondSquare);
*/