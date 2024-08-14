// import generateStars
import { generateStars } from "./modulos/modules.js";

//  Interface ProductProps
interface ProductProps{
    image:string;
    title:string;
    rating:number;
    price:number;
    discount:number | null;
}

// insertProduct
function insertProducts(products:ProductProps[], localSection:HTMLDivElement){

    // Building tag
    const schemaTag = products.map(product => {
        return(`
            <div class="product">
                    <header class="header__product">
                        <img src="${product.image}" alt="image do produto ${product.title}"/>
                    </header>

                    <section class="body__product">
                        <h3>${product.title}</h3>

                        <section class="product__review">
                            <div class="rating__stars">
                                ${generateStars(product.rating)}
                            </div>

                            <article>
                                <p><strong>${product.rating}</strong>/5</p>
                            </article>
                            
                        </section>
                    </section>

                    <footer class="footer__product">
                        <h4>${'$' + `${product.discount ? product.price - product.discount : product.price}`}</h4>

                        ${product.discount ? (`
                            <h4 class="old__price">${'$' + product.price}</h4>
                            <p> - ${product.discount}% </p>`
                        ) : ''}
                    </footer>
                </div>
            </div>    
        `)
    })

    // Putting everything together in single text
    const totalSchemaInString = schemaTag.reduce((acc, item) => acc += item)

    // Insert totalSchemaInString in section
    localSection.innerHTML = totalSchemaInString
}

// containers products
const containersProducts = document.querySelectorAll('.container__products')

// getData in json
async function getData(){
    try{
        
        // request
        const [arrivals, selling] = await Promise.all([await fetch('../mocks/arrivals.json'), await fetch('../mocks/selling.json')])

        // Insert arrivals Products
        insertProducts(await arrivals.json(), containersProducts[0] as HTMLDivElement)

        // Insert top selling products
        insertProducts(await selling.json(), containersProducts[1] as HTMLDivElement)
    }catch(e){
        console.log(e)
    }
}

getData()