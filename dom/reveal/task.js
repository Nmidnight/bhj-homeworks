const boxes = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', () => {
    boxes.forEach(box => {
        const { top, bottom } = box.getBoundingClientRect();
        if (top > window.innerHeight || bottom < 0) {
            return false;
        }
        box.classList.add('reveal_active')
    })
});
