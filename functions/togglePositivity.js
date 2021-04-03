const togglePositivity = () => {
  if (
    document.getElementById("numbers-results").textContent !== "0" &&
    document.getElementById("numbers-results").textContent[0] !== "-"
  ) {
    document.getElementById("numbers-results").textContent =
      "-" + document.getElementById("numbers-results").textContent;
  } else if (document.getElementById("numbers-results").textContent !== "0") {
    document.getElementById(
      "numbers-results"
    ).textContent = document
      .getElementById("numbers-results")
      .textContent.slice(1);
  }
};

export default togglePositivity;
