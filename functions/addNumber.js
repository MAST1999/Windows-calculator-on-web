const addNumber = (Event, done, numbers, actions, changedNumbers) => {
  console.log(done);
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
    // eslint-disable-next-line no-unused-vars
    changedNumbers = true;
  }

  return;
};

export default addNumber;
