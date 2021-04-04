const addFunctionShowAble = (Event, changedNumbers, numbers, actions, done) => {
  let functionShow = Event.target.textContent.trim();
  if (changedNumbers) {
    numbers.push(
      parseFloat(document.getElementById("numbers-results").textContent)
    );
    actions.push(functionShow);

    changedNumbers = false;
    if (done === false) {
      document.getElementById("holder").textContent +=
        " " +
        document.getElementById("numbers-results").textContent +
        " " +
        functionShow;
    } else {
      document.getElementById("holder").textContent =
        document.getElementById("numbers-results").textContent +
        " " +
        functionShow;
      numbers.splice(1, 1);
      done = false;
    }
    document.getElementById("numbers-results").textContent = "0";
  } else {
    actions[actions.length - 1] = functionShow;
    document.getElementById("holder").textContent = document
      .getElementById("holder")
      .textContent.slice(
        0,
        document.getElementById("holder").textContent.length - 1
      );
    document.getElementById("holder").textContent += functionShow;
    done = false;
  }
  return;
};

export default addFunctionShowAble;
