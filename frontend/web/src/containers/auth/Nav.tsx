import { Link } from "react-router-dom";
import { Button, message, Menu } from "antd";
import {
  LogoutOutlined,
  UserOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import {
  clearNearby,
  clearProfile,
  logoutUser,
} from "../../store/actions/actions";
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
    dispatch(clearNearby());
    dispatch(clearProfile());
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">FoodFully</div>
      </Link>
      <Menu
        className="nav"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/contact">Contact Us</Link>
        </Menu.Item>

        {authState.auth ? (
          <>
            <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="Account">
              <Menu.Item key="4">
                <Link to="/profile">
                  <SolutionOutlined />
                  Profile
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Button danger type="primary" onClick={logout}>
                  <LogoutOutlined />
                  Log Out!
                </Button>
              </Menu.Item>
            </Menu.SubMenu>
          </>
        ) : null}
      </Menu>
    </div>
  );
};
