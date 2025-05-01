(function () {
    const swiper = new Swiper('.hero_slider', {
        speed: 1000,

        // pagination: {
        //     el: '.swiper-pagination',
        // },

        navigation: {
            nextEl: '.hero_next',
            prevEl: '.hero_prev',
        },
        scrollbar: {
            el: '.hero_scrollbar',
            draggable: true,
        },
    });

    document.addEventListener('DOMContentLoaded', function () {
        const arrow = document.querySelector('.arrow');
        const button = document.querySelector('.nav_item-button');

        button.addEventListener('click', function () {
            arrow.classList.toggle('rotated')
        });
    });

    // ===================================================================

    // burger
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav')

        if (!burgerIcon && !burgerNavLink) return

        // if(burgerIcon){
        //     e.preventDefault()
        // }
        if (document.documentElement.clientWidth > 900) return


        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }






})()
// ====================================================================================



