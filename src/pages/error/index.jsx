import React from 'react';
import { Link } from 'react-router-dom';
import { Eroor } from './style';

function Error() {
  return (
    <Eroor>
      <div className="pattern-center-blank" />
      <div className="container">
        <img src="@/assets/images/404.png" alt="" />
        <h2>
          查找的页面已被移动、删除、重命名
          <br />
          或许已经不存在了！
        </h2>
        <div className="btn">
          <Link to="/">返回首页</Link>
        </div>
      </div>
    </Eroor>
  );
}

export default Error;
