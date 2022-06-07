/*
 * @Author       : helishou
 * @Date         : 2021-05-24 09:00:06
 * @LastEditTime : 2021-08-18 18:48:27
 * @LastEditors  : helishou
 * @Description  : 主入口
 * @FilePath     : \src\App.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
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
// import loadable from "./utils/loadable";
import {  Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Music from "./components/Music";
// import axios from "axios";
// const Login = loadable(() => import("./pages/login"));
import Login from "./pages/login";

function mainComponent() {
  return (
    <ScrollToTop>
      <Music />
      <ToTop />
      <GlobalStyle />
      <Header />
      <Router />
      <Footer />
    </ScrollToTop>
  );
}

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={mainComponent} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
