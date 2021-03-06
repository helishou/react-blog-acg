/*
 * @Author       : helishou
 * @Date         : 2021-05-24 09:00:06
 * @LastEditTime : 2021-09-13 18:40:19
 * @LastEditors  : helishou
 * @Description  : 项目展示列表
 * @FilePath     : \src\pages\home\components\Feature.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React from "react";
import ArticalLink from "../../../components/ArticalLink";
import { FeatureWrapper, FeatureTitle } from "../style";
import { Row, Col } from "antd";
import { getrand } from "../../../utils/formdata";
import preload from "../../../utils/preload";
const featureList = (props) => {
  const { ListImg } = props;
  const list = [
    {
      id: "60c1b80bdf0aee3632d48de0",
      title: "个人博客项目",
      summary:
        "此项目为一个前后台分离的的 SPA, 包括前端跨端展示应用,后端应用,前端后台管理应用,采用模块化、组件化、工程化的模式开发。",
      thumbnail:
        "https://wxy-picture.oss-cn-hangzhou.aliyuncs.com/thumb-1920-1107810.jpg?x-oss-process=style/shape",
    },
    {
      id: "60c027af538f510268ba51b4",
      title: "电商后台管理系统",
      summary:
        "此项目为一个前后台分离的后台管理的 SPA, 包括前端 PC 应用和后端应用,包括用户管理 / 商品分类管理 / 商品管理 / 权限管理等功能模块,前端: 使用 React 全家桶 + Antd + Axios + ES6 + Webpack + typescript + less 等技术 4. 后端: 使用 Node + Express + Mongodb 等技术 5. 采用模块化、组件化、工程化的模式开发",
      thumbnail:
        "https://wxy-picture.oss-cn-hangzhou.aliyuncs.com/thumb-1920-1112818.jpg?x-oss-process=style/shape",
    },
    {
      id: "60bed39f538f510268ba51b2",
      title: "Bilibili客户端的ReactNative版本(demo)",
      summary:
        "此项目为一个播放视频的NativeApp，因设备所限，仅实现了android端,包括搜索 / 视频播放 / 弹幕 / 用户空间 等功能模块,使用 ReactNative + reactHooks + Axios + ES6 + Webpack 等技术 4. 采用模块化、组件化、工程化的模式开发",
      thumbnail:
        "https://wxy-picture.oss-cn-hangzhou.aliyuncs.com/thumb-1920-1109233.jpg?x-oss-process=style/shape",
    },
  ];
  return (
    <Row className="top-feature-row" gutter={16}>
      {list.map((item, index) => {
        return (
          <Col
            onMouseEnter={() => preload(item.thumbnail)}
            className="top-feature-v2"
            key={index}
            xs={24}
            sm={24}
            md={8}
            lg={8}
            xl={8}
          >
            <div className="top-feature-item">
              <ArticalLink id={item.id} thumbnail={item.thumbnail}>
                <div className="img-box">
                  <img
                    src={
                      item.thumbnail ||
                      ListImg[getrand(0, ListImg.length - 1)].img
                    }
                    alt=""
                  />
                </div>
                <div className="info">
                  <h3 className="ellipsis">{item.title}</h3>
                  <p className="ellipsis-two">{item.summary}</p>
                </div>
              </ArticalLink>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

const Feature = (props) => {
  return (
    <FeatureWrapper>
      <FeatureTitle>
        <h1>
          <i className="iconfont icon-anchor" />
          <span> Project!!</span>
        </h1>
      </FeatureTitle>
      {featureList(props)}
    </FeatureWrapper>
  );
};

export default Feature;
