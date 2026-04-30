// this is the object creation of  movie object creation //
let  myMovie = {
    title: "The longest day ",
    year: 1964,
    summary: "The story of the D-Day landings at Normandy on June 6, 1944, told from both the Allied and German points of view.",
     
    
    // here we are adding the ratings //
    ratings: {
        rating: 5,
    }
};
   // updating values //
   myMovie.ratings.rating = 4;
   myMovie.year = 1962;
   // removal 
    delete myMovie.summary;
    
    console.log(myMovie);
    console.log(myMovie.ratings.rating);