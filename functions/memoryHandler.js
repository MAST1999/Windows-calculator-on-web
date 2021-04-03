const memoryHandler = (Event, memory, changedNumbers, done) => {
  const numbersResults = parseFloat(
    document.getElementById("numbers-results").textContent
  );

  const mc = document.querySelector("#mc");
  const mr = document.querySelector("#mr");
  if (!changedNumbers) return memory;

  const mButton = Event.target.id;

  switch (mButton) {
    case "mp":
      if (memory.length === 0) {
        memory.push(numbersResults);
      } else {
        memory[memory.length - 1] = memory[memory.length - 1] + numbersResults;
      }
      break;
    case "mm":
      if (memory.length === 0) {
        memory.push(numbersResults * -1);
      } else {
        memory[memory.length - 1] -= numbersResults;
      }
      break;
    case "ms":
      memory[memory.length] = numbersResults;
      break;
    case "mc":
      while (memory.length !== 0) {
        memory.pop();
      }
      mc.classList.remove("mh");
      mr.classList.remove("mh");
      mc.classList.add("md");
      mr.classList.add("md");
      break;
    case "mr":
      if (memory.length === 0) return;
      document.getElementById("numbers-results").textContent =
        memory[memory.length - 1];
      break;
  }

  const holder = document.getElementById("holder");

  if (done) holder.textContent = "";
  if (memory.length !== 0) {
    const disabledM = document.querySelectorAll(".md");
    disabledM.forEach((m) => {
      m.classList.remove("md");
      m.classList.add("mh");
    });
  }
};

export default memoryHandler;
