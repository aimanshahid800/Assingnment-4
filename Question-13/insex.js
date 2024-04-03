"use strict";
let year = 2024;
let isLeapYear;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    isLeapYear = true;
    console.log(year, "is a leap year: ", isLeapYear);
}
else {
    isLeapYear = false;
    console.log(year, "is a leap year: ", isLeapYear);
}
