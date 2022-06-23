/*
 * @Author       : helishou
 * @Date         : 2021-05-30 14:44:09
 * @LastEditTime : 2021-09-13 18:40:12
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \src\components\List\index.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React from "react";
import { SiteMain } from "./style";
import { getTime } from "@/utils/formdata";
import ArticalLink from "../ArticalLink";
const CatList = (props) => {
  let { list } = props;
  return (
    <SiteMain>
      {list.map((item, index) => {
        return (
          <article className="post post-list post-list-show" key={index}>
            <div className="post-entry">
              <div className="feature">
                <ArticalLink id={item.id}>
                  <img src={item.thumbnail} alt="" />
                </ArticalLink>
              </div>
              <h1 className="entry-title">
                <ArticalLink id={item.id}>{item.title}</ArticalLink>
              </h1>
              <div className="p-time">
                <i className="iconfont icon-time" />
                发布于 {getTime(item.createTime)}
              </div>
              <p>{item.summary}</p>
              <footer className="entry-footer">
                <div className="post-more">
                  <ArticalLink id={item.id}>
                    <i className="iconfont icon-caidan" />
                  </ArticalLink>
                </div>
                <div className="info-meta">
                  <div className="comnum">
                    <span>
                      <i className="iconfont icon-attention" />
                      {item.views} 热度
                    </span>
                  </div>
                  <div className="views">
                    <span className="comments-number">
                      <i className="iconfont icon-mark" />
                      {item.comments} 评论
                    </span>
                  </div>
                </div>
              </footer>
            </div>
            <hr />
          </article>
        );
      })}
    </SiteMain>
  );
};

export default CatList;
