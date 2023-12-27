const cookieImage = document.getElementById('cookie');
const cookieCounter =  document.getElementById('clicker__counter');
const speedCounter = document.getElementById('speed__counter')

cookieImage.onclick = function() {
    cookieCounter.textContent++;
    if (cookieCounter.textContent%2) {
        cookie.width = 200; 
        cookie.height = 200;
    } else {
        cookie.width = 180; 
        cookie.height = 180;
    }

}