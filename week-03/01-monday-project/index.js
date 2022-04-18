import Time from './time.js';

let bDay = new Time('December 25, 1980, 21:30:00');
let otherDay = new Time('April 18, 2022, 14:30:00');


console.log(otherDay.getMonth());
console.log(bDay.addYears(30));