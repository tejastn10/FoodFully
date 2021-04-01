import config from "../config/app";
import * as API from "../utlis/api-helper";

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
