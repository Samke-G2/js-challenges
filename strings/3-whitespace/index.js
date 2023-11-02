console.log("WHITESPACE REMOVER!") ;

// Get user input, store in a variable 
let input = prompt("Type a few words: ") ;

// loop through individual characters in input to identify whitespace(s)
function remover(str) {
    result = str.replace(/\s/g, "");
    return result ;
}

// remove whitespaces, store result in a variable
let displayTest = remover(input)  ;

// display input sans whitespaces (variable with result)
console.log(displayTest) ;

// Tried something here just to see if I could 
function alertDisplay (str) {
    let display = alert (str) ; 
    return display ;
    console.log(display) ;
}