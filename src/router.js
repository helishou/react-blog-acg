/*
 * @Author       : helishou
 * @Date         : 2021-05-24 09:00:06
 * @LastEditTime : 2021-08-14 17:07:10
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \src\router.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React, { PureComponent } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import loadable from "./utils/loadable";
import { menulist } from "./lib/router.config";
// const Home = loadable(() => import("./pages/home"));
import Home from "./pages/home";
const Article = loadable(() => import("./pages/article"));
const Category = loadable(() => import("./pages/category"));
const TagList = loadable(() => import("./pages/tags/list"));
const Search = loadable(() => import("./pages/search"));
const Error = loadable(() => import("./pages/error"));
// const Tools = loadable(() => import("./pages/tools"));

class Router extends PureComponent {
  render() {
    return (
      <Switch key={this.props.location.key}>
        <Route path="/" exact component={Home} />
        <Route path="/article/:id" exact component={Article} />
        <Route path="/category/:id" exact component={Category} />
        {
          menulist.map((item)=>{
            return <Route path={item.url} exact component={item.component} />
          })
        }
        <Route path="/tags/:id" exact component={TagList} />
        <Route path="/search/:key" exact component={Search} />
        <Route component={Error} />
      </Switch>
    );
  }
}

export default withRouter(Router);
