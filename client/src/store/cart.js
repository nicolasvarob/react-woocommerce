import { updateIn, setIn, removeIn } from 'immutable'

const ADD_CART_ITEM = "ADD_CART_ITEM"
const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"
const INCREMENT_QTY = "INCREMENT_QTY"
const DECREMENT_QTY = "DECREMENT_QTY"

const initialState = {
    cartItems: [],
}

export const addCartItem = (payload) => ({
    type: ADD_CART_ITEM,
    payload: payload
})
export const incrementItem = (payload) => ({ type: INCREMENT_QTY, payload })
export const decrementQty = (payload) => ({ type: DECREMENT_QTY, payload })


export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CART_ITEM: {
            const itemAdded = action.payload;
            const { cartItems } = state;
            const itemIndex = cartItems.findIndex(item => item.id === itemAdded.id);
            if (itemIndex === -1) {
                return setIn(state, ['cartItems'], [...state.cartItems, { ...itemAdded, qty: 1 }])
            } else {
                return updateIn(state, ['cartItems', itemIndex, 'qty'], qty => qty + 1)
            }
        }

        case REMOVE_CART_ITEM: {
            return;
        }

        case INCREMENT_QTY: {
            const itemAddedId = action.payload;
            const index = state.cartItems.findIndex(item => item.id === itemAddedId);
            return updateIn(state, ['cartItems', index, 'qty'], qty => qty + 1)
        }

        case DECREMENT_QTY: {
            const itemAddedId = action.payload;
            const index = state.cartItems.findIndex(item => item.id === itemAddedId);
            const qty = state.cartItems[index].qty;

            if (qty === 1) return removeIn(state, ['cartItems', index])
            else {
                return updateIn(state, ['cartItems', index, 'qty'], qty => qty - 1)
            }
        }

        default:
            return state;
    }
}