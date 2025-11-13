import { World } from '@cucumber/cucumber';
export default class extends World {

    itemsAddedToCart = null;

    init() {
        this.itemsAddedToCart = [];
    }
    
    addProductToCart(productName, productPrice, productQuantity) {
        const existingItem = this.itemsAddedToCart.find(item => {
            return item.name === productName && item.price === productPrice;
        });

        if (existingItem !== undefined) {
            existingItem.quantity += productQuantity;
        } else {
            this.itemsAddedToCart.push(
            {
                name: productName,
                price: productPrice,
                quantity: productQuantity
            })
        }    
    }

    resetCart() {
        this.itemsAddedToCart = [];
    }

    matchesExpectedItemsInCart(actualItems) {
        if (actualItems.length != this.itemsAddedToCart.length) 
            return false;

        for (let expectedItem of this.itemsAddedToCart) {
            if (! actualItems.some(actualItem => {                
                return JSON.stringify(actualItem) == JSON.stringify(expectedItem)
            })) 
                return false;
        }
        return true;
    }
}