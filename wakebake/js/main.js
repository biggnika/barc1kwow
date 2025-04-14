(function () {

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


    const modal = document.querySelector('.modal')
    const modalButtonOpen = document.querySelector('.about-img--button')

    modalButtonOpen.addEventListener('click', (e) => {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    })

    modal.addEventListener('click', (e) => {
        e.preventDefault()

            const target = e.target

            if (target.closest('.modal-cancel')|| target.classList.contains('modal')){
                document.body.classList.remove('body--opened-modal')
            }        
    })

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && modal.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        } 
    })
    



})()


