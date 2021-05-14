import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  Card,
  PageHeader,
  Form,
  Table,
  Input,
  Button,
  Tabs,
  Descriptions,
  message,
  Spin,
  Tag,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { ApplicationState } from "../../store/store";
import { AuthState, ProfileState } from "../../store/@types";
import {
  getProfileRequest,
  updateProfileRequest,
  getHistoryRequest,
} from "../../store/actions/actions";

type validationStatus = "success" | "error" | "validating";
type submitProps = {
  contact?: string;
  password?: string;
  password2?: string;
};

const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [validationStatus, setValidationStatus] =
    useState<validationStatus>("success");
  const [feedback, setFeedback] = useState(false);

  const authState = useSelector<ApplicationState, AuthState>(
    (state) => state.auth
  );

  const profileState = useSelector<ApplicationState, ProfileState>(
    (state) => state.profile
  );

  const { auth } = authState;
  const { profile, isLoading, errors, history: userHistory } = profileState;

  useEffect(() => {
    if (errors.results) {
      message.error(errors.results.message);
      setValidationStatus("error");
      setFeedback(true);
    }
  }, [errors.results]);

  useEffect(() => {
    if (!userHistory && profile) {
      dispatch(getHistoryRequest());
    }
  }, [dispatch, profile, userHistory]);

  useEffect(() => {
    if (!auth) {
      history.push("/login");
    } else {
      if (!profile) {
        dispatch(getProfileRequest());
      }
    }
  }, [history, auth, dispatch, profile]);

  useEffect(() => {
    if (isLoading) {
      setValidationStatus("validating");
      setFeedback(true);
    } else if (!isLoading) {
      setValidationStatus("success");
      setFeedback(true);
      setTimeout(() => {
        setFeedback(false);
      }, 2000);
    }
  }, [isLoading]);

  const onFinish = ({ contact, password, password2 }: submitProps) => {
    if (password !== password2) {
      message.error("Passwords do not match!");
    } else {
      dispatch(updateProfileRequest({ contact, password }));
      if (isLoading) {
        setValidationStatus("validating");
        console.log(validationStatus);
        setFeedback(true);
      } else {
        setValidationStatus("success");
        setFeedback(true);
      }
    }
  };

  const donationColumns = [
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Donated On",
      dataIndex: "donatedOn",
      render: (date: string) => {
        return <p>{date.substring(0, 10)}</p>;
      },
    },
    {
      title: "Accepted ?",
      dataIndex: "accepted",
      render: (bool: boolean) => {
        return bool ? (
          <Tag color="green" key="1">
            Yes
          </Tag>
        ) : (
          <Tag color="red" key="1">
            No
          </Tag>
        );
      },
    },
  ];

  const orderColumns = [
    {
      title: "Donation ID",
      dataIndex: "donation",
      render: (donation: any) => {
        return <p>{donation._id}</p>;
      },
    },
    {
      title: "Quantity",
      dataIndex: "donation",
      render: (donation: any) => {
        return <p>{donation.quantity}</p>;
      },
    },

    {
      title: "Description",
      dataIndex: "donation",
      render: (donation: any) => {
        return <p>{donation.description}</p>;
      },
    },
    {
      title: "Hotel",
      dataIndex: "hotel",
      render: (hotel: any) => {
        return <p>{hotel.name}</p>;
      },
    },
    {
      title: "Delivered ?",
      dataIndex: "delivered",
      render: (bool: boolean) => {
        return bool ? (
          <Tag color="green" key="1">
            Yes
          </Tag>
        ) : (
          <Tag color="red" key="1">
            No
          </Tag>
        );
      },
    },
    {
      title: "Delivery Date",
      dataIndex: "deliveredOn",
      render: (date: string) => {
        return date ? (
          <p>{date.substring(0, 10)}</p>
        ) : (
          <Tag color="red" key="2">
            None
          </Tag>
        );
      },
    },
  ];

  return isLoading && !userHistory ? (
    <div className="loading">
      <Spin />
    </div>
  ) : profile === null ? (
    <></>
  ) : (
    <div className="container">
      <Card>
        <PageHeader
          className="site-page-header-responsive"
          onBack={() => history.goBack()}
          title={profile.name}
          subTitle={profile.isAdmin ? "Admin" : profile.isNgo ? "NGO" : "Hotel"}
          footer={
            <Tabs defaultActiveKey="1" centered>
              <Tabs.TabPane tab="Details" key="1">
                <Card>
                  <Form
                    className="profile form"
                    name="basic"
                    initialValues={{
                      name: `${profile.name}`,
                      email: `${profile.email}`,
                      contact: `${profile.contact}`,
                      remember: true,
                    }}
                    onFinish={onFinish}
                  >
                    <Form.Item
                      name="name"
                      hasFeedback={feedback}
                      validateStatus={validationStatus as any}
                    >
                      <Input
                        disabled
                        prefix={
                          <UserOutlined className="site-form-item-icon" />
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      hasFeedback={feedback}
                      validateStatus={validationStatus as any}
                    >
                      <Input
                        disabled
                        prefix={
                          <MailOutlined className="site-form-item-icon" />
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      name="contact"
                      hasFeedback={feedback}
                      validateStatus={validationStatus as any}
                    >
                      <Input
                        prefix={
                          <UserOutlined className="site-form-item-icon" />
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      hasFeedback={feedback}
                      validateStatus={validationStatus as any}
                    >
                      <Input.Password
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Item>
                    <Form.Item
                      name="password2"
                      hasFeedback={feedback}
                      validateStatus={validationStatus as any}
                    >
                      <Input.Password
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button
                        type="primary"
                        size="large"
                        block
                        htmlType="submit"
                        className="login-form-button"
                      >
                        Update Profile
                        <UserSwitchOutlined />
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </Tabs.TabPane>
              <Tabs.TabPane tab="History" key="2">
                <Table
                  columns={profile.isNgo ? orderColumns : donationColumns}
                  dataSource={userHistory as any}
                  rowKey={(item) => item._id}
                />
              </Tabs.TabPane>
            </Tabs>
          }
        >
          <Descriptions>
            <Descriptions.Item label="Contact">
              {profile.contact}
            </Descriptions.Item>
            <Descriptions.Item label="Email">{profile.email}</Descriptions.Item>
          </Descriptions>
          <Descriptions>
            <Descriptions.Item label="Address">
              {profile.address.street}, {profile.address.city},{" "}
              {profile.address.state} - {profile.address.pincode}
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </Card>
    </div>
  );
};

export default Profile;
