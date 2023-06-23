const validEmail = (email) => {
  const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return regex.test(email);
};

const checked = (checkbox) => {
  return checkbox.checked;
};

const form = document.querySelector('#form');
const emailInput = document.querySelector('#emailValidation');
const emailValidationMessage = document.querySelector('#emailValidationMessage');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailValue = emailInput.value;

  if (validEmail === false) {
    emailValidationMessage.classList.remove("display-none");
  } else {
    emailValidationMessage.classList.add("display-none");
    // Perform other validation or submission logic
  }
});
