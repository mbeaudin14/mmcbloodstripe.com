document.getElementById("year").textContent = new Date().getFullYear();

if (location.pathname.endsWith("/") || location.pathname.endsWith("/index.html")) {
  const legacyPages = {
    "#about": "about.html",
    "#gallery": "gallery.html",
    "#events": "events.html",
    "#contact": "contact.html"
  };
  function redirectLegacySection() {
    const destination = legacyPages[location.hash];
    if (destination) location.replace(destination);
  }
  redirectLegacySection();
  window.addEventListener("hashchange", redirectLegacySection);
}

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.getElementById("primary-navigation");
function setMenuOpen(open) {
  navigation.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
}
menuButton.addEventListener("click", () => setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true"));
navigation.addEventListener("click", event => {
  if (event.target.closest("a")) setMenuOpen(false);
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuButton.focus();
  }
});
window.matchMedia("(min-width: 1001px)").addEventListener("change", event => {
  if (event.matches) setMenuOpen(false);
});
document.documentElement.classList.add("js");
