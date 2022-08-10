const tRandom = document.getElementById('buttonRandom');

tRandom.addEventListener('click', function() {

    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';

});


const sliderRed = document.querySelector('input[name=sliderRed]');
const sliderGreen = document.querySelector('input[name=sliderGreen]');
const sliderBlue = document.querySelector('input[name=sliderBlue]');

sliderRed.addEventListener('input', function() {
    const r = sliderRed.value;
    const g = sliderGreen.value;
    const b = sliderBlue.value;
     document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
     
});

sliderGreen.addEventListener('input', function() {
    const r = sliderRed.value;
    const g = sliderGreen.value;
    const b = sliderBlue.value;
    
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

sliderBlue.addEventListener('input', function() {
    const r = sliderRed.value;
    const g = sliderGreen.value;
    const b = sliderBlue.value;

    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});




 
