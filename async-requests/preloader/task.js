let card = document.querySelector('.card'); //все целиком
let imgLoader = document.getElementById('loader');

   let xhr = new XMLHttpRequest();
   xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
   xhr.send();

   xhr.onreadystatechange = function(){
      if(xhr.readyState === 4 && xhr.status === 200){
         imgLoader.classList.remove('loader_active');

         let parse = JSON.parse(xhr.responseText)
         let valutes = parse.response.Valute

         for( let key in valutes){
            let value = valutes[key]

            let code = document.createElement('div');
            code.classList.add('item__code');
            code.textContent = value.CharCode
           

            let itemValue = document.createElement('div');
            itemValue.classList.add('item__value');
            itemValue.textContent = value.Value;
            

            let currency = document.createElement('div');
               currency.classList.add('item__currency');
               currency.textContent = "руб."

               let item = document.createElement('div')
               item.classList.add('item');
               item.appendChild(code);
               item.appendChild(itemValue);
               item.appendChild(currency);
               card.appendChild(item)
         }
      }
   }






 