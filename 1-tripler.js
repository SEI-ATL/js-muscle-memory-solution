/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

function tripler(array) {
    const result = [];
    // return a new array
    // iterate through the array passed in x
    console.log('Inside of tripler function');
    for (let i = 0; i < array.length; i++) {
        let num = array[i]; // 3
        let multiple = num * 3; // 9
        result.push(multiple); // [3, 6, 9]
    }
    // multiply each element by 3
    // push that element into my result
    // return result x
    
    return result;
}

console.log(tripler([1,2,3]))
console.log(tripler([4, 1, 7]));

// understand the problem
// what the problem is asking you to return
// what do I need to solve this problem


// what am I returning ? array