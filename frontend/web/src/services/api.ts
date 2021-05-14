import config from "../config/app";
import * as API from "../utils/api-helper";

const { isProd } = config;

const API_ENDPOINT = isProd
  ? config.production.api_endpoint
  : config.development.api_endpoint;

export const loginUser: any = ({ email, password }: any) => {
  const URL = `${API_ENDPOINT}/api/users/login`;

  return API.post(URL, { email, password });
};

export const registerUser: any = (value: any) => {
  const URL = `${API_ENDPOINT}/api/users`;

  return API.post(URL, value);
};

export const getHotels: any = () => {
  const URL = `${API_ENDPOINT}/api/nearby/hotel`;

  return API.get(URL);
};

export const getNGOs: any = () => {
  const URL = `${API_ENDPOINT}/api/nearby/ngo`;

  return API.get(URL);
};

export const fetchUserProfile: any = () => {
  const URL = `${API_ENDPOINT}/api/users/profile`;

  return API.get(URL);
};

export const updateUserProfile: any = ({ contact, password }: any) => {
  const URL = `${API_ENDPOINT}/api/users/profile`;

  return API.put(URL, { contact, password });
};

export const donate: any = ({
  isUrgent,
  quantity,
  description,
  bestBefore,
}: any) => {
  const URL = `${API_ENDPOINT}/api/donation`;

  return API.post(URL, { isUrgent, quantity, description, bestBefore });
};

export const getRecentDonations: any = () => {
  const URL = `${API_ENDPOINT}/api/donation`;

  return API.get(URL);
};

export const order: any = (donationID: any) => {
  const URL = `${API_ENDPOINT}/api/order`;

  return API.post(URL, { donationID });
};

export const getUserHistory: any = () => {
  const URL = `${API_ENDPOINT}/api/users/history`;

  return API.get(URL);
};

export const getUsers: any = () => {
  const URL = `${API_ENDPOINT}/api/users`;

  return API.get(URL);
};

export const updateUserPrivilege: any = ({ id, isAdmin }: any) => {
  const URL = `${API_ENDPOINT}/api/users/${id}`;

  return API.put(URL, { isAdmin });
};

export const deleteUser: any = (id: string) => {
  const URL = `${API_ENDPOINT}/api/users/${id}`;

  return API.deleteResource(URL);
};

export const getOrders: any = () => {
  const URL = `${API_ENDPOINT}/api/order/all`;

  return API.get(URL);
};

export const updateOrder: any = (order: string) => {
  const URL = `${API_ENDPOINT}/api/order/${order}`;

  return API.put(URL, order);
};

export const getDonations: any = () => {
  const URL = `${API_ENDPOINT}/api/donation/all`;

  return API.get(URL);
};
