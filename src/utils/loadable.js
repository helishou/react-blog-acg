/*
 * @Author       : helishou
 * @Date         : 2021-05-30 14:44:09
 * @LastEditTime : 2021-08-18 19:10:02
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \src\utils\loadable.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React from "react";
import Loadable from "react-loadable";
import Itemlayout from "../components/Itemlayout";
const loadingComponent = () => {
  return <Itemlayout></Itemlayout>;
};

const loadable= (loader, loading = loadingComponent) => {
  return Loadable({
    loader,
    loading,
  });
};
export default loadable