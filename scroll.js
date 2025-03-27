var scrollingTop = document.getElementById("scroll-top");

window.addEventListener('scroll', function() {
    scrollingTop.style = "background: rgba(0, 0, 0, "+(window.scrollY)/1000+")";
});