// Import generateStars
import { generateStars } from "./modulos/modules.js";

// HappyCustomersProps
interface HappyCustomersProps{
    rating:number;
    name:string;
    text:string
}

// Object happy Customers
const happy__customers:HappyCustomersProps[] = [
    {   
        rating:5,
        name:'Sarah M.',
        text:`"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`
    },
    {
        rating:5,
        name:'Alex K.',
        text:`"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`
    },
    {
        rating:5,
        name:'James L.',
        text:`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`
    },
    {
        rating:5,
        name:'Mooen.',
        text:`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`
    },
    {
        rating:5,
        name:'George H.',
        text:`""I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`
    }
]

// insetHappyCustomers
function insertHappyCustomers(happyCustomersArray:HappyCustomersProps[], localInsert:HTMLDivElement){

    // Building tag
    const schemaCustomers = happyCustomersArray.map(happyCustomers => (
        `
            <div class="customers">
                <section class="rating__stars">
                        ${generateStars(happyCustomers.rating)}
                </section>

                <article class="comment">
                    <h3>${happyCustomers.name}</h3>

                    <p>${happyCustomers.text}</p>
                </article>
            </div>
        `
    ))

    // Putting everything together in single text
    const totalCustomersInString = schemaCustomers.reduce((acc,customer) => acc += customer)
    
    // Insert totalCustomersInString in container
    localInsert.innerHTML = totalCustomersInString
}

// container Customers element
const containerCustomers = document.getElementById('container__customers') as HTMLDivElement

insertHappyCustomers(happy__customers, containerCustomers)