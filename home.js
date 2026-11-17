const heroVideo = document.getElementById("hero-video");
const videoButton = document.querySelector(".video-control");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
function syncVideoButton() {
  videoButton.textContent = heroVideo.paused ? "Play video" : "Pause video";
}
if (reducedMotion.matches) {
  heroVideo.autoplay = false;
  heroVideo.pause();
}
reducedMotion.addEventListener("change", event => {
  if (event.matches) heroVideo.pause();
});
heroVideo.addEventListener("play", syncVideoButton);
heroVideo.addEventListener("pause", syncVideoButton);
videoButton.addEventListener("click", async () => {
  if (heroVideo.paused) {
    try {
      await heroVideo.play();
      document.getElementById("video-status").textContent = "";
    } catch (error) {
      console.error("Unable to play the background video:", error);
      document.getElementById("video-status").textContent = "The video could not be played. Please try again.";
    }
  } else {
    heroVideo.pause();
  }
});
syncVideoButton();
videoButton.hidden = false;
