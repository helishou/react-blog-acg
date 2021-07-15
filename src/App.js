/*
 * @Author       : helishou
 * @Date         : 2021-05-24 09:00:06
 * @LastEditTime : 2021-07-15 11:05:13
 * @LastEditors  : helishou
 * @Description  : 主入口
 * @FilePath     : d:\desk\sakura\react-blog-acg\src\App.js
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
import loadable from "./utils/loadable";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Music from "./components/Music";
// import axios from "axios";
const Login = loadable(() => import("./pages/login"));

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
