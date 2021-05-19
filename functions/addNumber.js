const addNumber = (Event, model) => {
  const { inCalc } = model;

  if (model.done) {
    inCalc.first = null;
    inCalc.second = null;
    inCalc.current = 0;
    model.done = false;
    model.isDecimal = false;
    inCalc.changedNum = false;
  }

  if (inCalc.changedNum === false) {
    inCalc.current = 0;
  }
  const pressedNumber = +Event.target.textContent;
  if (model.isDecimal && Number.isInteger(inCalc.current)) {
    inCalc.changedNum = true;
    inCalc.current = +(inCalc.current + `.${pressedNumber}`);
  } else if (model.isDecimal && !Number.isInteger(inCalc.current)) {
    inCalc.changedNum = true;
    inCalc.current = +(inCalc.current + `${pressedNumber}`);
  } else {
    inCalc.changedNum = true;
    inCalc.current = inCalc.current * 10 + pressedNumber;
  }
};

export default addNumber;
