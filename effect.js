const mainElement = document.querySelector('#celestialBody');

mainElement.addEventListener('click', function (){
    if (mainElement.classList.contains('move-left')){
        mainElement.classList.remove('move-left');
        mainElement.classList.add('move-right')
    } else{
        mainElement.classList.remove('move-right');
        mainElement.classList.add('move-left')    
    }
});