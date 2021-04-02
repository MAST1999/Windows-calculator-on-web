const remover = () => {
  if (document.getElementById("numbers-results").textContent != "0") {
    document.getElementById(
      "numbers-results"
    ).textContent = document
      .getElementById("numbers-results")
      .textContent.slice(
        0,
        document.getElementById("numbers-results").textContent.length - 1
      );
  }
  if (
    document.getElementById("numbers-results").textContent == "" ||
    document.getElementById("numbers-results").textContent == "-"
  ) {
    document.getElementById("numbers-results").textContent = "0";
  }
};

export default remover;
