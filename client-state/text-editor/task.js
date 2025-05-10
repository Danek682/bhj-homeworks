let editor = document.getElementById("editor");

editor.addEventListener('input', () => {
   localStorage.setItem('name', editor.value)
})

window.addEventListener("DOMContentLoaded", () => {
   let savedValue = localStorage.getItem('name')
   if(savedValue) {
      editor.value = savedValue
   }
})