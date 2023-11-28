// TODO
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("connect-form");
  
    form.addEventListener("submit", function (e) {
      let isValid = true;
  
      // Validate First Name (3 characters or more)
      const firstNameInput = document.getElementById("first-name");
      if (firstNameInput.value.length < 3) {
        isValid = false;
        showError(firstNameInput, "First Name must be 3 characters or more");
      } else {
        hideError(firstNameInput);
      }
  
      // Validate Last Name (3 characters or more)
      const lastNameInput = document.getElementById("last-name");
      if (lastNameInput.value.length < 3) {
        isValid = false;
        showError(lastNameInput, "Last Name must be 3 characters or more");
      } else {
        hideError(lastNameInput);
      }
  
      // Validate Email using regex
      const emailInput = document.getElementById("email");
      const emailRegex = /\w+@\w+\.\w+/;
      if (!emailRegex.test(emailInput.value)) {
        isValid = false;
        showError(emailInput, "Invalid Email format");
      } else {
        hideError(emailInput);
      }
  
      // Validate 'What can we help with?' select
      const contactKindInput = document.getElementById("contact-kind");
      if (contactKindInput.value === "choose") {
        isValid = false;
        showError(contactKindInput, "Please select an option");
      } else {
        hideError(contactKindInput);
      }
  
      // Prevent form submission if validation fails
      if (!isValid) {
        e.preventDefault();
        console.log("Bad input");
      }
    });
  
    // Helper function to show error message
    function showError(inputElement, errorMessage) {
      const errorElement = inputElement.nextElementSibling;
      errorElement.textContent = errorMessage;
      inputElement.classList.add("is-invalid");
    }
  
    // Helper function to hide error message
    function hideError(inputElement) {
      const errorElement = inputElement.nextElementSibling;
      errorElement.textContent = "";
      inputElement.classList.remove("is-invalid");
    }
  });