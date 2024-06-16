const mainElement = document.querySelector('#celestialBody');
const backgroundPage = document.querySelector('.bc-page');
const whole = document.querySelectorAll('.whole');
const cloud = document.querySelectorAll('.cloud');
const stars = document.querySelectorAll('.star');
const background = document.querySelector('#base');

function changeBackground()
{
    if (backgroundPage.classList.contains('white'))
    {
        backgroundPage.classList.toggle('dark');
    }
}

function buttonAnimation()
{
    if (mainElement.classList.contains('move-right'))
    {
        mainElement.classList.remove('move-right');
        mainElement.classList.add('move-left')

        whole.forEach(e => {
            e.style.backgroundColor = 'transparent'
            e.style.transition = 'background-color linear 300ms'

        })
        cloud.forEach(e => {
            e.style.bottom = ''
            e.style.transition = 'bottom linear 600ms'
        })

        base.style.backgroundColor = '#5494cc'
        base.style.transition = 'background-color linear 200ms'
    } else
    {
        cloud.forEach(e =>
        {
            e.style.bottom = '-600px'
            e.style.transition = 'bottom linear 2s'
        })

        whole.forEach(e =>
        {
            e.style.backgroundColor = '#949eb2'
            e.style.transition = 'background-color linear 300ms'
        })

        base.style.backgroundColor = '#1d1e2d'
        base.style.transition = 'background-color linear 200ms'
        mainElement.classList.remove('move-left');
        mainElement.classList.add('move-right');

        stars.forEach(e =>
        {
            e.style.backgroundColor = 'white';
        })
    }
}


let timerToAnimate;

mainElement.addEventListener('click', function()
{
    timerToAnimate = setTimeout(function(){
        changeBackground();
        buttonAnimation();
    }, 10)
});

mainElement.addEventListener('dblclick', function(){
    clearTimeout(timerToAnimate);
})
