import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Divider,
  List,
  message,
  Spin,
  Empty,
} from "antd";
import {
  NumberOutlined,
  ShopOutlined,
  CalendarOutlined,
  BellOutlined,
  SoundOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import Feedback from "./Feedback";
import { NearbyState } from "../../store/@types";
import { ApplicationState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { nearbyNGORequest } from "../../store/actions/actions";

const Hotel = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);
  const [urgent, setUrgent] = useState(false);

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    console.log("Received values of form: ", urgent);
  };

  const nearbyState = useSelector<ApplicationState, NearbyState>(
    (state) => state.nearby
  );

  const { isLoading, errors, nearbyUsers } = nearbyState;

  useEffect(() => {
    if (nearbyUsers === null || nearbyUsers.length === 0) {
      message.info("Fetching Nearby NGOs...");
      dispatch(nearbyNGORequest());
    }
  }, [dispatch, nearbyUsers]);

  useEffect(() => {
    if (errors.results) {
      message.error(errors.results.message);
    }
  }, [dispatch, errors.results]);

  return (
    <>
      <Feedback visible={visible} setVisible={setVisible} />
      <Row gutter={16}>
        <Col span={16}>
          <Form className="form" onFinish={onFinish}>
            <h2>
              <ShopOutlined />
              Hotel's Name
            </h2>
            <h3>Add a Donation</h3>
            <Form.Item
              name="quantity"
              rules={[
                {
                  required: true,
                  message: "Please input Food's Quantity!",
                },
              ]}
            >
              <Input
                prefix={<NumberOutlined className="site-form-item-icon" />}
                placeholder="Quantity"
              />
            </Form.Item>
            <Form.Item
              name="bestbefore"
              rules={[
                {
                  required: true,
                  message: "Please input Food's Expiry Time!",
                },
              ]}
            >
              <Input
                prefix={<CalendarOutlined className="site-form-item-icon" />}
                placeholder="Best Before"
              />
            </Form.Item>
            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input Food's Description!",
                },
              ]}
            >
              <Input.TextArea
                placeholder="Add Description about the Food donated."
                autoSize={{ minRows: 4, maxRows: 6 }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                block
                size="large"
                htmlType="submit"
                className="login-form-button"
              >
                <BellOutlined />
                Notify
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                danger
                type="primary"
                block
                size="large"
                htmlType="submit"
                className="login-form-button"
                onClick={() => setUrgent(true)}
              >
                <SoundOutlined />
                Rapid Notify
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={1}>
          <Divider
            type="vertical"
            style={{ marginTop: "1.2rem", height: "100%" }}
          />
        </Col>
        <Col span={6}>
          <div className="nearby">
            <h3>Nearby NGO's</h3>
            {isLoading ? (
              <div className="loading">
                <Spin />
              </div>
            ) : nearbyUsers === null || nearbyUsers.length === 0 ? (
              <Empty description="No nearby NGOs found" />
            ) : (
              <List
                itemLayout="horizontal"
                pagination={{
                  pageSize: 3,
                }}
                dataSource={nearbyUsers!}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={item.name}
                      description={[
                        <p>{item.contact}</p>,
                        <p>
                          {item.address.street}, {item.address.city} <br />
                          {item.address.state}
                        </p>,
                      ]}
                    />
                  </List.Item>
                )}
              />
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Hotel;
