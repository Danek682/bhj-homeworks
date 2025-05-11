let form = document.getElementById("signin__form");
let welcome = document.getElementById("welcome");
let userId = document.getElementById("user_id");
let signIn = document.querySelector(".signin");

document.addEventListener("DOMContentLoaded", () => {
    let savedUserId = localStorage.getItem("user_id");
    if (savedUserId) {
        userId.innerHTML = savedUserId;
        welcome.classList.add("welcome_active");
        signIn.classList.remove("signin_active");
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");

    xhr.responseType = "json";
    xhr.onload = function () {
        let response = xhr.response;

        if (response.success) {
            localStorage.setItem("user_id", response.user_id);
            userId.innerHTML = response.user_id;
            welcome.classList.add("welcome_active");
            signIn.classList.remove("signin_active");
            form.reset();
        } else alert("Неверный логин или пароль!");
    };
    const formData = new FormData(form);
    xhr.send(formData);
});
