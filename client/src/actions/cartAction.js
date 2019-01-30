import { ADD_CART_ITEM, INCREMENT_QTY, DECREMENT_QTY } from './types'

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
                type: INCREMENT_QTY,
                payload: id
            });
            break;
        case 'decrement':
            dispatch({
                type: DECREMENT_QTY,
                payload: id
            });
            break;
        default:
            console.log('unknow increment operation');
    }


}
