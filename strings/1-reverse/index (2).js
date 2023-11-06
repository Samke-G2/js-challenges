console.log("STRING-REVERSER!");

// collect input from user
let originalString = prompt("Please enter a word: " );          // store input in a variable

// create Function that reverses a string using a loop
    function reversing(str) {
        let newString = "";             // variable declared here, because if I put it anywhere else the code doesn't work the same 
        for ( let i = str.length - 1; i >= 0 ; i-- ) {
            newString += str[i];
        }
        return newString;				// store result in a variable
    }

// run function, inserting the user input 
let reversed = reversing(originalString);                       

// display result of function 
console.log(reversed) ;

// Display in the alert box, added after the sub
function alertDisplay (str) {
    let display = alert (str) ; 
    return display ;
    console.log(display) ;
}