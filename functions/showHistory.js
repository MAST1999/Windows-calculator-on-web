const showHistory = (history) => {
  const showUl = document.getElementById("history-memory-show");
  document.getElementsByClassName("memory")[0].classList.add("selectedBorder");
  document
    .getElementsByClassName("memory")[0]
    .classList.remove("selectedBorder");
  document
    .getElementsByClassName("history-m")[0]
    .classList.add("selectedBorder");

  let lastChild = showUl.lastElementChild;
  while (lastChild) {
    showUl.removeChild(lastChild);
    lastChild = showUl.lastElementChild;
  }
  if (history.length === 0) {
    const li = document.createElement("li");
    li.textContent = "There's no history yet";
    li.classList.add("list-style");
    showUl.appendChild(li);
    return;
  }
  history.forEach((item) => {
    showUl.appendChild(item);
  });
};

export default showHistory;
