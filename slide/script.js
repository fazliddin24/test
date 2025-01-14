document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let activeIndex = 0;

    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    function updateSlides() {
        slides.forEach((slide, index) => {
            const info = slide.querySelector('.info');
            slide.classList.remove('active');
            info.classList.remove('slide-in');
            if (index === activeIndex) {
                slide.classList.add('active');
                setTimeout(() => {
                    info.classList.add('slide-in');
                }, 100);
            }
        });
    }
    nextButton.addEventListener('click', function () {
        activeIndex = (activeIndex + 1) % slides.length;
        updateSlides();
    });
    prevButton.addEventListener('click', function () {
        activeIndex = (activeIndex - 1 + slides.length) % slides.length;
        updateSlides();
    });
    updateSlides();
});
