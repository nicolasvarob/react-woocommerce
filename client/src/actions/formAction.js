//TODO COMPLETAR REDUX FORMULA PARA FORM

import { UPDATE_FORM } from './types'

export const updateForm = (obj) => dispatch => {
    const payload = obj;
    dispatch({
        type: UPDATE_FORM,
        payload: payload
    });
}
