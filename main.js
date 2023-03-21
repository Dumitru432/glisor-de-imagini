const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')



const numberOfSlides = mainSlide.querySelectorAll('div').length

// am obtinut un array cu 4 elemente pt ca main-slide din html are 4 div-uri si anume 
// are 4 background image 


const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
let indexActiveSlide = 0;


mainSlide.style.top = `-${(numberOfSlides -1) * 100}vh`


upButton.addEventListener('click', function (){
    changeSlider('up')
})

downButton.addEventListener('click', function (){
    changeSlider('down')
})

function changeSlider (direction){
    if (direction === 'up') {
        indexActiveSlide++;
        if(indexActiveSlide === numberOfSlides){
            indexActiveSlide = 0;
        }
    }else if(direction === 'down'){
        indexActiveSlide--;
        if(indexActiveSlide < 0) {
            indexActiveSlide = numberOfSlides - 1;
        }
    }
    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(${height * indexActiveSlide}px)`;
    sidebar.style.transform = `translateY(${-height * indexActiveSlide}px)`
}


