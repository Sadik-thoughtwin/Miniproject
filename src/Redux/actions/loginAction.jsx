import axios from "axios";
import { API_BASE_URL } from "../../config/env.config";
import { openNotificationWithIcon } from "../../Helper/Notification/Notification";
import { ActionType } from "../ActionType/ActionType";

export const loginDetails = (userDetails) => async (dispatch) => {
  dispatch({ type: ActionType.LOGIN_REQUEST, payload: true });
  await axios
    .post(`${API_BASE_URL}/login`, userDetails)
    .then((resp) => {
      openNotificationWithIcon("success", resp.data.message);
      localStorage.setItem("token", resp.data.data.token);
      dispatch({ type: ActionType.LOGIN_SUCCESS, payload: resp.data.name});
      dispatch({ type: ActionType.SIGNUP_REQUEST, payload: false });
    })
    .catch((err) => {
    openNotificationWithIcon("error", "Invalid User");
      dispatch({ type: ActionType.SIGNUP_REQUEST, payload: false });
    });
};
