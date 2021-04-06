import { Button, Form, Input, message, Switch, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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

const Signup = () => {
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
    console.log(`name ${name}`);
    console.log(`email ${email}`);
    console.log(`p ${password}`);
    console.log(`c ${contact}`);
    console.log(`is ${isNgo}`);
    console.log(`s ${street}`);
    console.log(`city ${city}`);
    console.log(`pin ${pincode}`);
    console.log(`state ${state}`);
  };

  return (
    <div className="form">
      <h1 className="l-heading">
        <span className="text-primary">SignUp</span> Form
      </h1>
      <section id="home-info">
        <div className="info-img">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="isNgo"
              label="isNgo"
              rules={[
                {
                  required: true,
                  message: "Please pick your Organizzation Type",
                },
              ]}
            >
              <Switch onChange={() => setisNgo(true)} />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two passwords that you entered do not match!"
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="name"
              label={
                <span>
                  Name&nbsp;
                  <Tooltip title="What do you want others to call you?"></Tooltip>
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Street"
              name="street"
              rules={[
                {
                  required: true,
                  message: "Please Enter the complete address of organization",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="City"
              name="city"
              rules={[
                {
                  required: true,
                  message: "Please Enter the city ORG situated in!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="State"
              name="state"
              rules={[{ required: true, message: "Please Enter the state!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Pincode"
              name="pincode"
              rules={[{ required: true, message: "please Enter the Pincode" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="contact"
              label="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                SignUp
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="info-content"></div>
      </section>
    </div>
  );
};

export default Signup;
