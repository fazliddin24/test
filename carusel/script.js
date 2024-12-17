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


const images = ["2.jpg","3.jpg","4.jpg","MainAfter.webp", "White%20&%20Blue%20Elegant%20Modern%20Participation%20Certificate.png", "dol.jpg"];
let currentIndex = 0;
const carouselImage = document.getElementById("carousel-image");
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImage.src = images[currentIndex];
}
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    carouselImage.src = images[currentIndex];
}
