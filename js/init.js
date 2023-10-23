    $('.cat__list').slick({
        dots: false,
        infinite: false,
        slidesToShow: 13,
        slidesToScroll: 13,
        variableWidth: true,
        prevArrow: '.arrow__container.prev',
        nextArrow: '.arrow__container.next',
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 11,
                slidesToScroll: 11,
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 7
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
        ]    
    });
