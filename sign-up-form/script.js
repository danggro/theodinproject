const firstName = document.getElementById('first_name')
const lastName = document.getElementById('last_name')
const email = document.getElementById('email')
const phoneNumber = document.getElementById('phone')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm_password')

const arrayContainerInput = document.getElementsByClassName('container-input')

for (containerInput of arrayContainerInput) {
  const span = document.createElement('span')
  span.innerHTML = 'this is alert'
  containerInput.append(span)
}

firstName.addEventListener('input', function () {
  validation(firstName, 'patternMismatch', true, "Are you Elon's son?")
  validation(firstName, 'valueMissing', true, 'Value is missing')
})

lastName.addEventListener('input', function () {
  validation(lastName, 'patternMismatch', true, "Are you Elon's son?")
  validation(lastName, 'valueMissing', true, 'Value is missing')
})

email.addEventListener('input', function () {
  validation(email, 'valid', false, 'Email not valid')
  validation(email, 'valueMissing', true, 'Value is missing')
})

phoneNumber.addEventListener('input', function () {
  validation(phoneNumber, 'patternMismatch', true, 'Phone number not valid')
  validation(phoneNumber, 'valueMissing', true, 'Value is missing')
})

password.addEventListener('input', function () {
  validation(password, 'valueMissing', true, 'Value is missing')
})

function validation(input, typeValid, stateValid, errorMsg) {
  if (input.validity[typeValid] === stateValid) {
    input.nextElementSibling.innerHTML = errorMsg
    input.nextElementSibling.classList.add('alert-input')
  } else {
    input.nextElementSibling.classList.remove('alert-input')
  }
}

confirmPassword.addEventListener('input', function () {
  if (password.value !== confirmPassword.value) {
    password.setCustomValidity('Invalid field.')
    password.nextElementSibling.innerHTML = 'Password do not match'
    password.nextElementSibling.classList.add('alert-input')
    confirmPassword.setCustomValidity('Invalid field.')
    confirmPassword.nextElementSibling.innerHTML = 'Password do not match'
    confirmPassword.nextElementSibling.classList.add('alert-input')
  } else {
    password.setCustomValidity('')
    password.nextElementSibling.classList.remove('alert-input')
    confirmPassword.setCustomValidity('')
    confirmPassword.nextElementSibling.classList.remove('alert-input')
    validation(confirmPassword, 'valueMissing', true, 'Value is missing')
  }
})

const form = document.getElementsByTagName('form')[0]
const button = document.getElementsByTagName('button')[0]
const fieldset = document.getElementsByTagName('fieldset')[0]
const legend = document.getElementsByTagName('legend')[0]

form.addEventListener('submit', function (e) {
  e.preventDefault()

  fieldset.style.setProperty('border-color', 'var(--valid)', 'important')
  legend.innerHTML = 'Success'

  setTimeout(() => {
    legend.innerHTML = "Let's do this"
    fieldset.style.setProperty('border-color', 'var(--yellow)', 'important')
    firstName.value = ''
    lastName.value = ''
    email.value = ''
    phoneNumber.value = ''
    password.value = ''
    confirmPassword.value = ''
  }, 3000)
})
