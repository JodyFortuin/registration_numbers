const regFact = regNumFactory(); 

const addBtn = document.querySelector(".addBtn")
const showBtn = document.querySelector(".showBtn")
const resetBtn = document.querySelector(".resetBtn")
const regPlatesElem = document.querySelector(".regPlates")/*display*/
const regTextElem = document.querySelector(".regTextElem")/*textbox*/
const errorTextElem = document.querySelector(".error")
const dropDown = document.getElementById("dropDown")


var regs = localStorage['mainRegList'] ? JSON.parse(localStorage['mainRegList']) : [];


function add(){
    var mainRegsFact = regFact.allRegs();
    regPlatesElem.innerHTML = "";
    for (var i = 0; i < mainRegsFact.length; i++) {
      const newList = document.createElement("li");
      newList.innerHTML = mainRegsFact[i];
      regPlatesElem.appendChild(newList);
    }
}

function regex(){
    //const newList2 = document.createElement("li");
    //var regValue = "";
    newList2.innerHTML = regValue;
    regPlatesElem.appendChild(newList2);

    var regNumberEntered = regTextElem.value;
    var plateNum = regFact.regNumRegex(regNumberEntered)
    regPlatesElem.innerHTML = regFact.location(plateNum);
}

addBtn.addEventListener("click", function () {

errorTextElem.innerHTML = "";
var plateNum = regTextElem.value;
regFact.addButton(plateNum)

var plateRegex = regFact.regNumRegex(plateNum);
regPlatesElem.innerHTML = regFact.location(plateRegex);
    
localStorage['mainRegList'] = JSON.stringify(regFact.allRegs());  

regex();
add();
});

resetBtn.addEventListener("click", function () {
    regPlatesElem.innerHTML = "";
    localStorage.clear('mainRegList');
    regs = [];   
});

dropDown.addEventListener("change", function () {
                
        regPlatesElem.innerHTML = "";
        var loc = dropDown.value;
        var selected = regFact.filter(loc)

        //for (var i = 0; i < selected.length; i++) {
        var filterSelected = document.createElement("li");
        filterSelected.innerHTML = selected;
        regPlatesElem.appendChild(filterSelected);
       // }
        console.log(filterSelected);
});


/*const newList = document.createElement("li");
var regValue = "";
newList.innerHTML = regValue;
regPlatesElem.appendChild(newList);
*/

/*var regNumberEntered = regTextElem.value;
var plateNum = regFact.regNumRegex(regNumberEntered);
regPlatesElem.innerHTML = regFact.location(plateNum);*/  

/*if(!regPlatesElem.includes(plateInput)){

}*/

// errorTextElem.innerHTML = ""
    // if (regTextElem.value == "") {
    //     errorTextElem.innerHTML = "please enter reg number";
    //   }


    /*newList.innerHTML = regValue;
    regPlatesElem.appendChild(newList);
    var regNumberEntered = regTextElem.value;
    var plateNum = regFact.regNumRegex(regNumberEntered)
    regPlatesElem.innerHTML = regFact.location(plateNum);
    // */

     //const showBtnFilter = regFact.filter(regs, regTextElem.value);
    //regFact.showRegList(showBtnFilter);
    
    //      var loc = document.getElementById("dropDown").value;