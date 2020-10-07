let numbers = [];
let actions = [];
let changedNumbers = true; //This is for determining whether user has intentionally pressed zero and wants to use it
let done = false;
const calculate = _ => {
    if (changedNumbers) {
        document.getElementById("holder").textContent += " " + document.getElementById("numbers-results").textContent;
        numbers.push(parseFloat(document.getElementById("numbers-results").textContent));
        document.getElementById("numbers-results").textContent = "0";
        changedNumbers = false;
    }
    if (numbers.length < 2) return;
    while (numbers.length > 1) {
        console.log(actions[0], numbers[0], numbers[1]);
        switch (actions[0]) {
            case "+":
                numbers[0] = numbers[0] + numbers[1];
                numbers.splice(1, 1); break;
            case "-":
                numbers[0] = numbers[0] - numbers[1];
                numbers.splice(1, 1); break;
            case "×":
                numbers[0] = numbers[0] * numbers[1];
                numbers.splice(1, 1); break;
            case "÷":
                numbers[0] = numbers[0] / numbers[1];
                numbers.splice(1, 1); break;
            default: document.getElementById("numbers-results").textContent = "Please stop trying to be funny";
                break;
        }
        actions.splice(0, 1);
    }
    document.getElementById("numbers-results").textContent = numbers[0];
    done = true;
    changedNumbers = true;
    document.getElementById("holder").textContent += " =";
};
const addNumber = Event => {
    if (done) {
        document.getElementById("numbers-results").textContent = "0";
        document.getElementById("holder").textContent = "";
        numbers = [];
        actions = [];
        done = false;
    }
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
        numbers.push(parseFloat(document.getElementById("numbers-results").textContent));
        actions.push(functionShow);
        console.log(numbers, actions);
        changedNumbers = false;
        if (done === false) {
            document.getElementById("holder").textContent += " " + document.getElementById("numbers-results").textContent + " " + functionShow;
        } else {
            document.getElementById("holder").textContent = document.getElementById("numbers-results").textContent + " " + functionShow;
            numbers.splice(1, 1);
            done = false;
        }
        document.getElementById("numbers-results").textContent = "0";
    } else {
        actions[actions.length - 1] = functionShow;
        document.getElementById("holder").textContent = document.getElementById("holder").textContent.slice(0, document.getElementById("holder").textContent.length - 1);
        document.getElementById("holder").textContent += functionShow;
        console.log(numbers, actions);
        done = false;
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
    } else if (document.getElementById("numbers-results").textContent !== "0") {
        document.getElementById("numbers-results").textContent = document.getElementById("numbers-results").textContent.slice(1);
    }
};
const oneDividedByNumber = _ => {
    document.getElementById("numbers-results").textContent = 1 / parseFloat(document.getElementById("numbers-results").textContent);

};
const numberSquared = _ => {
    document.getElementById("numbers-results").textContent = parseFloat(document.getElementById("numbers-results").textContent) * parseFloat(document.getElementById("numbers-results").textContent);
    document.getElementById("holder").textContent += " " + "sqr(" + document.getElementById("numbers-results").textContent + ")";
};
const numberCubed = _ => {
    document.getElementById("holder").textContent += " " + document.getElementById("numbers-results").textContent + " ^ 3";
    document.getElementById("numbers-results").textContent = parseFloat(document.getElementById("numbers-results").textContent) * parseFloat(document.getElementById("numbers-results").textContent) * parseFloat(document.getElementById("numbers-results").textContent);
};
const root = _ => {
    document.getElementById("holder").textContent += " " + "root(" + document.getElementById("numbers-results").textContent + ")";
    document.getElementById("numbers-results").textContent = Math.sqrt(parseFloat(document.getElementById("numbers-results").textContent));
};
const decimal = _ => {
    if (document.getElementById("numbers-results").textContent.indexOf(".") === -1) {
        document.getElementById("numbers-results").textContent += ".";
    }
};
const percent = _ => {
    if (actions.length < 1) {
        resetC();
        document.getElementById("holder").textContent = "0";
        return;
    }
    switch (actions[actions.length - 1]) {
        case "+":
            if (numbers.length === actions.length) {
                numbers.push((numbers[numbers.length - 1] / 100) * parseFloat(document.getElementById("numbers-results").textContent));
            } else {
                return;
            }
            document.getElementById("holder").textContent += " " + numbers[numbers.length - 1];
            changedNumbers = false; break;
        case "-":
            if (numbers.length === actions.length) {
                numbers.push((numbers[numbers.length - 1] / 100) * parseFloat(document.getElementById("numbers-results").textContent));
            } else {
                return;
            }
            document.getElementById("holder").textContent += " " + numbers[numbers.length - 1];
            changedNumbers = false; break;
        case "×":
            if (numbers.length === actions.length) {
                numbers.push((parseFloat(document.getElementById("numbers-results").textContent / 100)));
            } else {
                let temp = numbers[numbers.length - 1].toString();
                temp = temp.length;
                document.getElementById("holder").textContent = document.getElementById("holder").textContent.slice(0, document.getElementById("holder").textContent.length - 1 - temp);
                numbers[numbers.length - 1] = parseFloat(document.getElementById("numbers-results").textContent / 100);
            }
            document.getElementById("holder").textContent += " " + numbers[numbers.length - 1];
            document.getElementById("numbers-results").textContent = numbers[numbers.length - 1];
            changedNumbers = false; console.log(numbers, actions);
            break;
        case "÷":
            if (numbers.length === actions.length) {
                numbers.push((parseFloat(document.getElementById("numbers-results").textContent / 100)));
            } else {
                let temp = numbers[numbers.length - 1].toString();
                temp = temp.length;
                document.getElementById("holder").textContent = document.getElementById("holder").textContent.slice(0, document.getElementById("holder").textContent.length - 1 - temp);
                numbers[numbers.length - 1] = parseFloat(document.getElementById("numbers-results").textContent / 100);
            }
            document.getElementById("holder").textContent += " " + numbers[numbers.length - 1];
            document.getElementById("numbers-results").textContent = numbers[numbers.length - 1];
            changedNumbers = false; console.log(numbers, actions);
            break;
        default: document.getElementById("numbers-results").textContent = "Please stop trying to be funny";
            break;
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
    document.getElementsByClassName("one-divided-x")[0].addEventListener("click", oneDividedByNumber, false);
    document.getElementsByClassName("x-squared")[0].addEventListener("click", numberSquared, false);
    document.getElementsByClassName("cube-x")[0].addEventListener("click", numberCubed, false);
    document.getElementsByClassName("dot")[0].addEventListener("click", decimal, false);
    document.getElementsByClassName("squared-x")[0].addEventListener("click", root, false);
    document.getElementsByClassName("percent")[0].addEventListener("click", percent, false);
}());