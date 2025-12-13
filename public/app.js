let viewport_location = window.visualViewport;
const back_to_top = document.getElementById('back_to_top');

window.addEventListener('scroll', function() {
    viewport_location.pageTop <= 500 ? back_to_top.classList.add('hide') : back_to_top.classList.remove('hide');
});


back_to_top.addEventListener('click', function(e) {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    e.preventDefault();
}
);
