import { SAVE_LOGIN_DETAILS, SAVE_REGISTER_DETAILS } from './types';

export const saveLoginDetails = (email, password, isAuthenticatedUser) => {
    return {
        type: SAVE_LOGIN_DETAILS,
        payload: { email, password, isAuthenticatedUser }
    };
};

export const saveRegisterDetails = (email, password, name) => {
    return {
        type: SAVE_REGISTER_DETAILS,
        payload: { email, password, name }
    };
};
