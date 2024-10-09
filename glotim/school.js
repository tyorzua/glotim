// Function to show the application form
function showApply() {
    document.getElementById('Apply').style.display = 'block';
}

// Function to show the facilities section
function showFacilities() {
    const facilitiesSection = document.getElementById('facilities');
    if (facilitiesSection.style.display === 'none') {
        facilitiesSection.style.display = 'block';
    } else {
        facilitiesSection.style.display = 'none';
    }
}

// Function to handle form submission
document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Simple client-side validation
    let isValid = true;
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    if (!document.getElementById('name').value) {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }
    if (!document.getElementById('email').value) {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    }
    if (!document.getElementById('phone').value) {
        document.getElementById('phoneError').textContent = 'Phone number is required.';
        isValid = false;
    }
    if (!document.getElementById('program').value) {
        document.getElementById('programError').textContent = 'Please select a program.';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('formSuccess').textContent = 'Application submitted successfully!';
        // Here you could also send the form data to a server
        document.getElementById('applicationForm').reset(); // Reset the form fields
    }
});


// Function to validate the form
function validateForm() {
    let isValid = true;
    
    // Clear previous error messages
    document.querySelectorAll('.error').forEach(error => error.textContent = '');
    
    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const program = document.getElementById('program');
    
    // Validate name
    if (name.value.trim() === '') {
        document.getElementById('nameError').textContent = 'Full Name is required.';
        isValid = false;
    }
    
    // Validate email
    if (email.value.trim() === '' || !email.value.includes('@')) {
        document.getElementById('emailError').textContent = 'A valid Email Address is required.';
        isValid = false;
    }
    
    // Validate phone number
    if (phone.value.trim() === '') {
        document.getElementById('phoneError').textContent = 'Phone Number is required.';
        isValid = false;
    }
    
    // Validate program selection
    if (program.value === '') {
        document.getElementById('programError').textContent = 'Program of Interest must be selected.';
        isValid = false;
    }
    
    return isValid;
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission
    
    if (validateForm()) {
        // Simulate form submission
        document.getElementById('formSuccess').textContent = 'Your application has been submitted successfully!';
        
        // Optionally, reset the form
        document.getElementById('applicationForm').reset();
        
        // Hide the form after submission
        document.getElementById('Apply').style.display = 'none';
    }
}

// Attach the submit event handler to the form
document.getElementById('applicationForm').addEventListener('submit', handleFormSubmission);


