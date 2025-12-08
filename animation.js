document.addEventListener('DOMContentLoaded', () => {
    
    const button = document.getElementById('interactive-button');
    const overlay = document.getElementById('spiral-overlay');
    const spiral = document.getElementById('spiral');

    
    button.addEventListener('click', () => {
        
        
        overlay.classList.add('show-spiral');
        
       
        spiral.classList.remove('animate-spiral');
        
       
        setTimeout(() => {
            spiral.classList.add('animate-spiral');
        }, 10); 


        
        setTimeout(() => {
            overlay.classList.remove('show-spiral');
        }, 2200); 
        
    });
});