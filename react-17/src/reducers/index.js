import { combineReducers } from "redux";

import app from "./app";
import auth from "./auth";
import content from "./content";
import user from "./user";

const reducers = combineReducers({
  app,
  auth,
  content,
  user,
});

export default reducers;
