const rangeInputs = document.querySelectorAll('.control__range');
const rangeValues = document.querySelectorAll('.control__value--append');

rangeInputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    rangeValues[index].textContent = input.value;
  });
});
