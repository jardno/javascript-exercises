const removeFromArrayDELETE = function(...args) {
    const array = args[0];
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
            console.log(newArray);
        }
    })
    return newArray;
};

const removeFromArray = function(array, ...args) {
    let checkedArray = [];
    let valuesToCheck = Array.from(args);
    console.log("Checking array for: "+valuesToCheck);
  
    for (let i = 0; i < valuesToCheck.length; i++) {
        checkedArray = array.filter(a => a !== valuesToCheck[i]);
        array = checkedArray;
    };
  
    console.log("Filtered array: "+array);
    return array;
};

// Do not edit below this line 

module.exports = removeFromArray;