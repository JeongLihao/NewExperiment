let ele = document.querySelector('.xtx-elevator')
// let backtop = document.querySelector('#backTop')
// let new1 = document.querySelector('.new')
// let pop =document.querySelector('.popular')
// let brand = document.querySelector('.brand')
// let topic = document.querySelector('.topic')

window.addEventListener('scroll', function () {
    let dao = document.documentElement.scrollTop
    if (dao > 300) {
        ele.style.opacity = '1'
    }
    if (dao < 300) {
        ele.style.opacity = '0'
    }
})
// backtop.addEventListener('click', function () {
//     window.scrollTo(0, 0)
// })

// new1.addEventListener('click',function (){
//     window.scrollTo(0, 685)
// })
// pop.addEventListener('click',function (){
//     window.scrollTo(0, 1206)
// })
// brand.addEventListener('click',function (){
//     window.scrollTo(0, 1769)
// })
// topic.addEventListener('click',function (){
//     window.scrollTo(0, 5201)
// })


let xtx = document.querySelector('.xtx-elevator-list')

let new1 = document.querySelector('.xtx_goods_new')
let popular = document.querySelector('.xtx_goods_popular')
let brand = document.querySelector('.xtx_goods_brand')
let topic = document.querySelector('.xtx_goods_topic')



let a = new1.offsetTop
let b = popular.offsetTop
let c = brand.offsetTop
let d = topic.offsetTop



xtx.addEventListener('click',function(e){
    if(e.target.tagName == 'A'){
        if(e.target.id == 'backTop'){
            window.scrollTo(0,0)
        }
    }
    if(e.target.dataset.name == 'new'){
        window.scrollTo(0,a)
    }
    if(e.target.dataset.name == 'popular'){
        window.scrollTo(0,b)
    }
    if(e.target.dataset.name == 'brand'){
        window.scrollTo(0,c)
    }
    if(e.target.dataset.name == 'topic'){
        window.scrollTo(0,d)
    }
})
