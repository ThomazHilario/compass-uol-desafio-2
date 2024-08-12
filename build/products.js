"use strict";
// Arrivals 
const productsArrivals = [
    {
        image: '../assets/new_arrivals_imagens/t-shirt.svg',
        price: 120,
        title: 'T-SHIRT WITH TAPE DETAILS',
        discount: null,
        rating: 4
    },
    {
        image: '../assets/new_arrivals_imagens/skinny-fet-jeans.svg',
        price: 260,
        title: 'SKINNY FIT JEANS',
        discount: 20,
        rating: 3
    },
    {
        image: '../assets/new_arrivals_imagens/checkred-shirt.svg',
        price: 180,
        title: 'SKINNY FIT JEANS',
        discount: null,
        rating: 4
    },
    {
        image: '../assets/new_arrivals_imagens/sleeve-t-shirt.svg',
        price: 160,
        title: 'SKINNY FIT JEANS',
        discount: 30,
        rating: 4
    }
];
// Top Selling
const productsTopSelling = [
    {
        image: '../assets/top_selling_imagens/Vertical-Striped-Shirt.svg',
        price: 232,
        title: 'Vertical Striped Shirt',
        discount: 20,
        rating: 5
    },
    {
        image: '../assets/top_selling_imagens/Courage-Graphic-T-Shirt.svg',
        price: 145,
        title: 'Courage Graphic T-shirt',
        discount: null,
        rating: 4
    },
    {
        image: '../assets/top_selling_imagens/Loose-Fit-Bermuda-Shorts.svg',
        price: 80,
        title: 'Loose Fit Bermuda Shorts',
        discount: null,
        rating: 3
    },
    {
        image: '../assets/top_selling_imagens/Faded-Skinny-Jeans.svg',
        price: 210,
        title: 'Faded Skinny Jeans',
        discount: null,
        rating: 4
    },
];
// generateStars
function generateStars(rating) {
    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(`<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.24494 0.255127L11.8641 5.89504L18.0374 6.64322L13.4829 10.8771L14.679 16.9794L9.24494 13.9561L3.8109 16.9794L5.00697 10.8771L0.452479 6.64322L6.62573 5.89504L9.24494 0.255127Z" fill="#FFC633"/>
            </svg>
        `);
    }
    return stars.reduce((acc, tag) => acc += tag);
}
// insertProduct
function insertProducts(products, localSection) {
    // Building tag
    const schemaTag = products.map(product => {
        return (`
            <div class="product">
                    <header class="header__product">
                        <img src="${product.image}"/>
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
                            <p> - ${product.discount} % </p>`) : ''}
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
