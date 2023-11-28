// TODO
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('connect-form');

    form.addEventListener('submit', function (event) {
        const firstNameInput = document.getElementById('first-name');
        const lastNameInput = document.getElementById('last-name');
        const emailInput = document.getElementById('email');

        // Validation checks
        const isFirstNameValid = firstNameInput.value.length >= 3;
        const isLastNameValid = lastNameInput.value.length >= 5;
        const isEmailValid = /\w+@\w+\.\w+/.test(emailInput.value);

        // Display validation messages and set invalid classes
        validateAndDisplay(firstNameInput, isFirstNameValid);
        validateAndDisplay(lastNameInput, isLastNameValid);
        validateAndDisplay(emailInput, isEmailValid);

        // Check if all validations pass
        if (isFirstNameValid && isLastNameValid && isEmailValid) {
            // If all validations pass, you can submit the form here or take any other action
            // form.submit(); // Uncomment this line to submit the form
        } else {
            // Prevent the form from submitting if any validation fails
            event.preventDefault();
        }
    });

    // Custom function to validate and display messages and classes
    function validateAndDisplay(inputElement, isValid) {
        const parentElement = inputElement.parentElement;
        const errorMessageElement = parentElement.querySelector('.error');

        if (!isValid) {
            parentElement.classList.add('invalid');
            errorMessageElement.textContent = 'Invalid input';
            errorMessageElement.style.display = 'block';
        } else {
            parentElement.classList.remove('invalid');
            errorMessageElement.textContent = '';
            errorMessageElement.style.display = 'none';
        }
    }
});