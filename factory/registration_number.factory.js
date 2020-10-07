function regNumFactory(listed){

var mainRegList = listed | [];

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
    }

     function addPlates(list) {
        
        regPlatesElem.innerHTML = "";
        for (var i=0 ; i<list.length;i++){
        const regsListed = list[i];
        const newList = document.createElement("li");
        newList.innerHTML = regsListed;
        regPlatesElem.appendChild(newList);
        }
        
       /* var locationRadioBtn = document.querySelector("input[name='regNumItem']:checked");
        if (locationRadioBtn) {
            var regNumbItem = checkedRadioBtn.value;
        }*/
        
}

function filter(loc){
    const filtered = [];
    for (var i=0 ; i<mainRegList.length;i++);
     const newReg = mainRegList[i];

    if(newReg.startsWith(loc)){
        filtered.push(newReg);
    
   /* } else if(newReg.startsWith(loc)){
        filtered.push(newReg);
    } else if(newReg.startsWith(loc)){
        filtered.push(newReg);*/

    } return filtered;
}

function showRegList(list){
    regPlates.innerHTML = regPlates({
        regs: list
    })
}
    return {
        regNumRegex,
        location,    
        addPlates,
        filter,
        showRegList,
    }

}

// strand CEY
// cape town CA
// stellenbosch CL
