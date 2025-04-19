let bookControls = document.querySelector(".book__control");
let bookContainer = document.querySelector(".book");
let fontSize = bookControls.querySelectorAll(".font-size");

for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].addEventListener("click", (e) => {
        e.preventDefault();

        for (let j = 0; j < fontSize.length; j++) {
            fontSize[j].classList.remove("font-size_active");
        }
        fontSize[i].classList.add("font-size_active");

        bookContainer.classList.remove("book_fs-big", "book_fs-small");

        if (fontSize[i].classList.contains("font-size_small")) {
            bookContainer.classList.add("book_fs-small");
        } else if (fontSize[i].classList.contains("font-size_big")) {
            bookContainer.classList.add("book_fs-big");
        }
    });
}
