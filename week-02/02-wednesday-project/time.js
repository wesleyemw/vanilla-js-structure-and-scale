/*
The Template

This project is entirely JavaScript based (though you can build a UI for it if you’d like to).

When you’re done, you should have a time library that exposes the following helper functions:

    time.getDay() - get the day of the week as a string.
    time.getMonth() - get the month of the year as a string.
    time.addSeconds() - add a number of seconds to a date.
    time.addMinutes() - add a number of minutes to a date.
    time.addHours() - add a number of hours to a date.
    time.addDays() - add a number of days to a date.
    time.addMonths() - add a number of months to a date.
    time.addYears() - add a number of years to a date.


    */

    let time = (function () {

        // opening a constructor function
        function Constructor (timeObj) {
            this.time = timeObj;
        }


        // days and months
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


        // training with get days
        Constructor.prototype.getDay = function (time) {
            let t = this.time;
            let dayIndex = t.getDay();
            return days[dayIndex];
        }

        Constructor.prototype.getMonth = function (time) {
            let t = this.time;
            let monthIndex = t.getMonth();
            return months[monthIndex];
        }

        // operations here
        Constructor.prototype.addSeconds = function (amount) {
            let t = this.time;

            let epoch =  t.setSeconds(t.getSeconds() + amount);
            return new Date(epoch);
           
        }

        // exporting the constructor object
        return Constructor;
    })();