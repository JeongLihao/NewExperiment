// 1. 初始数据
const sliderData = [
    {url: 'images/slider01.jpg', title: '对人类来说会不会太超前了？', color: 'rgb(100, 67, 68)'},
    {url: 'images/slider02.jpg', title: '开启剑与雪的黑暗传说！', color: 'rgb(43, 35, 26)'},
    {url: 'images/slider03.jpg', title: '真正的jo厨出现了！', color: 'rgb(36, 31, 33)'},
    {url: 'images/slider04.jpg', title: '李玉刚：让世界通过B站看到东方大国文化', color: 'rgb(139, 98, 66)'},
    {url: 'images/slider05.jpg', title: '快来分享你的寒假日常吧~', color: 'rgb(67, 90, 92)'},
    {url: 'images/slider06.jpg', title: '哔哩哔哩小年YEAH', color: 'rgb(166, 131, 143)'},
    {url: 'images/slider07.jpg', title: '一站式解决你的电脑配置问题！！！', color: 'rgb(53, 29, 25)'},
    {url: 'images/slider08.jpg', title: '谁不想和小猫咪贴贴呢！', color: 'rgb(99, 72, 114)'},
]

let s = 0
let pi = document.querySelector('img')
let txt1 = document.querySelector('p')
let bc = document.querySelector('.slider-footer')
let lis = document.querySelectorAll('li')
let all = document.querySelector('.slider')
//获取左右按键
let left = document.querySelector('.prev')
let right = document.querySelector('.next')

//修改方法
function change() {
    pi.src = sliderData[s].url
    txt1.innerText = sliderData[s].title
    bc.style.backgroundColor = sliderData[s].color

    for (let i = 0; i < lis.length; i++) {
        lis[i].classList.remove('active')
    }
    lis[s].classList.add('active')
}

//左右按键的事件
left.addEventListener('click', function () {
    s--
    if (s < 0) {
        s = 7
    }
    change()
})
right.addEventListener('click', function () {
    s++
    if (s >= 8) {
        s = 0
    }
    change()
})
let times = 0
times = setInterval(function () {
    s++
    if (s === sliderData.length) {
        s = 0
    }
    change()
}, 1000)

all.addEventListener('mouseenter', function () {
    clearInterval(times)
})

all.addEventListener('mouseleave ', function () {
    times = setInterval(function () {
        s++
        if (s === sliderData.length) {
            s = 0
        }
        change()
    }, 1000)
})