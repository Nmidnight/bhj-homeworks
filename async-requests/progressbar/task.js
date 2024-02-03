const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const formData = new FormData(document.forms.form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.upload.onprogress = function () {
        let progress = document.getElementById('progress');
        setInterval(() => {
            progress.value += 0.1;
        }, 500)
    }
    xhr.send(formData);
    e.preventDefault();
})