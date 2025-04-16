const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const darkModeClass = 'dark-mode';
const darkModeStorageKey = 'darkModeEnabled';

// Function to enable dark mode
function enableDarkMode() {
    body.classList.add(darkModeClass);
    localStorage.setItem(darkModeStorageKey, 'true');
}

// Function to disable dark mode
function disableDarkMode() {
    body.classList.remove(darkModeClass);
    localStorage.setItem(darkModeStorageKey, 'false');
}

// Check if dark mode was previously enabled
if (localStorage.getItem(darkModeStorageKey) === 'true') {
    enableDarkMode();
    darkModeToggle.checked = true; // Update the toggle state
}

// Event listener for the toggle switch
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
// show more ini
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  const time = new Date().getHours(); //greeting
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("demo").innerHTML = greeting;

document.addEventListener('DOMContentLoaded', function() { //formvalidation
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const submissionMessage = document.getElementById('submissionMessage');

form.addEventListener('submit', function(event) {
event.preventDefault(); // Prevent the default form submission

    let isValid = true;

        // Validate Name
    if (nameInput.value.trim() === '') {
            nameError.textContent = 'Please enter your name.';
            isValid = false;
    } else {
            nameError.textContent = '';
    }

        // Validate Email
    if (emailInput.value.trim() === '') {
            emailError.textContent = 'Please enter your email address.';
            isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
    } else {
            emailError.textContent = '';
    }

        // Validate Message
    if (messageInput.value.trim() === '') {
            messageError.textContent = 'Please enter your message.';
            isValid = false;
    } else {
            messageError.textContent = '';
    }

    if (isValid) {
            // If all validations pass, you can proceed with submitting the form data
            // You can use Fetch API or XMLHttpRequest to send the data to a server-side script
const formData = new FormData(form);

fetch('/submit-contact-form', { // Replace with your server-side endpoint
method: 'POST',
body: formData
})
.then(response => response.json())
.then(data => {
    if (data.success) {
            submissionMessage.textContent = 'Thank you for your message! We will get back to you shortly.';
            submissionMessage.className = 'success-message';
            form.reset(); // Clear the form
    } else {
            submissionMessage.textContent = 'Oops! Something went wrong. Please try again later.';
            submissionMessage.className = 'error-submission';
            }
    })
.catch(error => {
            console.error('Error submitting form:', error);
            submissionMessage.textContent = 'Oops! Something went wrong. Please try again later.';
            submissionMessage.className = 'error-submission';
    });
    } else {
            submissionMessage.textContent = ''; // Clear any previous submission messages
    }
    });

function isValidEmail(email) {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});