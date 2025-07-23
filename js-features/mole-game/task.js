const deadMole = document.getElementById('dead');
const lost = document.getElementById('lost');
let timeoutId = null;

check = () => {
    if(deadMole.textContent < 10){
        alert('Вы проиграли😟\nВремя истекло');
    } else {
        alert('Вы победили😊');
    }
    restart();
};

getHole = (index) => document.getElementById(`hole${index}`);

restart = () => {
    deadMole.textContent = '0';
    lost.textContent = '0';
    clearTimeout(timeoutId);
    timeoutId = setTimeout(check,15000);
};

timeoutId = setTimeout(check,15000);

for (let i = 1; i <= 9; i++) {
    let hole = getHole(i);
    hole.addEventListener('click', () => {
        hole.style = 'transform: translateY(15px)';
        setTimeout(()=>{hole.style = 'transform: translateY(0)';}, 50)
        
        if(hole.classList.contains('hole_has-mole')){
            ++deadMole.textContent;
        } else {
            ++lost.textContent;
        }
        
        if(lost.textContent >= 5){
            alert('Вы проиграли😟\nПромахнулись 5 раз');
            restart();
        }
    });
};