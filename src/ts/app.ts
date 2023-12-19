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

// src/ts/slider.ts

window.addEventListener("DOMContentLoaded", (event) => {
  const images: string[] = [
    "./src/assets/desktop-image-hero-1.jpg",
    "./src/assets/desktop-image-hero-2.jpg",
    "./src/assets/desktop-image-hero-3.jpg",
  ];
  const titles: string[] = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials",
  ];
  const descriptions: string[] = [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  ];

  let currentSlide: number = 0;

  const heroSection = document.querySelector(".hero-section") as HTMLElement;
  const sliderTitle = document.querySelector(".slider-title") as HTMLElement;
  const sliderParagraph = document.querySelector(
    ".slider-paragraph"
  ) as HTMLElement;
  const leftButton = document.querySelector(".btn.left") as HTMLImageElement;
  const rightButton = document.querySelector(".btn.right") as HTMLImageElement;

  function updateContent(index: number) {
    heroSection.style.backgroundImage = `url(${images[index]})`;
    sliderTitle.textContent = titles[index];
    sliderParagraph.textContent = descriptions[index];
  }

  leftButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    updateContent(currentSlide);
  });

  rightButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % images.length;
    updateContent(currentSlide);
  });

  // Initialize with the first slide
  updateContent(currentSlide);
});
