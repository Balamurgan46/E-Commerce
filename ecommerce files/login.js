const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }


    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    const storedUsername = localStorage.getItem("username");

    if (email === storedEmail && password === storedPassword) {
        alert(`Welcome back, ${storedUsername}!`);
        window.location.href = "homepage.html"; 
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
