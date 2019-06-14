// Event listener to respong to "Show another quote" button clicks
// When user clicks anywhere on the button, the "printQuote" funtion is called.
document.getElementById('loadQuote').addEventListener("Click", printQuote, false);
const message = '';
const red;
const green;
const blue;
const viewedQuotes =[];

// Array to hold quotes, sources, citations & years.
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
];

function printQuote() {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = quote;
}
// Function to get a random object from quotes array and store in variable "randomQuote"
function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);

  var splicedQuote = quotes.splice(randomQuote, 1)[0];
  viewedQuotes.push(splicedQuote);
  if ( quotes.length === 0 ) {
          quotes = viewedQuotes;
          viewedQuotes = [];
  }
  return splicedQuote;
}

// Function to generate random rgb color value.
function randomColorGenerator() {
  var randomColor;
  red = Math.floor(Math.random() * 256 );
  green = Math.floor(Math.random() * 256 );
  blue = Math.floor(Math.random() * 256);
  randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return randomColor; 
}



// Function to take presviously selected random quote from array & print to screen.
function printQuote() {
  // On click event, function "printQuote" runs, then fires the "randomQuote" function.
  var quotes = getRandomQuote();
  message ='<p class="quote">' + quotes.quote + '</p>';
  message += '<p class="source">' + quotes.source;
  if ( quotes.citation ) {
          message += '<span class="citation">' + quotes.citation + '</span>';
  } else {
          message += '';
  }
  if (quotes.year) {
          message += '<span class="year">' + quotes.year + '</span></p>';
  } else {
          message += '';
  }
  if ( quotes.tags ) {
          message += '<h3>' + quotes.tags + '</h3>';
  } else {
          message += '';
  }
  print(message);
  // Generate random color.
  randomColorGenerator();
  // Update background with new random color.
  document.getElementById('bgcolor').style.backgroundColor = randomColorGenerator;

}
