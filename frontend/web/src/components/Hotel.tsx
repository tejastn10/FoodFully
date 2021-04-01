import { Button, Col, Form, Input, Row } from "antd";
import { Navbar } from "../components/Nav";
import { Footer } from "./Footer";

const Hotel = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="login-form">
      <Navbar />

      <Row>
        <Col span={12}>
          <div className="hotelform">
            <h2>For NGO'S Notification</h2>
            <Form>
              <h2>Hotel</h2>
              {/* initialValues={{remember: true}} */}
              <Form.Item
                label="Quantity"
                name="Quantity"
                rules={[
                  {
                    required: true,
                    message: "Please Enter the Quantity of the food.",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="Description" name="Description">
                <Input.TextArea />
              </Form.Item>

              <Form.Item>
                <Button type="primary">Notify</Button>
              </Form.Item>

              <Form.Item>
                <Button type="primary">Rapid Notify</Button>
              </Form.Item>

              <Form.Item>
                <Button>Clear</Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default Hotel;
