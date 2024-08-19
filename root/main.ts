// header-promo
const headerPromo = document.getElementById('header__promo') as HTMLDivElement
const buttonHeaderPromo = headerPromo.lastElementChild as HTMLButtonElement

// Close header promo event
buttonHeaderPromo.addEventListener('click', () => {
    headerPromo.style.display = 'none'
})

//------------------- Menu Mobile -------------------//
const buttonMenu = document.getElementById('button__menu')
const buttonCloseDialog = document.getElementById('btn-close-dialog')
const dialogMenu = document.getElementById('dialog__menu') as HTMLDialogElement

// Open modal
buttonMenu?.addEventListener('click', () => {
    dialogMenu.showModal()
})

// Close modal
buttonCloseDialog?.addEventListener('click', () => {
    dialogMenu.close()
})

//-------------------------------------------------//

//------------------- Seach mobile -------------------//
const btnSeach = document.getElementById('open__seach') as HTMLButtonElement
const seachInput = btnSeach.nextElementSibling as HTMLInputElement

btnSeach?.addEventListener('click', () => {
    seachInput.style.display = `${seachInput.style.display == '' ? 'block' : ''}`
    seachInput.dataset.inputActive = `${seachInput.dataset.inputActive == 'true' ? 'false' : 'true'}`
})

//-------------------------------------------------//

//------------------- Customers -------------------//

// navigationCustomers
const navigationCustomers = document.querySelector('#navigation__customers')

// ContainerCustomers
const containerCustomers = document.getElementById('container__customers') as HTMLDivElement

// arrows
const leftArrowButton = navigationCustomers?.firstElementChild as HTMLButtonElement
const rightArrowButton = navigationCustomers?.lastElementChild as HTMLButtonElement

// scroll count
let scrollCount = 0

//containerScrollWidth and containerScrollLeft
const containerScrollWidth = containerCustomers.scrollWidth
const containerScrollLeft = containerCustomers.scrollLeft

// reset scroll and step
function resetScrollAndStep(){
    containerCustomers.scroll({
        left: 0
    });
    scrollCount = 0;
}

// Returning scroll to beginning
function returningScrollToBeginning(){
    if (scrollCount == containerCustomers.children.length && window.innerWidth < 1024) {
        // Reset scroll and step
        resetScrollAndStep()
    } else if(scrollCount === 4 && window.innerWidth >= 1024 && window.innerWidth < 1450){
        // Reset scroll and step
        resetScrollAndStep()
    } else if(scrollCount === 3 && window.innerWidth >= 1450){
        // Reset scroll and step
        resetScrollAndStep()
    }
}

leftArrowButton.addEventListener('click', () => {
    if(containerCustomers.scrollLeft < containerCustomers.scrollWidth){
        // Decrement scrollCount
        scrollCount--

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

        // Increment scrollCount
        scrollCount++

        // Active animation
        playAnimation('transitionCarrousel','0.2s')

        // Advancing scroll
        containerCustomers.scroll(
            {
                left: containerCustomers.scrollLeft + (containerCustomers.scrollWidth / containerCustomers.children.length) + 3
            }
        )
    
        // returng scroll to beginning
        returningScrollToBeginning()
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

//-------------------------------------------------//