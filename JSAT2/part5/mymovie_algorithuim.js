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
addMovie(102, "back to the future part 2", 1989, 10.3)
addMovie(103, "back to the future part 3 ", 1990, 20)
addMovie(104, "star wars the phantom menace", 1999, 3.5)
addMovie(105, " star wars attack of the clones ", 2002, 20)
addMovie(106, " revenge of the sith ", 2005, 20)
addMovie(107, "a new hope", 1997, 20)
addMovie(108, "the empire strikes back", 1980, 20)
addMovie(109, "return of the jedi", 1983, 20)
addMovie(110, "the force awakens", 2011, 20)
// movie sorted 
movies.sort((a, b) => a.movieID - b.movieID);

console.log (movies)

// the value we are searching for 
let key = 84;
// orginal key was 45; but for the purposes of testing i had to chnage the key to 99 to show the not found case.


// parameter: array: to search and key to be found 
// creating the search function here 
function sequentialSearch(array, movieID){ 
    console.log('sequential search');
    let found = null;
    
    for( let i = 0; i < array.length; i++){
        if (array[i].movieID === movieID){
            found = i;
            break; // stops when found
        }
    } 
    return found;
}  

// function calling 
const result = sequentialSearch(movies, key);
// ouputs result 
if (result == null){
    console.log(`the key of ${key} was not found in the array`)
} else {
    console.log(`the key of ${key} was found at index ${result}`)
}
