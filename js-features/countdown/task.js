const timerElement = document.getElementById('timer');

let seconds = parseInt(timerElement.innerText);

function convertTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
}


function updateTimer() {
    timerElement.innerText = convertTime(seconds);

    if (seconds > 0) {
        seconds--
    } else {
        clearInterval(timerInterval);
        alert("Вы победили в конкурсе!");

        window.location.assign("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aC0u1rHzJh-ei5W1U9c9RhDN9McdVTMld73tZxZGLEgOQOPWX8pKl3t-1e3pNSl5CI8&usqp=CAU")
    }
}

const timerInterval = setInterval(updateTimer, 1000);