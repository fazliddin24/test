//
// function enlargeImage(img) {
//     const overlay = document.getElementById('overlay');
//     const overlayImage = document.getElementById('overlay-image');
//
//     overlayImage.src = img.src; // Set enlarged image source
//     overlay.style.display = 'flex'; // Show the overlay
// }
//
// function closeImage() {
//     const overlay = document.getElementById('overlay');
//     overlay.style.display = 'none';
// }


const images = ["2.jpg", "3.jpg", "4.jpg", "MainAfter.webp"];
let currentIndex = 0;
const carouselImage = document.getElementById("carousel-image");
function showImage(index) {
    carouselImage.classList.remove("active");
    setTimeout(() => {
        carouselImage.src = images[index];
        carouselImage.classList.add("active");
    }, 150);
}
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}
