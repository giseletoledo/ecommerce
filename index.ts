import { Cart } from "./src/model/cart.model";
import { Category } from "./src/model/category.model";
import { Product } from "./src/model/product.model";

const category = new Category('Roupa');
const product = new Product('Camiseta', 'https://example.com/camiseta.jpg', 29.99, category, 0.2);
const cart = new Cart([{ product, quantity: 2 }]);
cart.addItem(product, 2);
cart.addItem(product, 1);


console.log(product.category.name); // Output: Roupa
console.log(product.priceWithDiscountAplied()); // Output: 23.992
console.log(cart.listproducts); // Output: [{ product: Product, quantity: 4 }]
