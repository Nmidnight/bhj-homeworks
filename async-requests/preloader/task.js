const loader = document.querySelector('.loader');
const items = document.querySelector('#items');
const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == 3) {
        loader.classList.add('loader_active');
    } else if (xhr.readyState == 4) {
        loader.classList.remove('loader_active');
        let deleteChild = document.querySelector('.item');
        deleteChild.remove();
        let responseText = xhr.response;
        let elementsObj = responseText.response.Valute;
        for (let key in elementsObj) {
            let charCode = elementsObj[key].CharCode;
            let value = elementsObj[key].Value;
            items.innerHTML += '<div class = "item"><div class="item__code">' + charCode + '</div><div class="item__value">' + value + '</div><div class="item__currency">руб.</div></div>';
        }
    }
})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.send();