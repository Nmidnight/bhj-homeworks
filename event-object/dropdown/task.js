const btn = document.querySelector('.dropdown__value');
const menuList = document.querySelector('.dropdown__list');
const menuLink = document.querySelectorAll('.dropdown__item');

btn.addEventListener('click', () => {
    menuList.classList.toggle('dropdown__list_active');
});

[...menuLink].forEach( i => {
    i.addEventListener('click', () =>{
    btn.textContent = i.textContent;
    menuList.classList.remove('dropdown__list_active');
    });
    return false;
});
