const storedEmail = localStorage.getItem("email");
const storedUsername = localStorage.getItem("username");

if (storedEmail && storedUsername) {
    document.getElementById("userName").textContent = storedUsername;
    document.getElementById("userEmail").textContent = storedEmail;
} else {
    document.getElementById("userName").textContent = "Guest User";
    document.getElementById("userEmail").textContent = "Not logged in";
}

