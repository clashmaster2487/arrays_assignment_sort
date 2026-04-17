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