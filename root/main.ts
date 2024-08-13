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

leftArrowButton.addEventListener('click', () => {
    
    if(containerCustomers.scrollLeft < containerCustomers.scrollWidth){

        containerCustomers.scroll(
            {
                left:containerCustomers.scrollLeft - (containerCustomers.scrollWidth / 5) - 2.65
            })
    }

})

rightArrowButton.addEventListener('click', () => {
    if(containerCustomers.scrollLeft >= 0 && containerCustomers.scrollLeft < containerCustomers.scrollWidth){

        containerCustomers.scroll(
            {
                left: containerCustomers.scrollLeft + (containerCustomers.scrollWidth / 5) + 3.65
            })
    }
    console.log(containerCustomers.scrollLeft, containerCustomers.scrollWidth)
})