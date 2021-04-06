import { Link } from "react-router-dom";
import { Button, message } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { logoutUser } from "../../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../store/store";
import { AuthState } from "../../store/@types";

export const Navbar = () => {
  const authState = useSelector<ApplicationState, AuthState>(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const logout = () => {
    message.success("You have successfully logged out!");
    dispatch(logoutUser());
  };
  return (
    <nav id="navbar">
      <div className="container">
        <img src={"../FF.jpg"} alt="logo" className="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          {authState.auth ? (
            <li>
              <Button type="primary" onClick={logout}>
                <LogoutOutlined />
                Logout
              </Button>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
};
