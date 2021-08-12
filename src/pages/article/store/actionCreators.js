/*
 * @Author       : helishou
 * @Date         : 2021-05-31 09:30:07
 * @LastEditTime : 2021-08-13 01:46:38
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \src\pages\article\store\actionCreators.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import axios from "axios";
import * as constants from "./constants";
import { fromJS } from "immutable";

export const setArtical = (data) => ({
  type: constants.GET_ARTICAL,
  data: fromJS(data),
});

export const getArtical = () => {
  //获取文章
  return (dispatch)=> {
    console.log('666')
    axios
      .post("/getArticleDetail", { id: '6107b9089be8c245083c5d18', type: 1, filter: 2 })
      .then((res) => {
        if (res.code === 0) {
          let { data } = res;
          let model = {
            id: data._id,
            title: data.title,
            content: data.content,
            comments: data.meta.comments,
            // summary: data.desc,
            // views: data.meta.views,
            // weight: data.weight || 1,
            createTime: data.create_time,
            // isComment: data.isComment || 1,
            // tagsList: data.category,
            // categoryId: data.category[0],
            // categoryName: data.category[0],
            author: data.author,
            commentsList: data.comments,
            thumbnail: data.img_url,
          };
          // http://img.netbian.com/file/2020/0407/small7e47965b793534d12b64e4ebdcd33cfa1586267701.jpg
          console.log(model,data.img_url)
          return dispatch(
            setArtical(model)
          );
        }
      })
      .catch((err) => {
        throw new Error(err)
      });
  };
};

export const updateImg=(img)=>({
  type: constants.UPDATE_IMG,
  data: fromJS(img),
});