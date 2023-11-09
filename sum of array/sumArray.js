console.log("SUM OF ARRAY ELEMENTS") ;

// calculates the sum of all the elements in a given array of numbers.

// traverse the array elements and accumulate the sum.

const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ;
const milTime = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] ;

function addition(array) {
    let sum = 0 ;

    for (let i = 0; i < array.length; i++) {
        sum += array[i] ;
    }

    return sum
}

console.log(addition(hours)) ;

console.log(addition(milTime)) ;

// console.log(sum) ;

