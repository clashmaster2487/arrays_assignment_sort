

// movie section start 
// modified to be a class just for my own reference 
/**
 * MovieList Class
 * This class has 2 properties and numerous methods
 * Look at the Readme.md file or fill list of methods
 * @class
 * @property {string} movieID - The id of the HTML element where the list is to be displayed.
 * @property {Array} movieList - The array of movies
 * @property {function} refreash - This method removes all current elements and display the current list
 */
class movie {
// conmstructor being bulit 
constructor(movieID,movietitle, year, rating) {
  this.movieID = movieID; 
  this.title = movietitle; // done for array
  this.year = year // done for array
  this.rating = rating; // done for arrat

}

} 
let movies = [
new  movie(12, " star wars the phantom menace ", 1999, 70 ),
new  movie(13," star wars attack of the clones ",2002, 7),
new movie(14," star wars revenge of the sith " , 2005, 8 ),
new movie(15," star wars a new hope" , 1997,10 ),
new movie(16," star wars the empire strikes back", 1980, 20),
new movie(17," star wars return of the jedi," ,1893, 30),
new movie(18," star wars the force awakens, ",2015, 40 ),
new movie(19," back to the future part 1,", 1985, 50 ),
new movie(20,"back to the future part 2,", 1989, 60),
new movie(21,"back to the future part 3," ,1990, 70)
 ];
console.log(movies)


