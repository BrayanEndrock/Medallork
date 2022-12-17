window.onscroll = function() {
    stickyAnnouncementBar();
};

var annoucementBar = document.querySelector('.announcement-bar');
var stickyPosition = annoucementBar.offsetTop;

function stickyAnnouncementBar() {
    if (window.pageYOffset > 1) {
        annoucementBar.classList.add("announcement-bar--sticky");
    } else {
        annoucementBar.classList.remove("announcement-bar--sticky");
    }
}

$(document).ready(function() {
    const productFeaturedImageSlider = $('.product__gallery--featured-image__slider');

    let productFeaturedImageSliderSettings = () => {
        return {
            lazyLoad: 'ondemand',
            infinite: true,
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            fade: true,
            asNavFor: '.product__gallery--thumbnails__slider',
            prevArrow:"<button class='slick-prev slick-arrow' aria-label='Previous' type='button' style=''><span class='material-icons'>expand_circle_down</span></button>",
            nextArrow:"<button class='slick-next slick-arrow' aria-label='Next' type='button' style=''><span class='material-icons'>expand_circle_down</span></button>",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        infinite: true,
                        dots: false,
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
    }

    productFeaturedImageSlider.slick(productFeaturedImageSliderSettings());
    
    const productThumbsSlider = $('.product__gallery--thumbnails__slider');

    let productThumbsGetSliderSettings = () => {
        return {
            lazyLoad: 'ondemand',
            infinite: true,
            dots: false,
            arrows: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.product__gallery--featured-image__slider',
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        infinite: true,
                        dots: false,
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        }
    }

    productThumbsSlider.slick(productThumbsGetSliderSettings());
});