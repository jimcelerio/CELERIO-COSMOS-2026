// Mobile Menu Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const icon = menuBtn.querySelector("i");

  // Toggle menu on button click
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    // Toggle icon between bars and X
    if (mobileMenu.classList.contains("hidden")) {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    } else {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add("hidden");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });

  // Close menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    });
  });
});
