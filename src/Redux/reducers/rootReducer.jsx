import { combineReducers } from 'redux'
import { loginReducer } from "./loginReducer";
import { signupReducer} from './signupReducer';
import {getProductReducer} from './getProductReducer';
import {changeNameReducer} from './changeNameReducer';
export const rootReducer = combineReducers({
    signupReducer,
    loginReducer,
    getProductReducer,
    changeNameReducer,
})