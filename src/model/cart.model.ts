import { Product } from "./product.model";

interface listProduct {
    product: Product;
    quantity: number;
}

export class Cart{
    constructor(public listproducts: listProduct[]=[] ) {}

    addItem(product: Product, quantity: number) {
        const existingItem = this.listproducts.find(item => item.product.name === product.name);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.listproducts.push({ product, quantity });
        }
    }
} 