async function toggleLoginModal(event){
    event.preventDefault();

    const modal = document.querySelector('#login-modal')
    // modal.setAttribute("class", "is-active");
    modal.classList.toggle("is-active");
}

async function toggleSignupModal(event){
    event.preventDefault();

    const modal = document.querySelector('#signup-modal')
    // modal.setAttribute("class", "is-active");
    modal.classList.toggle("is-active");
}

document.querySelector('#signup').addEventListener('click', toggleSignupModal);
document.querySelector('#signup-background').addEventListener('click', toggleSignupModal);
document.querySelector('#signup-delete').addEventListener('click', toggleSignupModal);

document.querySelector('#login').addEventListener('click', toggleLoginModal);
document.querySelector('#login-background').addEventListener('click', toggleLoginModal);
document.querySelector('#login-delete').addEventListener('click', toggleLoginModal);