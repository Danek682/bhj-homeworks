let dead = 0
let lost = 0
let deadDisplay = document.getElementById("dead")
let lostDisplay = document.getElementById("lost")
function getHole(index) {
     return document.getElementById(`hole${index}`);
 }
for(let i = 1; i <= 9; i++) {
    let hole = getHole(i)
    hole.onclick = function () {
        if(hole.className === 'hole hole_has-mole')
        {
        dead++
        deadDisplay.textContent = dead
    } else {
        lost++
        lostDisplay.textContent = lost
    }
    if(lost === 5){
        alert("Вы проиграли!");
        dead = 0;
        lost = 0;
        deadDisplay.textContent = dead;
        lostDisplay.textContent = lost;
        }
        if(dead === 10){
            alert("Вы выиграли!")
         dead = 0;
        lost = 0;
        deadDisplay.textContent = dead;
        lostDisplay.textContent = lost;
        }
    }
    }