console.log("Prime number counter")

// defining the range within which you want to find prime numbers
const startRange = 2;
const endRange = 50;

// Create a for loop that iterates through the numbers within the range. 
// Use the i variable as the loop counter
for (let i = startRnage; i <= endRange; i++) {
    // code to check if i is a primer number

    // Inside the for loop, create a variable called isPrime and set it to true. 
    // This variable will be used to determine if the current number is a prime number.
    let isPrime = true; 

    // Create a nested for loop that iterates through the numbers from 2 to the square root of the current number i. 
    // Use the j variable as the loop counter
    for (let j = 2; j<= Math.sqrt(i); j++) {
        // Code to check if i is divisible by j

        // Inside the nested for loop, check if the current number i is divisible by j. 
        // If it is, set isPrime to false and use the break statement to exit the loop. 
        if (i % j === 0) {
            isPrime = false ;
            break ;
        }

        // After the nested for loop, check if the isPrime variable is still true. 
        // If it is, print the current number i to the console. 
        if (isPrime) {
            console.log(i + " is a prime number.") ;
        }
    }
}


/* 
When you run your program, it should display all prime numbers within the specified range in the console. 
By completing this practical challenge, you’ll gain a better understanding of loops and control structures in JavaScript, 
which are fundamental concepts for any web developer
*/

