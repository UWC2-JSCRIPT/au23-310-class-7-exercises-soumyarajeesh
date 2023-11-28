document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const reasonSelect = document.getElementById("reason");
    const jobFields = document.getElementById("job-fields");
    const codeFields = document.getElementById("code-fields");

    // Show or hide additional fields based on the reason for contacting
    reasonSelect.addEventListener("change", function () {
        if (reasonSelect.value === "job") {
            jobFields.classList.remove("hidden");
            codeFields.classList.add("hidden");
        } else if (reasonSelect.value === "code") {
            codeFields.classList.remove("hidden");
            jobFields.classList.add("hidden");
        } else {
            jobFields.classList.add("hidden");
            codeFields.classList.add("hidden");
        }
    });

    form.addEventListener("submit", function (e) {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        // Name validation
        if (nameInput.value.length < 3) {
            e.preventDefault();
            showError("name-error", "Name must be 3 or more characters.");
        } else {
            hideError("name-error");
        }

        // Email validation
        const emailRegex = /\w+@\w+\.\w+/;
        if (!emailRegex.test(emailInput.value)) {
            e.preventDefault();
            showError("email-error", "Invalid Email format.");
        } else {
            hideError("email-error");
        }

        // Message validation
        if (messageInput.value.length < 10) {
            e.preventDefault();
            showError("message-error", "Message must be 10 or more characters.");
        } else {
            hideError("message-error");
        }

        // If "Job opportunity" is selected, validate job-related fields
        if (reasonSelect.value === "job") {
            const jobTitleInput = document.getElementById("job-title");
            const companyWebsiteInput = document.getElementById("company-website");

            // Job Title validation
            if (jobTitleInput.value.trim() === "") {
                e.preventDefault();
                showError("job-title-error", "Job Title is required.");
            } else {
                hideError("job-title-error");
            }

            // Company Website validation
            const websiteRegex = /https?\:\/\/.+\..+/;
            if (!websiteRegex.test(companyWebsiteInput.value)) {
                e.preventDefault();
                showError("company-website-error", "Invalid Company Website URL.");
            } else {
                hideError("company-website-error");
            }
        }

        // If "Talk code" is selected, validate coding language
        if (reasonSelect.value === "code") {
            const codingLanguageSelect = document.getElementById("coding-language");

            if (codingLanguageSelect.value === "") {
                e.preventDefault();
                showError("coding-language-error", "Please choose a coding language.");
            } else {
                hideError("coding-language-error");
            }
        }
    });

    // Helper function to show error message
    function showError(id, errorMessage) {
        const errorElement = document.getElementById(id);
        errorElement.textContent = errorMessage;
    }

    // Helper function to hide error message
    function hideError(id) {
        const errorElement = document.getElementById(id);
        errorElement.textContent = "";
    }
});
