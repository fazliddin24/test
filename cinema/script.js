function kinoyarat(movieName, checkqilingan) {
    const movieList = document.getElementById('movieList');
    const movieItem = document.createElement('div');
    movieItem.classList.add('movie-item');
    if (checkqilingan) {
        movieItem.style.backgroundColor = "#a8e6a0";
    } else {
        movieItem.style.backgroundColor = "#ffd0a4";
    }
    const movieText = document.createElement('span');
    movieText.textContent = movieName;
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fas', 'fa-trash');
    deleteBtn.appendChild(trashIcon);
    deleteBtn.addEventListener('click', () => {
        movieItem.classList.add('fade-out');
        setTimeout(() => {
            movieItem.remove();
        }, 500);
    });
    movieItem.appendChild(movieText);
    movieItem.appendChild(deleteBtn);
    movieList.appendChild(movieItem);
}
document.getElementById('saveBtn').addEventListener('click', function() {
    const movieInput = document.getElementById('movieName');
    const movieName = movieInput.value.trim();
    const checkbox = document.querySelector('input[type="checkbox"]');
    const checkqilingan = checkbox.checked;
    if (movieName) {
        kinoyarat(movieName, checkqilingan);
        movieInput.value = '';
    }
});

