import { Modal, Result } from "antd";
import { Dispatch, SetStateAction } from "react";
import { Donation } from "../../store/@types/donation";
import { Order } from "../../store/@types/order";

type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  donation?: Donation | null;
  order?: Order | null;
  isNgo?: boolean;
};

const Feedback = ({
  visible,
  setVisible,
  donation,
  order,
  isNgo = false,
}: Props) => {
  return (
    <>
      {isNgo ? (
        <Modal
          centered
          visible={visible}
          footer={null}
          okText="Add"
          onCancel={() => setVisible(false)}
        >
          <Result
            status={order?._id ? "success" : "error"}
            title={
              order?._id
                ? "You have accepted the Donation! Please Contact the Hotel"
                : "Some Error Occured! Please try again!"
            }
            subTitle={
              order?._id
                ? [
                    <p>Donation ID: {order?.donation._id}</p>,
                    <p>Hotel Name: {order?.hotel.name}</p>,
                    <p>Hotel Contact: {order?.hotel.contact}</p>,
                    <p>
                      Hotel Address: {order?.hotel.address.street},{" "}
                      {order?.hotel.address.city}, {order?.hotel.address.state}{" "}
                      - {order?.hotel.address.pincode}
                    </p>,
                  ]
                : null
            }
          />
        </Modal>
      ) : (
        <Modal
          centered
          visible={visible}
          footer={null}
          onCancel={() => setVisible(false)}
        >
          <Result
            status={donation?._id ? "success" : "error"}
            title={
              donation?._id
                ? "Successfully Placed your Donation!"
                : "Some Error Occured! Please try again!"
            }
            subTitle={
              donation?._id
                ? [
                    <p>Donation ID: {donation?._id}</p>,
                    <p>
                      Donation Time: {donation?.donatedOn.substring(0, 10)}
                    </p>,
                    <p>Please Wait the NGO's will get in touch with you</p>,
                  ]
                : null
            }
          />
        </Modal>
      )}
    </>
  );
};

export default Feedback;
