import calculate from "./functions/calculate.js";
import { render } from "./view/updateCalc.js";
import addNumber from "./functions/addNumber.js";
import remover from "./functions/remover.js";
import functionShowAble from "./functions/addFunctionShowAble.js";
import { resetCE, resetC } from "./functions/resets.js";
import togglePositivity from "./functions/togglePositivity.js";
import oneDividedByNumber from "./functions/oneDividedByNumber.js";
import numberSquared from "./functions/numberSquared.js";
import numberCubed from "./functions/numberCubed.js";
import root from "./functions/root.js";
import decimal from "./functions/decimal.js";
import percent from "./functions/percent.js";
import showHistory from "./functions/showHistory.js";
import showMemory from "./functions/showMemory.js";
import memoryHandler from "./functions/memoryHandler.js";

let model = {
  numbers: [20],
  action: "",
  results: [],
  changedNumber: false,
  done: true,
  history: [],
  memory: [],
  currentShowHistory: true,
  currentNumber: 0,
};

render(model);

const addingEventListeners = () => {
  // document
  //   .getElementsByClassName("equals")[0]
  //   .addEventListener("click", calculate, false);
  const btnNumbers = document.querySelectorAll(".numbers");
  btnNumbers.forEach((button) => {
    button.addEventListener(
      "click",
      (Event) => {
        addNumber(Event, model);
        render(model);
      },
      false
    );
  });
  // document.getElementById("delete").addEventListener("click", removerIt, false); // Event for the Delete button
  // const btnFunctions = document.querySelectorAll(".functionShowAble");
  // btnFunctions.forEach(function addEventListenerForFunctions(button) {
  //   button.addEventListener("click", addFunctionShowAbleIt, false);
  // });
  // document
  //   .getElementsByClassName("ce")[0]
  //   .addEventListener("click", resetCEIt, false);
  // document
  //   .getElementsByClassName("c")[0]
  //   .addEventListener("click", resetCIt, false);
  // document
  //   .getElementsByClassName("plus-minus")[0]
  //   .addEventListener("click", togglePositivity, false);
  // document
  //   .getElementsByClassName("one-divided-x")[0]
  //   .addEventListener("click", oneDividedByNumber, false);
  // document
  //   .getElementsByClassName("x-squared")[0]
  //   .addEventListener("click", numberSquared, false);
  // document
  //   .getElementsByClassName("cube-x")[0]
  //   .addEventListener("click", numberCubed, false);
  // document
  //   .getElementsByClassName("dot")[0]
  //   .addEventListener("click", decimal, false);
  // document
  //   .getElementsByClassName("squared-x")[0]
  //   .addEventListener("click", root, false);
  // document
  //   .getElementsByClassName("percent")[0]
  //   .addEventListener("click", percentIt, false);
  // document
  //   .getElementsByClassName("history-m")[0]
  //   .addEventListener("click", showHistoryIt, false);
  // document
  //   .getElementsByClassName("memory")[0]
  //   .addEventListener("click", showMemoryIt, false);
  // const ms = document.querySelectorAll(".main-m");
  // ms.forEach((m) => {
  //   m.addEventListener("click", memoryHandlerIt, false);
  // });
};
addingEventListeners();
