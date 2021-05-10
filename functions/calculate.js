const calculate = (model) => {
  if (model.numbers.length < 2) return;
  while (model.numbers.length > 1) {
    switch (model.action) {
      case "+":
        model.numbers[0] = model.numbers[0] + model.numbers[1];
        model.currentNumber = model.numbers[0];
        model.numbers.pop();
        break;
      case "-":
        model.numbers[0] = model.numbers[0] - model.numbers[1];
        model.currentNumber = model.numbers[0];
        model.numbers.pop();
        break;
      case "×":
        model.numbers[0] = model.numbers[0] * model.numbers[1];
        model.currentNumber = model.numbers[0];
        model.numbers.pop();
        break;
      case "÷":
        model.numbers[0] = model.numbers[0] / model.numbers[1];
        // eslint-disable-next-line no-unused-vars
        model.currentNumber = model.numbers[0];
        model.numbers.pop();
        break;
      default:
        document.getElementById("numbers-results").textContent =
          "Please stop trying to be funny";
        break;
    }
    model.action = "";
    model.done = true;
  }
};

export default calculate;
