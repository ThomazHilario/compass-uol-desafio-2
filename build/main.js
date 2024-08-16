"use strict";
// header-promo
const headerPromo = document.getElementById('header__promo');
const buttonHeaderPromo = headerPromo.lastElementChild;
// Menu-mobile
const buttonMenu = document.getElementById('button__menu');
const buttonCloseDialog = document.getElementById('btn-close-dialog');
const dialogMenu = document.getElementById('dialog__menu');
// seach-mobile
const btnSeach = document.getElementById('open__seach');
const seachInput = btnSeach.nextElementSibling;
btnSeach === null || btnSeach === void 0 ? void 0 : btnSeach.addEventListener('click', () => {
    seachInput.style.display = `${seachInput.style.display == '' ? 'block' : ''}`;
    seachInput.dataset.inputActive = `${seachInput.dataset.inputActive == 'true' ? 'false' : 'true'}`;
});
//------------------- Customers -------------------//
// navigationCustomers
const navigationCustomers = document.querySelector('#navigation__customers');
// ContainerCustomers
const containerCustomers = document.getElementById('container__customers');
// arrows
const leftArrowButton = navigationCustomers === null || navigationCustomers === void 0 ? void 0 : navigationCustomers.firstElementChild;
const rightArrowButton = navigationCustomers === null || navigationCustomers === void 0 ? void 0 : navigationCustomers.lastElementChild;
// Open modal
buttonMenu === null || buttonMenu === void 0 ? void 0 : buttonMenu.addEventListener('click', () => {
    dialogMenu.showModal();
});
// Close modal
buttonCloseDialog === null || buttonCloseDialog === void 0 ? void 0 : buttonCloseDialog.addEventListener('click', () => {
    dialogMenu.close();
});
let step = 0;
//containerScrollWidth and containerScrollLeft
const containerScrollWidth = containerCustomers.scrollWidth;
const containerScrollLeft = containerCustomers.scrollLeft;
leftArrowButton.addEventListener('click', () => {
    if (containerCustomers.scrollLeft < containerCustomers.scrollWidth) {
        step--;
        // Active animation
        if (containerCustomers.scrollLeft > 0) {
            playAnimation('transitionCarrouselBack', '0.2s');
        }
        containerCustomers.scroll({
            left: containerCustomers.scrollLeft - (containerCustomers.scrollWidth / 5) - 2.65
        });
    }
});
rightArrowButton.addEventListener('click', () => {
    if (containerCustomers.scrollLeft >= 0 && containerCustomers.scrollLeft < containerCustomers.scrollWidth) {
        step++;
        // Active animation
        playAnimation('transitionCarrousel', '0.2s');
        containerCustomers.scroll({
            left: containerCustomers.scrollLeft + (containerCustomers.scrollWidth / 5) + 3.65
        });
        if (step == containerCustomers.children.length && window.innerWidth < 1024) {
            containerCustomers.scroll({
                left: 0
            });
            step = 0;
        }
    }
});
// PlayAnimation
function playAnimation(nameTransition, timeTransition) {
    containerCustomers.style.animationName = nameTransition;
    containerCustomers.style.animationDuration = timeTransition;
    setTimeout(() => {
        containerCustomers.style.animationName = '';
        containerCustomers.style.animationDuration = '';
    }, 400);
}
buttonHeaderPromo.addEventListener('click', () => {
    headerPromo.style.display = 'none';
});
