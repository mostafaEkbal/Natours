let viewport_location = window.visualViewport;
const back_to_top = document.getElementById('back_to_top');

window.addEventListener('scroll', function() {
    viewport_location.pageTop > 0 ? back_to_top.classList.remove('hide') : back_to_top.classList.add('hide');
});


back_to_top.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
);
