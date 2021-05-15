import config from "../config/app";
import * as API from "../utils/api-helper";

const { isProd } = config;

const API_ENDPOINT = isProd
  ? config.production.api_endpoint
  : config.development.api_endpoint;

export const loginUser: any = ({ email, password }: any) => {
  const URL = `${API_ENDPOINT}/api/users/login`;

  const data: any = API.post(URL, { email, password });
  return data;
};

export const registerUser: any = (user: any) => {
  const URL = `${API_ENDPOINT}/api/users`;

  return API.post(URL, user);
};

export const fetchUserProfile: any = () => {
  const URL = `${API_ENDPOINT}/api/users/profile`;

  return API.get(URL);
};

export const updateUserProfile: any = (user: any) => {
  const URL = `${API_ENDPOINT}/api/users/profile`;

  return API.put(URL, user);
};

export const getHotels: any = () => {
  const URL = `${API_ENDPOINT}/api/nearby/hotel`;

  return API.get(URL);
};

export const getNGOs: any = () => {
  const URL = `${API_ENDPOINT}/api/nearby/ngo`;

  return API.get(URL);
};

export const getUserHistory: any = () => {
  const URL = `${API_ENDPOINT}/api/users/history`;

  return API.get(URL);
};
