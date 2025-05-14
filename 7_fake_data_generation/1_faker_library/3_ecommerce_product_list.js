/**
 * 🛒 ECOMMERCE_PRODUCT_LIST.JS
 *
 * 🧪 PURPOSE:
 *   Generate fake product listings for testing e-commerce UIs, APIs, or search/filter components.
 *
 * 🔍 THEORETICAL NOTES:
 *   - Simulating structured catalog data is useful in retail apps, search engines, or dashboards.
 *   - Tests sorting (price, rating), filtering (category), and rendering performance (grid/list).
 */

import { faker } from "@faker-js/faker";

faker.seed(2025);

const PRODUCTS_COUNT = 8;
const products = [];

for (let i = 0; i < PRODUCTS_COUNT; i++) {
  products.push({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price({ min: 10, max: 200 })),
    category: faker.commerce.department(),
    imageUrl: faker.image.urlPicsumPhotos(),
  });
}

console.log(`🛍️ Generated ${PRODUCTS_COUNT} fake products:`);
console.log(products);
