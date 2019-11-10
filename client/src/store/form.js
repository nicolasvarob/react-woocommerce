//TODO COMPLETAR REDUX FORMULA PARA FORM
const UPDATE_FORM = "UPDATE_FORM";

const initialState = {
  formData: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FORM:
      return {...state,formData:action.payload};
    default:
      return state;
  }
}
