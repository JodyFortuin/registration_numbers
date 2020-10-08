const regFact = regNumFactory(); 

const addBtn = document.querySelector(".addBtn")
const showBtn = document.querySelector(".showBtn")
const resetBtn = document.querySelector(".resetBtn")
const regPlatesElem = document.querySelector(".regPlates")/*display*/
const regTextElem = document.querySelector(".regNumText")/*textbox*/
const errorTextElem = document.querySelector(".error")
const dropDown = document.querySelector(".dropDown")


var regs = localStorage['mainRegList'] ? JSON.parse(localStorage['mainRegList']) : [];

//var regs = [];

// console.log(regPlatesElem);

addBtn.addEventListener("click", function () {
    //const newList = document.createElement("li");
    var regValue = ""

    if (regTextElem.value) {
        regValue = regTextElem.value; 
    regs.push(regValue);
    }
    
    errorTextElem.innerHTML = ""
    if (regTextElem.value == "") {
        errorTextElem.innerHTML = "please enter reg number";
      }

    regPlatesElem.innerHTML = "";
    for (var i = 0; i < regs.length; i++) {
      const regsListed = regs[i];
      const newList = document.createElement("li");
      newList.innerHTML = regsListed;
      regPlatesElem.appendChild(newList);
    //regFact.addPlates(regs);
    
    /*newList.innerHTML = regValue;
    regPlatesElem.appendChild(newList);
    var regNumberEntered = regTextElem.value;
    var plateNum = regFact.regNumRegex(regNumberEntered)
    regPlatesElem.innerHTML = regFact.location(plateNum);
    */}
});

resetBtn.addEventListener("click", function () {
    regPlatesElem.innerHTML = "";
    
    regs = [];   
});

dropDown.addEventListener("change", function () {
    //const showBtnFilter = regFact.filter(regs, regTextElem.value);
    //regFact.showRegList(showBtnFilter);
                
        regPlatesElem.innerHTML = "";
//        var loc = document.getElementById("dropDown").value;
        var loc = dropDown.value;
        var selected = regFact.filter(loc)

        var filterSelected = document.createElement("li");
        filterSelected.innerHTML = selected;
        theList.appendChild(filterSelected);
        console.log(loc);
});


/*if(!regPlatesElem.includes(plateInput)){

}*/