// file: binarySearch.js
// this file shows how binary search works 
// Author: john safarian 
// last modified: 18/04/2026
// version 1.0.0

// creation of the new array //
const searchArray = [55,22,11,78];


// the value we are searching for 
let key = 55;



// parameter: array: to search and key to be found 
// creating the search function here 
function binarySearch(array, value){ 
    let found = -1;
    
    for( let i = 0; i < array.length; i++){
        if (array[i] === value){
            found = i;
            break; // stops when found
        }
    } 
    return found;
}  

// function calling 
const result = binarySearch(searchArray, key);
// ouputs result 
if (result == -1){
    console.log(`the key of ${key} was not found in the array`)
} else {
    console.log(`the key of ${key} was found at index ${result}`)
}