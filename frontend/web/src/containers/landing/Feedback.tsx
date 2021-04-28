import { Modal, Result } from "antd";
import { Dispatch, SetStateAction } from "react";

type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const Feedback = ({ visible, setVisible }: Props) => {
  return (
    <Modal
      centered
      visible={visible}
      footer={null}
      okText="Add"
      onCancel={() => setVisible(false)}
    >
      <Result
        status="success"
        title="Successfully Placed your Donation!"
        subTitle={[
          <p>Donation ID:</p>,
          <p>Please Wait the NGO's will get in touch with you</p>,
        ]}
      />
    </Modal>
  );
};

export default Feedback;
