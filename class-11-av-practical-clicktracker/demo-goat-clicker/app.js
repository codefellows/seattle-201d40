'use strict';

// Array to store the objects
var allGoats = [];

// Make a constructor function
function Goat(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.views = 0;
  allGoats.push(this);
}

// make new Goat instances
new Goat('cruisin', 'img/cruisin.jpg');
new Goat('Kissing goats', 'img/kissing.jpg');
new Goat('Sassy goat', 'img/sassy.jpg');
new Goat('Smiling goat', 'img/smiling.jpg');
new Goat('Sweater goat', 'img/sweater.jpg');
new Goat('Flower goat', 'img/flower.jpg');
new Goat('Jumping goat', 'img/jumping.jpg');
new Goat('Toothy goat', 'img/toothy.jpg');
new Goat('Tongue goat', 'img/tongue.jpg');
new Goat('Pushy goat', 'img/pushy.jpg');

// Get the <img> element from the DOM
var goatImg = document.getElementById('goat-pic');

// Write a function to randomly display one of the pictures
function randomGoat() {
  // Select a random goat from the array of goats
  var idx = Math.floor(Math.random() * allGoats.length);
  // console.log(allGoats[idx]);
  // Assign the src, alt, and title attributes to the <img> element
  goatImg.src = allGoats[idx].filepath;
  goatImg.alt = allGoats[idx].name;
  goatImg.title = allGoats[idx].name;
  // Console log which goat is showing
  console.log(`${allGoats[idx].name} is showing`);
  // Tally views for each goat
  allGoats[idx].views++;
}

randomGoat();

// Listen for clicks on the goat and then display a new goat
goatImg.addEventListener('click', randomGoat);
