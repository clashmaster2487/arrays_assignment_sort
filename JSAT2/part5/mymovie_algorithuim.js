// movie id //


// movie id section
let movies = [];
/*my my own refrence here we have created a helper function with
all the properties needed for the requirements */
function addMovie(movieID,title,year,rating) {
    movies.push({
    movieID,
    title,
    year,
    rating,   
    });
}
// addition of movies again for my own refrence 
addMovie(101, "back to the future", 1985, 10.0);
addMovie(102, "star wars the the empire strikes back", 1980, 10.3)
console.log (movies)