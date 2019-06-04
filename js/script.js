/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
let quotes = [
{
  quotes: "The best surfer out there is the one having the most fun.",
  source: "Phil Edwards",
  citation: "Surf Careers",
  year: "2019"
},

{
  quotes: "If in doubt, paddle out.",
  source: "Nat Young",
  citation: "Surf Careers",
  year: "2019"
},

{
  quotes: "If you're having a bad day, catch a wave.",
  source: "Frosty Hesson",
  citation: "Surf Careers",
  year: "2019"
},

{
  quotes: "Big waves aren't measured in feet, but in increments of fear.",
  source: "Buzzy Trent",
  citation: "Surf Careers",
  year: "2019"
},

{
  quotes: "Surfing is not something you retire from.",
  source: "Surf Careers",
  citation: "Surf Careers",
  year: "2019"
},
]
console.log(quotes);

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

const getRandomQuote = (array) => { // Defining a function called get random quote with a para called array
  var storeRandomNumber; //defining a var calling it store random number
  storeRandomNumber = Math.floor(Math.random() * array.length); //math.random generates a random number 0 -1 //rounds down
  return array[storeRandomNumber] // returning the seleted quote object
}
console.log(getRandomQuote(quotes)) 

/* <p class="quote">Every great developer you know got there by solving problit.</p>
<p class="source">Patrick McKenzie
<span class="citation">Twitter</span>
<span class="year">2016</span>
</p> */





const printQuote = () => { //defining the function called print quote without any pera
  var getQuotes = getRandomQuote(quotes) //calling the function getrandomquotes
  var htmlGoesHere = ''; //getting a new var and setting it to null quotes indiate its a string variable
  var citation = getQuotes.citation; 
  var year = getQuotes.year;
 
htmlGoesHere = `<p class = "quote" >${getQuotes.quotes} </p> <p class = "source" >${getQuotes.source}`
if (citation) {
  htmlGoesHere = `${htmlGoesHere} <span class="citation">${citation}</span>`
}
if (year) {
  htmlGoesHere = `${htmlGoesHere} <span class="year">${year}</span>`
}
htmlGoesHere = `${htmlGoesHere}</p>`
document.getElementById(`quote-box`).innerHTML=htmlGoesHere
}
/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.