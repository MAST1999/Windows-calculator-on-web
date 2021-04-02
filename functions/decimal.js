const decimal = () => {
  if (
    document.getElementById("numbers-results").textContent.indexOf(".") === -1
  ) {
    document.getElementById("numbers-results").textContent += ".";
  }
};

export default decimal;
