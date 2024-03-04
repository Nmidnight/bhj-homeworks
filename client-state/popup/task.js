document.addEventListener('DOMContentLoaded', function () {
    const modalMain = document.getElementById('modal_main');
    const modalSuccess = document.getElementById('modal_success');
    const closeButtonElements = document.querySelectorAll('.modal__close');
    const showSuccessButton = document.querySelector('.show-success');

    modalMain.classList.add('modal_active');

    closeButtonElements.forEach(function (closeButton) {
        closeButton.addEventListener('click', function () {
            modalMain.classList.remove('modal_active');
            modalSuccess.classList.remove('modal_active');
        });
    });

    showSuccessButton.addEventListener('click', function (event) {
        event.preventDefault();
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.add('modal_active');
    });
});
