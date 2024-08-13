export function generateStars(rating:number){

    const stars = []

    for(let i = 0; i< rating; i++){
        stars.push(
            `<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.24494 0.255127L11.8641 5.89504L18.0374 6.64322L13.4829 10.8771L14.679 16.9794L9.24494 13.9561L3.8109 16.9794L5.00697 10.8771L0.452479 6.64322L6.62573 5.89504L9.24494 0.255127Z" fill="#FFC633"/>
            </svg>
        `)
    }

    return stars.reduce((acc, tag) => acc += tag)
}