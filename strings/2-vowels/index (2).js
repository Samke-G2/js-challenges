console.log("VOWEL COUNTER!")

// take input from user     &       store input in a variable
let input = prompt ("Please type a word: ")

// loop through to look for vowels (if statements, maybe?)
function countVowels (str) {
    const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"] ;
    let vowelsIn = 0 ;
    for (let item of str) {
        if (vowels.includes(item)) {
            vowelsIn ++ ;
        }
    }
    return vowelsIn
}
// return count of vowels 
let answer = countVowels (input) ;

// display count of vowels
console.log(answer) ;

// Function to diplay when button is pressed, added after the sub
function alertDisplay (str) {
    let display = alert (str) ; 
    return display ;
    console.log(display) ;
}