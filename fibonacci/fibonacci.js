console.log("Fibonacci Sequence Generator") ;

// Define a function called generateFibonacci that takes one parameter n, representing the number of Fibonacci numbers to generate.
function generateFibonacci (n) {
    const fibonacci = [0, 1] ;                                                                      // Inside the function, create an array called fibonacci with the first two numbers of the sequence: [0, 1].

    for (let i = 1; i <= n; i++) {                                                                  // Use a for loop to iterate from 2 to n.
        let next_num = fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1] ;          // Inside the loop, calculate the next Fibonacci number by adding the last two numbers in the fibonacci array. Append this new number to the array.
        fibonacci[fibonacci.length] = next_num ;
    }
    return fibonacci ;                                                                              // After the loop, return the fibonacci array.
}



// Call the generateFibonacci function with an appropriate value of n and log the result using console.log().
let number = generateFibonacci(10) ;

console.log(number) ;