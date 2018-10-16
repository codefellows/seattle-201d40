'use strict';

// Let's start by making an object literal of a student, with the following properties: course, enrolled (T/F), instructor, TAs, first name, last name, preferred name, hometown, introduction.

var ryan = {
  course: '201d40',
  enrolled: true,
  instructor: 'Sam',
  teachingAssistants: ['Noah', 'Tara', 'Zahra'],
  firstName: 'Ryan',
  lastName: 'Gallaway',
  preferredName: 'Big Dawg',
  hometown: 'Moses Lake, WA',
  introduction: function() {
    console.log(`Hi, my name is ${this.firstName} and I am from ${this.hometown}, but you can call me ${this.preferredName}!`)
  }
}

// Constructor function syntax

// function ConstructorFunctionName (parameter1, parameter2) {
//   this.property = parameter1;
//   this.property2 = parameter2;
//   this.staticProperty1 = 'ExampleString';
//   this.method1 = function () {
//     console.log('do stuff');
//   };
// }

//===================================================
// Student Constructor
//===================================================

function Student(firstName, lastName, preferredName, hometown) {
  this.course = '201d40';
  this.enrolled = true;
  this.instructor = 'Sam';
  this.teachingAssistants = ['Noah', 'Tara', 'Zahra'];
  this.firstName = firstName;
  this.lastName = lastName;
  this.preferredName = preferredName;
  this.hometown = hometown;
  Student.all.push(this);
}

//==================
//Student Prototypes
//==================

Student.prototype.introduction = function () {
  console.log(`Hi, my name is ${this.firstName} and I am from ${this.hometown}, but you can call me ${this.preferredName}!`)
};

Student.prototype.isCodeNinja = true;

Student.all = [];

// new Student instances
new Student('Ryan', 'Gallaway', 'Big Dawg', 'Moses Lake, WA');

new Student('Heather', 'Cherewaty', 'Young Money', 'Mays Landing, NJ');

new Student('Adam', 'Wittnam', 'Ad-Rock', 'Marion, IL');

for(var i = 0; i < Student.all.length; i++) {
  Student.all[i].introduction();
}
