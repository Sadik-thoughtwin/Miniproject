import React, { useEffect } from "react";
import { Form, Input, Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import "./Signup.css";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../Redux/actions/signupAction";

export const Signup = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signUpData = useSelector((state) => state.signupReducer.Isloader);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/login");
    }
  });

  const onFinish = async (formValue) => {
    dispatch(signup(formValue)).then(() => {
      form.resetFields();
    });
  };

  return (
    <div className="signup-form">
      <div className="heading">User Registration</div>
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 4,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="FullName"
          name="fullName"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

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
          label="Mobile"
          name="mobile"
          rules={[
            {
              required: true,
              message: "Please input your Mobile!",
            },
            {
              max: 10,
              message: "Value should be equal to 10 number",
            },
          ]}
        >
          <Input pattern="[0-9]*" type="number" min="0" />
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
          <Input.Password minLength="6" maxLength="10" />
        </Form.Item>

        <Form.Item
          label="ConfirmPassword"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Please input your Confirm Password!",
            },
          ]}
        >
          <Input.Password minLength="6" maxLength="10" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 6,
          }}
        >
          <Space>
            <Button type="primary" htmlType="submit" loading={signUpData}>
              Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};
