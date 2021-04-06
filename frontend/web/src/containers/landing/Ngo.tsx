import { Button, Col, Form, Input, Row } from "antd";

const Ngo = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="login-form">
      <Row>
        <Col span={12}>
          <div className="hotelform">
            <h2>For Hotel's Notification</h2>
            <Form>
              <h2>NGO</h2>
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
                <Button type="primary">Accept</Button>
              </Form.Item>

              <Form.Item>
                <Button type="primary">Decline</Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Ngo;
