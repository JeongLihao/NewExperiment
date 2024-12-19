let info = document.querySelector('.info')
let newst = document.querySelector('.add')

newst.addEventListener('click', function (e) {
    let uname = document.querySelector('.uname').value
    let age = document.querySelector('.age').value
    let gender = document.querySelector('.gender').value
    let salary = document.querySelector('.salary').value
    let city = document.querySelector('.city').value

    let user = JSON.parse(localStorage.getItem('user')) || []

    let nun = document.querySelector('tbody>tr')
    let id = 0
    if (user.length > 0) {
        id = user[user.length - 1].id + 1
    } else {
        id = 1
    }

    e.preventDefault()
   
    let users = {
        id: id,
        uname: uname,
        age: age,
        gender: gender,
        salary: salary,
        city: city
    }
    user.push(users)

    localStorage.setItem('user', JSON.stringify(user))

    ren()
})
document.querySelector('tbody').addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        let index = e.target.dataset.index
        let user = JSON.parse(localStorage.getItem('user')) || []
        for (let i = 0; i < user.length; i++) {
            if (user[i].id == +index) {
                user.splice(i, 1)
            }
            localStorage.setItem('user', JSON.stringify(user))
        }
        ren()
    }
})

function ren() {
    document.querySelector('tbody').innerHTML = ''
    let user = JSON.parse(localStorage.getItem('user')) || []
    for (let i = 0; i < user.length; i++) {
        let dv = document.createElement('tr')
        dv.innerHTML = `
        <td>${user[i].id}</td>
        <td>${user[i].uname}</td>
        <td>${user[i].age}</td>
        <td>${user[i].gender}</td>
        <td>${user[i].salary}</td>
        <td>${user[i].city}</td>
        <td>
            <a href="javascript:" data-index=${user[i].id}>删除</a>
        </td>
    `
        document.querySelector('tbody').appendChild(dv)
    }
}

ren()