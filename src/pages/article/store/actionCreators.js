/*
 * @Author       : helishou
 * @Date         : 2021-05-31 09:30:07
 * @LastEditTime : 2021-08-13 14:46:08
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

export const updateImg=(img)=>({
  type: constants.UPDATE_IMG,
  data: fromJS(img),
});