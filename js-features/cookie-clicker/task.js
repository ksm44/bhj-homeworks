const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const differencyArray = [];
let avgdifferency;
let avgClickSpeed = 0;
let lastClickTime = new Date(); ;
let currentClickTime;


let x = document.createElement('span');
x.id = 'clicker__counterSpeed';
x.innerHTML = '<br>' +  'Скорость клика: ' + '0';
clickerCounter.after(x);

const clickerCounterSpeed = document.getElementById('clicker__counterSpeed');

cookie.addEventListener("click", ()=> {
    cookie.width == '200' ? cookie.width = '220' : cookie.width = '200';
    
    ++clickerCounter.innerHTML;
    currentClickTime = new Date();
    differencyArray.push(1 / ((currentClickTime - lastClickTime)/1000));
    avgdifferency = differencyArray.reduce((acc, cur) =>  acc + cur, 0);
    avgClickSpeed = avgdifferency / clickerCounter.innerHTML;
    clickerCounterSpeed.innerHTML = '<br>' +  'Скорость клика: ' + avgClickSpeed.toFixed(2);
    lastClickTime = currentClickTime;
});