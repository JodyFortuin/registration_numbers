function regNumFactory(){

    function location(plateNum) {
        if (plateNum !== "") {
            regPlates = plateNum;
        }
        return regPlates
      }

      function regNumRegex(plateInput) {
        var chars = /[^A-Za-z0-9]/g;
        if (plateInput !== "") {
        var newPlate = plateInput.replace(chars, "")
        var upperCase = newPlate.toUpperCase()
        return upperCase;
     }
    return "";
    }

    return {
        regNumRegex,
        location,
    }

}

// strand CEY
// cape town CA
// stellenbosch CL
