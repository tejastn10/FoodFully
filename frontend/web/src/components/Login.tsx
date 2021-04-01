import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, message as msg, Row } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { AuthState } from "../store/@types";
import { clearAuthError, loginAuthRequest } from "../store/actions/auth";
import { ApplicationState } from "../store/store";
import { Navbar } from "./Nav";

type submitProps = { email: string; password: string };

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const authState = useSelector<ApplicationState, AuthState>(
    (state) => state.auth
  );
  const { auth, errors } = authState;
  useEffect(() => {
    if (errors.results) {
      // dispatch error
      msg.error(errors.results.message);
      dispatch(clearAuthError());
    }
  }, [dispatch, errors.results]);

  useEffect(() => {
    if (auth?.isNgo === false) {
      history.replace("/hotel");
    } else if (auth?.isNgo === true) {
      history.replace("/ngo");
    }
  }, [history, auth?.isNgo]);

  const onFinish = ({ email, password }: submitProps) => {
    dispatch(loginAuthRequest({ email, password }));
  };

  return (
    <div className="login-form">
      
      <Navbar />

      <Row gutter={[8, 8]}>
        <Col span={12}>
          <img
            src="https://i.pinimg.com/originals/36/81/8e/36818e816a888a56855d12bb5232b624.png"
            alt="poveety"
          />
        </Col>

        <Col span={12}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <h1 className="l-heading">
              <span className="text-primary">Login</span> Form
            </h1>
            <p>Please fill out the form below</p>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              <br />
              Or <br />
              <Link to="/register">Register</Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>

      <footer id="main-footer">
        <p>Food Fully&copy; 2021, All RIghts Reserved</p>
      </footer>
    </div>
  );
};

export default Login;
