"use strict";
const buttonMenu = document.getElementById('button_menu');
const dialogMenu = document.getElementById('dialog__menu');
// Exibindo modal
buttonMenu === null || buttonMenu === void 0 ? void 0 : buttonMenu.addEventListener('click', () => {
    dialogMenu.showModal();
});
// navigationCustomers
const navigationCustomers = document.querySelector('#navigation__customers');
// ContainerCustomers
const containerCustomers = document.getElementById('container__customers');
// arrows
const leftArrowButton = navigationCustomers === null || navigationCustomers === void 0 ? void 0 : navigationCustomers.firstElementChild;
const rightArrowButton = navigationCustomers === null || navigationCustomers === void 0 ? void 0 : navigationCustomers.lastElementChild;
leftArrowButton.addEventListener('click', () => {
    if (containerCustomers.scrollLeft < containerCustomers.scrollWidth) {
        containerCustomers.scroll({
            left: containerCustomers.scrollLeft - (containerCustomers.scrollWidth / 5) - 2.65
        });
    }
});
rightArrowButton.addEventListener('click', () => {
    if (containerCustomers.scrollLeft >= 0 && containerCustomers.scrollLeft < containerCustomers.scrollWidth) {
        containerCustomers.scroll({
            left: containerCustomers.scrollLeft + (containerCustomers.scrollWidth / 5) + 3.65
        });
    }
    console.log(containerCustomers.scrollLeft, containerCustomers.scrollWidth);
});
