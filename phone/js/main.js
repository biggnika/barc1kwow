(function () {

    // header_hero swlider
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

    // header_hero nav_button

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

    // =============================================================
    // selled slider

    new Swiper('.selled_slider', {
        
        loop: true,
        spaceBetween: 28,
        slidesPerView: 1.5,
        speed: 1000,

        autoplay: {
            delay: 2150,
            stopOnLastSLide: true,
            disableOnInteraction: false,
        },

        breakpoints: {
            950: {
                slidesPerView: 4,
            },
            600: {
                slidesPerView: 3,
            },
            449: {
                slidesPerView: 2.5,
            },
            // 450: {
            //     slidesPerView: 2,
            // },
            350: {
                slidesPerView: 2,
            },
        }
    })
    





})()
// ====================================================================================



