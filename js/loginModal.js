document.addEventListener('DOMContentLoaded', () => {
const loginModal = document.querySelector('#loginModal'); // Модальное окно для входа
const loginBtnOpen = document.querySelector('.login-btn-open'); // Кнопка для открытия модального окна входа
const loginBtnClose = loginModal.querySelector('.modal-btn-close'); // Кнопка для закрытия модального окна входа
const loginForm = document.getElementById('loginForm'); // Форма входа

const toggleLoginModal = () => loginModal.classList.toggle('is-hidden');

if (loginBtnOpen) {
    loginBtnOpen.addEventListener('click', toggleLoginModal);
}

if (loginBtnClose) {
    loginBtnClose.addEventListener('click', toggleLoginModal);
}

if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);

        fetch('server.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            toggleLoginModal(); 
        })
        .catch(error => console.error('Error:', error));
    });
}
});