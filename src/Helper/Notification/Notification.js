import { notification } from "antd";

export const openNotificationWithIcon = (type, response) => {
  notification[type]({
    message: response,
  });
};
