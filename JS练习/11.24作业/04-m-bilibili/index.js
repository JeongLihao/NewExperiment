// const list = document.querySelector('.tabs-list')
// const line = document.querySelector('.line')
//     list.addEventListener('click', function (e) {
//       if (e.target.tarName = 'A') {
//         // console.log(11)
//         // console.log((e.target.offsetLeft - 16) / 3.75 + 'vw')
//         // console.log((e.target.offsetLeft) / 3.75 + 'vw')
//         line.style.left = (e.target.offsetLeft + 16) / 3.75 + 'vw'
//       }
//     })



let tab = document.querySelector('.tabs-list')

let a1 = document.querySelector('.a1')
let a2 = document.querySelector('.a2')
let a3 = document.querySelector('.a3')
let a4 = document.querySelector('.a4')
let a5 = document.querySelector('.a5')
let a6 = document.querySelector('.a6')
let a7 = document.querySelector('.a7')
let a8 = document.querySelector('.a8')

let line = document.querySelector('.line')




a1.addEventListener('click',function(){
    let a = a1.offsetLeft +16
    line.style.left = `${a}px`

})
a2.addEventListener('click',function(){
    let b = a2.offsetLeft +16
    line.style.left = `${b}px`
})
a3.addEventListener('click',function(){
    let c = a3.offsetLeft +16
    line.style.left = `${c}px`
})
a4.addEventListener('click',function(){
    let d = a4.offsetLeft +16
    line.style.left = `${d}px`
})
a5.addEventListener('click',function(){
    let e = a5.offsetLeft +16
    line.style.left = `${e}px`
})
a6.addEventListener('click',function(){
    let f = a6.offsetLeft +16
    line.style.left = `${f}px`
})
a7.addEventListener('click',function(){
    let g = a7.offsetLeft +16
    line.style.left = `${g}px`
})