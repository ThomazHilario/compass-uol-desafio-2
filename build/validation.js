"use strict";
var _a;
// Form Newsletter
const formNewsletter = document.querySelector('#newsletter > form');
// get input
const input = (_a = formNewsletter.firstElementChild) === null || _a === void 0 ? void 0 : _a.lastElementChild;
// Regex
const regexForm = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
// Required message
const typeErrors = {
    inputVazio: 'Preencha este campo!',
    emailError: 'Email inválido',
    ok: ''
};
// VerifyValue Input
function verifyValue(valueInput) {
    // Validation Input
    if (valueInput !== '') {
        // Validation Email
        if (!regexForm.test(valueInput)) {
            return 'emailError';
        }
    }
    else {
        return 'inputVazio';
    }
    return 'ok';
}
// Cancel Refresh page in submit form
formNewsletter.addEventListener('submit', (e) => {
    e.preventDefault();
});
// Input Event 
input.addEventListener('input', () => {
    // CustomValidity
    input.setCustomValidity(typeErrors[verifyValue(input.value)]);
});
// Invalid Event
input.addEventListener('invalid', () => {
    // CustomValidity
    input.setCustomValidity(typeErrors[verifyValue(input.value)]);
});
