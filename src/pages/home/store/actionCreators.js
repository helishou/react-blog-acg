/*
 * @Author       : helishou
 * @Date         : 2021-05-31 09:30:07
 * @LastEditTime : 2021-06-16 17:17:26
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : d:\desk\sakura\react-blog-acg\src\pages\home\store\actionCreators.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
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
          pageSize: 500,
          type: 2,
        },
      })
      .then(function (res) {
        let datas = res.data.list;
        let models = [];
        datas.map((data, index) => {
          console.log(data)
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
            thumbnail:data.img_url
          };
          models.push(model);
        });
        if (res.code === 0) {
          dispatch(setFeature(models));
        }
      });
  };
};
