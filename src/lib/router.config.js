/*
 * @Author       : helishou
 * @Date         : 2021-08-14 16:04:21
 * @LastEditTime : 2021-08-14 16:51:16
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \src\lib\router.config.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import loadable from "../utils/loadable";
const Links = loadable(() => import("../pages/links"));
const Archives = loadable(() => import("../pages/archives"));
const AboutMe = loadable(() => import("../pages/aboutme"));
const Tags = loadable(() => import("../pages/tags"));
export const menulist = [
  // {
  //   url: "/",
  //   icon: "iconfont icon-fort-awesome",
  //   title: "首页",
  // },
  // {
  //   child: [],
  //   icon: "iconfont icon-list-ul",
  //   title: "分类",
  // },
  {
    url: "/archives",
    icon: "iconfont icon-archive",
    title: "归档",
    component:Archives
  },
  {
    url: "/links",
    icon: "iconfont icon-link",
    title: "友人帐",
    component:Links
  },
  {
    url: "/tags",
    icon: "iconfont icon-tag",
    title: "标签墙",
    component:Tags
  },
  {
    url: "/aboutme",
    type: "message",
    title: "关于我",
    component:AboutMe
  },
];
