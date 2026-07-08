const title = document.getElementById("title");
const artist = document.getElementById("artist");
const picture = document.getElementById("picture");
const playBtn = document.getElementById("play-pause-button");
const playIcon = playBtn.querySelector("i");
const backBtn = document.getElementById("backward-button");
const nextBtn = document.getElementById("forward-button");

// Song List 
const songs = [
    {
        artist: "Lauryn Hill", 
        title: "Ex-Factor",
        url: "audio/ex-factor-audio.mp3",
        picture: "images/The-Miseducation-Of-Lauryn-Hill.jpg"
    },
    {
        artist: "Chris Brown", 
        title: "Something In The Water",
        url: "audio/something-in-the-water-audio.mp3", 
        picture: "images/Brown.jpg" 
    }
];

// Player State
let isPlaying = false;
let songIndex = 0;

// Initialize the Audio object
const audio = new Audio(songs[songIndex].url);

// Function to load song details into the UI
function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    picture.style.backgroundImage = `url('${song.picture}')`;
    audio.src = song.url;
}

// Function Play/Pause
function togglePlay() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

function playSong() {
    isPlaying = true;
    playIcon.classList.replace("fa-play", "fa-pause");
    audio.play();
}

function pauseSong() {
    isPlaying = false;
    playIcon.classList.replace("fa-pause", "fa-play");
    audio.pause();
}

// Function next songf
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0; // Vuelve al inicio
    }
    loadSong(songs[songIndex]);
    if (isPlaying) audio.play(); 
}

// Function previous song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1; 
    }
    loadSong(songs[songIndex]);
    if (isPlaying) audio.play();
}

// --- Event Listeners ---

playBtn.addEventListener("click", togglePlay);
nextBtn.addEventListener("click", nextSong);
backBtn.addEventListener("click", prevSong);

// Automatically skip to the next song when the current one ends
audio.addEventListener("ended", nextSong);

// Initial load
loadSong(songs[songIndex]);