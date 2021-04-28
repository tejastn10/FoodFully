import { Button, Col, Row, Divider, Card, Alert, List } from "antd";
import { TeamOutlined, LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import { useState } from "react";
import Feedback from "./Feedback";

const Ngo = () => {
  const [visible, setVisible] = useState(true);

  const data = [{ title: "asdasd" }, { title: "asdasd" }, { title: "asdasd" }];

  // const onFinish = (values: any) => {
  //   console.log("Received values of form: ", values);
  // };

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
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={item.title}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Ngo;
