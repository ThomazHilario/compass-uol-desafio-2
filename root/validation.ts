// Form Newsletter
const formNewsletter = document.querySelector('#newsletter > form') as HTMLFormElement

// Remove validation default 
formNewsletter.noValidate = true

// Regex
const regexForm = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)

formNewsletter.addEventListener('submit', (e) => {
    e.preventDefault()

    // get input
    const input = formNewsletter.firstElementChild?.lastElementChild as HTMLInputElement

    if(regexForm.test(input.value)){
        alert('Your subscribe in newsLetter')
    }else{
        alert('invalid email')
    }
    
})