function regNumFactory(regs) {
  var mainRegList = regs || [];

  function location(plateNum) {
    if (plateNum !== "") {
      regPlates = plateNum;
    }
    return regPlates;
  }

  function regNumRegex(plateInput) {
    var chars = /[^A-Za-z0-9]/g;
    if (plateInput !== "") {
      var newPlate = plateInput.replace(chars, "");
      var upperCase = newPlate.toUpperCase();
      return upperCase;
    }
  }

  function filter(loc) {
    const filtered = [];
    for (var i = 0; i < mainRegList.length; i++);
    const newReg = mainRegList[i];
    console.log(mainRegList)
    if (newReg.startsWith(loc)) {
      filtered.push(newReg);
    }
    console.log(filtered)
    return filtered;
  }

  return {
    regNumRegex,
    location,
    filter,
  };
}

// strand CEY
// cape town CA
// stellenbosch CL
