const regFact = regNumFactory(); 

const addBtn = document.querySelector(".addBtn")
const showBtn = document.querySelector(".showBtn")
const resetBtn = document.querySelector(".resetBtn")
const regPlatesElem = document.querySelector(".regPlates")/*display*/
const regTextElem = document.querySelector(".regNumText")/*textbox*/
const errorTextElem = document.querySelector(".error")

var regs = [];

console.log(regPlatesElem);

addBtn.addEventListener("click", function () {
    //const newList = document.createElement("li");
    var regValue = "regElem"

    if (regTextElem.value) {
        regValue = regTextElem.value;} 
    regs.push(regValue);

    regFact.addPlates(regs);
});

resetBtn.addEventListener("click", function () {
    regPlatesElem.innerHTML = "";
    regs = [];   
});

showBtn.addEventListener("click", function () {
    //const showBtnFilter = regFact.filter(regs, regTextElem.value);
    //regFact.showRegList(showBtnFilter);

    var plateEntered = regTextElem.value;
    var locationRadioBtn = document.querySelector("input[name='regNumItem']:checked");
        if (locationRadioBtn) {
            var regLocation = checkedRadioBtn.value;
            var plateNum = regFact.regNumbRegex(plateEntered)
            if (plateNum !== "") {
                regFact.showRegList(list);
                regPlatesElem.innerHTML = regFact.filter(regLocation)

      /*          
                regPlatesElem.innerHTML = "";
                var location = dropDown;

                var selected = regFact.filter(loc)

                var filterSelected = document.createElement("li");
                filterSelected.innerHTML = selected;
                theList.appendChild(filterSelected);
                */
            }
        }
});

/*addBtn regex and error
newList.innerHTML = regValue;
    regPlatesElem.appendChild(newList);
    var regNumberEntered = regTextElem.value;
    var plateNum = regFact.regNumRegex(regNumberEntered)
//    regPlatesElem.innerHTML = regFact.location(plateNum);
    if (plateNum !== "") {
        errorTextElem.innerHTML = "";
        } else {
            errorTextElem.innerHTML = "please enter reg number"
        }*/

/*if(!regPlatesElem.includes(plateInput)){

}*/