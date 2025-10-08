const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    // ✅ Retrieve stored credentials
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    const storedUsername = localStorage.getItem("username");

    // ✅ Validate login
    if (email === storedEmail && password === storedPassword) {
        alert(`Welcome back, ${storedUsername}!`);
        window.location.href = "homepage.html"; // redirect after login
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
