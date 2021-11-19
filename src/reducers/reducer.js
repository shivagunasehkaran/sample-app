import * as Actions from '../actions/types';

const initialState = {
    loginDetails: [],
    registerDetails: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.SAVE_LOGIN_DETAILS:
            return {
                ...state,
                loginDetails: action.payload
            };
        case Actions.SAVE_REGISTER_DETAILS:
            return {
                ...state,
                registerDetails: action.payload
            };
        default:
            return state;
    }
};

export default reducer;