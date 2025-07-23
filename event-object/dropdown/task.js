let btn = document.querySelector('.dropdown__value');
let list = document.querySelector('.dropdown__list');
let links = document.querySelectorAll('.dropdown__link');

links.forEach(link => {
    link.closest('.dropdown__item').addEventListener('click', (e) => {
        e.preventDefault(); 
        
        if(list.classList.contains('dropdown__list_active')){   
            btn.textContent = link.textContent;
            list.classList.remove('dropdown__list_active');
        }
    });
})

btn.addEventListener('click', () => {
    if (list.classList.contains('dropdown__list_active')) {
        list.classList.remove('dropdown__list_active');
    } else {
        list.classList.add('dropdown__list_active');
    }   
});