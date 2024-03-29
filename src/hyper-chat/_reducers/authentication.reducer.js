import {userConstants} from "../_constants";

// let user = JSON.parse(localStorage.getItem('user'));
let user = {}
const initialState = user ? {loggedIn: true, user} : {}

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.payload
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.payload
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state;
    }
}
