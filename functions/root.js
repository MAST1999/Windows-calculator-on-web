const root = () => {
  document.getElementById("holder").textContent +=
    " " +
    "root(" +
    document.getElementById("numbers-results").textContent +
    ")";
  document.getElementById("numbers-results").textContent = Math.sqrt(
    parseFloat(document.getElementById("numbers-results").textContent)
  );
};

export default root;
