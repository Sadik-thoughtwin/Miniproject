import { ActionType } from "../ActionType/ActionType";
const initialState= {
    userName:""
}
export const changeNameReducer = (state=initialState,action)=>{
    switch(action.type){
        case ActionType.USER_NAME :return {
            userName:action.payload           
        }
       
        default : return state 
    }
}