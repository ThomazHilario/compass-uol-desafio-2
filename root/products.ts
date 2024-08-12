//  Interface ProductProps
interface ProductProps{
    image:string;
    title:string;
    rating:number;
    price:number;
    discount:number | null;
}

// Arrivals 
const productsArrivals:ProductProps[] = [
    {
        image:'../assets/arrivals/t-shirt.svg',
        price:120,
        title:'T-SHIRT WITH TAPE DETAILS',
        discount:null,
        rating:4
    },
    {
        image:'../assets/arrivals/skinny-fet-jeans.svg',
        price:260,
        title:'SKINNY FIT JEANS',
        discount:20,
        rating:3
    },
    {
        image:'../assets/arrivals/checkred-shirt.svg',
        price:180,
        title:'SKINNY FIT JEANS',
        discount:null,
        rating:4
    },
    {
        image:'../assets/arrivals/sleeve-t-shirt.svg',
        price:160,
        title:'SKINNY FIT JEANS',
        discount:30,
        rating:4
    }
]

// Top Selling
const productsTopSelling:ProductProps[] = [
    {
        image:'../assets/top_selling/Vertical-Striped-Shirt.svg',
        price:232,
        title:'Vertical Striped Shirt',
        discount:20,
        rating:5
    },
    {
        image:'../assets/top_selling/Courage-Graphic-T-Shirt.svg',
        price:145,
        title:'Courage Graphic T-shirt',
        discount:null,
        rating:4
    },
    {
        image:'../assets/top_selling/Loose-Fit-Bermuda-Shorts.svg',
        price:80,
        title:'Loose Fit Bermuda Shorts',
        discount:null,
        rating:3
    },
    {
        image:'../assets/top_selling/Faded-Skinny-Jeans.svg',
        price:210,
        title:'Faded Skinny Jeans',
        discount:null,
        rating:4
    },
]

// generateStars
function generateStars(rating:number){

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


// insertProduct
function insertProducts(products:ProductProps[], localSection:HTMLDivElement){

    // Building tag
    const schemaTag = products.map(product => {
        return(`
            <div class="product">
                    <header class="header__product">
                        <svg width="208" height="34" viewBox="0 0 208 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.1298 30.4522C9.89114 30.4522 3.71249 23.8867 3.71249 16.7255C3.71249 9.59072 9.76182 2.89479 17.0778 2.89479C21.887 2.89479 25.3499 5.22146 28.1684 8.86674H31.7098C30.6498 6.95346 29.5125 5.19603 27.7805 3.82545C24.8072 1.42142 20.9552 0 17.1298 0C7.95243 0 0.481689 7.57464 0.481689 16.7C0.481689 25.8508 8.05633 33.3481 17.1817 33.3481C20.9044 33.3481 24.5497 31.9786 27.471 29.6774C29.3069 28.204 30.599 26.2907 31.8402 24.3255H28.2989C25.5058 27.9708 21.9389 30.4522 17.1298 30.4522ZM53.8391 13.0028C51.6163 10.1334 48.5911 8.32404 44.843 8.32404C38.1217 8.32404 32.5896 13.7798 32.5896 20.5012C32.5896 27.2214 38.1482 32.728 44.843 32.728C48.747 32.728 51.4605 31.0988 53.8391 28.1001V32.1842H56.7604V8.89216H53.8391V13.0028ZM44.6883 30.0388C39.5431 30.0388 35.4844 25.5668 35.4844 20.5266C35.4844 15.5107 39.5177 11.0132 44.6883 11.0132C49.8324 11.0132 53.8391 15.5118 53.8391 20.5266C53.8391 25.5668 49.8059 30.0388 44.6883 30.0388ZM60.3018 32.1842H63.4309V0.670921H60.3018V32.1842ZM75.2444 28.487L67.3337 8.89216H64.2312L73.7191 32.1842H76.8725L86.335 8.89216H83.2844L75.2444 28.487ZM87.6271 32.1842H90.7551V8.89216H87.6271V32.1842ZM87.6271 5.89348H90.7551V0.670921H87.6271V5.89348ZM104.224 8.32293C101.277 8.32293 99.1831 9.87478 97.2444 11.9428V8.89216H94.3485V32.1842H97.4245V17.991C97.3991 14.2429 100.501 11.0121 104.275 11.0121C109.005 11.0121 111.383 15.1228 111.383 19.3627V32.1853H114.278V19.3627C114.279 13.3134 110.739 8.32293 104.224 8.32293ZM143.311 0.670921L129.093 18.7415V0.670921H126.017V32.1842H129.093V23.5242L133.126 18.5094L143.389 32.1842H147.294L135.09 16.0269L147.294 0.670921H143.311ZM148.43 32.1842H151.482V0.670921H148.43V32.1842ZM176.738 14.7602C174.618 10.8043 170.378 8.32293 165.905 8.32293C159.236 8.32293 153.599 13.8815 153.599 20.5509C153.599 27.2711 159.287 32.7269 165.959 32.7269C169.137 32.7269 172.267 31.4602 174.566 29.2629C175.963 27.9443 176.79 26.2896 177.538 24.5576H174.256C172.601 27.7895 169.679 30.0377 165.904 30.0377C163.605 30.0377 161.355 29.107 159.65 27.5298C157.89 25.9282 157.115 23.9619 156.778 21.6363H178.263C178.264 19.2068 177.927 16.8802 176.738 14.7602ZM156.883 18.9482C157.816 14.5801 161.252 11.0121 165.959 11.0121C169.914 11.0121 174.154 13.4427 175.084 18.9482H156.883ZM180.539 32.1842H183.614V8.89216H180.539V32.1842ZM180.539 5.99738H183.614V0.670921H180.539V5.99738ZM197.136 8.32293C194.135 8.32293 192.042 9.87478 190.077 11.9428V8.89216H187.13V32.1842H190.232V17.991C190.207 14.2175 193.387 11.0121 197.186 11.0121C201.892 11.0121 204.375 15.1228 204.375 19.3627V32.1853H207.27V19.3627C207.27 13.3134 203.675 8.32293 197.136 8.32293Z" fill="white"/>
</svg>

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
    
// Insert arrivals Products
insertProducts(productsArrivals, containersProducts[0] as HTMLDivElement)

// Insert top selling products
insertProducts(productsTopSelling, containersProducts[1] as HTMLDivElement)
