let playersContainer = document.querySelector('#playersContainer'), name = document.querySelector('#name'),
    username = document.querySelector('#username'), img = document.querySelector('#imgLink'),
    popular = document.querySelector('#popular'), submit_btn = document.querySelector('#submit-btn'),
    bgdiv = document.querySelector('#bgdiv'), index_c = 0, x = document.querySelector('.x'),
    name2 = document.querySelector('#name1'), username2 = document.querySelector('#username1'),
    img2 = document.querySelector('#imgLink1'), popular2 = document.querySelector('#popular1'),
    submit_btn2 = document.querySelector('.submit-btn1'), delete_btn = document.querySelector('.delete-btn');


submit_btn2.addEventListener('click', () => {
    list[index_c].name = name2.value
    list[index_c].username = username2.value
    list[index_c].img = img2.value
    list[index_c].popular = popular2.checked
    add_list()
    bgdiv.style.display = 'none'
})

list = [{
    'name': 'Crstiano Ronaldo',
    'username': 'Ronaldo',
    'img': 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQyODSOKofIyOwVcLth5QYYXB0gFng2SXj52T2dpcAmDraJ5A9I6yW9E0rLm0fKlUBCTtOAWiFf1rylu9HTNRKI75NEX1NVIh9MZVpTs06Y',
    'popular': true,
}, {
    'name': 'Lionel Messi',
    'username': 'Messi',
    'img': 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQFKMXInl9o8bbejLkmF0XwEqCSmdiUSCSLF0-6OIe0cTpImNbo0K15t3n1gwzoQgZSnT9sLmRVe3Ck99NbOMWU462fqzrQFFVpc-YVYAvY',
    'popular': false,
},];

delete_btn.addEventListener('click', () => {
    list.splice(index_c, 1)
    bgdiv.style.display = 'none'
    add_list()
    alert('O\'chirildi')
})

function add_list() {
    playersContainer.innerHTML = ''
    list.forEach(item => {
        let class_name = null;
        if (item.popular === true) {
            class_name = 'player-container2'
        } else {
            class_name = 'player-container'
        }
        playersContainer.innerHTML += `        <div class="${class_name}">
            <img id="popup-image" src="${item.img}">
            <p><strong >Name:</strong> <span class="name">${item.name}</span></p>
            <p><strong>Username:</strong> ${item.username}</p>
            <button class="edit-btn"><i class="fa-solid fa-user-pen"></i></button>
        </div>`
    })
    edit_bt()
}

add_list()

submit_btn.addEventListener('click', () => {
    let object = {
        'name': name.value, 'username': username.value, 'img': img.value, 'popular': popular.checked,
    };
    list.push(object)
    add_list()

})

function edit_bt() {
    let edit_btn = document.querySelectorAll('.edit-btn');

    edit_btn.forEach((item, index) => {
        item.addEventListener('click', () => {
            index_c = index
            bgdiv.style.display = 'flex'
            name2.value = list[index_c].name
            username2.value = list[index_c].username
            img2.value = list[index_c].img
            popular2.checked = list[index_c].popular


        })
    })
}

edit_bt()

x.addEventListener('click', () => {
    bgdiv.style.display = 'none'

})
bgdiv.addEventListener('click', (event) => {
    if (event.target === bgdiv) {
        bgdiv.style.display = 'none'
    }
});
