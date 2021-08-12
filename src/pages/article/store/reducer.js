/*
 * @Author       : helishou
 * @Date         : 2021-08-12 23:42:03
 * @LastEditTime : 2021-08-13 01:16:00
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \src\pages\article\store\reducer.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import { fromJS } from "immutable";
import * as constants from "./constants";
import axios from "axios";
// import { push } from 'react-router-redux'
const defaultState = fromJS({
    id: '',
    title: '',
    content: '',
    comments: '',
    createTime: '',
    author: '',
    commentsList: '',
    thumbnail: '',
  });
// const setArtical = (state, action) => {
//   return action.data;
// };

const setImage = (state, action) => {
  return state.merge({
    thumbnail: action.data,
  });
};
// const setArtical = (state, action) => {
//   return state.merge({
//     featureList: action.data,
//   });
// };

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_ARTICAL:
        console.log(state)
        console.log(action.data)
      return action.data;
    case constants.UPDATE_IMG:
      return setImage(state, action);
    // case constants.SET_FINISHED:
    //   return state.set("finished", true);
    // case constants.LOADING_TRUE:
    //   return state.set("loading", true);
    default:
      return state;
  }
};
