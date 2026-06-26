// creation of array and printing it to console // 
let  array = [11, 5, 8, 3, 25, 16, 31, 45,14, 20]
console.log(array);


// sorting the array in ascending order (smallest to largest and printing it to console) //
array.sort((a, b) => a - b);

// inserting the numbers 19, 23, 30 into the sorted array //
array.push(19, 23, 30);
array.sort((a, b) => a - b);
console.log(array);

// remove two numbers 8,31 from the array //
// number 8 here//
//const index8 = array.indexOf(8);
/*if (index8 !== -1) {
  array.splice(index8, 1);
} */
// number 31 here// 
//const index31 = array.indexOf(31); //
/*if (index31 !== -1) {
    array.splice(index31, 1);
}  */
array.sort((a, b) => a - b);
console.log(array);

// parameter: array: to search and key to be found 
// creating the search function here 
function sequentialSearch(array, value){ 
    console.log('sequential search');
    let found = -1;
    
    for( let i = 0; i < array.length; i++){
        if (array[i] === value){
            found = [i];
        }
    } 
    return found;
}  

// key 
let value = 65;

// parameter: array: to search and key to be found 
// creating the search function here 
function binarySearch(array, value){ 
    let found = -1;
    
    for( let i = 0; i < array.length; i++){
        if (array[i] === value){
            found = [i];
        }
    } 
    return found;
}  


