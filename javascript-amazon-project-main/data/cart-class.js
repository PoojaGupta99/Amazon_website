
class Cart {

    cartItems;
    #localStorageKey;

    constructor(localStorageKey) {

        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
    }

    #loadFromStorage() {
        this.cartItems= JSON.parse(localStorage.getItem(this.#localStorageKey));

        if (!this.cartItems) {
        this.cartItems = [
            {
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1'
            },
            {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1, 
            deliveryOptionId: '2'
            }];
        }
    };

    
        saveToStorage() {
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
        };

              
        addToCart(productId) {
        let matchingItem = this.cartItems.find(item => item.productId === productId);

        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            this.cartItems.push({
            productId,
            quantity: 1,
            deliveryOptionId: '1'
            });
        }
        this.saveToStorage();
        };

        removeFromCart(productId) {
            const index = this.cartItems.findIndex(item => item.productId === productId);
            if (index !== -1) {
                this.cartItems.splice(index, 1); // reference same rahega
                this.saveToStorage();
            }
        }; 
        
        
        updateCartQuantity(productId, newQuantity) {
            const cartItem = this.cartItems.find(item => item.productId === productId);
            if (cartItem) {
                cartItem.quantity = newQuantity;
                this.saveToStorage();
            }
        };


               
            updateDeliveryOption(productId, deliveryOptionId) {
                const cartItem = this.cartItems.find(item => item.productId === productId);
                if (cartItem) {
                    cartItem.deliveryOptionId = deliveryOptionId;
                    this.saveToStorage();
                }
        }
   };


const cart = new Cart('cart-oop');
const businessCart = new  Cart('cart-business');


console.log(cart);
console.log(businessCart);




