// import { useDispatch } from "react-redux";
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
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";

const Profile = () => {
  // const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="container">
      <Card>
        <PageHeader
          className="site-page-header-responsive"
          onBack={() => history.goBack()}
          title="Organizations Name"
          subTitle="Ngo or hotel"
          footer={
            <Tabs defaultActiveKey="1" centered>
              <Tabs.TabPane tab="Details" key="1">
                <Card>
                  <Form
                    className="profile form"
                    name="basic"
                    initialValues={{
                      // name: `${profile.name}`,
                      // email: `${profile.email}`,
                      remember: true,
                    }}
                    // onFinish={onFinish}
                  >
                    <Form.Item
                      name="name"
                      // hasFeedback={feedback}
                      // validateStatus={validationStatus as any}
                    >
                      <Input
                        prefix={
                          <UserOutlined className="site-form-item-icon" />
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      // hasFeedback={feedback}
                      // validateStatus={validationStatus as any}
                    >
                      <Input
                        prefix={
                          <MailOutlined className="site-form-item-icon" />
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      // hasFeedback={feedback}
                      // validateStatus={validationStatus as any}
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
                      // hasFeedback={feedback}
                      // validateStatus={validationStatus as any}
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
                  // columns={columns}
                  // dataSource={orders}
                  rowKey={(order) => order._id}
                />
              </Tabs.TabPane>
            </Tabs>
          }
        >
          <Descriptions size="small">
            <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
            <Descriptions.Item label="Association">421421</Descriptions.Item>
            <Descriptions.Item label="Creation Time">
              2017-01-10
            </Descriptions.Item>
            <Descriptions.Item label="Effective Time">
              2017-10-10
            </Descriptions.Item>
            <Descriptions.Item label="Remarks">
              Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </Card>
    </div>
  );
};

export default Profile;
