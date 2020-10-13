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
      return "";     
   }


  function filter(loc) {
    const filtered = [];
    for (var i = 0; i < mainRegList.length; i++) {
      var newReg = mainRegList[i];
      console.log(newReg)
      if (newReg.startsWith(loc)) {
        filtered.push(newReg);
      }
    }
    
    console.log(newReg)
    return filtered;
  }

  function addButton(plateNumber){
    // var regValue = ""

    if (plateNumber!=="") {
      mainRegList.push(plateNumber);
    } else if (plateNumber == ""){
      errorTextElem.innerHTML = "please enter reg number";
    }
  }

function allRegs(){

  return mainRegList;
}
  return {
    regNumRegex,
    location,
    filter,
    addButton,
    allRegs
  };
}

// strand CEY
// cape town CA
// stellenbosch CL

  /*function plateRegex(plateInput){
    var split = plateInput.split(" ")[0];
    var reg = plateInput.split(" ")[1].replace(/-/g,)
    var regexPlate = "";
    var plateLength = reg.length;
 
    for (var i = 0; i < regexPlate.length; i++){
        let chars = split[i];
        if (plateLength == 6 && i == 3)
            regexPlate += chars;
         }
  return split + " " + regexPlate;
    }*/
    
      /*function regNumRegex(plateInput) {
    //var chars = /[^A-Za-z0-9]/g;
    //var newPlate = plateInput.replace(chars, "");
      
    if (plateInput !== "") {
      //var upperCase = plateInput.toUpperCase();
      if(!mainRegList.includes(plateInput)){
        mainRegList.push(upperCase)
      
      return true;
    }
    }
      return false;
    }*/