import {userConstants} from "../_constants";

export function users(state = {}, action) {
    switch (action.type) {

        case userConstants.ACCESS_CHAT:
            return {
                accessChat: action.payload
            };
        case userConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case userConstants.GETALL_SUCCESS:
            return {
                items: action.payload
            };
        case userConstants.GETALL_FAILURE:
            return {
                error: action.payload
            };
        case userConstants.DELETE_REQUEST:
            // add deleteing:true property to user being delte
            return {
                ...state,
                items: state.items.map(user => {
                    user.id === action.payload ? {...user, deleting: true} : user
                })
            };

        case userConstants.DELETE_SUCCESS:
            // remove deleted user from state
            return {
                items: state.items.filter(user => user.id !== action.payload)
            };
        case userConstants.DELETE_FAILURE:
            //remove deleting:true property and add delete:error
            return {
                ...state,
                items: state.items.map(user => {
                    if (user.id === action.payload) {
                        // make copy of user without
                        const {deleting, ...userCopy} = user;
                        // return copy of user with 'deleteError:{error}' property
                        return {
                            ...userCopy,
                            deleteError: action.payload
                        };
                    }
                    return user;
                })
            };
        default:
            return state;
    }
}
