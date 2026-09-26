const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
    
    if(window.scrollY > 50){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled")
    }
});

const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach(card => {

    const video = card.querySelector("video");
    const playButton = card.querySelector(".play-button");
    const thumbnail = card.querySelector(".video-thumbnail");

    playButton.addEventListener("click", () => {

        if (video.paused) {
            video.play();
            thumbnail.classList.add("playing");
            playButton.textContent = "❚❚";
        } else {
            video.pause();
            thumbnail.classList.remove("playing");
            playButton.textContent = "▶";
        }

    });

video.addEventListener("click", () => {

    if (video.paused) {
        video.play();
        thumbnail.classList.add("playing");
        playButton.textContent = "❚❚";
    } else {
        video.pause();
        thumbnail.classList.remove("playing");
        playButton.textContent = "▶";
    }

});

});