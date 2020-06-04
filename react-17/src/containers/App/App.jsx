import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./App.scss";
import Routes from "../../routes";
import { store, persistor } from "../../store";

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <main className="app">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </main>
    </PersistGate>
  </Provider>
);

export default App;
