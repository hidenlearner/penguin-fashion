const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const close = document.getElementById("close");
menu.addEventListener("click", () => {
  nav.classList.remove("hidden");
});

close.addEventListener("click", () => {
  nav.classList.add("hidden");
});
