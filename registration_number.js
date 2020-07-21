const regFact = regNumFactory(); 

const addBtn = document.querySelector(".addBtn")
const showBtn = document.querySelector(".showBtn")
const regPlatesElem = document.querySelector(".regPlates")/*display*/
const regTextElem = document.querySelector(".regNumText")/*textbox*/
const errorTextElem = document.querySelector(".error")

function append(){
    var regList = document.getElementById(regPlatesElem),
    listNode = document.createTextNode(regNumberEntered),
    list2 = document.createElement('li');

    list2.appendChild(listNode);
    regList.appendChild(list2);
}

function addPlates(list) {

   /*var regNumberEntered = document.getElementById(regTextElem).value,
        regList = document.getElementById(regPlatesElem),

        list = document.createElement("li"),
        listNode = document.createTextNode(regNumberEntered);
        
        list.appendChild(listNode);
        regList.appendChild(list); */
        regPlatesElem.innerHTML = "";
		for (var i=0 ; i<list.length;i++){
        const newList = document.createElement("li");
        const regsListed = list[i];
        newList.innerHTML = regsListed;
        regPlatesElem.appendChild(newList);
        }
        
        var locationRadioBtn = document.querySelector("input[name='regNumItem']:checked");
        if (locationRadioBtn) {
            var regNumbItem = checkedRadioBtn.value;
        }
        
        var regNumberEntered = regTextElem.value;
        var plateNum = regFact.regNumRegex(regNumberEntered)
        regPlatesElem.innerHTML = regFact.location(plateNum);
        if (plateNum !== "") {
        append()
        errorTextElem.innerHTML = "";
        } else {
            errorTextElem.innerHTML = "please enter regNumber"
        }
}
console.log(regPlatesElem);
addBtn.addEventListener('click', addPlates);
