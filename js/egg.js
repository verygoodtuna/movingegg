const docuE = document.documentElement;
const newCursor = document.getElementById("circularCursor");
let posX = 0;
let posY = 0;

document.addEventListener('DOMcontentLoaded', () => {
    document.body.onmusemove = function(e) {
    posX = e.clientX + "px";
    posY = e.clientY + "px";

    newCursor.style.left = posX;
    newCursor.style.top = posY;
}
});

$(function () {
    $('.e_slide').slick({
        arrows: false,
        // fade: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '200px',
    })

    $('.slide_btn .egg_l').on('click', function () {
        $('.e_slide').slick('slickPrev')
    })

    $('.slide_btn .egg_r').on('click', function () {
        $('.e_slide').slick('slickNext')
    })

    $('.r_slide').slick({
        arrows: false,
        fade: true,
    })

    
    $('.r_btn .b_left').on('click', function () {
        $('.r_slide').slick('slickPrev')
    })

    $('.r_btn .b_right').on('click', function () {
        $('.r_slide').slick('slickNext')
    })
})