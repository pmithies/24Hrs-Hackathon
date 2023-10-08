const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

document.getElementById("show-register").addEventListener("click", () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
});

document.getElementById("show-login").addEventListener("click", () => {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    // Perform login logic (e.g., send data to a server)
    console.log("Login submitted with email:", email);
});

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    // Perform registration logic (e.g., send data to a server)
    console.log("Registration submitted with username:", username, "email:", email);
});