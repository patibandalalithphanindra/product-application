import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/index.js";
import { Provider } from "react-redux";
import store from "../../store/store.js";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationBar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
