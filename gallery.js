const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector(".lightbox-caption");
let galleryTrigger = null;
document.querySelectorAll(".gallery-link").forEach(link => {
  link.addEventListener("click", event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || typeof lightbox.showModal !== "function") return;
    event.preventDefault();
    galleryTrigger = link;
    lightboxImg.alt = link.querySelector("img").alt;
    lightboxImg.src = link.href;
    lightboxCaption.textContent = lightboxImg.alt;
    lightbox.showModal();
    lightbox.querySelector(".close").focus();
  });
});
lightboxImg.addEventListener("error", () => {
  lightboxCaption.textContent = "The full-size photo could not be loaded.";
});
lightbox.querySelector(".close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) lightbox.close();
});
lightbox.addEventListener("close", () => {
  lightboxImg.removeAttribute("src");
  if (galleryTrigger) galleryTrigger.focus();
});
