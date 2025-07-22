let count = document.getElementById('timer').innerHTML;
document.getElementById('timer').innerHTML = '00:00:'+ count;

let target = document.createElement('a');
target.id = 'forDownload';
target.download ='sample-zip-file.zip';
target.target = "_blank";
target.style = 'display: none';
document.body.appendChild(target);

const timeArray = document.getElementById('timer').innerHTML.split(":");
let hours = timeArray[0];
let minutes = timeArray[1];
let seconds = timeArray[2];

let totalAmountSeconds = hours*3600 + minutes*60 + Number(seconds);

const intervalId = setInterval(() => {    
    if(!totalAmountSeconds) {
        alert('Вы победили в конкурсе!');
        target.href='https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-zip-file.zip';
        target.click();
        clearInterval(intervalId);
   } else {
    --totalAmountSeconds;
    
    hours = Math.trunc((totalAmountSeconds / 3600)) || '00';
    if (hours.toString().split('').length == 1){
        hours = '0' + hours;
    };
    minutes = Math.trunc(((totalAmountSeconds - hours*3600) / 60)) || '00';
    if (minutes.toString().split('').length == 1){
        minutes = '0' + minutes;
    };
    seconds = Math.trunc((totalAmountSeconds - hours*3600 - minutes*60)) || '00';
    if (seconds.toString().split('').length == 1){
        seconds = '0' + seconds;
    };
    
   document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + seconds;
   }
    
}, 1000);


