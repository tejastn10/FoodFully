import { Modal, Result } from "antd";
import { Dispatch, SetStateAction } from "react";
import { Donation } from "../../store/@types/donation";

type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  donation?: Donation | null;
};

const Feedback = ({ visible, setVisible, donation }: Props) => {
  return (
    <Modal
      centered
      visible={visible}
      footer={null}
      okText="Add"
      onCancel={() => setVisible(false)}
    >
      <Result
        status={donation?._id ? "success" : "error"}
        title={
          donation?._id
            ? "Successfully Placed your Donation!"
            : "Some Error Occured! Please try again!"
        }
        subTitle={[
          <p>Donation ID: {donation?._id}</p>,
          <p>Donation Time: {donation?.donatedOn}</p>,
          <p>Please Wait the NGO's will get in touch with you</p>,
        ]}
      />
    </Modal>
  );
};

export default Feedback;
