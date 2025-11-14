import { World } from '@cucumber/cucumber';

export default class extends World {

    constructor(options) {
        super(options);
        this.itemsAddedToCart = [];
    }

    addProductToDataStorage(product) {
        const existingItem = this.itemsAddedToCart.find(item => {
            return item.name === product.name && item.price === product.price;
        });

        if (existingItem) {
            existingItem.quantity += product.quantity;
        } else {
            this.itemsAddedToCart.push(product);
        }    
    }

    getProductsFromDataStorage() {
        return this.itemsAddedToCart;
    }
}