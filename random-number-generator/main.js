const formRandom = document.querySelector(".form-random");
const inputMin = formRandom.querySelector("#inputMin");
const inputMax = formRandom.querySelector("#inputMax");
const labelResultNumber = document.body.querySelector(".label-result-number");

const generateNumber = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

formRandom.addEventListener("submit", function (e) {
  e.preventDefault();
  const minNumber = Number(inputMin.value);
  const maxNumber = Number(inputMax.value);
  labelResultNumber.innerHTML = String(
    generateNumber(minNumber, maxNumber)
  ).padStart(2, "0");
});
