const progress = document.getElementById( 'progress' );
progress.value = 0;
let form = document.getElementById('form')


form.addEventListener('submit', (e) => {
   e.preventDefault();

   const xhr = new XMLHttpRequest();

   xhr.open("POST", 'https://students.netoservices.ru/nestjs-backend/upload')

   xhr.upload.onprogress = function(event){
 if(event.lengthComputable){
   let dowload = (event.loaded / event.total);
   progress.value = dowload
 }
}  

   let formData = new FormData(form)
   xhr.send(formData)
})


