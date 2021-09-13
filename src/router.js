/*
 * @Author       : helishou
 * @Date         : 2021-05-24 09:00:06
 * @LastEditTime : 2021-09-13 18:44:41
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \src\router.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React, { PureComponent } from "react";
import { Route, Switch ,withRouter} from "react-router-dom";
import loadable from "./utils/loadable";
import { menulist } from "./config/router.config";
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
        {menulist.map((item) => {
          return (
            <Route
              key={item.url}
              path={item.url}
              exact
              component={item.component}
            />
          );
        })}
        <Route path="/" exact component={Home} />
        <Route path="/article/:id" exact component={Article} />
        <Route path="/category/:id" exact component={Category} />
        <Route path="/tags/:id" exact component={TagList} />
        <Route path="/search/:key" exact component={Search} />
        <Route component={Error} />
      </Switch>
    );
  }
}

export default withRouter(Router);
