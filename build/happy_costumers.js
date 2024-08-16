// Import generateStars
import { generateStars } from "./modulos/modules.js";
// Object happy Customers
const happy__customers = [
    {
        rating: 5,
        name: 'Sarah M.',
        text: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`
    },
    {
        rating: 5,
        name: 'Alex K.',
        text: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`
    },
    {
        rating: 5,
        name: 'James L.',
        text: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`
    },
    {
        rating: 5,
        name: 'Mooen.',
        text: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`
    },
    {
        rating: 5,
        name: 'George H.',
        text: `""I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`
    }
];
// insetHappyCustomers
function insertHappyCustomers(happyCustomersArray, localInsert) {
    // Building tag
    const schemaCustomers = happyCustomersArray.map(happyCustomers => (`
            <div class="customers">
                <section class="rating__stars">
                        ${generateStars(happyCustomers.rating)}
                </section>

                <article class="comment">
                    <h3>
                        ${happyCustomers.name}
                        
                        <span>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0.829102C8.07164 0.829102 6.18657 1.40093 4.58319 2.47227C2.97982 3.54362 1.73013 5.06636 0.992179 6.84794C0.254225 8.62952 0.061142 10.5899 0.437348 12.4812C0.813554 14.3725 1.74215 16.1098 3.10571 17.4734C4.46928 18.837 6.20656 19.7656 8.09787 20.1418C9.98919 20.518 11.9496 20.3249 13.7312 19.5869C15.5127 18.849 17.0355 17.5993 18.1068 15.9959C19.1782 14.3925 19.75 12.5075 19.75 10.5791C19.7473 7.99408 18.7192 5.51571 16.8913 3.68783C15.0634 1.85994 12.585 0.831831 10 0.829102ZM14.2806 8.85973L9.03063 14.1097C8.96097 14.1795 8.87826 14.2348 8.78721 14.2725C8.69616 14.3103 8.59857 14.3297 8.5 14.3297C8.40144 14.3297 8.30385 14.3103 8.2128 14.2725C8.12175 14.2348 8.03903 14.1795 7.96938 14.1097L5.71938 11.8597C5.57865 11.719 5.49959 11.5281 5.49959 11.3291C5.49959 11.1301 5.57865 10.9392 5.71938 10.7985C5.86011 10.6577 6.05098 10.5787 6.25 10.5787C6.44903 10.5787 6.6399 10.6577 6.78063 10.7985L8.5 12.5188L13.2194 7.79848C13.2891 7.72879 13.3718 7.67352 13.4628 7.63581C13.5539 7.59809 13.6515 7.57868 13.75 7.57868C13.8486 7.57868 13.9461 7.59809 14.0372 7.63581C14.1282 7.67352 14.2109 7.72879 14.2806 7.79848C14.3503 7.86816 14.4056 7.95088 14.4433 8.04193C14.481 8.13297 14.5004 8.23056 14.5004 8.3291C14.5004 8.42765 14.481 8.52523 14.4433 8.61627C14.4056 8.70732 14.3503 8.79004 14.2806 8.85973Z" fill="#01AB31"/>
                            </svg>
                        </span>

                    </h3>

                    <p>${happyCustomers.text}</p>
                </article>
            </div>
        `));
    // Putting everything together in single text
    const totalCustomersInString = schemaCustomers.reduce((acc, customer) => acc += customer);
    // Insert totalCustomersInString in container
    localInsert.innerHTML = totalCustomersInString;
}
// container Customers element
const containerCustomers = document.getElementById('container__customers');
insertHappyCustomers(happy__customers, containerCustomers);
