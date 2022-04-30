import axios from "axios";
import { API_BASE_URL } from "../../config/env.config";
import { openNotificationWithIcon } from "../../Helper/Notification/Notification";
import { ActionType } from "../ActionType/ActionType";

export const signup = (formValue) => async (dispatch) => {
  dispatch({ type: ActionType.SIGNUP_REQUEST, payload: true });
  await axios
    .post(`${API_BASE_URL}/signup`, formValue)
    .then((result) => {
      console.log("result",result)
      openNotificationWithIcon("success", result.data.message);
      dispatch({ type: ActionType.SIGNUP_REQUEST, payload: false });
    })
    .catch((error) => {
      console.log("error",error)
      openNotificationWithIcon("error", error.response.data.message);
      dispatch({ type: ActionType.SIGNUP_REQUEST, payload: false });
    });
};
