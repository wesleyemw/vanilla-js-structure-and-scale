import {add, subtract} from './helpers.js';
import {getDay, addMonths} from './time.js';

// // Get two numbers from the user
// let num1 = parseFloat(prompt('Enter a number', 0));
// let num2 = parseFloat(prompt('Enter another number', 0));

// // Get the total
// let total = add(num1, num2);

// // Tell them the total
// //alert('The total is ' + total);

let myBday = new Date('December 25, 1980, 20:30:00');

let day = getDay(myBday);

console.log(day);
