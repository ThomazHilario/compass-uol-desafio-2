"use strict";
const buttonMenu = document.getElementById('button_menu');
const dialogMenu = document.getElementById('dialog__menu');
buttonMenu === null || buttonMenu === void 0 ? void 0 : buttonMenu.addEventListener('click', () => {
    dialogMenu.showModal();
});
