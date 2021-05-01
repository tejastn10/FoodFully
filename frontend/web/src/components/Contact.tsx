import { Col, Row } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

const Contact = () => {
  return (
    <Row gutter={16}>
      <Col span={12} className="contact">
        <PhoneOutlined style={{ fontSize: "12rem" }} />
        <h2>Mob No. 9900990099</h2>
      </Col>
      <Col span={12} className="contact">
        <MailOutlined style={{ fontSize: "12rem" }} />
        <h2>Email: ffully@foodfully.com</h2>
      </Col>
    </Row>
  );
};

export default Contact;
