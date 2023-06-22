const validEmail = (email) => {
  const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return regex.test(email);
};

// console.log(validEmail('test@email.com')); // => true

const checked = (checkbox) => {
  return checkbox.checked
}

// const myCheckbox = document.getElementById("myCheckbox");
// console.log(checked (myCheckbox)); => true when checked, false otherwise


const form = document.querySelector('#form')
const emailValidationText = document.querySelector('#emailValidation');
const checkBoxValidationText = document.querySelector('#checkBoxValidationText');

console.log(form)

// form.addEventListener("submit", (event) => {
//   event.preventDefault()
//   const emailValue = document.querySelector('#email').value
//   const checkbox = document.querySelector('#checkbox')
//   console.log(checkbox)

//   if (validEmail === false && checked(checkbox)) {
//     emailValidationText.classList.remove("display-none")
//   } else if (checked(checkbox ))

// })
