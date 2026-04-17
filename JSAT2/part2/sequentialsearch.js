// creation of the new array //
const newArray = [84,33,42,95,16,27,68,75,19,50];

// sequential search function //
function sequentialSearch(array,value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
}
} 