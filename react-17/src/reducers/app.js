import packageJson from "../../package.json";

const INITIAL_STATE = {
  environment: process.env.NODE_ENV,
  name: packageJson.name,
  version: packageJson.version,
};

const appReducer = (state = INITIAL_STATE) => state;

export default appReducer;
