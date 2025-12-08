
var button = document.getElementById('interactive-button');
var overlay = document.getElementById('spiral-overlay');
var spiral = document.getElementById('spiral-content');
var animationDuration = 8000; 

function activateSpiral(event) {
    
    
    event.preventDefault(); 
    
    
    overlay.className = 'show-spiral';
    
    
    spiral.className = 'animate-spiral';

    
    window.setTimeout(function() {
        
        
        overlay.className = ''; 
        spiral.className = '';  
        
        
        var anchorTag = button.querySelector('a');
        if (anchorTag) {
            var targetUrl = anchorTag.href;
            
            window.location.href = targetUrl;
        }
        
    }, animationDuration);
}


if (button) {
    if (button.addEventListener) {
        button.addEventListener('click', activateSpiral, false);
    } else {
        
        button.attachEvent('onclick', activateSpiral);
    }
}