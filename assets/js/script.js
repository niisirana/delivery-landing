const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".reviews-container");
  const reviews = document.querySelectorAll(".review");
  const prevBtn = document.querySelector(".arrow-left");
  const nextBtn = document.querySelector(".arrow-right");
  let currentIndex = 0;

  function updateCarousel() {
    const slideWidth = reviews[0].offsetWidth;
    const gap = 3.75 * 16;
    const totalSlideWidth = slideWidth + gap;

    container.style.transform = `translateX(-${
      currentIndex * totalSlideWidth
    }px)`;

    reviews.forEach((review) => review.classList.remove("active"));
    reviews[currentIndex].classList.add("active");

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === reviews.length - 1;
  }

  prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    updateCarousel();
  });

  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateCarousel();
  });

  updateCarousel();
});
