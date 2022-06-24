const ftoc = function(f) {
  let tempC = (f - 32)*(5/9);

  if (!Number.isInteger(tempC)) {
    tempC = tempC.toFixed(1);
  };

  return Number(tempC);

};

const ctof = function(c) {
  let tempF = (c * 9/5) + 32;
  
  if (!Number.isInteger(tempF)) {
    tempF = tempF.toFixed(1);
  };

  return Number(tempF);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
