const moleDead = document.getElementById('dead');
const moleSave = document.getElementById('lost');


function check() {
    if (moleSave.textContent == 5) {
        alert('Проиграли, попробуйте снова!')
        restart();
    } else if (moleDead.textContent == 10) {
        alert('Победили, поздравляю!')
        restart();
    }
};

for (let i = 1; i < 10; i++) {
    let holeGet = document.getElementById('hole${i}');
    holeGet.onclick = function () {
        let searchHole = hole.className.includes('hole_has-mole');
        if (searchHole === true) {
            moleDead.textContent = parseInt(moleDead.textContent) + 1;
        } else {
            moleSave.textContent = parseInt(moleSave.textContent) + 1;
        }
    }
};



function restart() {
    moleDead.textContent = 0;
    moleSave.textContent = 0;
};