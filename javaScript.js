let numbers = [];
let actions = [];
let changedNumbers = true; //This is for determining whether user has intentionally pressed zero and wants to use it
let negative = false;
const calculate = Event => {

};
const addNumber = Event => {
    const btnNumber = Event.target;
    if (document.getElementById("numbers-results").textContent == "0") {
        document.getElementById("numbers-results").textContent = btnNumber.textContent;
        changedNumbers = true;
    } else {
        document.getElementById("numbers-results").textContent += btnNumber.textContent;
        changedNumbers = true;
    }
};
const remover = _ => {
    if (document.getElementById("numbers-results").textContent != "0") {
        document.getElementById("numbers-results").textContent = document.getElementById("numbers-results").textContent.slice(0, document.getElementById("numbers-results").textContent.length - 1);
    }
    if (document.getElementById("numbers-results").textContent == "" || document.getElementById("numbers-results").textContent == "-") {
        document.getElementById("numbers-results").textContent = "0";
    }
};
const addFunctionShowAble = Event => {
    let functionShow = Event.target.textContent;
    if (changedNumbers) {
        if (negative) {
            
            numbers.push(parseFloat(document.getElementById("numbers-results").textContent));
        } else {
            numbers.push(+document.getElementById("numbers-results").textContent);
        }
        actions.push(functionShow);
        document.getElementById("holder").textContent += " " + document.getElementById("numbers-results").textContent + " " + functionShow;
        console.log(numbers);
        changedNumbers = false;
        document.getElementById("numbers-results").textContent = "0";
    } else {
        actions[actions.length - 1] = functionShow;
        document.getElementById("holder").textContent = document.getElementById("holder").textContent.slice(0, document.getElementById("holder").textContent.length - 1);
        document.getElementById("holder").textContent += functionShow;
    }
};
const resetCE = _ => {
    document.getElementById("numbers-results").textContent = "0";
};
const resetC = _ => {
    document.getElementById("numbers-results").textContent = "0";
    document.getElementById("holder").textContent = "";
    numbers = [];
    actions = [];
};
const togglePositivity = _ => {
    if (document.getElementById("numbers-results").textContent !== "0" && document.getElementById("numbers-results").textContent[0] !== "-") {
        document.getElementById("numbers-results").textContent = "-" + document.getElementById("numbers-results").textContent;
        negative = true;
    } else if (document.getElementById("numbers-results").textContent !== "0") {
        document.getElementById("numbers-results").textContent = document.getElementById("numbers-results").textContent.slice(1);
        negative = false;
    }
};
(function addingEventListeners() {
    document.getElementsByClassName("equals")[0].addEventListener("click", calculate, false);
    const btnNumbers = document.querySelectorAll(".numbers");
    btnNumbers.forEach(function setTheEventForEachNumberButton(button) {
        button.addEventListener("click", addNumber, false);
    });
    document.getElementById("delete").addEventListener("click", remover, false); // Event for the Delete button
    const btnFunctions = document.querySelectorAll(".functionShowAble");
    btnFunctions.forEach(function addEventListenerForFunctions(button) {
        button.addEventListener("click", addFunctionShowAble, false);
    });
    document.getElementsByClassName("ce")[0].addEventListener("click", resetCE, false);
    document.getElementsByClassName("c")[0].addEventListener("click", resetC, false);
    document.getElementsByClassName("plus-minus")[0].addEventListener("click", togglePositivity, false);
}());