/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote:'There is some good in this world, and it’s worth fighting for.',//J.R.R. Tolkien,
    name: 'J.R.R. Tolkien',
    citation: '[The Two Towers (November 11, 1954)]'
  },
  {
    quote:  'I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.',//Albert Einstein
    name:   'Albert Einstein',
    year: '(1929)'

  },
  {
    quote:  'A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.',//George Bernhard Shaw
    name:   'George Bernhard Shaw',
    tags: '#goodquote'
  },
  {
    quote:  'He who fears he will suffer, already suffers because he fears.',//Michel De Montaigne
    name:   'Michel De Montaigne'
  },
  {
    quote:  'It is only with the heart that one can see rightly; what is essential is invisible to the eye.',// Antoine de Saint-Exupéry
    name:   'Antoine de Saint-Exupéry',
    citation: '[The Little Prince (April 1943)]'
  }, 
  {
    quote:  'But I have promises to keep, and miles to go before I sleep.',//Robert Frost
    name:   'Robert Frost',
    year: '1923'
  },
  {
    quote:  'Life is really simple, but we insist on making it complicated.',//Confucius
    name:   'Confucius'
  }
];


//Random RGB generater
function randomColor()
{
     color='rgb('+Math. round(Math. random()*255)+','+Math. round(Math. random()*255)+','+Math. round(Math. random()*255)+')';

     return color;
}

  /***
 * `getRandomQuote` function
***/
function getRandomQuote(numberOfQuotes) {
  const randomQuote = Math.floor(Math.random() * numberOfQuotes);
  return randomQuote; 
  }


/***
 * `printQuote` function
***/
function printQuote() {
  
  //defines base var
  const quotesLength = quotes.length;
  const number = getRandomQuote(parseInt(quotesLength));
  var quoteBox = document.getElementById("quote-box");
  var htmlNames = document.createElement('p');
  var htmlQuote = document.createElement('p');
  var quoteP = document.querySelector('.quote');
  var nameP = document.querySelector('.source');

   //replaces old nameP/quoteP with htmlName/htmlQuote
  quoteBox.replaceChild(htmlNames, nameP);
  quoteBox.replaceChild(htmlQuote, quoteP);
  
  //adds same class names as nameP/quoteP to htmlName/htmlQuote and adding new innerHTML to htmlName/htmlQuote
  htmlNames.innerHTML = quotes[number].name;
  htmlNames.className = 'source';
  htmlQuote.innerHTML = quotes[number].quote;
  htmlQuote.className = 'quote';

  //making them removable
  var oldCitationSpan = document.querySelector('.citation');
  var oldYearSpan = document.querySelector('.year')
  var oldTagSpan = document.querySelector('tag')

//removes old citation
  if (typeof(oldCitationSpan) != 'undefined' && oldCitationSpan != null) {
    htmlNames.removeChild(oldCitationSpan);
    } 

//appends citation
  if (number === 0 || number === 4 ) {
  var citationSpan = document.createElement('span');
  citationSpan.innerHTML = quotes[number].citation;
  citationSpan.className = 'citation';
  htmlNames.appendChild(citationSpan);
  }

//removes old year
  if (typeof(oldYearSpan) != 'undefined' && oldYearSpan != null){
    htmlNames.removeChild(oldYearSpan);
    }

//appends year
  if (number === 1 || number === 5) {
    var yearSpan = document.createElement('span');
    yearSpan.innerHTML = quotes[number].year;
    yearSpan.className = 'year';
    htmlNames.appendChild(yearSpan);
  }

  //removes appended old span with the class of tags
  if (typeof(oldTagSpan) != 'undefined' && oldTagSpan != null) {
    htmlNames.removeChild(oldTagSpan);
    } 

//append span with class tags
  if (number === 2) {
    var tagSpan = document.createElement('span');
    tagSpan.innerHTML = quotes[number].tags;
    tagSpan.className = 'tags';
    htmlNames.appendChild(tagSpan);
    }

  //chages backgrouond color
const rColor = randomColor();
  var body = document.querySelector('body');
  body.style.backgroundColor = rColor;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);