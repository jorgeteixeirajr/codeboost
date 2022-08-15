const linksSection = document.querySelectorAll(".js-nav li a");

function scrollToSection(event) {
  event.preventDefault();

  const href = event.currentTarget.getAttribute("href");

  const section = document.querySelector(href);

  const initPosition = section.offsetTop;

  window.scrollTo({
    top: initPosition - 80,
    behavior: "smooth",
  });
}

linksSection.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});
