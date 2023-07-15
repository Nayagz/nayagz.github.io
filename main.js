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
  
  var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
