let editor = document.getElementById("editor");

editor.addEventListener('input', () => {
   localStorage.setItem('name', editor.value)
})

window.addEventListener("DOMContentLoaded", () => {
   editor.value = localStorage.getItem('name')
})