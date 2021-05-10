export const render = (model) => {
  const numbersResults = document.getElementById("numbers-results");
  const holder = document.getElementById("holder");
  const historyTab = document.querySelector(".history-m");
  const memoryTab = document.querySelector(".memory");
  const historyMemoryShow = document.querySelector(".history-memory-show");

  //*current number shown to user is set here
  numbersResults.textContent = model.currentNumber;

  //* holder is updated here
  if (model.action && model.numbers.length === 2) {
    holder.textContent = `${model.numbers[model.numbers.length - 2]} ${
      model.action
    } ${model.numbers[model.numbers.length - 1]}`;
  } else if (!model.action && model.numbers.length === 1 && !model.done) {
    holder.textContent = `${model.numbers[0]}`;
  } else if (model.action && model.numbers.length === 1) {
    holder.textContent = `${model.numbers[0]} ${model.action}`;
  }

  //* this is where we update history or memory
  if (model.currentShowHistory) {
    historyTab.className = "history-m selectedBorder";
    historyMemoryShow.innerHTML = "";
    model.history.forEach((story) => {
      const li = document.createElement("li");
      li.className = "list-style";
      li.textContent = `${story.first} ${story.action} ${story.second} = ${story.result}`;
      historyMemoryShow.appendChild(li);
    });
  } else {
    memoryTab.className = "memory selectedBorder";
    model.memory.forEach((memo) => {
      const li = document.createElement("li");
      li.className = "list-style";
      li.textContent = `${memo.first} ${memo.action} ${memo.second} = ${memo.result}`;
      historyMemoryShow.appendChild(li);
    });
  }
};
