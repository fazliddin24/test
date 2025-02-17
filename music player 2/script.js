const playPauseBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const trackInfo = document.querySelector('.player .track-info');
const audio = new Audio();
const playlistTracks = document.querySelectorAll('.playlist .track');
const progressLine = document.querySelector('.progress-line');
let currentTrackIndex = 0;
const khdsb = document.querySelector('.khdsb')


const tracks = [{name: 'Die with a smile', src: 'Lady_Gaga,_Bruno_Mars_Die_With_A_Smile_Official_Music_Video.mp3', img: 'die.jpg'
}, {name: 'Navai, MONA - Есенин', src: 'Navai, MONA - Есенин.mp3', img: 'esenin.jpg'
}, {name: 'Sam Smith - Fire On Fire', src: 'Sam Smith - Fire On Fire.mp3', img: 'fire.jpg'
}, {name: 'Antigeroy', src: 'GV9q-xDD2jc.mp3', img: 'antigeroy.jpg'
}, {name: 'Milady   Swerodo - Прикосновение', src: 'Milady   Swerodo - Прикосновение.mp3', img: '2.jpg'}];

let isPlaying = false;


function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.src;
    trackInfo.textContent = `Playing: ${track.name}`;
    document.querySelector('.player img').src = track.img;
    highlightTrack(index);
}

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

prevBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) audio.play();
});

nextBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) audio.play();
});

playlistTracks.forEach((trackElement, index) => {
    trackElement.addEventListener('click', () => {
        currentTrackIndex = index;
        loadTrack(currentTrackIndex);
        audio.play();
        isPlaying = true;
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    });
});


function highlightTrack(index) {
    playlistTracks.forEach((trackElement, idx) => {
        trackElement.classList.toggle('active', idx === index);
    });
}

audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100 || 0;
    progressLine.style.width = progress + '%';
});

khdsb.addEventListener('click', (event) => {
    let width = khdsb.clientWidth;
    audio.currentTime = (event.offsetX / width) * audio.duration;
});


loadTrack(currentTrackIndex);

