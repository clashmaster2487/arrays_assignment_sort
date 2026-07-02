// this is the object creation of  movie object creation //
let  myMovie = {
    title: "The longest day ",
    year: 1964,
  
    
};
     // adding the  ratings and sumamry 
  myMovie.rating = 5;
 myMovie.summary ="World War II movie about the Normandy landings";
  // changing the rating and year
   myMovie.rating = 4;
  myMovie.year = 1962;

  // 4. deleting 
 delete myMovie.summary 

 // console logging 
    console.log(myMovie);
 