// let body = document.querySelector('body');
// body.innerHTML +=   `<h1>Hello !!!</h1>`
const football = document.querySelectorAll('.players-container');
const popupIm = document.getElementById('popup-image');
let edit = document.querySelectorAll('.edit-btn')
const popup = document.querySelector('.bgdiv');
let index = 0;

function addPlayerContainer() {
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const imgLink = document.getElementById('imgLink').value;
    const password = document.getElementById('password').value;
    const isPopular = document.getElementById('popular').checked;
    if (!name || !username || !imgLink || !password) {
        alert('Barcha maydonlarni to\'ldiring!');
        return;
    }
    const playerContainer = document.createElement('div');
    playerContainer.classList.add('player-container');
    if (isPopular) {
        playerContainer.classList.add('player-container2');
    }
    playerContainer.innerHTML = `
        <img src="${imgLink}" alt="Player image" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
        <div>
            <p><strong >Name:</strong> <span class="name">${name}</span></p>
            <p><strong>Username:</strong> ${username}</p>
        </div>
        <button class="edit-btn">edit</button>
    `;
    document.getElementById('playersContainer').appendChild(playerContainer);
    document.getElementById('registerForm').reset();
    edit_f()

}
function edit_f() {
    let edit_btn = document.querySelectorAll('.edit-btn')
    const popup = document.querySelector('.bgdiv');
    let name = document.querySelectorAll('.name');
    let name1 = document.querySelector('#name1');
    for (let edit_bt = 0; edit_bt < edit_btn.length; edit_bt++) {
        edit_btn[edit_bt].addEventListener('click', () => {
            index = edit_bt;
            name1.value = name[edit_bt].innerText
            popup.classList.add('visible');
            popup.style.display = 'flex';
        });
    }
}
edit_f()

closeBtn.addEventListener('click', () => {
    popup.classList.remove('visible');
});
popup.addEventListener('click', (e) => {
    if (e.target !== popupImage && e.target !== closeBtn) {
        popup.classList.remove('visible');
    }
});


function closeBox() {
    document.getElementById('bgdiv').style.display = 'none';
    bgdiv.classList.remove('active')
}

bgdiv.addEventListener('click', (event) => {
    if (event.target === bgdiv) {
        closeBox();
    }
});