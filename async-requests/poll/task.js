const pollTitle = document.querySelector('.poll__title');
const pollAnswersActive = document.querySelector('.poll__answers');
const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => {
    if (xhr.readyState == xhr.DONE) {
        let responseObj = xhr.response;
        pollTitle.textContent = responseObj.data.title;
        for (let j = 0; j < responseObj.data.answers.length; j++) {
            let buttonAnswer = responseObj.data.answers[j];
            pollAnswersActive.innerHTML += '<button class="poll__answer">' + buttonAnswer + '</button> ';
        } 
        const pollAnswer = document.querySelectorAll('.poll__answer');
        pollAnswer.forEach((i) => {
            i.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Спасибо, ваш голос засчитан!');
            })
        })
    } 
})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();