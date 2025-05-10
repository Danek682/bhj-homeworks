let modal = document.querySelector(".modal");
let modalClose = document.querySelector('.modal__close')

function setCookie(name, value){
   document.cookie = name + '=' + encodeURIComponent(value)
}

function getCookie(name) {

    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

window.addEventListener('DOMContentLoaded', () => {
   if(!getCookie("modalClose")){
      setTimeout(() => {
      modal.classList.add("modal_active")
   },3000)
   }
})

modalClose.addEventListener('click', () => {
   modal.classList.remove("modal_active");
   setCookie("modalClose", "true");
   // console.log(document.cookie)
})


