import React, { PureComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import { GlobalStyle } from "./style";
import store from "./store";
import { Provider } from "react-redux";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import ToTop from "./components/BackTop";
import Router from "./router";
import loadable from "./utils/loadable";
const Footer = loadable(() => import("./components/Footer"));
const Music = loadable(() => import("./components/Music"));
// import axios from "axios";

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
            <Music />
            <ToTop />
            <GlobalStyle />
            <Header />
            <Router />
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
