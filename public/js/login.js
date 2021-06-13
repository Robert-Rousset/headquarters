async function toggleLoginModal(event){
    event.preventDefault();

    const modal = document.querySelector('#login-modal')
    modal.classList.toggle("is-active");
}

async function toggleSignupModal(event){
    event.preventDefault();

    const modal = document.querySelector('#signup-modal')
    modal.classList.toggle("is-active");
}

async function signup(event){
    event.preventDefault();

    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector("#signup-password").value.trim();

    if (email && password) {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
            const error = await response.json()
          alert(error);
        }
      }
}

document.querySelector('#signup-confirm').addEventListener('click', signup)

document.querySelector('#signup').addEventListener('click', toggleSignupModal);
document.querySelector('#signup-background').addEventListener('click', toggleSignupModal);
document.querySelector('#signup-delete').addEventListener('click', toggleSignupModal);

document.querySelector('#login').addEventListener('click', toggleLoginModal);
document.querySelector('#login-background').addEventListener('click', toggleLoginModal);
document.querySelector('#login-delete').addEventListener('click', toggleLoginModal);