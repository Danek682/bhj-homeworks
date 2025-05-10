let form = document.getElementById("signin__form");
let welcome = document.getElementById('welcome')
let userId = document.getElementById('user_id')

 document.addEventListener('DOMContentLoaded', () => {
        let savedUserId = localStorage.getItem('user_id');
      if(savedUserId){
          userId.innerHTML = savedUserId;
          welcome.classList.add('welcome_active');
      }
   })

   form.addEventListener('submit',(event) => {
   event.preventDefault();

   const xhr = new XMLHttpRequest();
   xhr.open("POST" ,"https://students.netoservices.ru/nestjs-backend/auth")

   const formData = new FormData(form)
   xhr.send(formData)

   xhr.onreadystatechange = function(){
      if(xhr.readyState === 4 && xhr.status === 200){
         let response = JSON.parse(xhr.responseText)

         if(response.success){
            localStorage.setItem('user_id', response.user_id)
            userId.innerHTML = response.user_id
            welcome.classList.add('welcome_active')
         }
         else(alert("Неверный логин или пароль!"));
      }  
   }
})
  
    
