document.addEventListener('DOMContentLoaded', () => {
    const registerModal = document.querySelector('#registerModal');
    const registerBtnOpen = document.querySelector('.register-btn-open');
    const registerBtnClose = registerModal.querySelector('.modal-btn-close');
    const registerForm = document.getElementById('registerForm');

    const toggleRegisterModal = () => registerModal.classList.toggle('is-hidden');

    if (registerBtnOpen) {
        registerBtnOpen.addEventListener('click', toggleRegisterModal);
    }

    if (registerBtnClose) {
        registerBtnClose.addEventListener('click', toggleRegisterModal);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(this);

            // Добавление данных формы в объект FormData
            formData.append('username', registerForm.querySelector('input[name="username"]').value);
            formData.append('email', registerForm.querySelector('input[name="email"]').value);
            formData.append('password', registerForm.querySelector('input[name="password"]').value);

            fetch('server.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                console.log(data);
                
                toggleRegisterModal(); 
            })
            .catch(error => console.error('Error:', error));
        });
    }
});