console.log("SUM OF NESTED ARRAY ELEMENTS") ;

// a program that calculates the total of all the numbers inside the nested array.

let nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function addition(array) {
    let sum = 0 ;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < nestedArray[i].length; j++) {
            sum += array[j] ;
        }
    }

    return sum ;
}

console.log(sum) ;