const percent = (actions, numbers, changedNumbers) => {
  switch (actions[actions.length - 1]) {
    case "+":
      if (numbers.length === actions.length) {
        numbers.push(
          (numbers[numbers.length - 1] / 100) *
            parseFloat(document.getElementById("numbers-results").textContent)
        );
      } else {
        return;
      }
      document.getElementById("holder").textContent +=
        " " + numbers[numbers.length - 1];
      changedNumbers = false;

      return [actions, numbers, changedNumbers];

    case "-":
      if (numbers.length === actions.length) {
        numbers.push(
          (numbers[numbers.length - 1] / 100) *
            parseFloat(document.getElementById("numbers-results").textContent)
        );
      } else {
        return;
      }
      document.getElementById("holder").textContent +=
        " " + numbers[numbers.length - 1];
      changedNumbers = false;
      return [actions, numbers, changedNumbers];
    case "×":
      if (numbers.length === actions.length) {
        numbers.push(
          parseFloat(
            document.getElementById("numbers-results").textContent / 100
          )
        );
      } else {
        let temp = numbers[numbers.length - 1].toString();
        temp = temp.length;
        document.getElementById("holder").textContent = document
          .getElementById("holder")
          .textContent.slice(
            0,
            document.getElementById("holder").textContent.length - 1 - temp
          );
        numbers[numbers.length - 1] = parseFloat(
          document.getElementById("numbers-results").textContent / 100
        );
      }
      document.getElementById("holder").textContent +=
        " " + numbers[numbers.length - 1];
      document.getElementById("numbers-results").textContent =
        numbers[numbers.length - 1];
      changedNumbers = false;
      console.log(numbers, actions);
      return [actions, numbers, changedNumbers];
    case "÷":
      if (numbers.length === actions.length) {
        numbers.push(
          parseFloat(
            document.getElementById("numbers-results").textContent / 100
          )
        );
      } else {
        let temp = numbers[numbers.length - 1].toString();
        temp = temp.length;
        document.getElementById("holder").textContent = document
          .getElementById("holder")
          .textContent.slice(
            0,
            document.getElementById("holder").textContent.length - 1 - temp
          );
        numbers[numbers.length - 1] = parseFloat(
          document.getElementById("numbers-results").textContent / 100
        );
      }
      document.getElementById("holder").textContent +=
        " " + numbers[numbers.length - 1];
      document.getElementById("numbers-results").textContent =
        numbers[numbers.length - 1];
      // eslint-disable-next-line no-unused-vars
      changedNumbers = false;
      console.log(numbers, actions);
      return [actions, numbers, changedNumbers];
    default:
      document.getElementById("numbers-results").textContent =
        "Please stop trying to be funny";
      return [actions, numbers, changedNumbers];
  }
};

export default percent;
