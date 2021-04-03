const addNumber = (Event, done, numbers, actions, changedNumbers) => {
  if (done) {
    document.getElementById("numbers-results").textContent = "0";
    document.getElementById("holder").textContent = "";
    numbers = [];
    actions = [];
    done = false;
  }
  const btnNumber = Event.target;
  if (document.getElementById("numbers-results").textContent == "0") {
    document.getElementById("numbers-results").textContent =
      btnNumber.textContent;
    changedNumbers = true;
  } else {
    document.getElementById("numbers-results").textContent +=
      btnNumber.textContent;
    changedNumbers = true;
  }

  return [done, numbers, actions, changedNumbers];
};

export default addNumber;
