'use strict';

// Object literal notation

// Let's model some Seattle beaches in code
// Let's make note of the name, neighborhood, and seagull count of each beach for each day last week

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var alki = {
  name: 'Alki Beach',
  neighborhood: 'West Seattle',
  seagullCount: [35, 75, 59, 12, 36, 477, 15],
};

alki.render = function() {
  // Access the <ul> in the DOM where we will put data
  var alkiBeachUlEl = document.getElementById('alkibeach');
  // console.log(alkiBeachUlEl);
  // For each value in the array...
  for (var i = 0; i < this.seagullCount.length; i++) {
    // console.log(this.seagullCount[i]);
    // Create the <li> element
    var liEl = document.createElement('li');
    // Give the <li> element content
    liEl.textContent = days[i] + ': ' + this.seagullCount[i];
    // Append the <li> element to the <ul>
    alkiBeachUlEl.appendChild(liEl);
  }
}

var goldenGardens = {
  name: 'Golden Gardens',
  neighborhood: 'Ballard',
  seagullCount: [45, 74, 22, 58, 12, 9, 8]
};

goldenGardens.render = function() {
  // Access the <ul> in the DOM where we will put data
  var goldenUlEl = document.getElementById('gg');
  // console.log(goldenUlEl);
  // For each value in the array...
  for (var i = 0; i < this.seagullCount.length; i++) {
    // console.log(this.seagullCount[i]);
    // Create the <li> element
    var liEl = document.createElement('li');
    // Give the <li> element content
    liEl.textContent = days[i] + ': ' + this.seagullCount[i];
    // Append the <li> element to the <ul>
    goldenUlEl.appendChild(liEl);
  }
}

var edmondsBeach = {
  name: 'Edmonds Beach',
  neighborhood: 'Edmonds',
  seagullCount: [76, 45, 23, 15, 98, 2, 44]
};

edmondsBeach.render = function() {
  var edmondsUlEl = document.getElementById('edmonds');
  for (var i = 0; i < this.seagullCount.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = days[i] + ': ' + this.seagullCount[i];
    edmondsUlEl.appendChild(liEl);
  }
}

var allBeaches = [alki, goldenGardens, edmondsBeach];

for (var i = 0; i < allBeaches.length; i++) {
  allBeaches[i].render();
}
