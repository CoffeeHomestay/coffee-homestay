const hamburgerMenu = document.getElementById("hamburger");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.getElementById("close-btn");

function toggleHamburger() {
  if (window.innerWidth <= 768) {
    hamburgerMenu.style.display = "block";
  } else {
    hamburgerMenu.style.display = "none";
  }
}

hamburgerMenu.addEventListener("click", () => {
  sidebar.classList.add("active");
  document.body.classList.add("sidebar-active");
  if (window.innerWidth <= 768) {
    hamburgerMenu.style.display = "none";
  }
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  document.body.classList.remove("sidebar-active");
  if (window.innerWidth <= 768) {
    hamburgerMenu.style.display = "block";
  }
});

document.addEventListener("click", (event) => {
  if (
    !sidebar.contains(event.target) &&
    !hamburgerMenu.contains(event.target)
  ) {
    sidebar.classList.remove("active");
    document.body.classList.remove("sidebar-active");
    if (window.innerWidth <= 768) {
      hamburgerMenu.style.display = "block";
    }
  }
});

const dropdowns = document.querySelectorAll(".dropdown-toggle");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    const dropdownContent = dropdown.nextElementSibling;
    const parentLi = dropdown.parentElement;

    document.querySelectorAll(".dropdown-content").forEach((content) => {
      if (content !== dropdownContent) {
        content.style.display = "none";
      }
    });

    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      parentLi.classList.remove("expanded");
    } else {
      dropdownContent.style.display = "block";
      parentLi.classList.add("expanded");
    }
  });
});

window.addEventListener("resize", toggleHamburger);
toggleHamburger();

// scroll.js
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const homeSection = document.getElementById("home-section");
  const cardSection = document.getElementById("card-section");

  function handleScroll() {
    const homeSectionHeight = homeSection.offsetHeight;
    const cardSectionTop = cardSection;
    const scrollPosition = window.scrollY + window.innerHeight; // Include the viewport height

    if (scrollPosition == homeSectionHeight) {
      // Navbar should be transparent when in home section or at the top
      navbar.classList.add("scrolled-transparent");
      navbar.classList.remove("scrolled");
    } else if (scrollPosition == cardSectionTop) {
      navbar.classList.add("scrolled");
      navbar.classList.remove("scrolled-transparent");
    } else {
      // Navbar should be white when scrolling into card section
      navbar.classList.add("scrolled");
      navbar.classList.remove("scrolled-transparent");
    }
  }

  window.addEventListener("scroll", handleScroll);
});

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 100,
});

ScrollReveal().reveal(
  ".home-content, .homestay-section, .special-section h1, .interest-section h1",
  { origin: "top" }
);
ScrollReveal().reveal(
  ".homestay-content, .special-section p, .contact-content, .home-content p, .homestay-section p, .interest-content",
  {
    origin: "left",
  }
);

ScrollReveal().reveal(
  ".special-content, .interest-content p, .contact-content-img, .card",
  { origin: "bottom" }
);
