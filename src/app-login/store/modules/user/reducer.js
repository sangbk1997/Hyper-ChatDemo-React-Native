import {handleActions} from 'redux-actions'
import {LOGIN, LOGOUT} from "./constants";

export type UserState = {
    loggedIn: boolean,
    userId: string,
    fullName: string
}

const initialState: UserState = {
    loggedIn: false,
    userId: '',
    fullName: ''
}

export default handleActions({
        [LOGIN]: (state: UserState = initialState, action): UserState => {
            return {
                loggedIn: true,
                userId: payload.userId,
                fullName: payload.fullName
            }
        },

        [LOGOUT]: (): UserState => {
            return {
                loggedIn: false
            }
        }
    },
    initialState
)
