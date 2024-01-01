const moleDead = document.getElementById('dead');
const moleSave = document.getElementById('lost');


for (let i = 1; i < 10; i++) {
    let hole = document.getElementById(`hole${i}`);
    hole.onclick = function () {
        if (hole.classList.contains("hole_has-mole")) {
            moleDead.textContent++;
        } else {
            moleSave.textContent++;
        }
        if (moleDead.textContent == 10) {
            alert('Победили, поздравляю!');
            restart();
        }
        if (moleSave.textContent == 5) {
            alert('Проиграли, попробуйте снова!');
            restart();
        }
    };
}
function restart() {
    moleDead.textContent = 0;
    moleSave.textContent = 0;
}