const sumAll = function(...args) {
    let errorFound = false;
  let errorMessage = 'ERROR';
  
  let sumTotal = 0;
  
  for (arg in args) {
    if (typeof args[arg] !== 'number') {
      errorFound = true;
      console.log(errorMessage);
      return errorMessage;
    } else if (args[arg] < 0) {
      errorFound = true;
      console.log(errorMessage);
      return errorMessage;
    };
  };
  
  while (errorFound == false) {
    let sortedArgs = args.sort();
    console.log(sortedArgs);
    for (let i = 0; i < sortedArgs[1]; i++) {
      sumTotal += sortedArgs[0] + i;
    };
    console.log('Sum: '+sumTotal);
    return sumTotal;
  };
    
  };


// Do not edit below this line
module.exports = sumAll;
