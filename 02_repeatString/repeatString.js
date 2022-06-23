const repeatString = function(string, num) {
    if (num<0) {
        return "ERROR";
    };
    
    var testString = "";
    for (let i = 0; i < num; i++) {
        testString += string;
    };
    return testString;
};

// Do not edit below this line
module.exports = repeatString;
