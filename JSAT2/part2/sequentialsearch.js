// file: sequentialSearch.js
// this file shows how linear search works 
// Author: john safarian 
// last modified: 17/04/2026
// version 1.0.0

// creation of the new array //
const newArray = [84,33,42,95];


// sequential search function //

function sequentialSearch(array, value){ 
    console.log(sequentialSearch([84,33,42,95], 42));
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            console.log("Value found at index: " + i);
            return i;
        }
    } 
    console.log("Value not found in the array.");
    return -1;
};