
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPasword');

  usernameInput.addEventListener('input', function() {
    resetField(usernameInput);
    if (usernameInput.value.trim() === '') {
      showError(usernameInput, 'Username is required');
    } else if (usernameInput.value.length < 4) {
      showError(usernameInput, 'Username should be at least 4 characters long');
    } else {
      showSuccess(usernameInput);
    }
  });

  emailInput.addEventListener('input', function() {
    resetField(emailInput);
    if (emailInput.value.trim() === '') {
      showError(emailInput, 'Email is required');
    } else if (!isValidEmail(emailInput.value)) {
      showError(emailInput, 'Invalid email format');
    } else {
      showSuccess(emailInput);
    }
  });

  passwordInput.addEventListener('input', function() {
    resetField(passwordInput);
    if (passwordInput.value.trim() === '') {
      showError(passwordInput, 'Password is required');
    } else if (passwordInput.value.length < 6) {
      showError(passwordInput, 'Password should be at least 6 characters long');
    } else {
      showSuccess(passwordInput);
    }
  });

  confirmPasswordInput.addEventListener('input', function() {
    resetField(confirmPasswordInput);
    if (confirmPasswordInput.value.trim() === '') {
      showError(confirmPasswordInput, 'Confirm Password is required');
    } else if (confirmPasswordInput.value !== passwordInput.value) {
      showError(confirmPasswordInput, 'Passwords do not match');
    } else {
      showSuccess(confirmPasswordInput);
    }
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateForm()) {
      showSuccessMessage();
    }
  });

  function showError(input, message) {
    const formControl = input.parentElement;
    const errorDiv = formControl.querySelector('.error');
    const errorIcon = formControl.querySelector('.failure-icon');

    formControl.classList.add('error');
    errorIcon.style.opacity = '1';
    errorDiv.textContent = message;
  }

  function showSuccess(input) {
    const formControl = input.parentElement;
    const successIcon = formControl.querySelector('.success-icon');

    formControl.classList.remove('error');
    formControl.classList.add('success');
    successIcon.style.opacity = '1';
  }

  function resetField(input) {
    const formControl = input.parentElement;
    const successIcon = formControl.querySelector('.success-icon');
    const errorIcon = formControl.querySelector('.failure-icon');
    const errorDiv = formControl.querySelector('.error');

    formControl.classList.remove('error');
    formControl.classList.remove('success');
    successIcon.style.opacity = '0';
    errorIcon.style.opacity = '0';
    errorDiv.textContent = '';
  }

  function validateForm() {
    const inputs = [usernameInput, emailInput, passwordInput, confirmPasswordInput];
    let isValid = true;

    inputs.forEach(function(input) {
      resetField(input);

      if (input.value.trim() === '') {
        showError(input, 'This field is required');
        isValid = false;
      }
    });

    if (isValid) {
      const isUsernameValid = usernameInput.value.length >= 4;
      const isEmailValid = isValidEmail(emailInput.value);
      const isPasswordValid = passwordInput.value.length >= 6;
      const doPasswordsMatch = confirmPasswordInput.value === passwordInput.value;

      if (!isUsernameValid) {
        showError(usernameInput, 'Username should be at least 4 characters long');
        isValid = false;
      }

      if (!isEmailValid) {
        showError(emailInput, 'Invalid email format');
        isValid = false;
      }

      if (!isPasswordValid) {
        showError(passwordInput, 'Password should be at least 6 characters long');
        isValid = false;
      }

      if (!doPasswordsMatch) {
        showError(confirmPasswordInput, 'Passwords do not match');
        isValid = false;
      }
    }

    return isValid;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showSuccessMessage() {
    alert('Form submitted successfully!');
  }
});
