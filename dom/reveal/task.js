let reveal = document.querySelectorAll(".reveal")

function isVisible(el){
      let {top, bottom} = el.getBoundingClientRect();
      return bottom > 0 && top < window.innerHeight 
}

window.addEventListener('scroll', () =>{
   for (let i = 0; i < reveal.length; i++){
      if(isVisible(reveal[i])){
         reveal[i].classList.add('reveal_active')
      }
      else{
         reveal[i].classList.remove('reveal_active')
      }
   }
})

