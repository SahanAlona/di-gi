$(function () {
    $('.top-slider').slick({
        dots: true,
        infinite: false,
        nextArrow:
            '<button type="button" class="slick-arrow slick-next"><img src="./images/next.svg" alt="next arrow"></button>',
        prevArrow:
            '<button type="button" class="slick-arrow slick-prev"><img src="./images/prev.svg" alt="prev arrow"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {},
            },

            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    arrows: false,
                },
            },
        ],
    });

    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {},
            },

            {
                breakpoint: 640,
                settings: {},
            },
        ],
    });
});

// Masonry for Latest-news__items
let elem = document.querySelector('.latest-news__items');
let msnry = new Masonry(elem, {
    // options
    itemSelector: '.latest-news__item',
    columnWidth: 270,
    horizontalOrder: true,
    fitWidth: true,
    gutter: 30,
});

// preloader
let mask = document.querySelector('.mask');
window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 600);
});
