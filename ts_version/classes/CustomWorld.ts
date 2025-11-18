import { World } from '@cucumber/cucumber';
import { Product } from "./types.ts";

export default class CustomWorld<ParametersType = any> extends World<ParametersType> {

    private itemsAddedToCart: Array<Product>;

    constructor(options: World<ParametersType>) {
        super(options);
        this.itemsAddedToCart = [];
    }

    addProductToDataStorage(product: Product): void {
        const existingItem = this.itemsAddedToCart.find(item => {
            return item.name === product.name && item.price === product.price;
        });

        if (existingItem) {
            existingItem.quantity += product.quantity;
        } else {
            this.itemsAddedToCart.push(product);
        }    
    }

    getProductsFromDataStorage(): Array<Product> {
        return this.itemsAddedToCart;
    }
}