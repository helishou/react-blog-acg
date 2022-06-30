/*
 * @Author       : helishou
 * @Date         : 2021-05-24 09:00:06
 * @LastEditTime : 2021-09-13 18:44:41
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \src\router.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React, { PureComponent, Suspense, lazy } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Spin } from 'antd';
import { routerList } from './lib/config/router.config';
import Itemlayout from './components/Itemlayout';
const Error = lazy(() => import('./pages/error'));
// const Tools = lazy(() => import("./pages/tools"));
class Router extends PureComponent {
  render() {
    return (
      <Suspense
        fallback={(
          <div
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* <Spin size="large" />
             */}
             <Itemlayout/>
          </div>
        )}
      >
        <Switch key={this.props.location.key}>
          {routerList.map((item) => (
            <Route
              key={item.url}
              path={item.url}
              exact
              component={item.component}
            />
          ))}
          <Route component={Error} />
        </Switch>
      </Suspense>
    );
  }
}

export default withRouter(Router);
