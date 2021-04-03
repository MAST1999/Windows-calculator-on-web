import calculate from "./functions/calculate.js";
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

let numbers = [];
let actions = [];
let changedNumbers = true; //This is for determining whether user has intentionally pressed zero and wants to use it
let done = false;
let history = [];
let memory = [];
let currentShowHistory = true;

showHistory(history);

const calculateIt = () => {
  if (numbers.length < 1 || actions.length < 1) return;
  calculate(
    numbers,
    actions,
    changedNumbers,
    done,
    history,
    currentShowHistory
  );
};

const addNumberIt = (Event) => {
  addNumber(Event, done, numbers, actions, changedNumbers);
};

const removerIt = () => {
  remover();
};

const addFunctionShowAbleIt = (Event) => {
  functionShowAble(Event, changedNumbers, numbers, actions, done);
};

const resetCIt = () => {
  resetC(numbers, actions, done);
};
const resetCEIt = () => {
  if (done) resetCIt();
  resetCE();
};

const percentIt = () => {
  if (actions.length < 1) {
    resetCIt();
    document.getElementById("holder").textContent = "0";
    return;
  }
  percent(actions, numbers, changedNumbers);
};

const showHistoryIt = () => {
  currentShowHistory = true;
  showHistory(history);
};

const showMemoryIt = () => {
  currentShowHistory = false;
  showMemory(memory);
};

const memoryHandlerIt = (Event) => {
  memoryHandler(Event, memory, changedNumbers, done);
  if (!currentShowHistory) showMemoryIt();
};

(function addingEventListeners() {
  document
    .getElementsByClassName("equals")[0]
    .addEventListener("click", calculateIt, false);
  const btnNumbers = document.querySelectorAll(".numbers");
  btnNumbers.forEach(function setTheEventForEachNumberButton(button) {
    button.addEventListener("click", addNumberIt, false);
  });
  document.getElementById("delete").addEventListener("click", removerIt, false); // Event for the Delete button
  const btnFunctions = document.querySelectorAll(".functionShowAble");
  btnFunctions.forEach(function addEventListenerForFunctions(button) {
    button.addEventListener("click", addFunctionShowAbleIt, false);
  });
  document
    .getElementsByClassName("ce")[0]
    .addEventListener("click", resetCEIt, false);
  document
    .getElementsByClassName("c")[0]
    .addEventListener("click", resetCIt, false);
  document
    .getElementsByClassName("plus-minus")[0]
    .addEventListener("click", togglePositivity, false);
  document
    .getElementsByClassName("one-divided-x")[0]
    .addEventListener("click", oneDividedByNumber, false);
  document
    .getElementsByClassName("x-squared")[0]
    .addEventListener("click", numberSquared, false);
  document
    .getElementsByClassName("cube-x")[0]
    .addEventListener("click", numberCubed, false);
  document
    .getElementsByClassName("dot")[0]
    .addEventListener("click", decimal, false);
  document
    .getElementsByClassName("squared-x")[0]
    .addEventListener("click", root, false);
  document
    .getElementsByClassName("percent")[0]
    .addEventListener("click", percentIt, false);
  document
    .getElementsByClassName("history-m")[0]
    .addEventListener("click", showHistoryIt, false);
  document
    .getElementsByClassName("memory")[0]
    .addEventListener("click", showMemoryIt, false);
  const ms = document.querySelectorAll(".main-m");
  ms.forEach((m) => {
    m.addEventListener("click", memoryHandlerIt, false);
  });
})();
