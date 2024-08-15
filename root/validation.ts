// Form Newsletter
const formNewsletter = document.querySelector('#newsletter > form') as HTMLFormElement

// get input
const input = formNewsletter.firstElementChild?.lastElementChild as HTMLInputElement

// Regex
const regexForm = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)

// Required message
const typeErrors = {
    inputVazio: 'Preencha este campo!',
    emailError:'Email inválido',
    ok:''
}

// VerifyValue Input
function verifyValue(valueInput:string){

    // Validation Input
    if(valueInput !== ''){

        // Validation Email
        if(!regexForm.test(valueInput)){
            return 'emailError'
        }

    }else{
        return 'inputVazio' 
    }

    return 'ok'
}

// Cancel Refresh page in submit form
formNewsletter.addEventListener('submit', (e) => {
    e.preventDefault()

})

// Input Event 
input.addEventListener('input', () => {
    // CustomValidity
    input.setCustomValidity(typeErrors[verifyValue(input.value) as keyof typeof typeErrors])
})

// Invalid Event
input.addEventListener('invalid', () => {
    // CustomValidity
    input.setCustomValidity(typeErrors[verifyValue(input.value) as keyof typeof typeErrors])
})