import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
import { Button, Form, Input, message as msg, Divider } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { AuthState } from "../../store/@types";
import { clearAuthError, loginAuthRequest } from "../../store/actions/auth";
import { ApplicationState } from "../../store/store";

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
    <>
      <div className="form">
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <h2>
            Log In
            <LoginOutlined />
          </h2>
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
              prefix={<UserOutlined className="site-form-item-icon" />}
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
          <Form.Item>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              className="login-form-button"
              block
            >
              <LoginOutlined />
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="option">
        <Divider />
        <Link to="/register">
          <Button type="link">Don't have an account? Register here</Button>
        </Link>
      </div>
    </>
  );
};

export default Login;
