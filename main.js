const validEmail = (email) => {
  const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return regex.test(email);
};

const form = document.querySelector('#form');
const formContainer = document.querySelector('.form-container');

const emailInput = document.querySelector('#emailValidation');
const checkbox = document.querySelector('#myCheckbox');

const successMessage = document.querySelector('#success-msg');
const checkDetails = document.querySelector('#check-details');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailValue = emailInput.value;

  if (validEmail(emailValue) && checkbox.checked) {
    formContainer.classList.add("display-none");
    successMessage.classList.remove("display-none");
  } else {
    formContainer.classList.remove("display-none");
    successMessage.classList.add("display-none");
    checkDetails.classList.remove("display-none");
  }
});
