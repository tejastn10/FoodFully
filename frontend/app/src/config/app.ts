import {
  NODE_ENV,
  REACT_APP_PRODUCTION_API_ENDPOINT,
  REACT_APP_DEVELOPMENT_API_ENDPOINT,
} from "@env";

type Config = {
  isProd: boolean;
  production: {
    api_endpoint: string;
  };
  development: {
    api_endpoint: string;
  };
};

const config: Config = {
  isProd: NODE_ENV === "production",
  production: {
    api_endpoint: REACT_APP_PRODUCTION_API_ENDPOINT || "",
  },
  development: {
    api_endpoint: REACT_APP_DEVELOPMENT_API_ENDPOINT || "",
  },
};

export default config;
