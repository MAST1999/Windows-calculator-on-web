const decimalCount = (num) => {
  // Convert to String
  const numStr = String(num);
  // String Contains Decimal
  if (numStr.includes(".")) {
    return numStr.split(".")[1].length;
  }
  // String Does Not Contain Decimal
  return 0;
};

const removeNum = (model) => {
  if (model.done) {
    model.inCalc.first = null;
    model.inCalc.second = null;
    model.inCalc.action = "";
    return;
  }
  let tempString = String(model.inCalc.current);

  const decimal = decimalCount(tempString);
  if (decimal) {
    model.inCalc.current =
      Math.floor(model.inCalc.current * 10 ** (decimal - 1)) /
      10 ** (decimal - 1);
  } else {
    model.inCalc.current = Math.floor(model.inCalc.current / 10);
  }
};

export default removeNum;
