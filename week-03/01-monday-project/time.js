/*
The Template

Convert the library to a constructor pattern, where users can create a Time() instance, then run methods on it to adjust the time and get details about it.

The finished library should use ES modules, and support chaining.


    */

class Time {

    constructor(timeObj) {
        this.date = new Date(timeObj);
    }

    getDay() {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[this.date.getDay()];
    }

    getMonth() {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[this.date.getMonth()];
    }

    addSeconds(amount) {
        let epochSeconds = this.date.setSeconds( (this.date.getSeconds()) + (amount));
        return new Date(epochSeconds);
    }

    addMinutes(amount) {
        let epochMinutes = this.date.setMinutes( (this.date.getMinutes()) + (amount));
        return new Date(epochMinutes);
    }

    addHours(amount) {
        let epochHours = this.date.setHours((this.date.getHours()) + (amount) );
        return new Date(epochHours);
    }

    addDays(amount) {
        let epochDays = this.date.setDay( (this.date.getDay()) + (amount) );
        return new Date(epochDays);
    }

    addMonths(amount) {
        let epochMonths = this.date.setMonth( (this.date.getMonth()) + (amount) );
        return new Date(epochMonths);
    }

    addYears(amount) {
        let epochYears = this.date.setFullYear( (this.date.getFullYear()) + (amount) );
        return new Date(epochYears);
    }

}


export {Time as default};