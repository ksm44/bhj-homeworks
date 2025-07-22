const allHoles = document.querySelectorAll('.hole');
const deadMole = document.getElementById('dead');
const lost = document.getElementById('lost');

check = () => {
    if(deadMole.textContent < 10){
        alert('Вы проиграли.');
    } else {
        alert('Вы победили!!!');
    }
}

setTimeout(check,15000);

getHole = (index) => document.getElementById(`hole${index}`)

for (let i = 1; i <= 9; i++) {
    let hole = getHole(i);
    hole.addEventListener('click', () => {
        if(hole.classList.contains('hole_has-mole')){
            ++deadMole.textContent;
        } else {
            ++lost.textContent;
        }
        
         if(lost.textContent >= 5){
            alert('Вы проиграли.');
        }
    });
}