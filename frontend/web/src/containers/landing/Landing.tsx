import { Link } from "react-router-dom";

import { Alert, Button, Card, Carousel } from "antd";
import {
  LoginOutlined,
  UserAddOutlined,
  ClockCircleOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import TextLoop from "react-text-loop";
import { ApplicationState } from "../../store/store";
import { useSelector } from "react-redux";
import { AuthState } from "../../store/@types";
import Ngo from "./Ngo";
import Hotel from "./Hotel";
import Admin from "../admin/Admin";

const Landing = () => {
  const authState = useSelector<ApplicationState, AuthState>(
    (state) => state.auth
  );

  return authState.auth ? (
    authState.auth?.isAdmin ? (
      <Admin />
    ) : authState.auth?.isNgo ? (
      <Ngo />
    ) : (
      <Hotel />
    )
  ) : (
    <div className="container">
      <Alert
        banner
        type="warning"
        showIcon
        message={
          <TextLoop mask>
            <div>We Stand against Hunger!!</div>
            <div>Help us make this World Better!!</div>
            <div>Donate Excess Food to the needy!!</div>
          </TextLoop>
        }
      />
      <section className="crd">
        <Card
          className="image-card"
          cover={
            <img
              alt="hungry kids"
              src="https://vistapointe.net/images/hunger-wallpaper-10.jpg"
            />
          }
        >
          <section className="crd-btn">
            <Link to="/login">
              <Button type="primary">
                <LoginOutlined />
                Log In
              </Button>
            </Link>
            <Link to="/register">
              <Button>
                <UserAddOutlined />
                Register
              </Button>
            </Link>
          </section>
        </Card>
      </section>
      <section id="features">
        <Carousel className="carousel" effect="fade" autoplay>
          <div className="carousel-element">
            <TeamOutlined style={{ fontSize: "2rem" }} />
            <h3>Organization</h3>
            <p>
              We have tied up with the trusted organizations to provide good and
              healthy food !!!
            </p>
          </div>
          <div className="carousel-element">
            <ClockCircleOutlined style={{ fontSize: "2rem" }} />
            <h3>Availability</h3>
            <p>
              Its our effort to provide food to the needy even at the worst time
              and are to help 24/7.
            </p>
          </div>
        </Carousel>
      </section>
    </div>
  );
};

export default Landing;
