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



// MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});

// Close menu after clicking a navigation link

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});