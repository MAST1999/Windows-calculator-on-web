const numberSquared = () => {
  document.getElementById("numbers-results").textContent =
    parseFloat(document.getElementById("numbers-results").textContent) *
    parseFloat(document.getElementById("numbers-results").textContent);
  document.getElementById("holder").textContent +=
    " " + "sqr(" + document.getElementById("numbers-results").textContent + ")";
};

export default numberSquared;
