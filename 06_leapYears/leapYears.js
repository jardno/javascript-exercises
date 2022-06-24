const leapYears = function(year) {
  
    if (year % 4 == 0 && year % 10 !== 0) {
        console.log(year+' is a leap year');
        return true;
    } else if (year % 16 == 0){
        console.log(year+' is a leap year');
        return true;
      } else {
        console.log(year+' is not a leap year');
        return false;
      };
};
  

// Do not edit below this line
module.exports = leapYears;
