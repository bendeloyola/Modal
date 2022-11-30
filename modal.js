/* js code */

const openModalButtons = document.querySelectorAll('[data-modal-target]')  // target the cancel button
const closeModalButtons = document.querySelectorAll('[data-close-modal]') // target the No button from modal
const overlay = document.querySelector('.overlay') // overlay extra div for making the background opacity of page when the modal is active

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)      // open modal for each button that has a modal target property
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active') // Event that looks for every modal that has a active classname to be remove that classname
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')   // close button for No button from modal target the closest class name modal
        closeModal(modal)
    })
})

const openModal = (modal) => {
     modal == null ? null : (modal.classList.add('active'), overlay.classList.add('active')) // function for openModal to add a classname active to the modal div
}

const closeModal = (modal) => {
    modal == null ? null : (modal.classList.remove('active'), overlay.classList.remove('active')) // function for closeModal to remove a classname to the div that has a active classname.
}