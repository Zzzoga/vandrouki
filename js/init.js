if (document.documentElement.clientWidth > 480) {
    $('.cat__list').slick({
        dots: false,
        infinite: false,
        slidesToShow: 13,
        slidesToScroll: 13,
        variableWidth: true,
        prevArrow: '.arrow__container.prev',
        nextArrow: '.arrow__container.next',
        swipeToSlide: true
    });
} else {
    $('.cat__list').slick({
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        prevArrow: '.arrow__container.prev',
        nextArrow: '.arrow__container.next',
        swipeToSlide: true
    });
}