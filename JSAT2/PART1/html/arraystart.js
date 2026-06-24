// creation of array and printing it to console // 
let  Newarray = [11, 5, 8, 3, 25, 16, 31, 45,14, 20]
console.log(Newarray);


// sorting the array in ascending order (smallest to largest and printing it to console) //
Newarray.sort((a, b) => a - b);

// inserting the numbers 19, 23, 30 into the sorted array //
Newarray.push(19, 23, 30);
console.log(Newarray);

// remove two numbers 8,31 from the array //
// number 8 here//
const index8 = Newarray.indexOf(8);
if (index8 !== -1) {
  Newarray.splice(index8, 1);
}
// number 31 here// 
const index31 = Newarray.indexOf(31);
if (index31 !== -1) {
  Newarray.splice(index31, 1);
}
console.log(Newarray);

