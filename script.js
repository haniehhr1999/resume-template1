var prog1 = document.querySelector('.prog-level1')
var prog2 = document.querySelector('.prog-level2')
var prog3 = document.querySelector('.prog-level3')
var prog4 = document.querySelector('.prog-level4')
var prog5 = document.querySelector('.prog-level5')
var prog6 = document.querySelector('.prog-level6')


window.addEventListener('scroll' , function(){

    if (scrollY > 400) {
        // alert('hi')
        prog1.style.width = '95%'
        prog2.style.width = '90%'
        prog3.style.width = '70%'
        prog4.style.width = '85%'
        prog5.style.width = '35%'
        prog6.style.width = '55%'
        prog1.style.opacity = 1
        prog2.style.opacity = 1
        prog3.style.opacity = 1
        prog4.style.opacity = 1
        prog5.style.opacity = 1
        prog6.style.opacity = 1
    }
})

var inputs = document.querySelectorAll('input')
inputs.forEach(element => {
    element.addEventListener('click' , function(){
        element.style.outlineColor = '#6B9CFF'
    })
});

AOS.init();
