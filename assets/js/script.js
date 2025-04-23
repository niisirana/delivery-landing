//burger-menu

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";

  document.querySelectorAll(".nav-item").forEach((n) =>
    n.addEventListener("click", () => {
      dropDownMenu.classList.remove("open");
    })
  );
};

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".reviews-container");
  const reviews = document.querySelectorAll(".review");
  const prevBtn = document.querySelector(".arrow-left");
  const nextBtn = document.querySelector(".arrow-right");

  let currentIndex = 0;

  //carousel function
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

    updateDots();
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

  let startX = 0;

  container.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  container.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;

    if (deltaX < -50) {
      currentIndex = (currentIndex + 1) % reviews.length;
      updateCarousel();
    }

    if (deltaX > 50) {
      currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      updateCarousel();
    }
  });

  //dots
  function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }

  //phone mask
  const phoneInput = document.getElementById("phone");
  const maskOptions = {
    mask: "+{7} (000) 000-00-00",
  };

  IMask(phoneInput, maskOptions);
});
