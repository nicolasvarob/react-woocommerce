import { combineReducers } from 'redux';
import cart from './cart';
import form from './form';



export default combineReducers({
    cart,
    form
})