/**
 * @file app.js
 * @description This file contains the JavaScript for our Movie App.
 * It contains the movie list intane, the event functions for the UI and other UI funtionality
 * @author john safarian
 * @version 3.0.0
 * @since v3
 * getData()
 * onUpIndexChange
 * deleteClick() has confirmation
 * Bounds checking for getData() and deleteClick()
 */

/**
 * @description the initial list of movies for our app
 */

let initialMovies = [
    {title: "The Shawshank Redeption", year: 1994},
    {title: "The Godfather", year: 1972},
    {title: "The Godfather: Part II", year: 1974},
    {title: "The Dark Knight", year: 2008},
    {title: "Krull", year: 1983},
    {title: "The Last Starfighter", year: 1981},
]


/**
 * @memberof MovieList
 * @instance movieList
 * @param {string} - the ide name of the element where we want the movielist to appear in the browser / UI
 * @param {Array} initialMovies - The initial array of movies or our movielist
 * 
 */
 let movielist = new MovieList('list', initialMovies);

// Searching and sorting
// Search
/**
 * Search for a movie in the movie list by partial title
 * @event Click#searchButton
 * @type {string}
 * @function searchClick
 */
function searchClick(){
    console.log('searchClick');
    // get the text element from the DOM
    let formElements = document.getElementById("form-list-control").elements;
    // get the text from the input element
    let text = formElements["search-string"].value;
    // Run our search method
    movielist.search(text);
}

// Sort A to Z
function a2zClick(){
    movielist.sortA2Z()
}
// Sort Z to A
function z2aClick(){
    movielist.sortZ2A();
}

// Add
/**
 * Add a new movie to the list - (Create)
 * The properties are read from the add movie form.
 * @event Click#addMovieSubmitButton
 * @function addClick
 * @property {string} title - the movie title to add
 * @property {number} year - the year the movie was made
 */
function addClick(){
    // Get the add form elements from the DOM.
    let formElements = document.getElementById("form-add").elements;
    // Get the movie title from the form
    let title = formElements["title"].value;
    // Get the year from the form
    let year = Number(formElements["year"].value);
    // Validation.
    // Test the year and the title.
    console.log(title);
    console.log(year);
    // Reg Ex pattern
    const pattern = /^[a-z0-9\s]*$/i
    // Test of Reg Ex pattern with input
    const test = pattern.test(title);
    yearIsInt = Number.isInteger(year);
    // Output the tests
    console.log(test);
    console.log(yearIsInt);
    if (test && yearIsInt){
        // Save the new movie to the list
        movielist.add(title, Number(year));
        // Clear the input fields
        formElements.title.value = "";
        formElements.year.value = "";
        alert("Movie saved successfully")
    } else if (!test) {
        alert("Invalid title, must be alphanumberic with spaces only")
    } else {
        alert("Invalid year, must be an integer")
    }
    
}

// getData - onUpIndexChange
/**
 * Get movie data from the movie list to update when typing an index in the 
 * index input in the update form
 * @function getData
 */
function getData(){
    console.log("getData");
    // get the form elements
    const idValue = document.getElementById('upIndex').value;
    // typecast to number
    const upIndex = Number(idValue - 1);
    // Getting last element of the array
    const upperBound = movielist.movieList.length;
    console.log(upperBound);
    if (upIndex >  0 && upIndex <= upperBound){
        const title = document.getElementById('upTitle');
        const year = document.getElementById('upYear');
        // get the movie from the list
        const movie = movielist.getRow(upIndex);
        title.value = movie.title;
        year.value = movie.year;
    } else {
        alert("No such index exsists")
    }
}

/**
 * Event to run when input is typed into the update form index input box.
 * It will call getData() to populate the rest of the update form with data 
 * from the movie list
 * @event onChange#updateFormIndexChange
 * @function onUpIndexChange
 */
function onUpIndexChange(){
    console.log("onUpIndexChange");
    getData();
}

// Update
/**
 * update a movie in the movie list - (Update), by index.
 * @event Click#updateMovieSubmitButton
 * @function updateClick
 * @property {number} index - the element in the list to update
 * @property {string} title - the movie title to add
 * @property {number} year - the year the movie was made
 */
function updateClick(){
    // get all form elements from the DOM
    let formElements = document.getElementById("form-update").elements;
    // get the values from the input boxes
    let index = formElements["index"].value -1;
    let title = formElements["title"].value;
    let year = formElements["year"].value;
    // validation
    // Test the inputs for valid values.
    // Update the movie in the movielist
    movielist.update(Number(index), title, Number(year));
    // Clear the input fields
    formElements.index.value = "";
    formElements.title.value = "";
    formElements.year.value = "";

}

/**
 * Delete a movie in the list - (Delete), by index
 * @event Click#deleteMovieSubmitButton
 * @function deleteClick
 * @property {number} index - the element in the list to update
 */
function deleteClick(){
    // get the delete index element
    let indexElement = document.getElementById("delIndex");
    // get index value
    let index = Number(indexElement.value - 1);
    // Validate - check if the index is in the array.
    const upperBound = movielist.movieList.length;
    // Check the index entered is between 0 and the upper bound
    if (index > 0 && index <= upperBound){
        // return the movie we wish to delete.
        const movie = movielist.getRow(index);
        // double check that the user wants to delete the movie.
        const confirm = window.confirm(`Do you want to delete movie "${movie.title}"?`);
        if (confirm){
            console.log("Deleting movie.... ", movie.title)
            // Delete the movie
            movielist.delete(Number(index));
            alert("Movie deleted successfully");
            // Clear the input box
            indexElement.value = "";
        } else {
            console.log("Delete cancelled");
        }
    } else {
        alert("No such index exsists")
    }
}


// UI JavaScript
// JavaScript for Tabs

/**
 * JavaScript function or opening the forms
 * @function openForm
 * @param {object} evt - the event object
 * @param {string} action - the name of the action being used
 */

function openForm(evt, action){
    // declare variables
    let i, tabContent, tabLinks

    // Get all elements that have the classname of tabcontent.
    tabContent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabContent.length; i++) {
        // Setting all tabcontent elements with display - none
        tabContent[i].style.display = 'none'
    }

    // Get all elements hat hae the clas name of tablinks
    tabLinks =  document.getElementsByClassName('tablinks');
    for (i = 0; i < tabLinks.length; i++) {
        // Removing the active class from all tabliks elements
        tabLinks[i].className = tabLinks[i].className.replace("active", " ")     
    }

    // Show the current tab, and ad the active class to the button that opened the tab.
    document.getElementById(action).style.display = "block";
    evt.currentTarget.className += " active";
}
// End of openForm()

// Open a tab by default
document.getElementById('defaultOpen').click();