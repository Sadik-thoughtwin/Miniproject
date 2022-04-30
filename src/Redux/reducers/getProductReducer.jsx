import { ActionType } from "../ActionType/ActionType";
const initialState= {
    painding:false,
    productList:[],
    fail:false
}
export const getProductReducer = (state=initialState,action)=>{
            switch(action.type){
        case ActionType.FETCH_REQUEST_PRODUCT :return {
            painding:action.payload           
        }
        case ActionType.FETCH_SUCCESS_PRODUCT:return {
            productList:action.payload           
        }
        case ActionType.FETCH_FAILURE_PRODUCT :return {
            fail:action.payload           
        }
        default : return state 
    }
}