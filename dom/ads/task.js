let rotatorContainer = document.querySelectorAll(".rotator");
for(let i = 0; i < rotatorContainer.length; i++){
    let cases = rotatorContainer[i].querySelectorAll('.rotator__case')
    let count = 0
    function rotation(){
        for(let j = 0; j < cases.length; j++){
            cases[j].classList.remove('rotator__case_active')
            if(count === j){
            cases[j].classList.add('rotator__case_active') 
            cases[j].style.color = cases[j].getAttribute('data-color')
            }
        }
        count++
        if(count >= cases.length){
            count = 0;
        }
    }
    setInterval(rotation,1000)
}