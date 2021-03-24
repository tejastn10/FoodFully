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

