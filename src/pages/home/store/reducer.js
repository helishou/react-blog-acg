/*
 * @Author       : helishou
 * @Date         : 2021-05-30 14:44:09
 * @LastEditTime : 2021-08-18 19:09:32
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \src\pages\home\store\reducer.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  featureList: [],
  blogList: [],
  articlePage: 1,
  finished: false,
  loading: true,
  isList: false,
});

const setFeature = (state, action) => {
  return state.merge({
    featureList: action.data,
  });
};

const setBlogList = (state, action) => {
  return action.override
    ? state.merge({
        blogList: action.override
          ? fromJS(action.data)
          : state.get("blogList").concat(fromJS(action.data)),
        articlePage: action.nextPage,
        finished: false,
        loading: false,
        isList: true,
      })
    : state.merge({
        blogList: action.override
          ? fromJS(action.data)
          : state.get("blogList").concat(fromJS(action.data)),
        articlePage: action.nextPage,
        loading: false,
        isList: true,
      });
};

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_FEATURE:
      return setFeature(state, action);
    case constants.GET_BLOGLIST:
      return setBlogList(state, action);
    case constants.SET_FINISHED:
      return state.set("finished", true);
    case constants.LOADING_TRUE:
      return state.set("loading", true);
    default:
      return state;
  }
};
export default homeReducer;
