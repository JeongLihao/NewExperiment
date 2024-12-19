let info = document.querySelector('.info')
let newst = document.querySelector('.add')

let uname = document.querySelector('.uname')
let age = document.querySelector('.age')
let gender = document.querySelector('.gender')
let salary = document.querySelector('.salary')
let city = document.querySelector('.city')



let a = 0
newst.addEventListener('click', function (e) {
    let dv = document.createElement('tr')
    e.preventDefault()
    a++

    dv.innerHTML = `
        <td>${a}</td>
        <td>${uname.value}</td>
        <td>${age.value}</td>
        <td>${gender.value}</td>
        <td>${salary.value}</td>
        <td>${city.value}</td>
        <td>
            <a href="javascript:">删除</a>
        </td>
    `
    let arr = {
        sname: `${uname.value}`,
        sage: `${age.value}`,
        sgender: `${gender.value}`,
        ssalary: `${salary.value}`,
        scity: `${city.value}`
    }
    localStorage.setItem(`${uname.value}`, JSON.stringify(arr))

   
    document.querySelector('tbody').appendChild(dv)
})

document.querySelector('tbody').addEventListener('click',function(e){
    if(e.target.tagName === 'A'){
       e.target.parentNode.parentNode.remove()       
    }
})













