const mainElement = document.querySelector('#celestialBody');

const whole1 = document.querySelector('.w1');
const whole2 = document.querySelector('.w2');
const whole3 = document.querySelector('.w3');

mainElement.addEventListener('click', function (){
    if (mainElement.classList.contains('move-right')){
        mainElement.classList.remove('move-right');
        mainElement.classList.add('move-left')
        
        
        
    } else{
        whole1.style.backgroundColor = ''
        whole1.style.transition = 'background-color linear 2s'
        mainElement.classList.remove('move-left');
        mainElement.classList.add('move-right');

    }
});