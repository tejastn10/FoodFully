import {
  Button,
  Col,
  Row,
  Divider,
  List,
  message,
  Spin,
  Card,
  Empty,
  Alert,
} from "antd";
import { useEffect, useState } from "react";
import { TeamOutlined, LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import Feedback from "./Feedback";
import { NearbyState } from "../../store/@types";
import { ApplicationState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { nearbyHotelRequest } from "../../store/actions/actions";

const Ngo = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);

  // const onFinish = (values: any) => {
  //   console.log("Received values of form: ", values);
  // };

  const nearbyState = useSelector<ApplicationState, NearbyState>(
    (state) => state.nearby
  );

  const { isLoading, errors, nearbyUsers } = nearbyState;

  useEffect(() => {
    if (nearbyUsers === null || nearbyUsers.length === 0) {
      message.info("Fetching Nearby Hotels...");
      dispatch(nearbyHotelRequest());
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
          <div className="form">
            <h2>
              <TeamOutlined />
              NGO's Name
            </h2>
            <h3>Recent Donations</h3>
            <Alert
              message="No Recent Donations"
              description="YOu will be notified once we receive a donataion."
              type="info"
              showIcon
            />
            <Card
              style={{ marginBottom: "1rem" }}
              actions={[
                <Button type="primary" block size="large">
                  <LikeOutlined key="accept" />
                </Button>,
                <Button type="primary" danger block size="large">
                  <DislikeOutlined key="setting" />
                </Button>,
              ]}
            >
              <Card.Meta
                title="Hotels name"
                description={[
                  <p>Description</p>,
                  <p>Quantity</p>,
                  <p>best before</p>,
                ]}
              />
            </Card>
            <Card
              style={{ marginBottom: "1rem" }}
              actions={[
                <Button type="primary" block size="large">
                  <LikeOutlined key="accept" />
                </Button>,
                <Button type="primary" danger block size="large">
                  <DislikeOutlined key="setting" />
                </Button>,
              ]}
            >
              <Card.Meta
                title="Hotels name"
                description={[
                  <p>Description</p>,
                  <p>Quantity</p>,
                  <p>best before</p>,
                ]}
              />
            </Card>
            <Card
              style={{ marginBottom: "1rem" }}
              actions={[
                <Button type="primary" block size="large">
                  <LikeOutlined key="accept" />
                </Button>,
                <Button type="primary" danger block size="large">
                  <DislikeOutlined key="setting" />
                </Button>,
              ]}
            >
              <Card.Meta
                title="Hotels name"
                description={[
                  <p>Description</p>,
                  <p>Quantity</p>,
                  <p>best before</p>,
                ]}
              />
            </Card>
          </div>
        </Col>
        <Col span={1}>
          <Divider
            type="vertical"
            style={{ marginTop: "1.2rem", height: "100%" }}
          />
        </Col>
        <Col span={6}>
          <div className="nearby">
            <h3>Nearby Hotels's</h3>
            {isLoading ? (
              <div className="loading">
                <Spin />
              </div>
            ) : nearbyUsers === null || nearbyUsers.length === 0 ? (
              <Empty description="No nearby Hotels found" />
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

export default Ngo;
