import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import appReducers from "../reducers";
import UserConstants from "../constants/user";

const rootReducer = (state, action) => {
  if (action.type === UserConstants.USER_LOGOUT) {
    state = undefined;
  }

  return appReducers(state, action);
};

const persistConfig = {
  key: "spotifyStorage",
  storage,
  blacklist: ["auth", "content"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
