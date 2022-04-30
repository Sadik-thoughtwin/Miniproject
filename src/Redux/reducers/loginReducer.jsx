import { ActionType } from "../ActionType/ActionType";
const initialState = {
        loading:false,
        success:"",
        error:""
}
export const loginReducer = (state=initialState,action)=>{
        switch(action.type)
        {
            case ActionType.LOGIN_REQUEST :return {
                loading:true
            }
            case ActionType.LOGIN_SUCCESS :return {
                ...state,
                success:action.payload,
                loading:false
            }
            case ActionType.LOGIN_FAILURE :return {
                ...state,
                error:action.payload,
                loading:false
            }
            default:
                    return state
        }
}