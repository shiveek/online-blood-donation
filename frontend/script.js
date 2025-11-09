// REGISTER FUNCTION
const registerForm = document.getElementById('registerForm');

if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      bloodGroup: document.getElementById('bloodGroup').value,
      city: document.getElementById('city').value,
      contact: document.getElementById('contact').value,
    };

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      alert(result.message);

      if (response.ok) {
        window.location.href = "login.html"; // redirect to login
      }
    } catch (error) {
      alert("Server error! Please try again.");
      console.error(error);
    }
  });
}
// LOGIN FUNCTION
const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const loginData = {
      email: document.getElementById('loginEmail').value,
      password: document.getElementById('loginPassword').value,
    };

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();
      alert(result.message);

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(result.user));
        window.location.href = "index.html"; // redirect to homepage
      }
    } catch (error) {
      alert("Server error! Please try again.");
      console.error(error);
    }
  });
}
