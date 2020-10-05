const regFact = regNumFactory(); 

const addBtn = document.querySelector(".addBtn")
const showBtn = document.querySelector(".showBtn")
const resetBtn = document.querySelector(".resetBtn")
const regPlatesElem = document.querySelector(".regPlates")/*display*/
const regTextElem = document.querySelector(".regNumText")/*textbox*/
const errorTextElem = document.querySelector(".error")


var regs = [];

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
console.log(regPlatesElem);

addBtn.addEventListener("click", function () {
    //const newList = document.createElement("li");
    var regValue = "regElem"

    if (regTextElem.value) {
        regValue = regTextElem.value;} 
    regs.push(regValue);

    addPlates(regs);
    
    /*newList.innerHTML = regValue;
    regPlatesElem.appendChild(newList);
    var regNumberEntered = regTextElem.value;
    var plateNum = regFact.regNumRegex(regNumberEntered)
//    regPlatesElem.innerHTML = regFact.location(plateNum);
    if (plateNum !== "") {
        errorTextElem.innerHTML = "";
        } else {
            errorTextElem.innerHTML = "please enter reg number"
        }*/
});

resetBtn.addEventListener("click", function () {
    regPlatesElem.innerHTML = "";
    regs = [];   
});

/*if(!regPlatesElem.includes(plateInput)){

}*/

function filter(list, plate){
    const filtered = [];
    for (var i=0 ; i<list.length;i++);
//    const newReg = list[i];

    if(plate.startsWith("CA")){
        filtered.push(plate);
    } else if(plate.startsWith("CL")){
        filtered.push(plate);
    } else if(plate.startsWith("CEY")){
        filtered.push(plate);
    } return filtered;
}

function showRegList(){


}