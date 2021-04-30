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
