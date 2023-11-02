console.log("BASIC ARITHMETIC!") ;

// declare the variables (numbers)
let num1 = 10 ;
let num2 = 5 ;

// run the numbers through some functions to get the reuslts
// capture the results in some aptly named variables

// sum
function add(num1, num2) {
    result1 = num1+num2 ;
    return result1 ;
    console.log(result1) ;
}

// difference
function subt(num1, num2) {
    result2 = num1-num2 ;
    return result2 ;
    console.log(result2) ;
}

// product
function mult(num1, num2) {
    result3 = num1*num2 ;
    return result3 ;
    console.log(result3) ;
}

// quotient
function dvsn(num1, num2) {
    result4 = num1/num2 ;
    return result4 ;
    console.log(result4) ;
}


//display the results
let arith1 = add(num1, num2) ;
console.log("The sum is: ", arith1) ;

let arith2 = subt(num1, num2) ;
console.log("The difference is: ", arith2) ;

let arith3 = mult(num1, num2) ;
console.log("The product is: ", arith3) ;

let arith4 = dvsn(num1, num2) ;
console.log("The quotient is: ", arith4) ;

