let buttons = document.querySelectorAll('.font-size');
let book = document.querySelector('.book');

let colors = document.querySelector('.book__control_color').querySelectorAll('.color');
let backgrounds = document.querySelector('.book__control_background').querySelectorAll('.color');


buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        let textSize = event.target.getAttribute('data-size');
        event.preventDefault();
        
        buttons.forEach(button => {
            button.classList.remove('font-size_active');
        });
        
        event.target.classList.add('font-size_active');
        
        switch (textSize) {
            case 'big':
                book.classList.remove('book_fs-small');
                book.classList.add('book_fs-big');
                break;
            case 'small':
                book.classList.remove('book_fs-big');
                book.classList.add('book_fs-small');
                break;
            default:
                book.classList.remove('book_fs-big');
                book.classList.remove('book_fs-small');
                break;
        }
    });
});

colors.forEach(color => {
    color.addEventListener('click', (event) => {
        let textColor = event.target.getAttribute('data-text-color');
        event.preventDefault();
        
        colors.forEach(color => {
            color.classList.remove('color_active');
        });
        
        event.target.classList.add('color_active');
        
        switch (textColor) {
            case 'gray':
                book.classList.remove('book_color-black');
                book.classList.remove('book_color-whitesmoke');
                book.classList.add('book_color-gray');
                break;
            case 'whitesmoke':
                book.classList.remove('book_color-black');
                book.classList.add('book_color-whitesmoke');
                book.classList.remove('book_color-gray');
                break;
            default:
                book.classList.add('book_color-black');
                book.classList.remove('book_color-whitesmoke');
                book.classList.remove('book_color-gray');
                break;
        }
    });
});

backgrounds.forEach(background => {
    background.addEventListener('click', (event) => {
        let bgColor = event.target.getAttribute('data-bg-color');
        event.preventDefault();
        
        backgrounds.forEach(color => {
            background.classList.remove('color_active');
        });
        
        event.target.classList.add('color_active');
        
        switch (bgColor) {
            case 'gray':
                book.classList.remove('book_bg-black');
                book.classList.remove('book_bg-white');
                book.classList.add('book_bg-gray');
                break;
            case 'white':
                book.classList.remove('book_bg-black');
                book.classList.add('book_bg-white');
                book.classList.remove('book_bg-gray');
                break;
            default:
                book.classList.add('book_bg-black');
                book.classList.remove('book_bg-white');
                book.classList.remove('book_bg-gray');
                break;
        }
    });
});