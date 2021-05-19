import render from "./view/render.js";
import calculate from "./functions/calculate.js";
import removeNum from "./functions/removeNum.js";
import addNumber from "./functions/addNumber.js";

const model = {
  inCalc: {
    first: 5,
    second: 6,
    current: 11,
    action: "+",
    changedNum: false,
  },
  done: true,
  inHistory: [{ first: 0, second: 0, result: 0, action: "+" }],
  inMemory: [{ first: 1, second: 0, result: 0, action: "+" }],
  currentTab: "history",
  isDecimal: false,
};

render(model);

const createEvents = () => {
  const numbers = document.querySelectorAll(".numbers");
  numbers.forEach((num) => {
    num.addEventListener("click", (Event) => {
      addNumber(Event, model);
      render(model);
    });
  });
  document.querySelector(".dot").addEventListener("click", () => {
    document.querySelector("#numbers-results").textContent += ".";
    model.isDecimal = true;
  });

  document.querySelector("#delete").addEventListener("click", () => {
    removeNum(model);
    render(model);
  });

  document.querySelectorAll(".functionShowAble").forEach((func) => {
    func.addEventListener("click", (Event) => {
      calculate(Event, model);
      render(model);
    });
  });
};
createEvents();
