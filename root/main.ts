// header-promo
const headerPromo = document.getElementById('header__promo') as HTMLDivElement
const buttonHeaderPromo = headerPromo.lastElementChild as HTMLButtonElement

// Menu-mobile
const buttonMenu = document.getElementById('button__menu')
const buttonCloseDialog = document.getElementById('btn-close-dialog')
const dialogMenu = document.getElementById('dialog__menu') as HTMLDialogElement

// seach-mobile
const btnSeach = document.getElementById('open__seach') as HTMLButtonElement
const seachInput = btnSeach.nextElementSibling as HTMLInputElement

btnSeach?.addEventListener('click', () => {
    seachInput.style.display = `${seachInput.style.display == '' ? 'block' : ''}`
    seachInput.dataset.inputActive = `${seachInput.dataset.inputActive == 'true' ? 'false' : 'true'}`
})

//------------------- Customers -------------------//

// navigationCustomers
const navigationCustomers = document.querySelector('#navigation__customers')

// ContainerCustomers
const containerCustomers = document.getElementById('container__customers') as HTMLDivElement

// arrows
const leftArrowButton = navigationCustomers?.firstElementChild as HTMLButtonElement
const rightArrowButton = navigationCustomers?.lastElementChild as HTMLButtonElement

// Close header promo event
buttonHeaderPromo.addEventListener('click', () => {
    headerPromo.style.display = 'none'
})

// Open modal
buttonMenu?.addEventListener('click', () => {
    dialogMenu.showModal()
})

// Close modal
buttonCloseDialog?.addEventListener('click', () => {
    dialogMenu.close()
})

let step = 0

//containerScrollWidth and containerScrollLeft
const containerScrollWidth = containerCustomers.scrollWidth
const containerScrollLeft = containerCustomers.scrollLeft

leftArrowButton.addEventListener('click', () => {
    if(containerCustomers.scrollLeft < containerCustomers.scrollWidth){
        // Decrement step
        step--

        // Active animation
        if(containerCustomers.scrollLeft > 0){
            playAnimation('transitionCarrouselBack','0.2s')
        }

        // return scroll
        containerCustomers.scroll(
            {
                left:containerCustomers.scrollLeft - (containerCustomers.scrollWidth / containerCustomers.children.length) - 3
            }
        )    
    }
})

rightArrowButton.addEventListener('click', () => {
    if(containerCustomers.scrollLeft >= 0 && containerCustomers.scrollLeft < containerCustomers.scrollWidth){

        // Increment step
        step++

        // Active animation
        playAnimation('transitionCarrousel','0.2s')

        // Advancing scroll
        containerCustomers.scroll(
            {
                left: containerCustomers.scrollLeft + (containerCustomers.scrollWidth / containerCustomers.children.length) + 3
            }
        )

        if (step == containerCustomers.children.length && window.innerWidth < 1024) {
            containerCustomers.scroll({
                left: 0
            });
            step = 0;
        }

        
    }
})

// PlayAnimation
function playAnimation(nameTransition:string, timeTransition:string){
    containerCustomers.style.animationName = nameTransition
    containerCustomers.style.animationDuration = timeTransition

    setTimeout(() => {
        containerCustomers.style.animationName = ''
        containerCustomers.style.animationDuration = ''
    },400)
}