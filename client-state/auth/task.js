const form = document.getElementById("signin__form");
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

window.onload = function () {
  if (localStorage.user_id === undefined) {
    welcome.classList.remove('welcome_active');
    signin.classList.add('signin_active');
  } else {
    userId.textContent = localStorage.user_id;
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
  };
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let xhr = new XMLHttpRequest();
  let formData = new FormData(form);

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  xhr.responseType = 'json'
  xhr.send(formData);
  xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status == 201) {
      if (xhr.response.success === true) {
        localStorage.user_id = xhr.response.user_id;
        userId.textContent = localStorage.user_id;
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        form.reset()
      } else if (xhr.response.success === false) {
        alert("Неверные логин/пароль.");
      };
    }
  };
});