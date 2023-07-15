const navLinks = document.querySelectorAll('#sidebar ul li');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.getAttribute('data');
        const section = document.getElementById(id);
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth',
        });
    });
});
