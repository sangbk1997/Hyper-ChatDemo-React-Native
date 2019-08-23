
import * as types from './constants'
import {actions} from '../'

export const login = (username: string, password: string) => {
    return dispatch => {
        dispatch(actions.app.loading())

        setTimeout(() => {
            if(username === 'admin' && password === 'secret'){
                dispatch({
                    type: types.LOGIN,
                    payload: {
                        userId: username,
                        fullName: 'SangTigo'
                    }
                })
            }

        //    turn loading animation off
            dispatch(actions.app.loading(false))
        }, 300)
    }
}


export const logout = () => {
    //direct/sync call
    return {
        type: types.LOGOUT
    }
}
