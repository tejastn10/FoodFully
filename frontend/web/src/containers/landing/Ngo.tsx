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
import { TeamOutlined, LikeOutlined } from "@ant-design/icons";
import Feedback from "./Feedback";
import { AuthState, DonationState, NearbyState } from "../../store/@types";
import { ApplicationState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  nearbyHotelRequest,
  recentDonationRequest,
} from "../../store/actions/actions";

const Ngo = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  // const onFinish = (values: any) => {
  //   console.log("Received values of form: ", values);
  // };

  const authState = useSelector<ApplicationState, AuthState>(
    (state) => state.auth
  );
  const donationState = useSelector<ApplicationState, DonationState>(
    (state) => state.donation
  );
  const nearbyState = useSelector<ApplicationState, NearbyState>(
    (state) => state.nearby
  );

  const { isLoading, errors, nearbyUsers } = nearbyState;
  const { donations, errors: dErrors } = donationState;

  useEffect(() => {
    if (nearbyUsers === null || nearbyUsers.length === 0) {
      dispatch(nearbyHotelRequest());
    }
  }, [dispatch, nearbyUsers]);

  useEffect(() => {
    if (donations === null || donations?.length === 0) {
      dispatch(recentDonationRequest());
    }
  }, [dispatch, donations]);

  useEffect(() => {
    if (errors.results) {
      message.error(errors.results.message);
    }
  }, [dispatch, errors.results]);

  useEffect(() => {
    if (dErrors.results) {
      message.error(dErrors.results.message);
    }
  }, [dispatch, dErrors.results]);

  return (
    <>
      <Feedback visible={visible} setVisible={setVisible} isNgo />
      <Row gutter={16}>
        <Col span={16}>
          <div className="form">
            <h2>
              <TeamOutlined />
              {authState.auth?.name}
            </h2>
            <h3>Recent Donations</h3>
            {donations === null || donations?.length === 0 ? (
              <Alert
                message="No Recent Donations"
                description="YOu will be notified once we receive a donataion."
                type="info"
                showIcon
              />
            ) : (
              // (
              //   donations?.map((donation) => <div>{donation.hotel}</div>)
              // )
              <List
                dataSource={donations}
                pagination={{
                  pageSize: 2,
                }}
                renderItem={(donation) => (
                  <>
                    <List.Item>
                      <Card
                        className="donation-list"
                        style={
                          donation.isUrgent
                            ? {
                                marginBottom: "1rem",
                                width: "100%",
                                border: "1px solid #ff7875",
                              }
                            : { marginBottom: "1rem", width: "100%" }
                        }
                        actions={[
                          <Button
                            type="primary"
                            block
                            size="large"
                            danger={donation.isUrgent}
                          >
                            <LikeOutlined key="accept" /> Accept Donation
                          </Button>,
                        ]}
                      >
                        <Card.Meta
                          title={donation.hotel.name}
                          description={[
                            <p>Description: {donation.description}</p>,
                            <p>Quantity: {donation.quantity}</p>,
                            <p>Best before: {donation.bestBefore}</p>,
                          ]}
                        />
                      </Card>
                    </List.Item>
                  </>
                )}
              />
            )}
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
