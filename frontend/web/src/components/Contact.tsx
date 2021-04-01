import { Button, Col, Form, Input, Row } from "antd";
import layout from "antd/lib/layout/layout";
import { Footer } from "./Footer";
import { Navbar } from "./Nav";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <Row gutter={[8, 8]}>
        <Col span={12}>
          <img
            src="https://image.freepik.com/free-vector/group-people-wearing-masks-gathering-during-coronavirus-covid-19-outbreak-social-distancing-concept-health-care-medical-flat-character_28576-276.jpg"
            alt="image"
          />
        </Col>

        <Col span={12}>
          <h1 className="l-heading">
            <span className="text-primary">Contact</span> Us
          </h1>
          <p>Please fill out the form below to contact us</p>
          <Form {...layout} name="nest-messages">
            <Form.Item
              name={["user", "name"]}
              label="Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[{ type: "email" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={["user", "introduction"]} label="Message">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>

      <div>
        <div className="box">
          <img src="./phone-solid.svg" className="features" alt="phone no" />
          <h3>Phone Number</h3>
          <p>(617) 555-5555</p>
        </div>
        <div className="box">
          <img src="./envelope-solid.svg" className="features" alt="email" />
          <h3>Email Address</h3>
          <p>frontdesk@hotelbt.co</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
