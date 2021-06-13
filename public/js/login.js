async function signupFormHandler(event){
    event.preventDefault();

    const modal = document.querySelector('#signup-modal')
    // modal.setAttribute("class", "is-active");
    modal.classList.toggle("is-active");
}

document.querySelector('#signup').addEventListener('click', signupFormHandler);