const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const body = document.body 

const openModal = () => {
    modal.classList.add('modal--open')
    body.classList.add('box--fixed')
}

const closeModal = () => {
    modal.classList.remove('modal--open')    
    body.classList.remove('box--fixed')
}

btn.addEventListener('click', openModal)

modal.addEventListener('click', event => {
    const target = event.target

    if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')) {
        closeModal()
    }
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
        closeModal()
    }
})