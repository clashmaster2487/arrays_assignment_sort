// creation of array and printing it to console // 
let  Newarray = [11, 5, 8, 3, 25, 16, 31, 45,14, 20]
console.log(Newarray); // console logging new araay for debugging


// sorting the array in ascending order (smallest to largest and printing it to console) //
Newarray.sort((a, b) => a - b); // intial sorting 

// inserting the numbers 19, 23, 30 into the sorted array //
Newarray.push(19, 23, 30); // here we are pushing the new numbers into the sorted array 
Newarray.sort((a, b) => a - b); // sorting to keep ascending order
console.log(Newarray); // here we are logging the array making sure we can debug it if anythign goes wrong 

// remove two numbers 8,31 from the array //
// number 8 here//
const index8 = Newarray.indexOf(8); // here we are removing the eigth number from the array 
if (index8 !== -1) {
  Newarray.splice(index8, 1); // here is the splicing 
}
// number 31 here// 
const index31 = Newarray.indexOf(31); // deleeting the numbder 31 here 
if (index31 !== -1) { 
  Newarray.splice(index31, 1);
} 

Newarray.sort((a, b) => a - b); // sorting it again keeping the array in asending order
console.log(Newarray); 

// parameter: array: to search and key to be found 
// creating the search function here 
function sequentialSearch(array, value){  // taking the array and value here
    console.log('sequential search'); // logging sequential search here for debugging purposes 
    let found = -1; 
    
    for( let i = 0; i < array.length; i++){
        if (array[i] === value){
            found = [i];
        }
    } 
    return found;
}  

// key 
let value = 11;

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


// function calling 
const result = binarySearch(Newarray, value);
// ouputs result 
if (result == -1){
    console.log(`the number  in the array was found`)
} else {
    console.log(`null`)
}
