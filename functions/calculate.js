const calculate = (Event, model) => {
  const func = Event.target.textContent.trim();
  const { inCalc } = model;

  const calc = (state) => {
    switch (state) {
      case "+":
        inCalc.first += inCalc.current;
        break;
      case "-":
        inCalc.first -= inCalc.current;
        break;
      case "×":
        inCalc.first = inCalc.first * inCalc.current;
        break;
      case "÷":
        inCalc.first = inCalc.first / inCalc.current;
        break;
    }
  };

  if (!inCalc.first) {
    inCalc.action = func;
    inCalc.first = inCalc.current;
    inCalc.current = 0;
    inCalc.changedNum = false;
  } else if (inCalc.first && inCalc.action !== func) {
    calc(inCalc.action);
    inCalc.action = func;
    inCalc.current = inCalc.first;
    inCalc.changedNum = false;
  } else if (inCalc.first && inCalc.action === func && inCalc.changedNum) {
    calc(func);
    inCalc.current = inCalc.first;
    inCalc.changedNum = false;
  }
};

export default calculate;
