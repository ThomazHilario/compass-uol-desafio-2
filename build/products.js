var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import generateStars
import { generateStars } from "./modulos/modules.js";
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
// getData in json
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // request
            const [arrivals, selling] = yield Promise.all([yield fetch('../mocks/arrivals.json'), yield fetch('../mocks/selling.json')]);
            // Insert arrivals Products
            insertProducts(yield arrivals.json(), containersProducts[0]);
            // Insert top selling products
            insertProducts(yield selling.json(), containersProducts[1]);
        }
        catch (e) {
            console.log(e);
        }
    });
}
getData();
