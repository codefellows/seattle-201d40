'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// 1st and Pike	23	65	6.3

var pike = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  locationName: 'First and Pike',
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0
};

pike.calcCustomersEachHour = function() {
  for(var i = 0; i < hours.length; i++) {
    // calculate a random number
    var randomCustomers = random(this.minCustomersPerHour, this.maxCustomersPerHour);
    // put that random number into the appropriate array
    this.customersEachHour.push(randomCustomers);
  }
}

pike.calcCookiesEachHour = function() {
  pike.calcCustomersEachHour();
  for(var i = 0; i < hours.length; i++) {
    // calc the cookies
    var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
    // put the numbers into an array
    this.cookiesEachHour.push(hourlyCookies);
    this.totalDailyCookies += hourlyCookies;
  }
}

pike.render = function() {
  this.calcCookiesEachHour();
  var pikeUl = document.getElementById('pike');
  // console.log(pikeUl, '<pikeUl>');
  for(var i = 0; i < hours.length; i++){
    // create element
    var liEl = document.createElement('li');
    // give it content of "6am: 16 cookies"
    liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
    // append it
    pikeUl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalDailyCookies} cookies`;
  pikeUl.appendChild(liEl);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // from MDN docs
}

pike.render();
