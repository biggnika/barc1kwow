(function () {

    // burger
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav-link')

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

    // ====================================================================================
    // modal

    const modal = document.querySelector('.modal')
    const modalButtonOpen = document.querySelector('.about-img--button')

    modalButtonOpen.addEventListener('click', (e) => {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    })

    modal.addEventListener('click', (e) => {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal-cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    })

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && modal.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    })
    // ======================================================================================
    // tab

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls-link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls-link--active')) return


        const tabContentID = tabControl.getAttribute('href')
        // console.log(tabControl.getAttribute('href'))
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls-link--active')
        const activeContent = document.querySelector('.tab-content-show')

        activeContent.classList.remove('tab-content-show')
        tabContent.classList.add('tab-content-show')

        activeControl.classList.remove('tab-controls-link--active')
        tabControl.classList.add('tab-controls-link--active')
    }

    // ======================================================================================
    // accordion


    const accordionList = document.querySelectorAll('.accordion-list')

    accordionList.forEach(el => {

        // document.querySelector('.accordion-list_item--opened .accordion-list_content').style.maxHeight = document.querySelector('.accordion-list_item--opened .accordion-list_content').scrollHeight + 'px'

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list_item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list_item--opened .accordion-list_content')


            const accordionControl = e.target.closest('.accordion-list_control')
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement
            const accordionContent = accordionControl.nextElementSibling

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list_item--opened')
                accordionOpenedContent.style.maxHeight = null
            }
            accordionItem.classList.toggle('accordion-list_item--opened')

            if (accordionItem.classList.contains('accordion-list_item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            } else {
                accordionContent.style.maxHeight = null
            }


        })

    })


    // =======================================================================
    // слайдер-галлерея
    const swiper = new Swiper('.gallery_slider', {

        spaceBetween: 15,
        slidesPerView: 1.5,

        pagination: {
            el: '.gallery_pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.gallery_next',
            prevEl: '.gallery_prev',
        },
        breakpoints: {
            601: {
                slidesPerView: 3,            
            },
            801: {
                spaceBetween: 32,             
            },
            1101: {
                slidesPerView: 4,               
            }
        }
    });

})()


