const images = document.querySelectorAll('.corner-images img');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const closeBtn = document.getElementById('close-btn');
const activeImage = document.getElementById('active-image');
const activeImageTag = activeImage.querySelector('img');

let currentIndex = 0;
function changeActiveImage() {
    const src = images[currentIndex].getAttribute('src');
    activeImageTag.setAttribute('src', src);
}
images.forEach(image => {
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
images.forEach(image => {
    image.addEventListener('click', () => {
        const src = image.getAttribute('src');
        activeImageTag.setAttribute('src', src);
        activeImage.style.display = 'flex';
    });
});
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    changeActiveImage();
}, 2000);
