// file: sequentialSearch.js
// this file shows how linear search works 
// Author: john safarian 
// last modified: 17/04/2026
// version 1.0.0

// creation of the new array //
const newArray = [84,33,42,95];


// sequential search function //
// create the search function //

// the value we are searching for 
let key = 42;
console.log (`key: ${key}`);
// outputting  the key value to the console

// parameter: array: to search and key to be found 
// creating the search function here 
function sequentialSearch(array, value){ 
    // set the found value to -1 (not found)
    console.log(sequentialSearch([84,33,42,95], 42));
    let found = -1;
    console.log(`Array: ${newArray}`);
    console.log(`Array: ${newArray}`);
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            console.log("Value found at index: " + i);
            return i;
        }
    } 
    console.log("Value not found in the array.");
    return -1;
};