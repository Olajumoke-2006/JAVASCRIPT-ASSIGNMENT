console.log("Hello, Tinyuka");

function registerUser() {
    let fullName = prompt("Full name:"); 
    if (fullName. length < 3) {
        alert("Full name must not be empty and contain at least 2 words");
        return;
    }

    let email = prompt("Email"); 
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    let password = prompt("Enter your password:");
    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return;
    }

    let confirmPassword = prompt("Confirm your password:");
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    let age = prompt("Enter your age:");
    if (age < 18) {
        alert("You must be 18 or older");
        return;
    }
    alert("Registration successful!");

    console.log("User Details");
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Age:", age);

    }
    registerUser();
