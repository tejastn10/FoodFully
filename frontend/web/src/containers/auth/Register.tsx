import { Button, Form, Input, message, Divider, Row, Col, Radio } from "antd";
import {
  UserAddOutlined,
  UserOutlined,
  MailOutlined,
  LockOutlined,
  HomeOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { AuthState } from "../../store/@types";
import { clearAuthError, registerAuthRequest } from "../../store/actions/auth";
import { ApplicationState } from "../../store/store";

type submitProps = {
  name: string;
  email: string;
  password: string;
  contact: number;
  isNgo: boolean;
  street: string;
  city: string;
  pincode: number;
  state: string;
};

const Register = () => {
  const [isNgo, setisNgo] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const authState = useSelector<ApplicationState, AuthState>(
    (state) => state.auth
  );
  const { auth, errors } = authState;
  useEffect(() => {
    if (errors.results) {
      //dispatch error
      message.error(errors.results.message);
      dispatch(clearAuthError());
    }
  }, [dispatch, errors.results]);

  useEffect(() => {
    if (auth) {
      history.goBack();
    }
  }, [history, auth]);

  const onFinish = ({
    name,
    email,
    password,
    contact,
    isNgo,
    street,
    city,
    pincode,
    state,
  }: submitProps) => {
    dispatch(
      registerAuthRequest({
        name,
        email,
        password,
        contact,
        isNgo,
        street,
        city,
        pincode,
        state,
      })
    );
  };

  return (
    <>
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={9} className="rg-form">
            <Form.Item
              label="Select Your Organization"
              name="isNgo"
              rules={[
                { required: true, message: "Please pick your Organization!" },
              ]}
            >
              <Radio.Group
                value={isNgo}
                options={[
                  { label: "NGO", value: true },
                  { label: "Hotel", value: false },
                ]}
                onChange={(e) => setisNgo(e.target.value)}
                optionType="button"
                buttonStyle="solid"
              />
            </Form.Item>
            <Form.Item
              name="street"
              rules={[
                {
                  required: true,
                  message: "Please input your Street Name!",
                },
              ]}
            >
              <Input
                prefix={<HomeOutlined className="site-form-item-icon" />}
                placeholder="Street"
              />
            </Form.Item>
            <Form.Item
              name="city"
              rules={[
                {
                  required: true,
                  message: "Please input your City!",
                },
              ]}
            >
              <Input
                prefix={<HomeOutlined className="site-form-item-icon" />}
                placeholder="City"
              />
            </Form.Item>
            <Form.Item
              name="state"
              rules={[
                {
                  required: true,
                  message: "Please input your State!",
                },
              ]}
            >
              <Input
                prefix={<HomeOutlined className="site-form-item-icon" />}
                placeholder="State"
              />
            </Form.Item>
            <Form.Item
              name="pincode"
              rules={[{ required: true, message: "please Enter the Pincode" }]}
            >
              <Input
                prefix={<EnvironmentOutlined className="site-form-item-icon" />}
                placeholder="PinCode"
              />
            </Form.Item>
            <Form.Item
              name="contact"
              rules={[
                {
                  required: true,
                  message: "Please input your Mobile Number!",
                },
              ]}
            >
              <Input
                prefix={<PhoneOutlined className="site-form-item-icon" />}
                placeholder="Mobile Number"
              />
            </Form.Item>
          </Col>
          <Col span={1}>
            <Divider
              type="vertical"
              style={{ marginTop: "1.2rem", height: "100%" }}
            />
          </Col>
          <Col span={9} className="rg-form">
            <h2>
              Register
              <UserAddOutlined />
            </h2>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Full Name"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your E-mail ID!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email ID"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="password2"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your Password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                className="login-form-button"
                block
              >
                SignUp
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <div className="option">
        <Divider />
        <Link to="/login">
          <Button type="link">Already joined our Community! Log In</Button>
        </Link>
      </div>
    </>
  );
};

export default Register;
