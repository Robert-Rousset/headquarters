async function toggleModal(event){
    event.preventDefault();

    const modal = document.querySelector('#login-modal')
    // modal.setAttribute("class", "is-active");
    modal.classList.toggle("is-active");
}

document.querySelector('#login').addEventListener('click', toggleModal);
document.querySelector('.modal-background').addEventListener('click', toggleModal);
document.querySelector('.delete').addEventListener('click', toggleModal);