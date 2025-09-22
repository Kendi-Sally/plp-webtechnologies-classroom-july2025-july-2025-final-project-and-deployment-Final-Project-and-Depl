// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("nav ul");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme switcher
const btn = document.getElementById("themeSwitcher");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    btn.textContent = "Switch to Light Mode";
  } else {
    btn.textContent = "Switch to Dark Mode";
  }
});
