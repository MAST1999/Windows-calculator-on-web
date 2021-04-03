const showMemory = (memory) => {
  const showUl = document.getElementById("history-memory-show");
  document.getElementsByClassName("memory")[0].classList.add("selectedBorder");
  document
    .getElementsByClassName("history-m")[0]
    .classList.remove("selectedBorder");
  let lastChild = showUl.lastElementChild;
  while (lastChild) {
    showUl.removeChild(lastChild);
    lastChild = showUl.lastElementChild;
  }
  if (memory.length === 0) {
    const li = document.createElement("li");
    li.textContent = "There's noting saved in the memory";
    li.classList.add("list-style");
    showUl.appendChild(li);
  } else {
    const disabledM = document.querySelectorAll(".md");
    disabledM.forEach((m) => {
      m.classList.remove("md");
      m.classList.add("mh");
    });
  }
  const reversedMemory = memory.slice().reverse();
  reversedMemory.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add("list-style");
    showUl.appendChild(li);
  });
};

export default showMemory;
