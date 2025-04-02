const btn = document.querySelector('.btn-open')
let btnIsPurple = true;
const modal = document.querySelector('.modal')
const body = document.body

// ===============================================================================
const closeModal = () => {
    modal.classList.remove('modal-open')
    body.classList.remove('body-fixed')
}
const openModal = () => {
    modal.classList.add('modal-open')
    body.classList.add('body-fixed')
}

const buttonMove = () => {
    btn.classList.remove('move-1')
    btn.classList.toggle('move')
}
const purpleRemove = () => {
    btn.classList.remove('purple')
}

// ===========================================================================================
btn.addEventListener('click', () => {
    btn.classList.toggle('purple')
    buttonMove()
    openModal()
})

modal.addEventListener('click', even => {
    const target = even.target
    if (target && target.classList.contains('modal') || target.classList.contains('modal_close-btn')) {
        closeModal()
        btn.classList.toggle('move-1')
    
    }
    purpleRemove()
    btn.classList.remove('move')
})

document.addEventListener('keydown', event => {
    // console.log(event.code)
    if (event.code === 'Escape' && modal.classList.contains('modal-open')) {
        btn.classList.toggle('move')
        btn.classList.toggle('move-1')
        purpleRemove()
        closeModal()
    } 
})

