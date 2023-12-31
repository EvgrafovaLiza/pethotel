const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');
const bookForm = document.querySelector('#bookForm ');
const modalForm = document.querySelector('#modalForm')

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
const submitForm = (event) => {
    event.preventDefault();
  
    if (!bookForm.checkValidity() || !modalForm.checkValidity()) {
      console.error('Error: One or more fields are empty');
      return;
    }
  
    const formData = new FormData();
    formData.append('arrivalDate', bookForm.querySelector('.arrivalDate').value);
    formData.append('departureDate', bookForm.querySelector('.departureDate').value);
    formData.append('petsNumber', bookForm.querySelector('.petsNumber').value);
    formData.append('roomType', bookForm.querySelector('#book-section__roomType').value);
    formData.append('userName', modalForm.querySelector('.modal__form-field input[name="userName"]').value);
    formData.append('userTelephone', modalForm.querySelector('.modal__form-field input[name="userTelephone"]').value);
    formData.append('userEmail', modalForm.querySelector('.modal__form-field input[name="userEmail"]').value);
  
    fetch('server.php', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then((message) => {
        console.log(message);
        toggleModal(); 
      })
      .catch((error) => {
        console.error('Error saving booking data:', error.message);
      });
  };