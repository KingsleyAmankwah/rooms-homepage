// navbar.ts
window.addEventListener("DOMContentLoaded", (event) => {
  const hamburgerIcon = document.querySelector(
    ".hamburger-icon"
  ) as HTMLImageElement;
  const additionalNavbar = document.querySelector(
    ".additional-navbar"
  ) as HTMLElement;

  const closeButton = document.querySelector(".close-icon") as HTMLImageElement;

  function toggleNavbarDisplay() {
    additionalNavbar.style.display =
      additionalNavbar.style.display === "none" ? "block" : "none";
  }

  hamburgerIcon.addEventListener("click", toggleNavbarDisplay);

  // Event listener for close button
  closeButton.addEventListener("click", toggleNavbarDisplay);
});
