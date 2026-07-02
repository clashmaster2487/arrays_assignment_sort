/**
 * @file movie-list.js
 * @description This file hold the class definition of our MovieList class
 * @author john safarian
 * @version 1
 * @since v2
 * getRow()
 */

/**
 * MovieList Class
 * This class has 2 properties and numerous methods
 * Look at the Readme.md file or fill list of methods
 * @class
 * @property {string} rootId - The id of the HTML element where the list is to be displayed.
 * @property {Array} movieList - The array of movies
 * @property {function} refreash - This method removes all current elements and display the current list
 * @property {function} searchID - This method will search the movieList for a movie based on the index and display it in the UI
 */

class MovieList{
    constructor(rootId, movies){
        this.rootId = rootId;
        this.movieList = movies;
        this.refresh();
        
    }

    // Methods
    // movieRow

    /**
     * generate one row of the movieList for display
     * This method will create the necessary elements for displaying a single movie in the UI
     * @function movieRow
     * @param { string}  title - the title of the movie
     * @param {string} year - the year of the movie
     * @param {number} rating - the rating of the movie
    */
    movieRow(title, year,rating){
        console.log('Movie Row')
        // get the rootElement
        const rootElement = document.getElementById(this.rootId);
        // Crate element
        const row = document.createElement('li');
        // Add the class and our text to the new element
        row.classList.add('row');
        row.textContent = `${title} (${year}) (${rating})`;
        // add the new element to the DOM
        rootElement.appendChild(row);
    }

    // genMovieList
    genMovieList(){
        // Loop though the movie
        console.log('Gen movie list');
        // console.log(this.movieList);
        for(let i = 0; i < this.movieList.length; i++){

            let movie = this.movieList[i];
            console.log(movie);
            this.movieRow(movie.title, movie.year, movie.rating);
        }
    }

    // genMovieSearchList
    /**
     * Generates a movie list based on our search term
     * @param {Array} list - the list of movies to display based on the search term
     */
    genMovieSearchList(list){
        // Remove all elements from the list
        this.removeElements();
        // Generate a new list, with the list we passed through.
        // Loop through the passed list
        for(let i = 0; i < list.length; i++){
            let movie = list[i];
            // Call the movieRow function to generate a row
            this.movieRow(movie.title, movie.year, movie.rating);
        }
    }
     
   

    // removeElements
    /**
     * Remove all list elements from the DOM.
     * Allow a new list to be displayed
     * @function removeElements
     */
    removeElements(){
        // get the parent element.
        const rootElement = document.getElementById(this.rootId);
        // get all elements with the class name of row.
        const childNodes = document.getElementsByClassName('row');
        // childNodes is an array of htmlElements.
        // how many children do we have?
        const len = childNodes.length - 1;
        // Loop through the childNodes
        for(let i = len; i >= 0; i--){
            // pull out the last child in the list.
            const child = childNodes[i];
            // Remove this child from the DOM.
            rootElement.removeChild(child);
        }
    }

    // getRow
    /**
     * A function that will return a row / a single movie from the movie list
     * @param {number} index - the index of the movie we wish to find
     * @returns {object} a movie om the list based on the index
     */
    getRow(index){
        console.log("Get ROW index:", index);
        const row = this.movieList.find((movie, arrIndex) => arrIndex === index );
        // 1 == '1' true testing the values only
        // 1 === '1' false tests the value and the type
        console.log(row);
        return row;
    }

    searchByID(id){
        return this.movieList.find((movie) => movie.id === id);
    }

    // refresh  
    refresh(){
        // We need to remove all elements
        this.removeElements();
        // We can generate the rows to display
        this.genMovieList();
    }

    // CRUD - CREATE, READ, UPDATE, DELETE
    // add
    /**
     * Adding an new movie to the movieList - Create.
     * @param {string} title - The movie title.
     * @param {number} year - The year the movie was made
     */

    add(title, year, rating){
        // Add a new movie to the end of the list.
        this.movieList.push({ title: title, year: year, id: Date.now(), rating: rating });
        // (ES6 JS) We can write this another way.
        // this.movieList.push({ title, year});
        // refresh
        this.refresh();
    }
    
    // update
    /**
     * Update a movie in the movieList - Update
     * @param {number} index - The index of the movie to update
     * @param {string} title - The new movie title
     * @param {number} year - the new movie year
     */
    update(index, title, year){
        console.log("UPDATE FUNCTION CALLED");
        if(!this.movieList[index]) return;
        // Update the title
        this.movieList[index].title = title;
        // update the year
        this.movieList[index].year = year;
        // refresh the list
        this.movieList[index].rating = rating;
        this.refresh();
        console.log("this.movielist")
    }

    // delete
    /**
     * Delete a movie from the movieList - Delete
     * @param {number} index - The index of the movie to delete
     */
    delete(index){
        // Remove one index from the movieList array
        // NOTE: We should validate the index here.
        this.movieList.splice(index, 1);
        // refresh the list.
        this.refresh();
    }

    // sortA2Z - ascending order
    sortA2Z(){
        this.movieList.sort(function (a,b){
            return a.title.localeCompare(b.title);
        });
        this.refresh();
    }

    // sortZ2A - descending order
    sortZ2A(){
        this.movieList.sort(function (a,b){
            return b.title.localeCompare(a.title);
        });
        this.refresh();
    }

    sortbyRatingAsc(){
        this.movieList.sort(function (a,b){
            return a.rating - b.rating;
        });
        this.refresh();
    }

    // search
    /**
     * Search the movieList titles for a partial match based on a search string
     * Will call the genMovieSearchList() method when done to show the results in the UI
     * @param {string} nameString - The partial title we are searching for.
     */
    search(nameString){
        console.log("SEARCH FUNCTION CALLED");
    console.log("value:", nameString);
        // Create a new list to hold search results.
        let shortList = [];
        // Use a loop to check to see if the nameStrig is in a movie title
        for (let movie of this.movieList){
            // Check if the nameString is in the movie.title
            if(movie.title.includes(nameString)){
                // If the nameString is in movie.title, add this to our shortList
                shortList.push(movie);
                console.log(nameString);
            }
        }
        // Generate / display the search lisst
        this.genMovieSearchList(shortList);
        
    }
}