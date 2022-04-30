import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginDetails } from "../../Redux/actions/loginAction";
import "./Login.css";
export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/services");
    }
  }, []);
  const onFinish = async (userDetails) => {
    await dispatch(loginDetails(userDetails));
    navigate("/services");
    form.resetFields();
  };
  return (
    <div className="login-details">
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 4,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              pattern: new RegExp(/^[.a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/),
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
