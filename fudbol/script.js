let playersContainer = document.querySelector('#playersContainer'), name = document.querySelector('#name'),
    username = document.querySelector('#username'), img = document.querySelector('#imgLink'),
    popular = document.querySelector('#popular'), submit_btn = document.querySelector('#submit-btn'),
    bgdiv = document.querySelector('#bgdiv'), index_c = 0, x = document.querySelector('.x');

let list = [{
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
            <button class="edit-btn">edit</button>
        </div>`
    })
}

add_list()

submit_btn.addEventListener('click', () => {
    let object = {
        'name': name.value, 'username': username.value, 'img': img.value, 'popular': popular.checked,
    };
    list.push(object)
    add_list()
})

let edit_btn = document.querySelectorAll('.edit-btn');

edit_btn.forEach((item, index) => {
    item.addEventListener('click', () => {
        index_c = index
        bgdiv.style.display = 'flex'
    })
})

x.addEventListener('click', () => {
    bgdiv.style.display = 'none'
    if (event.target === bgdiv) {
        bgdiv.style.display = 'none'

    }
})