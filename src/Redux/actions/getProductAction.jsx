import axios from "axios";
import { API_BASE_URL } from "../../config/env.config";
import { ActionType } from "../ActionType/ActionType";

export const getProduct = ()=>async(dispatch)=>{
    dispatch({type:ActionType.FETCH_REQUEST_PRODUCT,payload:true})
    await axios.get("http://localhost:5000/api/v1/products/product").then((product)=>{
        dispatch({type:ActionType.FETCH_SUCCESS_PRODUCT,payload:product.data.data})
        console.log("product",product)
    }).catch((er)=>{
        dispatch({type:ActionType.FETCH_FAILURE_PRODUCT,payload:true})
        console.log("er",er)
    })
}