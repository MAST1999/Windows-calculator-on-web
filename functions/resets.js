export const resetCE = () => {
  document.getElementById("numbers-results").textContent = "0";
};
export const resetC = (numbers, actions, done) => {
  document.getElementById("numbers-results").textContent = "0";
  document.getElementById("holder").textContent = "";
  numbers = [];
  actions = [];

  return [numbers, actions, done];
};
