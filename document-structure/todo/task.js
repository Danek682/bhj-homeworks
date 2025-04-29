let input = document.querySelector(".tasks__input");
let taskList = document.querySelector(".tasks__list");

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && input.value.trim() !== "") {
        event.preventDefault();

        let div = document.createElement("div");
        div.className = "task";
        div.innerHTML = `
      <div class="task__title">${input.value}</div>
      <a href="#" class="task__remove">&times;</a>
    `;
        taskList.appendChild(div);
        input.value = "";
        let deleteTask = document.querySelector(".task__remove");
        deleteTask.addEventListener("click", (e) => {
            e.preventDefault();
            div.remove();
        });
    }
});
