const calculate = (
  numbers,
  actions,
  changedNumbers,
  done,
  history,
  currentShowHistory
) => {
  const historyMemoryShow = document.getElementsByClassName(
    "history-memory-show"
  )[0];
  console.log(historyMemoryShow);

  if (changedNumbers) {
    document.getElementById("holder").textContent +=
      " " + document.getElementById("numbers-results").textContent;

    numbers.push(
      parseFloat(document.getElementById("numbers-results").textContent)
    );
    document.getElementById("numbers-results").textContent = "0";
    changedNumbers = false;
  } else {
    return [numbers, actions, changedNumbers, done, history];
  }
  if (numbers.length < 2) return;
  while (numbers.length > 1) {
    switch (actions[0]) {
      case "+":
        numbers[0] = numbers[0] + numbers[1];
        numbers.splice(1, 1);
        break;
      case "-":
        numbers[0] = numbers[0] - numbers[1];
        numbers.splice(1, 1);
        break;
      case "×":
        numbers[0] = numbers[0] * numbers[1];
        numbers.splice(1, 1);
        break;
      case "÷":
        numbers[0] = numbers[0] / numbers[1];
        numbers.splice(1, 1);
        break;
      default:
        document.getElementById("numbers-results").textContent =
          "Please stop trying to be funny";
        break;
    }
    actions.splice(0, 1);
  }
  document.getElementById("numbers-results").textContent = numbers[0];
  done = true;
  changedNumbers = true;
  document.getElementById("holder").textContent += " =";

  const ul = document.getElementById("history-memory-show");
  const li = document.createElement("li");
  li.textContent =
    document.getElementById("holder").textContent +
    " " +
    document.getElementById("numbers-results").textContent;
  li.classList.add("list-style");
  history.push(li);
  let lastChild = ul.lastElementChild;
  console.log();
  if (currentShowHistory) {
    while (lastChild) {
      ul.removeChild(lastChild);
      lastChild = ul.lastElementChild;
    }
    history.forEach((history) => {
      ul.appendChild(history);
    });
  }
  return;
};

export default calculate;
