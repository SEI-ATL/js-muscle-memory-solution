/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

function oddRange(end) {
    const result = [];
    // return an array
    // edge cases: if given a number, I do nothing with that number
    if (end < 0) {
        return result; // [ ]
    } else {
        // for (let i = 1; i <= end; i++) {
        //     if (i % 2 !== 0) {
        //         result.push(i); // [1, 3, 5, 7, 9, 11, 13]
        //     }
        // }

        for (let i = 1; i <= end; i += 2) {
            console.log(i);
            result.push(i); // [1, 3, 5, 7, 9, 11, 13]
        }
    }
    // set up a for loop and start the loop at 1
    // iterate to check if each number has a remainder of zero
        // ** We can also iterate by skipping over numbers (ie even numbers)
    return result;
}

console.log(oddRange(13));
console.log(oddRange(6));
console.log(oddRange(-13));