// Jake Zamarripa 10/4/26

const playlistContainer = document.querySelector("#playlistContainer");
const addBtn = document.querySelector("#addBtn");
const songTitle = document.querySelector("#songTitle");
const songArtist = document.querySelector("#songArtist");


function addSong(songTitle, songArtist) {
    const article = document.createElement("article");
    article.classList.add("songCard");

    const titleSpan = document.createElement("span");
    titleSpan.textContent = `${songTitle} - ${songArtist}`;
    
    const delButton = document.createElement("button");
    delButton.textContent = "Delete";
    delButton.classList.add("deleteBtn");

    article.appendChild(titleSpan);
    article.appendChild(delButton);
    playlistContainer.appendChild(article);
}

function addButton() {
    checkTitle = songTitle.value;
    checkArtist = songArtist.value;

    if (checkTitle && checkArtist) {
        addSong(checkTitle, checkArtist);
        songTitle.value = "";
        songArtist.value = "";
    }
}

addBtn.addEventListener("click", addButton);

function delSong(event) {
    console.log(`Event has bubbled up to ${event.target}`);

    if (event.target.classList.contains("deleteBtn")) {
        event.target.parentElement.remove();
    }
}

playlistContainer.addEventListener("click", delSong);