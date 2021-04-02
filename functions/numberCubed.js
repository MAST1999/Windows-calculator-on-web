const numberCubed = () => {
  document.getElementById("holder").textContent +=
    " " + document.getElementById("numbers-results").textContent + " ^ 3";
  document.getElementById("numbers-results").textContent =
    parseFloat(document.getElementById("numbers-results").textContent) *
    parseFloat(document.getElementById("numbers-results").textContent) *
    parseFloat(document.getElementById("numbers-results").textContent);
};

export default numberCubed;
