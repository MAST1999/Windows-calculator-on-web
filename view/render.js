const render = (model) => {
  const { inCalc, inHistory, inMemory, currentTab } = model;

  //* render the main panel (current number and holder);
  const holder = document.querySelector("#holder");
  const currentNumber = document.querySelector("#numbers-results");

  if (inCalc.first !== null && inCalc.second !== null && inCalc.action) {
    holder.textContent = `${inCalc.first} ${inCalc.action} ${inCalc.second} =`;
    console.log("here");
  } else if (inCalc.first !== null && inCalc.action !== null) {
    holder.textContent = `${inCalc.first} ${inCalc.action}`;
  } else if (inCalc.first !== null) {
    holder.textContent = `${inCalc.first}`;
  } else {
    holder.textContent = "";
  }

  //* update the current number
  currentNumber.textContent = inCalc.current;

  const historyMemoryShow = document.querySelector("#history-memory-show");
  //* display the history or memory
  if (currentTab === "history") {
    document.querySelector(".history-m").classList.add("selectedBorder");
    document.querySelector(".memory").classList.remove("selectedBorder");
    inHistory.forEach((story) => {
      historyMemoryShow.innerHTML = "";
      const li = document.createElement("li");
      li.textContent = `${story.first} ${story.action} ${story.second} = ${story.result}`;
      li.classList.add("list-style");
      historyMemoryShow.appendChild(li);
    });
  } else {
    historyMemoryShow.innerHTML = "";
    document.querySelector(".history-m").classList.remove("selectedBorder");
    document.querySelector(".memory").classList.add("selectedBorder");
    inMemory.forEach((story) => {
      const li = document.createElement("li");
      li.textContent = `${story.first} ${story.action} ${story.second} = ${story.result}`;
      li.classList.add("list-style");
      historyMemoryShow.appendChild(li);
    });
  }
};

export default render;
