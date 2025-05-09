let question = document.querySelector('.poll__title')
let pollAnswers = document.querySelector('.poll__answers')

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.onreadystatechange = function() {
   if(xhr.readyState === 4 && xhr.status === 200){
      
      let parse = JSON.parse(xhr.responseText)
      let titles = parse.data.title
      question.textContent = titles


      value = parse.data.answers
      // for (let key in value) {
      //    let values = value[key]

         for (let i = 0; i < value.length; i++){
            let button = document.createElement('button');
            button.classList.add('poll__answer');
            button.textContent = value[i]
            pollAnswers.appendChild(button)
   
            button.addEventListener('click',() => {
               alert("Спасибо, ваш голос засчитан!")
   
               //отправка на сервер
               let userResponse = new XMLHttpRequest();
               userResponse.open ("POST" , "https://students.netoservices.ru/nestjs-backend/poll");
               userResponse.setRequestHeader("Content-type" , 'application/x-www-form-urlencoded');
   
               let pollId = parse.id
               userResponse.send( `vote=${pollId}&answer=${i}` );
            })
         }
      }  

   }
