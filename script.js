function validateForm() {
    let isValid = true;

    // Reset error messages
    document.getElementById("usernameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";
    document.getElementById("contactError").style.display = "none";
    document.getElementById("messageError").style.display = "none";

    // Get form elements
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const message = document.getElementById("message").value.trim();

    // Username validation
    if (username === "") {
        document.getElementById("usernameError").innerText = "Username is required.";
        document.getElementById("usernameError").style.display = "block";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        document.getElementById("passwordError").innerText = "Password is required.";
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    }

    // Contact validation (only numbers and length between 10-15)
    const contactPattern = /^[0-9]{10,15}$/;
    if (contact === "") {
        document.getElementById("contactError").innerText = "Contact number is required.";
        document.getElementById("contactError").style.display = "block";
        isValid = false;
    } else if (contact.length <10) {
        document.getElementById("contactError").innerText = "Contact must be 10 digits.";
        document.getElementById("contactError").style.display = "block";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        document.getElementById("messageError").innerText = "Message is required.";
        document.getElementById("messageError").style.display = "block";
        isValid = false;
    }

    return isValid;
}