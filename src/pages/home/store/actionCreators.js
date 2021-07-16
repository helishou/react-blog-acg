/*
 * @Author       : helishou
 * @Date         : 2021-05-31 09:30:07
 * @LastEditTime : 2021-07-17 00:02:51
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \src\pages\home\store\actionCreators.js
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
      .get("getProjectList")
      .then(function (res) {
        let datas = res.data.list;
        let models = [];
        datas.map((data, index) => {
          // console.log(data)
          let model = {
            id: data._id,
            title: data.title,
            summary: data.desc,
            thumbnail:data.img_url
          };
          models.unshift(model);
        });
        if (res.code === 0) {
          dispatch(setFeature(models));
        }
      });
  };
};
