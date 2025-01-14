// let body = document.querySelector('body');
// body.innerHTML +=   `<h1>Hello !!!</h1>`
function addPlayerContainer() {
    const name = document.getElementById('name').value;
    const imgLink = document.getElementById('imgLink').value;
    if (!name || !imgLink) {
        alert('Please fill out all fields.');
        return;
    }
    const playerContainer = document.createElement('div');
    playerContainer.className = 'player-container';
    const img = document.createElement('img');
    img.src = imgLink;
    img.alt = name;
    const playerName = document.createElement('h3');
    playerName.textContent = name;
    playerContainer.appendChild(img);
    playerContainer.appendChild(playerName);
    document.getElementById('playersContainer').appendChild(playerContainer);
    document.getElementById('registerForm').reset();
}