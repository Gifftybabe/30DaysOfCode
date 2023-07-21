let playlist = document.querySelector('.playlist');
let options = document.querySelector('.options');

function open_p() {
    playlist.classList.toggle('active');
}



const songs = [
    {
        title: "Glossy Mambo",
        artist: "Paul Winslow",
        image: "images/Gift.png",
        audio: "audio/audio4.mp3"
    },
    {
        title: "Idyllic Beats",
        artist: "Rémo",
        image: "images/us.jpg",
        audio: "audio/audio3.mp3"
    },
    {
        title: "Cloud Nine",
        artist: "Basil & Lemon",
        image: "images/st.jpg",
        audio: "audio/audio2.mp3"
    },
    {
        title: "Melody Remedy",
        artist: "Didier, Thomas",
        image: "images/nz.jpg",
        audio: "audio/audio1.mp3"
    }
];

let currentSongIndex = 0;
let audioElement = new Audio();

function playSong(index) {
    currentSongIndex = index;
    loadSong();
    togglePlay();
}

function loadSong() {
    const { title, artist, image, audio } = songs[currentSongIndex];
    audioElement.src = audio;

    document.getElementById("songTitle").textContent = title;
    document.getElementById("artistName").textContent = artist;
    document.querySelector(".img img").src = image;
}

function togglePlay() {
    if (audioElement.paused) {
        audioElement.play();
        document.getElementById("play_btn").innerHTML = '<i class="bx bx-pause"></i>';
    } else {
        audioElement.pause();
        document.getElementById("play_btn").innerHTML = '<i class="bx bx-play"></i>';
    }
}

audioElement.addEventListener("timeupdate", function() {
    const { currentTime, duration } = audioElement;
    const progressPercent = (currentTime / duration) * 100;
    document.getElementById("slider").value = progressPercent;

    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    const formattedTime = `${currentMinutes}:${currentSeconds.toString().padStart(2, "0")}`;
    document.getElementById("currentTime").textContent = formattedTime;
});


function previousSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong();
    togglePlay();
}

function togglePlay() {
    if (audioElement.paused) {
        audioElement.play();
        document.getElementById("play_btn").innerHTML = '<i class="bx bx-pause"></i>';
        startImageRotation();
    } else {
        audioElement.pause();
        document.getElementById("play_btn").innerHTML = '<i class="bx bx-play"></i>';
        stopImageRotation();
    }
}

function startImageRotation() {
    const imgElement = document.querySelector(".img img");
    imgElement.classList.add("rotate");
}g

function stopImageRotation() {
    const imgElement = document.querySelector(".img img");
    imgElement.classList.remove("rotate");
}

// ...

function toggleMute() {
    if (audioElement.muted) {
        audioElement.muted = false;
        document.getElementById("volume_btn").innerHTML = '<i class="bx bxs-volume-low"></i>';
    } else {
        audioElement.muted = true;
        document.getElementById("volume_btn").innerHTML = '<i class="bx bxs-volume-mute"></i>';
    }
}


function changeVolume() {
    const volume = document.getElementById("volume_slider").value;
    audioElement.volume = volume;
    updateVolumeIcon(volume);
}

function updateVolumeIcon(volume) {
    const volumeBtn = document.getElementById("volume_btn");
    if (volume === 0 || audioElement.muted) {
        volumeBtn.innerHTML = '<i class="bx bxs-volume-mute"></i>';
    } else if (volume < 0.5) {
        volumeBtn.innerHTML = '<i class="bx bxs-volume-low"></i>';
    } else {
        volumeBtn.innerHTML = '<i class="bx bxs-volume-full"></i>';
    }
}




// ...



function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    loadSong();
    togglePlay();
}


document.getElementById("slider").addEventListener("input", function() {
    const { duration } = audioElement;
    const seekTime = (this.value * duration) / 100;
    audioElement.currentTime = seekTime;
});

function sidebar() {
    const player = document.querySelector(".main");
    player.classList.toggle("open");
    options.classList.toggle('active2');
}

function open_p() {

    const sidebar = document.querySelector(".playlist");
    sidebar.classList.toggle("active");
}


loadSong();






