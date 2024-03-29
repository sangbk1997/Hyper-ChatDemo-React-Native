import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { _alert } from './alert.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    _alert
});

export default rootReducer;
