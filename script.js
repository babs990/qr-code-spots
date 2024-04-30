const logo = document.querySelector('#logo')
const accroche = document.querySelector('#accroche')
const imageAccroche = document.querySelector('#imageAccroche')
const container = document.querySelector('.container')

/**
 * effet affichage
 */
window.addEventListener('load',()=>{
    const Observer = new IntersectionObserver((entries)=>{
        for(let entry of entries){
            if(entry.isIntersecting){
                entry.target.classList.add('visible')
                Observer.unobserve(entry.target)
            }
        }
    })

    Observer.observe(logo)
    Observer.observe(accroche)
    Observer.observe(imageAccroche)
    Observer.observe(container)

})


