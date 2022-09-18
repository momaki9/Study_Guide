var greeting = function() {
    console.log("This is a basic function declaration")
}
greeting();

//Arrow function
var arrowGreeting = () => {
    console.log("This is an arrow function")
}
arrowGreeting();

//if arrow function body contains only one expression, we can omit the braces
var arrowGreet = () => console.log("This is a simpler arrow function")
arrowGreet();

//if arrow function has one parameter
var shortGreet = paramName => console.log(paramName);
shortGreet("This is a very simple arrow function with 1 parameter")

//object
// key word THIS - second this refers to something else; however if an arrow function is used, then the second this would be defined
//that is because arrow functions attach themself to the person object not the setTimeout oject -- see second example below
var person = {
    name: "Hodor",
    saySomething: function() {
        console.log(this.name + " is thinking...");
        setTimeout(function() {
            console.log(this.name + "!!!");
        }, 100);
    }
}
// person.saySomething();

var person = {
    name: "Hodor",
    saySomething: function() {
        console.log(this.name + " is thinking...");
        setTimeout( () => {
            console.log(this.name + " is the best!!!");
        }, 100);
    }
}
// person.saySomething();

// var dog = {
//     name: "Penny",
//     sound: "Woof!",
//     makeSound: () => console.log(this.sound)
// }
// the 'This' above does not work since the makeSound is a custom method and also used with arrow function
var dog = {
        name: "Penny",
        sound: "Woof!",
        makeSound: function() { console.log(this.sound)}
}
//changing the arrow functions to 'regular' functions will work with 'This'
dog.makeSound();

//Functional loops
const moviePatrons = [
    { name: "Tom", age: 16 },
    { name: "Ashley", age: 31 },
    { name: "Sarah", age: 18 },
    { name: "Alvin", age: 22 },
    { name: "Cherie", age: 14 },
    { name: "Malcolm", age: 15 }
];

moviePatrons.forEach(patron => console.log(patron.age));

//filter
const canWatchRatedR = moviePatrons.filter(patron => {
    return patron.age >17;
})

console.log(canWatchRatedR)

//map

const cardedMoviePatrons = moviePatrons.map(patron => {
    //copies the object we want to iterate over
    const pObj = {...patron}
    if (pObj.age >= 17) {
        pObj.canWatchRatedR = true;
    } else {
        pObj.canWatchRatedR = false;
    }

    return pObj;
})
console.log("Movie Patrons");
console.log(moviePatrons);
console.log("\n Carded Movie Patrons");
console.log(cardedMoviePatrons);


// ------------------------    Day 2    -------------------
// console.log(process.argv[2])
//ternary operator
const a = "test";
const b = "test";

console.log(a === b ? "yes they are equal" : "Nope")
//or
console.log(a === b ? true : false)


//Modularization
//note these do not work in the browser's console log
const modesExample = require('./modularization')
//calling on a constant from the custom javascript file Modularization
console.log(modesExample.pie)
//calling on a function from the custom javascript file Modularization
console.log(modesExample.predictable());

//Switch
const math = require('./math');
const operation = process.argv[2];
//default data type from command line is string, we can use parseInt to convert these entries into numerical values
const numOne = parseInt(process.argv[3]);
const numTwo = parseInt(process.argv[4]);

switch (operation) {
    case 'sum':
        //if the value of operation equals sum, then run the following console log
        console.log(math.sum(numOne, numTwo));
        break;
    case 'difference':
        console.log(math.difference(numOne, numTwo));
        break;
    case 'product':
        console.log(math.product(numOne, numTwo));
        break;
    case 'quotient':
        console.log(math.quotient(numOne, numTwo));
        break;
    default:
        console.log("Please check your typing!")
}

// Day 3 notes
//For of looping
// 1. Using arrays
const songs = ['Bad Guy', 'The Wheels on the Bus', 'Friday'];

for (const song of songs) {
    console.log(song);
}
// 2. Using multidimensional arrays
const moreSongs = [
  ['Bad Guy', 1],
  ['The Wheels on the Bus', 2],
  ['Friday', 3],
];

for (const song of moreSongs) {
    console.log(song);
}
//stopped at 0:44
//spread vs rest parameter (the latter is when it is used inside a function)
//reduce method 0:57 and 1:06
//object desctructuring at 1:10 --> const { keys I want to interface with } = objectName OR const [ elements in an array ] = arrayName;