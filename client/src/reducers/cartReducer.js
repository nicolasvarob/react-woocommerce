
import { ADD_CART_ITEM, REMOVE_CART_ITEM, INCREMENT_QTY, DECREMENT_QTY, RESET_CART } from '../actions/types';

const initialState = {
    cartItems: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CART_ITEM: {
            const itemAdded = action.payload;
            let updatedCart;

            // Check if item is already added in cart
            for (var item of state.cartItems) {
                if (item.id === itemAdded.id) {
                    const i = state.cartItems.indexOf(item);
                    const newQty = state.cartItems[i].qty + 1

                    // Immutable changes of the cart array
                    return { ...state, cartItems: [...state.cartItems.slice(0, i), { ...state.cartItems[i], qty: newQty }, ...state.cartItems.slice(i + 1)] }
                }
            }
            updatedCart = [...state.cartItems, itemAdded]
            return { ...state, cartItems: updatedCart }
        }

        case REMOVE_CART_ITEM: {
            return;
        }

        case RESET_CART: {
            return { ...state, cartItems: [] };
        }

        case INCREMENT_QTY: {
            const itemAddedId = action.payload;
            const index = state.cartItems.findIndex(item => item.id === itemAddedId);
            const newQty = state.cartItems[index].qty + 1

            return { ...state, cartItems: [...state.cartItems.slice(0, index), { ...state.cartItems[index], qty: newQty }, ...state.cartItems.slice(index + 1)] }
        }

        case DECREMENT_QTY: {
            const itemAddedId = action.payload;
            const index = state.cartItems.findIndex(item => item.id === itemAddedId);
            const qty = state.cartItems[index].qty;
            let newQty;
            if(qty === 0) newQty = qty;
            else newQty = qty - 1;
            return { ...state, cartItems: [...state.cartItems.slice(0, index), { ...state.cartItems[index], qty: newQty }, ...state.cartItems.slice(index + 1)] }
        }

        default:
            return state;
    }
}