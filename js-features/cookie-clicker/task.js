let number = 0;
let cookie = document.getElementById("cookie");
let counter = document.getElementById("clicker__counter");
cookie.onclick = function () {
    number++;
    counter.textContent = number;
    if (cookie.width === 200) {
        cookie.width = 150;
    } else {
        cookie.width = 200;
    }
};
