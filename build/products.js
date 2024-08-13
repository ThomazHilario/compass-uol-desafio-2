// import generateStars
import { generateStars } from "./modulos/modules.js";
// Arrivals 
const productsArrivals = [
    {
        image: 'assets/arrivals/t-shirt.svg',
        price: 120,
        title: 'T-SHIRT WITH TAPE DETAILS',
        discount: null,
        rating: 4
    },
    {
        image: 'assets/arrivals/skinny-fet-jeans.svg',
        price: 260,
        title: 'SKINNY FIT JEANS',
        discount: 20,
        rating: 3
    },
    {
        image: 'assets/arrivals/checkred-shirt.svg',
        price: 180,
        title: 'SKINNY FIT JEANS',
        discount: null,
        rating: 4
    },
    {
        image: 'assets/arrivals/sleeve-t-shirt.svg',
        price: 160,
        title: 'SKINNY FIT JEANS',
        discount: 30,
        rating: 4
    }
];
// Top Selling
const productsTopSelling = [
    {
        image: 'assets/top_selling/Vertical-Striped-Shirt.svg',
        price: 232,
        title: 'Vertical Striped Shirt',
        discount: 20,
        rating: 5
    },
    {
        image: 'assets/top_selling/Courage-Graphic-T-Shirt.svg',
        price: 145,
        title: 'Courage Graphic T-shirt',
        discount: null,
        rating: 4
    },
    {
        image: 'assets/top_selling/Loose-Fit-Bermuda-Shorts.svg',
        price: 80,
        title: 'Loose Fit Bermuda Shorts',
        discount: null,
        rating: 3
    },
    {
        image: 'assets/top_selling/Faded-Skinny-Jeans.svg',
        price: 210,
        title: 'Faded Skinny Jeans',
        discount: null,
        rating: 4
    },
];
// insertProduct
function insertProducts(products, localSection) {
    // Building tag
    const schemaTag = products.map(product => {
        return (`
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
                            <p> - ${product.discount}% </p>`) : ''}
                    </footer>
                </div>
            </div>    
        `);
    });
    // Putting everything together in single text
    const totalSchemaInString = schemaTag.reduce((acc, item) => acc += item);
    // Insert totalSchemaInString in section
    localSection.innerHTML = totalSchemaInString;
}
// containers products
const containersProducts = document.querySelectorAll('.container__products');
// Insert arrivals Products
insertProducts(productsArrivals, containersProducts[0]);
// Insert top selling products
insertProducts(productsTopSelling, containersProducts[1]);
