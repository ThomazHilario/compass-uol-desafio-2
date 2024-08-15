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

    
    verifyValue(input.value, input)
    
})

function verifyValue(valueInput:string, input:HTMLInputElement){

    if(valueInput == '' || !regexForm.test(valueInput)){
        const label = input.parentElement as HTMLLabelElement
        label.style.border = '2px solid red'

        if(valueInput == ''){
            return 'Preencha o campo acima'
        }

        if(!regexForm.test(valueInput)){
            return 'Email Invalido'
        }
    } else{
        const label = input.parentElement as HTMLLabelElement
        label.style.border = '0'
    }

}