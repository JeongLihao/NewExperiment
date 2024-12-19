let ele = document.querySelector('.xtx-elevator')
let backtop = document.querySelector('#backTop')
let new1 = document.querySelector('.new')
let pop =document.querySelector('.popular')
let brand = document.querySelector('.brand')
let topic = document.querySelector('.topic')


window.addEventListener('scroll', function () {
    let dao = document.documentElement.scrollTop
    if (dao > 300) {
        ele.style.opacity = '1'
    }
    if (dao < 300) {
        ele.style.opacity = '0'
    }
})
backtop.addEventListener('click', function () {
    window.scrollTo(0, 0)
})

new1.addEventListener('click',function (){
    window.scrollTo(0, 685)
})
pop.addEventListener('click',function (){
    window.scrollTo(0, 1206)
})
brand.addEventListener('click',function (){
    window.scrollTo(0, 1769)
})
topic.addEventListener('click',function (){
    window.scrollTo(0, 5201)
})
