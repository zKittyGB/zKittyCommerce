function displayLightbox() {
  // function that create the display of the lightbox
  const lightboxImg = document.querySelector(".carousel-images");
  const lightboxControl = document.querySelector(".carousel-controls");
  const alexaImg = document.createElement("img");
  const kindleImg = document.createElement("img");
  const asusImg = document.createElement("img");
  const arrowLeft = document.createElement("button");
  const arrowRight = document.createElement("button");
  alexaImg.setAttribute(
    "src",
    "/dist/src/assets/images/products/alexa_lightbox.png"
  );
  alexaImg.setAttribute("alt", "alexa_banner");
  kindleImg.setAttribute(
    "src",
    "/dist/src/assets/images/products/kindle_lightbox.png"
  );
  kindleImg.setAttribute("alt", "kindle_banner");
  asusImg.setAttribute(
    "src",
    "/dist/src/assets/images/products/asus_lightbox.png"
  );
  asusImg.setAttribute("alt", "asus_banner");
  arrowLeft.setAttribute("class", "prev-btn fa-solid fa-chevron-left fa-2xl");
  arrowRight.setAttribute("class", "next-btn fa-solid fa-chevron-right fa-2xl");
  lightboxImg.appendChild(alexaImg);
  lightboxImg.appendChild(kindleImg);
  lightboxImg.appendChild(asusImg);
  lightboxControl.appendChild(arrowLeft);
  lightboxControl.appendChild(arrowRight);
}
displayLightbox();

// Script JavaScript for the lightbox
const carouselImages = document.querySelector(".carousel-images");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  currentIndex =
    currentIndex === 0 ? carouselImages.children.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex =
    currentIndex === carouselImages.children.length - 1 ? 0 : currentIndex + 1;
  updateCarousel();
});

// Manual switch with button
function updateCarousel() {
  carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto switch after 3 secondes (3000 millisecondes)
setInterval(() => {
  currentIndex =
    currentIndex === carouselImages.children.length - 1 ? 0 : currentIndex + 1;
  updateCarousel();
}, 5000);
