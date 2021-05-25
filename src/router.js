import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import loadable from "./utils/loadable";
// const Home = loadable(() => import("./pages/home"));
import Home from "./pages/home"
const Article = loadable(() => import("./pages/article"));
const Category = loadable(() => import("./pages/category"));
const Archives = loadable(() => import("./pages/archives"));
const Links = loadable(() => import("./pages/links"));
const Tags = loadable(() => import("./pages/tags"));
const TagList = loadable(() => import("./pages/tags/list"));
const Search = loadable(() => import("./pages/search"));
const Error = loadable(() => import("./pages/error"));

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
        <Route component={Error} />
      </Switch>
    );
  }
}

export default withRouter(Router);
