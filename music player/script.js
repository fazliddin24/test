const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = new Audio('lady.mp3');
const albumArt = document.getElementById('album-art');
const overlay = document.getElementById('overlay');
const trackName = document.getElementById('track-name');
const progressLine = document.getElementById('progress-line');
const currentTimeText = document.getElementById('current-time');

let isPlaying = false;

function updateProgressBar() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressLine.style.width = progress + '%';
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    currentTimeText.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}


function rotateImageStart() {
    albumArt.style.animationPlayState = "running";
}

function rotateImageStop() {
    albumArt.style.animationPlayState = "paused";
}

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        rotateImageStop();
        overlay.style.display = "none";
    } else {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        rotateImageStart();
        overlay.style.display = "block";
        trackName.textContent = "Lady - Your Track Name";
    }
    isPlaying = !isPlaying;
});

prevBtn.addEventListener('click', () => {
    audio.currentTime = 0;
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        rotateImageStart();
        overlay.style.display = "block";
    }
});

nextBtn.addEventListener('click', () => {
    audio.currentTime = audio.duration;
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        rotateImageStop();
        overlay.style.display = "none";
    }
});
audio.addEventListener('timeupdate', updateProgressBar);


