document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const nav = document.getElementById("nav-list");
    if (window.scrollY > 50) { // Adjust this value to the scroll position at which the color change should occur
        header.classList.add('scrolled');
        nav.classList.add("show");
    } else {
        header.classList.remove('scrolled');
        nav.classList.remove("show");
    }
});