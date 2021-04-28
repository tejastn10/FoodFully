import { FC } from "react";
import { Link } from "react-router-dom";

// UI Library
import { Result, Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const NotFound: FC = () => {
  return (
    <div className="container">
      <Result
        status="404"
        title="Error: 404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/">
            <Button className="notfound-btn" type="link">
              <HomeOutlined />
              Go back home
            </Button>
          </Link>
        }
      />
    </div>
  );
};

export default NotFound;
