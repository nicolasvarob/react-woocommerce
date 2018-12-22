import { ADD_CART_ITEM } from './types'

export const addCartItem = (id, name, price, qty, img) => dispatch => {
    const payload = {
        id: id,
        name: name,
        price: price,
        qty: qty,
        img: img
    };
    dispatch({
        type: ADD_CART_ITEM,
        payload: payload
    });
}

export const incrementer = (id, operation) => dispatch => {
    switch (operation) {
        case 'increment':
            dispatch({
                type: ADD_CART_ITEM,
                payload: id
            });
            break;
        case 'decrement':
            dispatch({
                type: ADD_CART_ITEM,
                payload: id
            });
            break;
        default:
            console.log('error');
    }


}
