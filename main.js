window.addEventListener("DOMContentLoaded", () => {
  const navbarLinks = document.querySelectorAll("#navbar a");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    });
  });
});
