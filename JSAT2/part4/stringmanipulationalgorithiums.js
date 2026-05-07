 let myString = "This is a string"
let anotherString = "   Another string";
let hello = "Hello there!";
let  myName = "your first name"; 
//console.log(myString);

//console.log(myString.length); 

//console.log(myString.charAt(0));

//console.log(myString.charAt(11));  

// slicing //

// console.log(myString.slice(5, 9,)); 

// index 5 is i index 9 which gives us "is a"

// substring for another string //

//console.log(anotherString.substring(6,9));

// index (0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15) for my own refrence just to help me out with the indexing of the string 

// printing out the MyName in all uppercase letters //

 // console.log(myName.toUpperCase());

 // printing out the MyName in all lowercase letters //

 // console.log(myName.toLowerCase()); 
// end 

// concat hello and myName together // 
 //console.log(hello + myName);
// end 

// trim method to remove the whitespace from another string  //

//console.log(anotherString.trim()); //

// using the replace function to change "is a" to an empty space in myString
 let  mystring = "This is a string".replace("is a ", "")
  console.log("my string");
/*
When we as humans count numbers, we start at 1.
"This is a string"

So if we count the characters in the string, we would say that "T" is the first character, "h" is the second character, and so on. 

The question asked us, "What is the 11th character in the string"

When we counted we said that the "s" in "string" is the 11th character.

However, if we ask the computer to give us the 11th character, it will give us "t" instead.   

That is because the computer reads strings as an array (example below)
["T", "h", "i", "s", " ", "i", "s", " ", "a", " ", "s", "t", "r", "i", "n", "g"] 

In an array, the first element is at index 0, the second element is at index 1, and so on.

So when we ask the computer to give us the 11th character, it will give us the character at index 11, which is "t".

So for us to get the "s" in string, we need to ask it to give us the character at index 10: 
myString.charAt(10)
*/