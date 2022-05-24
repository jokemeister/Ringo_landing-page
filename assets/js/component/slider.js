import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

const slider = () => {
    // swiper hero
    const heroBgSlider = new Swiper(".js--hero-slider", {
        cssMode: true,
        navigation: {
            nextEl: ".js--hero-navigation-next",
            prevEl: ".js--hero-navigation-prev",
        },
        pagination: {
            bulletActiveClass: 'is-active',
            bulletClass: 'hero__container__slider-bottom__point__item',
            el: ".js--hero-points",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        }
    });

    const heroContentSlider = new Swiper(".js--hero-content-slider", {
        cssMode: true,
        navigation: {
            nextEl: ".js--hero-navigation-next",
            prevEl: ".js--hero-navigation-prev",
        },
        pagination: {
            bulletActiveClass: 'is-active',
            bulletClass: 'hero__container__slider-bottom__point__item',
            el: ".js--hero-points",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        mousewheel: {
            invert: false,
        },
    });
    // /swiper hero
}

export default slider;