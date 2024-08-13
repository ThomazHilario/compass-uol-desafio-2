const buttonMenu = document.getElementById('button_menu')
const dialogMenu = document.getElementById('dialog__menu') as HTMLDialogElement

// Exibindo modal
buttonMenu?.addEventListener('click', () => {
    dialogMenu.showModal()
})

// navigationCustomers
const navigationCustomers = document.querySelector('#navigation__customers')

// ContainerCustomers
const containerCustomers = document.getElementById('container__customers') as HTMLDivElement

// arrows
const leftArrowButton = navigationCustomers?.firstElementChild as HTMLButtonElement
const rightArrowButton = navigationCustomers?.lastElementChild as HTMLButtonElement

let step = 0

//containerScrollWidth and containerScrollLeft
const containerScrollWidth = containerCustomers.scrollWidth
const containerScrollLeft = containerCustomers.scrollLeft

leftArrowButton.addEventListener('click', () => {
    
    if(containerCustomers.scrollLeft < containerCustomers.scrollWidth){
        step--

        // Active animation
        if(containerCustomers.scrollLeft > 0){
            playAnimation('transitionCarrouselBack','0.2s')
        }

        containerCustomers.scroll(
            {
                left:containerCustomers.scrollLeft - (containerCustomers.scrollWidth / 5) - 2.65
            }
        )    
    }
})

rightArrowButton.addEventListener('click', () => {
    if(containerCustomers.scrollLeft >= 0 && containerCustomers.scrollLeft < containerCustomers.scrollWidth){
        step++

        // Active animation
        playAnimation('transitionCarrousel','0.2s')
        

        containerCustomers.scroll(
            {
                left: containerCustomers.scrollLeft + (containerCustomers.scrollWidth / 5) + 3.65
            }
        )

        if(step == containerCustomers.children.length && window.innerWidth < 1024){
            containerCustomers.scroll(
                {
                    left: 0
                }
            ) 
            step = 0  
        }
    }
})

function playAnimation(nameTransition:string, timeTransition:string){
    containerCustomers.style.animationName = nameTransition
        containerCustomers.style.animationDuration = timeTransition

    setTimeout(() => {
        containerCustomers.style.animationName = ''
        containerCustomers.style.animationDuration = ''
    },400)
}