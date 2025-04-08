let time = 59;
let timer = setInterval(()=> {
const countdownElement = document.getElementById("timer")
if(time > 0) {
    time--;
    countdownElement.textContent = time;
} else {
    clearInterval(timer)
    alert("Вы победили в конкурсе!")
}
},1000)