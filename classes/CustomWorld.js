import { World } from '@cucumber/cucumber';

export default class extends World {

    constructor(options) {
        super(options);
        this.itemsAddedToCart = [];
    }

    addItemToListOfProductsInCart(product) {
        const existingItem = this.itemsAddedToCart.find(item => {
            return item.name === product.name && item.price === product.price;
        });

        if (existingItem) {
            existingItem.quantity += product.quantity;
        } else {
            this.itemsAddedToCart.push(product);
        }    
    }

    getListOfProductsExpectedInCart() {
        return this.itemsAddedToCart;
    }
}