const images = document.querySelectorAll('.gallery img');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const closeBtn = document.getElementById('close-btn');

images.forEach(image => {
    image.addEventListener('click', () => {
        popupImage.src = image.src;
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