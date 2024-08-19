// import generateStars
import { generateStars } from "./modulos/modules.js";
// containers products
const containersProducts = document.querySelectorAll('.container__products');
// Buttons view all
const buttonsViewAll = document.querySelectorAll('.section__products > button');
// Arrivals 
const productsArrivals = [
    {
        image: 'assets/arrivals/t-shirt.svg',
        price: 120,
        title: 'T-shirt With Taape Details',
        discount: null,
        rating: 4
    },
    {
        image: 'assets/arrivals/skinny-fet-jeans.svg',
        price: 260,
        title: 'Skinny Fit Jeans',
        discount: 20,
        rating: 3
    },
    {
        image: 'assets/arrivals/checkred-shirt.svg',
        price: 180,
        title: 'Checkered Shirt',
        discount: null,
        rating: 4
    },
    {
        image: 'assets/arrivals/sleeve-t-shirt.svg',
        price: 160,
        title: 'Sleeve Striped T-shirt',
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
// Add products
buttonsViewAll.forEach(button => {
    button.addEventListener('click', (e) => {
        var _a, _b, _c;
        // Button view all
        const buttonView = e.target;
        if (((_c = (_b = (_a = buttonView.parentElement) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.textContent) === null || _c === void 0 ? void 0 : _c.replace(' ', '').toLowerCase()) === 'newarrivals') {
            // Adding more products to containers
            addingProducts(productsArrivals, containersProducts[0], [{
                    image: 'assets/arrivals/t-shirt.svg',
                    price: 180,
                    title: 'T-shirt With Tape Details',
                    discount: null,
                    rating: 5
                }], buttonView);
        }
        else {
            // Adding more products to containers
            addingProducts(productsTopSelling, containersProducts[1], [{
                    image: 'assets/top_selling/Vertical-Striped-Shirt.svg',
                    price: 300,
                    title: 'Vertical Striped Shirt',
                    discount: 40,
                    rating: 5
                }], buttonView);
        }
    });
});
// AddingProducts
function addingProducts(products, containerProduct, newsProducts, button) {
    // Adding products
    products.push(...newsProducts);
    // Insert products in container
    insertProducts(products, containerProduct);
    // Change button display 
    button.style.display = 'none';
}
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
// Insert arrivals Products
insertProducts(productsArrivals, containersProducts[0]);
// Insert top selling products
insertProducts(productsTopSelling, containersProducts[1]);
