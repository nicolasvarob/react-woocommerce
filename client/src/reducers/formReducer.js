//TODO COMPLETAR REDUX FORMULA PARA FORM
import { UPDATE_FORM } from '../actions/types';

const initialState = {
    formData: {},
}

export default function (state = initialState, action) {
    console.log('REDUCE')
    switch (action.type) {
        case UPDATE_FORM: {
            console.log('REDUCE')
            const form = action.payload;
            return { ...state, formData: form }
        }
        default:
            return state;
    }
}