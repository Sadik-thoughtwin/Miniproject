import { ActionType } from "../ActionType/ActionType";
const initialState = {
        Isloader:false

}
export const signupReducer = (state=initialState,action)=>{
        switch(action.type)
        {
            case ActionType.SIGNUP_REQUEST :return {
                ...state,
                Isloader:action.payload
            }
             default:
                    return state
        }
}