import axios from "axios";
import * as constants from "./constants";
import { fromJS } from "immutable";

const setFeature = (data) => ({
  type: constants.GET_FEATURE,
  data: fromJS(data),
});

export const getFeature = () => {
  //首页三个推荐
  return (dispatch) => {
    axios
      .get("getArticleList?", {
        params: {
          pageNum: 1,
          pageSize: 3,
          origin: 1,
          state: 1,
        },
      })
      .then(function (res) {
        let datas = res.data.list;
        let models = [];
        datas.map((data, index) => {
          let model = {
            id: data._id,
            title: data.title,
            content: data.content,
            comments: data.meta.comments,
            summary: data.desc,
            views: data.meta.views,
            weight: data.weight || 1,
            createTime: data.create_time,
            isComment: data.isComment || 1,
            tagsList: data.category,
            categoryId: data.category[0],
            categoryName: data.category[0],
          };
          models.push(model);
        });
        if (res.code === 0) {
          dispatch(setFeature(models));
        }
      });

    // dispatch(
    //   setFeature([
    //     {
    //       id: "60ac927a7308b763d9262fef",
    //       title: "由浅入深，66条JavaScript面试知识点和答案解析",
    //       comments: 0,
    //       status: 2,
    //       summary:
    //         "[toc]1. 介绍一下 js 的数据类型有哪些,值是如何存储的   具体可看我之前的文章：「前端料包」可能是最透彻的JavaScript数据类型详解   JavaScript一共有8种数据类型，其中有7种基本数据类型：Undefined、Nul...",
    //       views: 235,
    //       weight: 4,
    //       createTime: 1618883648000,
    //       syncStatus: 1,
    //       author: "幕冬有柒",
    //       tagsList: [
    //         {
    //           id: 4,
    //           name: "javascript",
    //         },
    //       ],
    //       categoryId: 4,
    //       categoryName: "javascript",
    //     },
    //     {
    //       id: 31,
    //       title: "Plumemo 博客系统 sakura 主题的安装使用",
    //       comments: 2,
    //       status: 2,
    //       summary:
    //         "Plumemo 博客系统 sakura 主题 ssr服务端渲染版的安装使用 线上预览 https://www.bygit.cn/article/31 系统环境  安装好java程序与后端管理系统 安装node.js 安装pm2  java的安装和...",
    //       views: 682,
    //       weight: 3,
    //       createTime: 1619149318000,
    //       syncStatus: 1,
    //       author: "幕冬有柒",
    //       tagsList: [],
    //     },
    //     {
    //       id: 9,
    //       title: "markdown基本语法",
    //       comments: 0,
    //       status: 2,
    //       summary:
    //         "markdown是一种纯文本格式的标记语言。通过简单的标记语法，它可以使普通文本内容具有一定的格式。 相比WYSIWYG编辑器 优点： + 1、因为是纯文本，所以只要支持markdown的地方都能获得一样的编辑效果，可以让作者摆脱排版的困扰，专心...",
    //       views: 531,
    //       weight: 2,
    //       createTime: 1618883374000,
    //       syncStatus: 1,
    //       author: "幕冬有柒",
    //       tagsList: [],
    //     },
    //   ])
    // );
  };
};
