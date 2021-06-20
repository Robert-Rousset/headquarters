import generateQuote from "./inspire/generate-quote.js"

async function toggleLoginModal(_event) {
  const modal = document.querySelector("#login-modal");
  modal.classList.toggle("is-active");
}

async function toggleSignupModal(_event) {
  const modal = document.querySelector("#signup-modal");
  modal.classList.toggle("is-active");
}

const login = async (_event) => {
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


async function signup(_event) {
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

function isItLoginEnter(event){
  if(event.keyCode == 13){
  login()
  }
}

function isItSignupEnter(event){
  if(event.keyCode == 13){
  signup()
  }
}

document.querySelector("#login-confirm").onclick = login;

document.querySelector("#signup-confirm").onclick = signup;

document.querySelector("#signup").onclick = toggleSignupModal;
document
  .querySelector("#signup-background")
  .onclick = toggleSignupModal;
document
  .querySelector("#signup-delete")
  .onclick = toggleSignupModal;

document.querySelector("#login").onclick = toggleLoginModal;
document
  .querySelector("#login-background")
  .onclick = toggleLoginModal;
document
  .querySelector("#login-delete")
  .onclick = toggleLoginModal;

document.querySelector("#signup-password").onkeyup = isItSignupEnter;

document.querySelector("#login-password").onkeyup = isItLoginEnter;

generateQuote();

