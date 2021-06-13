async function toggleLoginModal(event) {
  event.preventDefault();

  const modal = document.querySelector("#login-modal");
  modal.classList.toggle("is-active");
}

async function toggleSignupModal(event) {
  event.preventDefault();

  const modal = document.querySelector("#signup-modal");
  modal.classList.toggle("is-active");
}


const login = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };


async function signup(event) {
  event.preventDefault();

  const email = document.querySelector("#signup-email").value.trim();
  const password = document.querySelector("#signup-password").value.trim();

  if (email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      const sequelizeValidationError = await response.json();
      console.log(sequelizeValidationError.errors);
      sequelizeValidationError.errors.forEach((error) => {
        alert(error.message);
      });
    }
  }
}

document.querySelector("#login-confirm").addEventListener("click", login);

document.querySelector("#signup-confirm").addEventListener("click", signup);

document.querySelector("#signup").addEventListener("click", toggleSignupModal);
document
  .querySelector("#signup-background")
  .addEventListener("click", toggleSignupModal);
document
  .querySelector("#signup-delete")
  .addEventListener("click", toggleSignupModal);

document.querySelector("#login").addEventListener("click", toggleLoginModal);
document
  .querySelector("#login-background")
  .addEventListener("click", toggleLoginModal);
document
  .querySelector("#login-delete")
  .addEventListener("click", toggleLoginModal);
