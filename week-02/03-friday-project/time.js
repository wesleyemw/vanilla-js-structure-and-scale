

/**
 * Get the day of the week
 * @param  {Date}   date  The date object
 * @return {String}       The day of the week
 */
function getDay (date) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

/**
 * Get the month of the year
 * @param  {Date}   date  The date object
 * @return {String}       The month of the year
 */
function getMonth (date) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[date.getMonth()];
}

/**
 * Add seconds to a date
 * @param {Date}    date The date object
 * @param {Integer} n    The number of seconds to add
 */
function addSeconds (date, n) {
    date.setSeconds(date.getSeconds() + n);
}

/**
 * Add minutes to a date
 * @param {Date}    date The date object
 * @param {Integer} n    The number of minutes to add
 */
function addMinutes (date, n) {
    date.setMinutes(date.getMinutes() + n);
}

/**
 * Add hours to a date
 * @param {Date}    date The date object
 * @param {Integer} n    The number of hours to add
 */
function addHours (date, n) {
    date.setHours(date.getHours() + n);
}

/**
 * Add days to a date
 * @param {Date}    date The date object
 * @param {Integer} n    The number of days to add
 */
function addDays (date, n) {
    date.setDate(date.getDate() + n);
}

/**
 * Add months to a date
 * @param {Date}    date The date object
 * @param {Integer} n    The number of months to add
 */
function addMonths (date, n) {
    date.setMonth(date.getMonth() + n);
}

/**
 * Add years to a date
 * @param {Date}    date The date object
 * @param {Integer} n    The number of years to add
 */
function addYears (date, n) {
    date.setFullYear(date.getFullYear() + n);
}

export {getDay, getMonth, addSeconds, addMinutes, addHours, addDays, addMonths, addYears};
