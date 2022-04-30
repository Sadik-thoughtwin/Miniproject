import axios from "axios";
import { API_BASE_URL } from "../../config/env.config";
import { ActionType } from "../ActionType/ActionType";

export const changeNameAction = async(token) =>{
    axios.update(`${API_BASE_URL}/update-user`)
    .then((display)=>{
        console.log("display",display)
        dispatch({type:ActionType.USER_NAME,payload:display})
    }).catch((err)=>{
        console.log("err",err)
    })
   
}