"use strict";
// Form Newsletter
const formNewsletter = document.querySelector('#newsletter > form');
// Remove validation default 
formNewsletter.noValidate = true;
// Regex
const regexForm = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
formNewsletter.addEventListener('submit', (e) => {
    var _a;
    e.preventDefault();
    // get input
    const input = (_a = formNewsletter.firstElementChild) === null || _a === void 0 ? void 0 : _a.lastElementChild;
    if (regexForm.test(input.value)) {
        alert('Your subscribe in newsLetter');
    }
    else {
        alert('invalid email');
    }
});
