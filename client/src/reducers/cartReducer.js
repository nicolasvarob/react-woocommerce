
import { ADD_CART_ITEM, REMOVE_CART_ITEM, INCREMENT_QTY, DECREMENT_QTY } from '../actions/types';

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

        case INCREMENT_QTY: {
            return;

        }

        case DECREMENT_QTY: {
            return;
        }

        default:
            return state;
    }
}