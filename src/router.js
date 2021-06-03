/*
 * @Author       : helishou
 * @Date         : 2021-05-24 09:00:06
 * @LastEditTime : 2021-06-02 10:02:33
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : d:\desk\sakura\react-blog-acg\src\router.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React, { PureComponent } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import loadable from "./utils/loadable";
// const Home = loadable(() => import("./pages/home"));
const Home = loadable(() => import("./pages/home"));
const Article = loadable(() => import("./pages/article"));
const Category = loadable(() => import("./pages/category"));
const Archives = loadable(() => import("./pages/archives"));
const Links = loadable(() => import("./pages/links"));
const Tags = loadable(() => import("./pages/tags"));
const TagList = loadable(() => import("./pages/tags/list"));
const Search = loadable(() => import("./pages/search"));
const Error = loadable(() => import("./pages/error"));
const Tools = loadable(() => import("./pages/tools"));
const Login = loadable(() => import("./pages/login"));

class Router extends PureComponent {
  render() {
    return (
      <Switch key={this.props.location.key}>
        <Route path="/" exact component={Home} />
        <Route path="/article/:id" exact component={Article} />
        <Route path="/category/:id" exact component={Category} />
        <Route path="/archives" exact component={Archives} />
        <Route path="/links" exact component={Links} />
        <Route path="/tags" exact component={Tags} />
        <Route path="/tags/:id" exact component={TagList} />
        <Route path="/search/:key" exact component={Search} />
        <Route path="/tools/genshin" component={Tools} />
        <Route component={Error} />
      </Switch>
    );
  }
}

export default withRouter(Router);
