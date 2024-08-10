const buttonMenu = document.getElementById('button_menu')
const dialogMenu = document.getElementById('dialog__menu') as HTMLDialogElement

buttonMenu?.addEventListener('click', () => {
    dialogMenu.showModal()
})