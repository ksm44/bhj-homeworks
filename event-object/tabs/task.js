let tabs = [...document.querySelectorAll('.tab')];
let contents = [...document.querySelectorAll('.tab__content')];

tabs.forEach(item => {
    item.addEventListener('click', (e) => {
        tabs.forEach(tab => {
            tab.classList.remove('tab_active');
            contents[tabs.indexOf(tab)].classList.remove('tab__content_active');
        }); 
        
        e.target.classList.add('tab_active');
        contents[tabs.indexOf(e.target)].classList.add('tab__content_active');
    })   
})