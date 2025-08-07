document.addEventListener('DOMContentLoaded', () => {
    const viewBlocks = document.querySelectorAll('.reveal');
    
    viewBlocks.forEach(viewBlock => {
        document.addEventListener('scroll', () => {  
            const { top, bottom } = viewBlock.getBoundingClientRect();
            if (bottom < 0 || top > window.innerHeight) {
                viewBlock.classList.remove('reveal_active');
            } else {
               viewBlock.classList.add('reveal_active'); 
            }
        });
    });
});