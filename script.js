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
        artist: "Chris Brown",
        title: "Kiss Kiss (Feat. T-Pain)",
        url: "https://archive.org/download/exclusive_202405/02.%20Kiss%20Kiss%20%28Feat.%20T-Pain%29.mp3",
        picture: "https://ia600400.us.archive.org/0/items/exclusive_202405/Front%20Cover.jpg"
    },
    {
        artist: "Chris Brown",
        title: "With You",
        url: "https://dn710005.ca.archive.org/0/items/exclusive_202405/04.%20With%20You.mp3",
        picture: "https://ia600400.us.archive.org/0/items/exclusive_202405/Front%20Cover.jpg"
    },
    {
        artist: "Chris Brown",
        title: "Wall To Wall",
        url: "https://dn710005.ca.archive.org/0/items/exclusive_202405/09.%20Wall%20To%20Wall.mp3",
        picture: "https://ia600400.us.archive.org/0/items/exclusive_202405/Front%20Cover.jpg"
    },
    {
        artist: "Chris Brown",
        title: "I Can Transform Ya (Feat. Lil Wayne & Swizz Beatz)",
        url: "https://ia600608.us.archive.org/15/items/graffiti_202405/01.%20I%20Can%20Transform%20Ya%20%28Feat.%20Lil%20Wayne%20%26%20Swizz%20Beatz%29.mp3",
        picture: "https://i.scdn.co/image/ab67616d0000b2736f33acdab3fc71fc05e16647"
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
        songIndex = songs.length - 1; // Va a la última
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