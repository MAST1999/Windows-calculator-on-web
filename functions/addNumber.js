const addNumber = (Event, model) => {
  const number = +Event.target.textContent;
  model.currentNumber = model.currentNumber * 10 + number;
};

export default addNumber;
