// let body = document.querySelector('body');
// body.innerHTML +=   `<h1>Hello !!!</h1>`
const football = document.querySelectorAll('.players-container');
const popupIm = document.getElementById('popup-image');
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
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Username:</strong> ${username}</p>
        </div>
        <button class="edit-btn">edit</button>
    `;
    document.getElementById('playersContainer').appendChild(playerContainer);
    document.getElementById('registerForm').reset();
}

let edit_btn = document.querySelectorAll('.edit-btn'), index = 0;
for (let edit_bt = 0; edit_bt < edit_btn.length; edit_bt++) {
    edit_btn[edit_bt].addEventListener('click', () => {
        index = edit_bt
        edit_btn[edit_bt].innerText = 'fazlidin'
        popup.classList.add('visible');
    })
}
football.forEach(food => {
    activeImage.addEventListener('click', () => {
        popupImage.src = activeImage.querySelector('img').src
        popup.classList.add('visible');
    });
});
closeBtn.addEventListener('click', () => {
    popup.classList.remove('visible');
});
popup.addEventListener('click', (e) => {
    if (e.target !== popupImage && e.target !== closeBtn) {
        popup.classList.remove('visible');
    }
});