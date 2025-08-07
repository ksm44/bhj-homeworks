let element = document.querySelector('.rotator__case');
let reverseFlag = true;
let changeSpeed = element.getAttribute('data-speed');
element.style.color = element.getAttribute('data-color');
let intervalId = null;

function newInterval() {
    intervalId = setInterval(() => {       
        action();
    }, changeSpeed) 
}

function action() {
    if (reverseFlag) {
        element.classList.remove('rotator__case_active');
        element = element.nextElementSibling;
        element.classList.add('rotator__case_active');
    } else {
        element.classList.remove('rotator__case_active');
        element = element.previousElementSibling;
        element.classList.add('rotator__case_active'); 
    }
    
    changeSpeed = element.getAttribute('data-speed');
    element.style.color = element.getAttribute('data-color');
    
    if (element.nextElementSibling === null || element.previousElementSibling === null) {
        reverseFlag = !reverseFlag;
    }

    if (changeSpeed) {
        clearInterval(intervalId);
        newInterval();
    }
}

newInterval();