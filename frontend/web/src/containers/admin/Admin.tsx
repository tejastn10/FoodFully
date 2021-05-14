import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  message,
  Button,
  Card,
  PageHeader,
  Popconfirm,
  Spin,
  Table,
  Tag,
} from "antd";
import { DeleteOutlined, SwapOutlined, LikeOutlined } from "@ant-design/icons";

import {
  getUserListRequest,
  userDeleteRequest,
  updatePrivilegeRequest,
  getDonationListRequest,
  getOrderListRequest,
  updateOrderRequest,
  clearAdminError,
} from "../../store/actions/actions";
import { ApplicationState } from "../../store/store";
import { AdminState, AuthState } from "../../store/@types";

const Admin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authState = useSelector<ApplicationState, AuthState>(
    (state) => state.auth
  );
  const adminState = useSelector<ApplicationState, AdminState>(
    (state) => state.admin
  );
  const { isLoading, errors, messages, users, orders, donations } = adminState;

  const deleteUser = (id: string) => {
    if (id) {
      dispatch(userDeleteRequest(id));
    }
  };

  const updateUser = ({ _id, isAdmin }: any) => {
    if (_id) {
      dispatch(updatePrivilegeRequest({ id: _id, isAdmin: !isAdmin }));
    }
  };

  const updateOrder = (_id: string) => {
    if (_id) {
      dispatch(updateOrderRequest({ order: _id }));
    }
  };

  const userColumns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Admin",
      dataIndex: "isAdmin",
      render: (isAdmin: boolean) => {
        return isAdmin ? (
          <Tag color="green" key="1">
            Admin
          </Tag>
        ) : (
          <Tag color="red" key="1">
            Not Admin
          </Tag>
        );
      },
    },
    {
      title: "NGO",
      dataIndex: "isNgo",
      render: (isNgo: boolean) => {
        return isNgo ? (
          <Tag color="blue" key="1">
            NGO
          </Tag>
        ) : (
          <Tag color="orange" key="1">
            Hotel
          </Tag>
        );
      },
    },
    {
      title: "Toggle Privileges",
      render: ({ _id, isAdmin }: any) => {
        return (
          <Popconfirm
            title="Change privileges of the user?"
            onConfirm={() => updateUser({ _id, isAdmin })}
            okText="Yes"
            cancelText="No"
          >
            <Button>
              <SwapOutlined />
              Toggle
            </Button>
          </Popconfirm>
        );
      },
    },
    {
      title: "Delete User",
      render: ({ _id }: any) => {
        return (
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => deleteUser(_id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Delete
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        );
      },
    },
  ];

  const donationColumns = [
    {
      title: "Donation ID",
      dataIndex: "_id",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Donated On",
      dataIndex: "donatedOn",
      render: (date: string) => {
        return <p>{date.substring(0, 10)}</p>;
      },
    },
    {
      title: "Accepted ?",
      dataIndex: "accepted",
      render: (bool: boolean) => {
        return bool ? (
          <Tag color="green" key="1">
            Yes
          </Tag>
        ) : (
          <Tag color="red" key="1">
            No
          </Tag>
        );
      },
    },
  ];

  const orderColumns = [
    {
      title: "Order ID",
      dataIndex: "_id",
    },
    {
      title: "Quantity",
      dataIndex: "donation",
      render: (donation: any) => {
        return <p>{donation.quantity}</p>;
      },
    },

    {
      title: "Description",
      dataIndex: "donation",
      render: (donation: any) => {
        return <p>{donation.description}</p>;
      },
    },
    {
      title: "Hotel",
      dataIndex: "hotel",
      render: (hotel: any) => {
        return <p>{hotel?.name!}</p>; // TODO: remove null checks
      },
    },
    {
      title: "Delivered ?",
      dataIndex: "delivered",
      render: (bool: boolean) => {
        return bool ? (
          <Tag color="green" key="1">
            Yes
          </Tag>
        ) : (
          <Tag color="red" key="1">
            No
          </Tag>
        );
      },
    },
    {
      title: "Delivery Date",
      dataIndex: "deliveredOn",
      render: (date: string) => {
        return date ? (
          <p>{date.substring(0, 10)}</p>
        ) : (
          <Tag color="red" key="2">
            None
          </Tag>
        );
      },
    },
    {
      title: "Order Delivered !",
      render: ({ _id, delivered }: any) => {
        return (
          <Popconfirm
            title="Is the order delivered?"
            onConfirm={() => updateOrder(_id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" shape="round" disabled={delivered}>
              <LikeOutlined />
              Delivered
            </Button>
          </Popconfirm>
        );
      },
    },
  ];

  useEffect(() => {
    if (authState.auth?.isAdmin) {
      dispatch(getUserListRequest());
    } else {
      history.push("/");
    }
  }, [authState.auth?.isAdmin, dispatch, history]);

  useEffect(() => {
    if (!donations) {
      dispatch(getDonationListRequest());
    }
  }, [dispatch, donations]);

  useEffect(() => {
    if (!orders) {
      dispatch(getOrderListRequest());
    }
  }, [dispatch, orders]);

  useEffect(() => {
    if (errors.results) {
      message.error(errors.results.message);
      dispatch(clearAdminError());
      history.push("/");
    }
  }, [dispatch, errors.results, history]);

  useEffect(() => {
    if (messages.message) {
      message.success(messages.message);
    }
  }, [messages.message]);

  return (
    <div className="container">
      <Card>
        <PageHeader className="site-page-header" title="Admin Panel" />
      </Card>
      <Card>
        <Card title="All Users">
          {isLoading ? (
            <div className="loading">
              <Spin />
            </div>
          ) : (
            <Table
              columns={userColumns}
              dataSource={users!}
              rowKey={(user) => user._id}
            />
          )}
        </Card>
        <Card title="Donations">
          {isLoading ? (
            <div className="loading">
              <Spin />
            </div>
          ) : (
            <Table
              columns={donationColumns}
              dataSource={donations!}
              rowKey={(donation) => donation._id!}
            />
          )}
        </Card>
        <Card title="Orders">
          {isLoading ? (
            <div className="loading">
              <Spin />
            </div>
          ) : (
            <Table
              columns={orderColumns}
              dataSource={orders!}
              rowKey={(order) => order._id!}
            />
          )}
        </Card>
      </Card>
    </div>
  );
};

export default Admin;
