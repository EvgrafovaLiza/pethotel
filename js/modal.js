const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');
const bookForm = document.querySelector('.book-section__form form');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

const submitForm = (event) => {
  event.preventDefault();

  // Collect form data from the book form
  const formData = new FormData(bookForm);

  // Send the form data to the server
  fetch('/save-booking', {
    method: 'POST',
    body: new URLSearchParams(formData).toString(),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((response) => response.text())
    .then((message) => {
      console.log(message);
      toggleModal(); // Close the modal after successful submission
    })
    .catch((error) => {
      console.error('Error saving booking data:', error.message);
      // Handle error as needed
    });
};

// Add event listener for form submission
bookForm.addEventListener('submit', submitForm);
