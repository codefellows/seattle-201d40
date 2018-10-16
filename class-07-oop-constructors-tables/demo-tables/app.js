'use strict';

/* To see what we need to do to build a HTML table with JS, let's take a look at the HTML needed to start the table and make the top two rows:

<table>             PUT THIS AND ONLY THIS IN THE HTML, WITH AN ID
  <tr>              create tr
    <th>Name</th>   create a th, give it content, append it to tr
    <th>Color</th>  create a th, give it content, append it to tr
    <th>Tail</th>   create a th, give it content, append it to tr
  </tr>             append tr to the table

  <tr>
    <td>Buddy</td>
    <td>Orange and White</td>
    <td>VERY long</td>
  </tr>
</table>

Tables are built in the same way that a typewriter types: left-to-right, top-to-bottom.

Thus, we'll want to create and append HTML elements in the same order.

We have already put an empty <table> element in the HTML, with id="cats" */

// We need an array to hold our cats
var allCats = [];

// We need to access the table that is in the DOM
var catTable = document.getElementById('cats');

// We need a constructor to make our cat objects
function Cat(name, color, tailSize) {
  this.name = name;
  this.color = color;
  this.tailSize = tailSize;
  allCats.push(this);
}

/*
Buddy	Orange and White	VERY large
Alistair (R.I.P.)	Orange	Small
Trillian	Black/Orange	Very small
Agador	Gray and white	Medium small
Aloysius	Gray and white	Medium
Meow Mix	Black	Medium
Toeny	Gray	Medium-Large
Diva	White	Large
*/

// We need to create our Cat instances
new Cat('Buddy', 'Orange and White', 'VERY large');
new Cat('Alistair (R.I.P.)', 'Orange', 'Small');
new Cat('Trillian', 'Black/Orange', 'Very small');
new Cat('Agador', 'Gray and white', 'Medium small');
new Cat ('Aloysius', 'Gray and white', 'Medium');
new Cat('Meow Mix', 'Black', 'Medium');
new Cat('Toeny', 'Gray', 'Medium-Large');
new Cat('Diva', 'White', 'Large');

Cat.prototype.render = function() {
  // make a tr
  var trEl = document.createElement('tr');

  // make a td
  var tdEl = document.createElement('td');
  // give it name content
  tdEl.textContent = this.name;
  // append it to the tr
  trEl.appendChild(tdEl);

  // make a td
  tdEl = document.createElement('td');
  // give it color content
  tdEl.textContent = this.color;
  // append it to the tr
  trEl.appendChild(tdEl);

  // make a td
  tdEl = document.createElement('td');
  // give it tail size content
  tdEl.textContent = this.tailSize;
  // append it to the tr
  trEl.appendChild(tdEl);

  // append the tr to the table
  catTable.appendChild(trEl);
}

// console.table(allCats);

// We need a separate function to make the table header

function makeHeaderRow() {
  // create a tr
  var trEl = document.createElement('tr');

  // create a th
  var thEl = document.createElement('th');
  // give it content "Name"
  thEl.textContent = 'Name';
  // append it to the tr
  trEl.appendChild(thEl);

  // create a th
  var thEl = document.createElement('th');
  // give it content "Color"
  thEl.textContent = 'Color';
  // append it to the tr
  trEl.appendChild(thEl);

  // create a th
  var thEl = document.createElement('th');
  // give it content "Tail Size"
  thEl.textContent = 'Tail Size';
  // append it to the tr
  trEl.appendChild(thEl);

  catTable.appendChild(trEl);
}

// It would be nice to have a single function that renders all of the individual cat rows
function renderAllCats() {
  for (var i = 0; i < allCats.length; i++) {
    allCats[i].render();
  }
}

// Now we need to call our functions: the one for the header row, and the one for generating the individual cat rows
makeHeaderRow();
renderAllCats();

// Don't forget in the Chrome dev tools to observe the difference between the HTML shown in the Sources tab versus the Elements tab!
