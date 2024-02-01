const btn = document.querySelector('.tasks__add');
const input = document.querySelector('.tasks__input');
const noteList = document.querySelector('.tasks__list');
const form = document.querySelector('.tasks__control')

function newNote() {
    noteList.insertAdjacentHTML(
        'afterBegin',
        `<div class="task">
        <div class="task__title">${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>`
    )

    const closeBtn = document.querySelector('.task__remove');

     closeBtn.addEventListener('click', event => {
    event.target.closest('.task').remove()
    });

};

btn.addEventListener('click', e => {
    e.preventDefault();
    if (input.value.trim() != ''){
        newNote();
    }
    form.reset();
})